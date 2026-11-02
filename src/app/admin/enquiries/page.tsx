import React from 'react';
import { requireAdmin } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';
import { EnquiryListView, EnquiryListItem } from '@/components/admin/EnquiryListView';

export const dynamic = 'force-dynamic';

export default async function AdminEnquiriesPage() {
  await requireAdmin();

  // Optimized indexed query selecting only fields needed for table/card view
  const [enquiries, adminTeam] = await Promise.all([
    prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        referenceId: true,
        fullName: true,
        email: true,
        phone: true,
        businessStage: true,
        departmentSlug: true,
        serviceSlug: true,
        packageSlug: true,
        businessName: true,
        status: true,
        isArchived: true,
        assignedTo: { select: { name: true } },
        createdAt: true,
      },
      take: 200,
    }),
    prisma.adminUser.findMany({
      where: { isActive: true },
      select: { id: true, name: true },
    }),
  ]);

  const formattedEnquiries: EnquiryListItem[] = enquiries.map((e) => ({
    id: e.id,
    referenceId: e.referenceId,
    fullName: e.fullName,
    email: e.email,
    phone: e.phone,
    businessStage: e.businessStage,
    departmentSlug: e.departmentSlug,
    serviceSlug: e.serviceSlug,
    packageSlug: e.packageSlug,
    businessName: e.businessName,
    status: e.status,
    isArchived: e.isArchived,
    assignedToName: e.assignedTo?.name || null,
    createdAt: e.createdAt.toISOString(),
  }));

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Enquiries & Lead Management
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time pipeline tracking, client communication shortcuts, and assignment dossier.
          </p>
        </div>
      </div>

      <EnquiryListView
        initialEnquiries={formattedEnquiries}
        adminTeam={adminTeam}
      />
    </div>
  );
}

