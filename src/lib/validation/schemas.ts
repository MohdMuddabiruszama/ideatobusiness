import { z } from 'zod';

export const enquiryFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please provide a valid email address.' })
    .max(120, { message: 'Email cannot exceed 120 characters.' }),
  phone: z
    .string()
    .trim()
    .min(7, { message: 'Phone number is too short.' })
    .max(20, { message: 'Phone number cannot exceed 20 characters.' })
    .regex(/^[+]?[0-9\s\-()]{7,20}$/, {
      message: 'Please enter a valid phone number with country code (e.g., +91 9876543210).',
    }),
  businessStage: z.enum(['IDEA', 'NEW_BUSINESS', 'EXISTING_BUSINESS'], {
    errorMap: () => ({ message: 'Please select your current business stage.' }),
  }),
  departmentSlug: z
    .string()
    .min(1, { message: 'Please select an area of service interest.' }),
  serviceSlug: z.string().optional().nullable(),
  packageSlug: z.string().optional().nullable(),
  businessName: z.string().trim().max(120).optional().nullable(),
  city: z.string().trim().max(100).optional().nullable(),
  country: z.string().trim().max(100).optional().nullable(),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Please provide a brief message of at least 10 characters.' })
    .max(1000, { message: 'Message cannot exceed 1,000 characters.' }),
  preferredContact: z.enum(['EMAIL', 'PHONE', 'WHATSAPP', 'ANY']).default('ANY'),
  consentAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must consent to be contacted regarding your business enquiry.',
  }),
  sourcePath: z.string().optional(),
  // Honeypot field for bot/spam prevention
  honeypot: z.string().max(0, { message: 'Bot submission detected.' }).optional(),
});

export type EnquiryFormInput = z.infer<typeof enquiryFormSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Name is required'),
  email: z.string().trim().email('Valid email is required'),
  phone: z.string().trim().min(7, 'Valid contact number is required'),
  subject: z.string().trim().min(3, 'Subject is required'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters'),
  consentAccepted: z.boolean().refine((val) => val === true, {
    message: 'Consent is required to submit contact form.',
  }),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

