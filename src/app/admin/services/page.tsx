import React from 'react';
import { requireAdmin } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';
import { ServiceCatalogManager } from '@/components/admin/ServiceCatalogManager';

export const dynamic = 'force-dynamic';

export default async function AdminServicesPage() {
  await requireAdmin('ADMIN');

  const [departments, services] = await Promise.all([
    prisma.serviceDepartment.findMany({
      orderBy: { displayOrder: 'asc' },
      select: { id: true, slug: true, name: true },
    }),
    prisma.service.findMany({
      orderBy: { displayOrder: 'asc' },
      select: {
        id: true,
        slug: true,
        departmentSlug: true,
        name: true,
        tagline: true,
        description: true,
        startingPrice: true,
        priceDisplay: true,
        isStartingPriceEstimate: true,
        isActive: true,
      },
    }),
  ]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Service Catalog & Roadmaps
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Manage services across the 5 core business departments. Updates sync directly to public pages.
        </p>
      </div>

      <ServiceCatalogManager
        departments={departments}
        initialServices={services}
      />
    </div>
  );
}

