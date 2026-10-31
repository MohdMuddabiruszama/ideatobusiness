'use server';

import { prisma } from '@/lib/db/prisma';
import { enquiryFormSchema, EnquiryFormInput } from '@/lib/validation/schemas';
import { checkRateLimit } from '@/lib/rate-limit';
import { appendEnquiryBackup } from '@/lib/db/recovery';
import { BusinessStage, ContactMethod } from '@prisma/client';

export type SubmitEnquiryResult =
  | { success: true; enquiryId: string }
  | { success: false; error: string; fieldErrors?: Record<string, string> };

export async function submitEnquiry(input: EnquiryFormInput): Promise<SubmitEnquiryResult> {
  try {
    // 1. Honeypot bot protection (silent discard for bots)
    if (input.honeypot && input.honeypot.length > 0) {
      return { success: true, enquiryId: 'bot-discarded' };
    }

    // 2. Server-side validation using Zod
    const validated = enquiryFormSchema.safeParse(input);
    if (!validated.success) {
      const fieldErrors: Record<string, string> = {};
      validated.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      return {
        success: false,
        error: 'Please correct the validation errors below.',
        fieldErrors,
      };
    }

    const data = validated.data;

    // 3. Rate limiting (max 5 submissions per 15 minutes per email)
    const rateCheck = checkRateLimit(data.email.toLowerCase(), 5, 15 * 60 * 1000);
    if (!rateCheck.allowed) {
      const minutesRemaining = Math.ceil(rateCheck.resetInMs / 60000);
      return {
        success: false,
        error: `Too many submissions. Please wait ${minutesRemaining} minute(s) before submitting another enquiry.`,
      };
    }

    // 4. Map to Prisma types
    let businessStageEnum: BusinessStage = BusinessStage.IDEA;
    if (data.businessStage === 'NEW_BUSINESS') businessStageEnum = BusinessStage.NEW_BUSINESS;
    if (data.businessStage === 'EXISTING_BUSINESS') businessStageEnum = BusinessStage.EXISTING_BUSINESS;

    let contactMethodEnum: ContactMethod = ContactMethod.ANY;
    if (data.preferredContact === 'EMAIL') contactMethodEnum = ContactMethod.EMAIL;
    if (data.preferredContact === 'PHONE') contactMethodEnum = ContactMethod.PHONE;
    if (data.preferredContact === 'WHATSAPP') contactMethodEnum = ContactMethod.WHATSAPP;

    // 5. Save into Database (PostgreSQL)
    let enquiryId = 'IB-' + Date.now().toString(36).toUpperCase();
    let savedInDb = false;

    try {
      const enquiry = await prisma.enquiry.create({
        data: {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          businessStage: businessStageEnum,
          departmentSlug: data.departmentSlug,
          serviceSlug: data.serviceSlug || null,
          packageSlug: data.packageSlug || null,
          businessName: data.businessName || null,
          city: data.city || null,
          country: data.country || null,
          message: data.message,
          preferredContact: contactMethodEnum,
          consentAccepted: data.consentAccepted,
          sourcePath: data.sourcePath || '/get-started',
          status: 'NEW',
        },
      });
      enquiryId = enquiry.id;
      savedInDb = true;
    } catch (dbError) {
      console.warn('Database connection status (enquiry will be preserved in recovery backup):', dbError);
    }

    // 6. Immutable local backup & recovery log (guarantees zero data loss)
    await appendEnquiryBackup(enquiryId, data, savedInDb);

    // 7. Email notifications: Admin notification + Customer confirmation
    let teamNotified = false;
    let customerNotified = false;

    if (process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes('sample')) {
      const fromEmail = process.env.NOTIFICATION_EMAIL_FROM || 'IDEATOBUSINESS <onboarding@resend.dev>';

      try {
        // A. Admin notification email
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: process.env.NOTIFICATION_EMAIL_TO || 'team@ideatobusiness.com',
            subject: `[New Lead #${enquiryId.slice(-6)}] ${data.fullName} — ${data.departmentSlug}`,
            text: `NEW BUSINESS ENQUIRY RECEIVED
---------------------------------------
Reference ID: ${enquiryId}
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Preferred Contact: ${data.preferredContact}
Business Stage: ${data.businessStage}
Business Name: ${data.businessName || 'Not specified'}
Location: ${data.city || 'N/A'}, ${data.country || 'India'}
Department: ${data.departmentSlug}
Service: ${data.serviceSlug || 'General department inquiry'}
Package: ${data.packageSlug || 'None selected'}

Customer Requirement / Message:
"${data.message}"
---------------------------------------
Action Required: Follow up within 24 business hours.`,
          }),
        });
        teamNotified = true;
      } catch (adminEmailError) {
        console.error('Failed to dispatch admin notification email:', adminEmailError);
      }

      try {
        // B. Customer confirmation email
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: data.email,
            subject: `We've received your enquiry! (Ref: #${enquiryId.slice(-6)}) — IDEATOBUSINESS`,
            text: `Dear ${data.fullName},

Thank you for reaching out to IDEATOBUSINESS.

We have received your business enquiry (Reference ID: ${enquiryId}).

What happens next?
1. Requirement Review: Our team is evaluating your requested services (${data.departmentSlug}${data.serviceSlug ? ` - ${data.serviceSlug}` : ''}).
2. Specialist Outreach: An account coordinator will reach out to you within 24 business hours via ${data.preferredContact === 'ANY' ? 'WhatsApp or phone' : data.preferredContact}.
3. Tailored Roadmap: We will prepare an actionable execution roadmap and transparent quotation tailored to your business stage.

Need urgent support? You can chat directly with our advisory desk on WhatsApp:
https://wa.me/919876543210

Warm regards,
The IDEATOBUSINESS Team
"Your Idea. Our Support. Your Business."`,
          }),
        });
        customerNotified = true;
      } catch (customerEmailError) {
        console.error('Failed to dispatch customer confirmation email:', customerEmailError);
      }

      // Update email flags in database if saved
      if (savedInDb) {
        try {
          await prisma.enquiry.update({
            where: { id: enquiryId },
            data: { emailSent: customerNotified, teamNotified: teamNotified },
          });
        } catch {
          // non-critical
        }
      }
    }

    return { success: true, enquiryId };
  } catch (error: unknown) {
    console.error('Enquiry submission server error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred while saving your enquiry. Please try again.',
    };
  }
}
