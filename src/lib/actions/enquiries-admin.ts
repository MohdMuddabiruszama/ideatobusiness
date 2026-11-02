'use server';

import { prisma } from '@/lib/db/prisma';
import { requireAdmin } from '@/lib/auth/session';
import { recordAuditLog } from '@/lib/auth/audit';
import { EnquiryStatus } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function updateEnquiryStatusAction(
  enquiryId: string,
  newStatus: EnquiryStatus,
  noteContent?: string
) {
  const sessionCtx = await requireAdmin();

  const previous = await prisma.enquiry.findUnique({
    where: { id: enquiryId },
    select: { status: true, referenceId: true, fullName: true },
  });

  if (!previous) {
    return { success: false, error: 'Enquiry not found.' };
  }

  // Use a transaction if adding a note along with status update
  const result = await prisma.$transaction(async (tx) => {
    const updated = await tx.enquiry.update({
      where: { id: enquiryId },
      data: {
        status: newStatus,
        updatedAt: new Date(),
      },
    });

    if (noteContent && noteContent.trim().length > 0) {
      await tx.enquiryNote.create({
        data: {
          enquiryId,
          authorId: sessionCtx.user.id,
          authorName: sessionCtx.user.name,
          content: noteContent.trim(),
        },
      });
    }

    return updated;
  });

  // Audit log
  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'STATUS_CHANGE',
    resourceType: 'ENQUIRY',
    resourceId: enquiryId,
    details: {
      referenceId: previous.referenceId,
      customerName: previous.fullName,
      from: previous.status,
      to: newStatus,
      addedNote: Boolean(noteContent),
    },
  });

  revalidatePath('/admin/dashboard');
  revalidatePath('/admin/enquiries');
  revalidatePath(`/admin/enquiries/${enquiryId}`);

  return { success: true, enquiry: result };
}

export async function assignEnquiryLeadAction(enquiryId: string, assignedToId: string | null) {
  const sessionCtx = await requireAdmin();

  let assignedName: string | null = null;
  if (assignedToId) {
    const assignee = await prisma.adminUser.findUnique({
      where: { id: assignedToId },
      select: { name: true },
    });
    assignedName = assignee ? assignee.name : null;
  }

  const updated = await prisma.enquiry.update({
    where: { id: enquiryId },
    data: { assignedToId },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'ASSIGN_LEAD',
    resourceType: 'ENQUIRY',
    resourceId: enquiryId,
    details: { assignedToId, assignedName },
  });

  revalidatePath('/admin/enquiries');
  revalidatePath(`/admin/enquiries/${enquiryId}`);

  return { success: true, enquiry: updated };
}

export async function addEnquiryNoteAction(enquiryId: string, content: string) {
  const sessionCtx = await requireAdmin();

  if (!content || content.trim().length === 0) {
    return { success: false, error: 'Note content cannot be empty.' };
  }

  const note = await prisma.enquiryNote.create({
    data: {
      enquiryId,
      authorId: sessionCtx.user.id,
      authorName: sessionCtx.user.name,
      content: content.trim(),
    },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'NOTE_ADDED',
    resourceType: 'ENQUIRY',
    resourceId: enquiryId,
    details: { noteId: note.id },
  });

  revalidatePath(`/admin/enquiries/${enquiryId}`);

  return { success: true, note };
}

export async function archiveEnquiryAction(enquiryId: string) {
  const sessionCtx = await requireAdmin();

  await prisma.enquiry.update({
    where: { id: enquiryId },
    data: { isArchived: true, status: 'ARCHIVED' },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'ARCHIVE_ENQUIRY',
    resourceType: 'ENQUIRY',
    resourceId: enquiryId,
  });

  revalidatePath('/admin/enquiries');
  revalidatePath(`/admin/enquiries/${enquiryId}`);

  return { success: true };
}

export async function restoreEnquiryAction(enquiryId: string) {
  const sessionCtx = await requireAdmin();

  await prisma.enquiry.update({
    where: { id: enquiryId },
    data: { isArchived: false, status: 'NEW' },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'RESTORE_ENQUIRY',
    resourceType: 'ENQUIRY',
    resourceId: enquiryId,
  });

  revalidatePath('/admin/enquiries');
  revalidatePath(`/admin/enquiries/${enquiryId}`);

  return { success: true };
}

export async function exportEnquiriesCSVAction() {
  const sessionCtx = await requireAdmin();

  const enquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      referenceId: true,
      fullName: true,
      email: true,
      phone: true,
      businessStage: true,
      departmentSlug: true,
      serviceSlug: true,
      packageSlug: true,
      businessName: true,
      city: true,
      country: true,
      status: true,
      createdAt: true,
    },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'EXPORT_CSV',
    resourceType: 'ENQUIRY',
    details: { rowCount: enquiries.length },
  });

  // Construct CSV Header and rows
  const headers = [
    'Reference ID',
    'Customer Name',
    'Email',
    'Phone',
    'Business Stage',
    'Department',
    'Service',
    'Package',
    'Business Name',
    'City',
    'Country',
    'Status',
    'Created At',
  ];

  const rows = enquiries.map((e) => [
    `"${e.referenceId || ''}"`,
    `"${e.fullName.replace(/"/g, '""')}"`,
    `"${e.email}"`,
    `"${e.phone}"`,
    `"${e.businessStage}"`,
    `"${e.departmentSlug}"`,
    `"${e.serviceSlug || ''}"`,
    `"${e.packageSlug || ''}"`,
    `"${(e.businessName || '').replace(/"/g, '""')}"`,
    `"${e.city || ''}"`,
    `"${e.country || ''}"`,
    `"${e.status}"`,
    `"${e.createdAt.toISOString()}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  return { success: true, csvContent };
}

