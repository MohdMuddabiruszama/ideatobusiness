import { prisma } from '@/lib/db/prisma';

export async function getDashboardData() {
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
      }),
      // Department demand distribution
      prisma.enquiry.groupBy({
        by: ['departmentSlug'],
        _count: { id: true },
      }),
      // Total count
      prisma.enquiry.count(),
    ]);

  // Map status counts
  const counts: Record<string, number> = {
    NEW: 0,
    CONTACTED: 0,
    QUALIFIED: 0,
    QUOTATION_SENT: 0,
    CONVERTED: 0,
    LOST: 0,
    ARCHIVED: 0,
  };

  statusGroups.forEach((group) => {
    counts[group.status] = group._count.id;
  });

  // Calculate conversion rate: (Converted / Total) * 100
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
  };
}

