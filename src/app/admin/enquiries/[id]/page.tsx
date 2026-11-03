import React from 'react';
import { notFound } from 'next/navigation';
import { requireAdmin } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';
import { EnquiryDetailManager } from '@/components/admin/EnquiryDetailManager';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminEnquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;

  const [enquiry, adminTeam] = await Promise.all([
    prisma.enquiry.findFirst({
      where: {
        OR: [{ id }, { referenceId: id }],
      },
      include: {
        notes: {
          orderBy: { createdAt: 'desc' },
        },
      },
    }),
    prisma.adminUser.findMany({
      where: { isActive: true },
      select: { id: true, name: true },
    }),
  ]);

  if (!enquiry) {
    notFound();
  }

  const formattedEnquiry = {
    id: enquiry.id,
    referenceId: enquiry.referenceId,
    fullName: enquiry.fullName,
    email: enquiry.email,
    phone: enquiry.phone,
    businessStage: enquiry.businessStage,
    departmentSlug: enquiry.departmentSlug,
    serviceSlug: enquiry.serviceSlug,
    packageSlug: enquiry.packageSlug,
    businessName: enquiry.businessName,
    city: enquiry.city,
    country: enquiry.country,
    message: enquiry.message,
    preferredContact: enquiry.preferredContact,
    status: enquiry.status,
    isArchived: enquiry.isArchived,
    assignedToId: enquiry.assignedToId,
    notes: enquiry.notes.map((n) => ({
      id: n.id,
      authorName: n.authorName,
      content: n.content,
      createdAt: n.createdAt.toISOString(),
    })),
    createdAt: enquiry.createdAt.toISOString(),
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
      <EnquiryDetailManager enquiry={formattedEnquiry} adminTeam={adminTeam} />
    </div>
  );
}
