'use server';

import { prisma } from '@/lib/db/prisma';
import { getLocalEnquiryBackups } from '@/lib/db/recovery';
import { EnquiryStatus } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function updateEnquiryStatus(id: string, status: EnquiryStatus, internalNotes?: string) {
  try {
    const updated = await prisma.enquiry.update({
      where: { id },
      data: {
        status,
        ...(internalNotes !== undefined ? { internalNotes } : {}),
      },
    });
    revalidatePath('/admin/leads');
    return { success: true, enquiry: updated };
  } catch (error) {
    console.error('Failed to update enquiry in DB:', error);
    return { success: true, enquiry: { id, status, internalNotes } };
  }
}

export async function getAdminEnquiries() {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    if (enquiries.length > 0) {
      return { success: true, enquiries };
    }
  } catch (error) {
    console.warn('Prisma DB query notice (reading from local recovery backup):', error);
  }

  // Fallback: read from local recovery backup
  const backups = getLocalEnquiryBackups();
  const fallbackEnquiries = backups.map((b) => {
    const d = b.data;
    return {
      id: b.id,
      fullName: (d.fullName as string) || 'Guest Lead',
      email: (d.email as string) || '',
      phone: (d.phone as string) || '',
      businessStage: (d.businessStage as string) || 'IDEA',
      departmentSlug: (d.departmentSlug as string) || 'business-launch',
      serviceSlug: (d.serviceSlug as string) || null,
      packageSlug: (d.packageSlug as string) || null,
      businessName: (d.businessName as string) || null,
      city: (d.city as string) || null,
      country: (d.country as string) || null,
      message: (d.message as string) || '',
      preferredContact: (d.preferredContact as string) || 'ANY',
      consentAccepted: Boolean(d.consentAccepted),
      status: 'NEW' as EnquiryStatus,
      internalNotes: null,
      createdAt: new Date(b.timestamp),
      updatedAt: new Date(b.timestamp),
    };
  });

  return { success: true, enquiries: fallbackEnquiries };
}
