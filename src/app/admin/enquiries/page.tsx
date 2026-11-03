import React from 'react';
import { requireAdmin } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';
import { syncPendingBackupEnquiries } from '@/lib/db/recovery';
import { EnquiryListView, EnquiryListItem } from '@/components/admin/EnquiryListView';
import { AdminLiveBar } from '@/components/admin/AdminLiveBar';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function AdminEnquiriesPage() {
  await requireAdmin();

  let formattedEnquiries: EnquiryListItem[] = [];
  let adminTeam: { id: string; name: string }[] = [];
  let isOffline = false;

  try {
    // Auto-sync any pending offline enquiries
    await syncPendingBackupEnquiries().catch(() => {});

    // Optimized indexed query selecting only fields needed for table/card view
    const [enquiries, team] = await Promise.all([
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

    adminTeam = team;
    formattedEnquiries = enquiries.map((e) => ({
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
  } catch (dbError) {
    console.error('Database connection error on enquiries page, reading from local backup:', dbError);
    isOffline = true;

    // Resilient fallback to local backup
    const backupFilePath = path.join(process.cwd(), 'data', 'enquiries-backup.jsonl');
    if (fs.existsSync(backupFilePath)) {
      const lines = fs.readFileSync(backupFilePath, 'utf8').split('\n').filter(Boolean);
      formattedEnquiries = lines
        .map((line) => {
          try {
            const rec = JSON.parse(line);
            const d = rec.data || {};
            return {
              id: rec.id,
              referenceId: rec.id,
              fullName: (d.fullName as string) || 'Guest Lead',
              email: (d.email as string) || '',
              phone: (d.phone as string) || '',
              businessStage: (d.businessStage as any) || 'IDEA',
              departmentSlug: (d.departmentSlug as string) || 'business-launch',
              serviceSlug: (d.serviceSlug as string) || null,
              packageSlug: (d.packageSlug as string) || null,
              businessName: (d.businessName as string) || null,
              status: ((d.status as any) || 'NEW') as any,
              isArchived: false,
              assignedToName: null,
              createdAt: rec.timestamp || new Date().toISOString(),
            };
          } catch {
            return null;
          }
        })
        .filter(Boolean) as EnquiryListItem[];

      formattedEnquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }

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

      {/* Real-time Status & Sync Bar */}
      <AdminLiveBar isOfflineMode={isOffline} />

      <EnquiryListView
        initialEnquiries={formattedEnquiries}
        adminTeam={adminTeam}
      />
    </div>
  );
}
