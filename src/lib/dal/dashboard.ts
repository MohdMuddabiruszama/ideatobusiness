import { prisma } from '@/lib/db/prisma';
import { syncPendingBackupEnquiries } from '@/lib/db/recovery';
import fs from 'fs';
import path from 'path';

export interface DashboardLeadSummary {
  id: string;
  referenceId: string | null;
  fullName: string;
  email: string;
  phone: string;
  businessStage: string;
  departmentSlug: string;
  serviceSlug: string | null;
  packageSlug: string | null;
  status: string;
  createdAt: string | Date;
}

export interface DashboardData {
  totalCount: number;
  counts: Record<string, number>;
  conversionRate: string;
  recentEnquiries: DashboardLeadSummary[];
  recentAudits: Array<{
    id: string;
    adminEmail: string;
    action: string;
    resourceType: string;
    createdAt: string | Date;
  }>;
  departmentDemand: Array<{ departmentSlug: string; count: number }>;
  isOfflineMode?: boolean;
}

export async function getDashboardData(): Promise<DashboardData> {
  const counts: Record<string, number> = {
    NEW: 0,
    CONTACTED: 0,
    QUALIFIED: 0,
    QUOTATION_SENT: 0,
    CONVERTED: 0,
    LOST: 0,
    ARCHIVED: 0,
  };

  try {
    // 1. Auto-sync any pending offline/recovery enquiries into PostgreSQL
    await syncPendingBackupEnquiries().catch((err) => {
      console.warn('Sync pending backup warning:', err?.message || err);
    });

    // 2. Fetch all KPIs and aggregations in parallel (indexed queries)
    const [statusGroups, recentEnquiries, recentAudits, departmentGroups, totalCount] =
      await Promise.all([
        // Status breakdown
        prisma.enquiry.groupBy({
          by: ['status'],
          _count: { id: true },
        }),
        // Recent enquiries (latest 6)
        prisma.enquiry.findMany({
          take: 6,
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
            status: true,
            createdAt: true,
          },
        }),
        // Recent audit log activity
        prisma.auditLog.findMany({
          take: 5,
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            adminEmail: true,
            action: true,
            resourceType: true,
            createdAt: true,
          },
        }),
        // Department demand distribution
        prisma.enquiry.groupBy({
          by: ['departmentSlug'],
          _count: { id: true },
        }),
        // Total count
        prisma.enquiry.count(),
      ]);

    statusGroups.forEach((group) => {
      counts[group.status] = group._count.id;
    });

    const conversionRate = totalCount > 0 ? ((counts.CONVERTED / totalCount) * 100).toFixed(1) : '0.0';

    return {
      totalCount,
      counts,
      conversionRate,
      recentEnquiries,
      recentAudits,
      departmentDemand: departmentGroups.map((g) => ({
        departmentSlug: g.departmentSlug,
        count: g._count.id,
      })),
      isOfflineMode: false,
    };
  } catch (error) {
    console.error('Database connection error in getDashboardData, falling back to disk backup:', error);

    // Fallback: Read from immutable local backup file
    const backupFilePath = path.join(process.cwd(), 'data', 'enquiries-backup.jsonl');
    const localEnquiries: DashboardLeadSummary[] = [];
    const deptDemandMap: Record<string, number> = {};

    if (fs.existsSync(backupFilePath)) {
      const lines = fs.readFileSync(backupFilePath, 'utf8').split('\n').filter(Boolean);
      for (const line of lines) {
        try {
          const rec = JSON.parse(line);
          const d = rec.data || {};
          const status = (d.status as string) || (rec.status === 'SAVED_TO_DB' ? 'NEW' : 'NEW');
          counts[status] = (counts[status] || 0) + 1;

          const dept = (d.departmentSlug as string) || 'business-launch';
          deptDemandMap[dept] = (deptDemandMap[dept] || 0) + 1;

          localEnquiries.push({
            id: rec.id,
            referenceId: rec.id,
            fullName: (d.fullName as string) || 'Guest Lead',
            email: (d.email as string) || '',
            phone: (d.phone as string) || '',
            businessStage: (d.businessStage as string) || 'IDEA',
            departmentSlug: dept,
            serviceSlug: (d.serviceSlug as string) || null,
            packageSlug: (d.packageSlug as string) || null,
            status,
            createdAt: rec.timestamp || new Date(),
          });
        } catch {
          // ignore corrupted lines
        }
      }
    }

    localEnquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const totalCount = localEnquiries.length;
    const conversionRate = totalCount > 0 ? (((counts.CONVERTED || 0) / totalCount) * 100).toFixed(1) : '0.0';

    return {
      totalCount,
      counts,
      conversionRate,
      recentEnquiries: localEnquiries.slice(0, 6),
      recentAudits: [],
      departmentDemand: Object.entries(deptDemandMap).map(([departmentSlug, count]) => ({
        departmentSlug,
        count,
      })),
      isOfflineMode: true,
    };
  }
}
