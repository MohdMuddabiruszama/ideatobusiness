'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { SERVICES } from '@/data/services';
import { DEPARTMENTS } from '@/data/departments';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Search, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const DEPARTMENT_3D_ICONS: Record<string, string> = {
  'business-launch': '/icons/Glossy Emerald Rocket Launch Icon.png',
  'branding-design': '/icons/Glossy Creative Design Toolkit.png',
  'website-technology': '/icons/Glossy 3D Web Development Monitor.png',
  'marketplace-selling': '/icons/Glossy 3D Shopping Cart Icon.png',
  'marketing-growth': '/icons/Glossy Emerald Social Media Megaphone.png',
};

function ServiceExplorerContent() {
  const searchParams = useSearchParams();
  const initialDept = searchParams.get('department') || 'all';

  const [selectedDept, setSelectedDept] = useState<string>(initialDept);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesDept =
        selectedDept === 'all' || service.departmentSlug === selectedDept;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        service.name.toLowerCase().includes(q) ||
        service.tagline.toLowerCase().includes(q) ||
        service.departmentName.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q);

      return matchesDept && matchesQuery;
    });
  }, [selectedDept, searchQuery]);

  const clearFilters = () => {
    setSelectedDept('all');
    setSearchQuery('');
  };

  return (
    <div>
      {/* Search and Filters Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 pb-6 border-b border-[#E5E7EB]">
        {/* Search input */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by service name, e.g. GST, Logo, Amazon..."
            className="w-full pl-10 pr-10 py-2.5 rounded-[10px] border border-[#E5E7EB] bg-white text-sm text-neutral-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-brand-emerald shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results count & Clear */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#4B5563]">
            Showing <strong className="text-brand-deep">{filteredServices.length}</strong> of {SERVICES.length} services
          </span>
          {(selectedDept !== 'all' || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-xs font-semibold text-brand-emerald hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Department Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <button
          onClick={() => setSelectedDept('all')}
          className={cn(
            'px-4 py-2 rounded-[10px] text-xs sm:text-sm font-semibold shrink-0 transition-all duration-200 cursor-pointer',
            selectedDept === 'all'
              ? 'bg-brand-deep text-white shadow-sm'
              : 'bg-[#F3F4F6] text-neutral-navy hover:bg-slate-200'
          )}
        >
          All Departments ({SERVICES.length})
        </button>
        {DEPARTMENTS.map((dept) => {
          const isSelected = selectedDept === dept.slug;
          return (
            <button
              key={dept.slug}
              onClick={() => setSelectedDept(dept.slug)}
              className={cn(
                'px-4 py-2 rounded-[10px] text-xs sm:text-sm font-semibold shrink-0 transition-all duration-200 cursor-pointer',
                isSelected
                  ? 'bg-brand-deep text-white shadow-sm'
                  : 'bg-[#F3F4F6] text-neutral-navy hover:bg-slate-200'
              )}
            >
              {dept.name} ({dept.servicesCount})
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const iconPath = DEPARTMENT_3D_ICONS[service.departmentSlug];
            return (
              <Card
                key={service.id}
                hoverable
                className="flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {iconPath ? (
                      <div className="relative h-12 w-12 shrink-0 group-hover:scale-105 transition-transform">
                        <Image
                          src={iconPath}
                          alt={service.departmentName}
                          fill
                          className="object-contain"
                          sizes="48px"
                        />
                      </div>
                    ) : (
                      <div className="h-10 w-10 rounded-xl bg-brand-mint text-brand-emerald flex items-center justify-center font-bold">
                        IB
                      </div>
                    )}
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-mint text-brand-emerald border border-brand-emerald/20">
                      {service.departmentName}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-semibold text-brand-deep group-hover:text-brand-emerald transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#4B5563] line-clamp-2 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-slate-400 font-medium">Pricing</span>
                    <span className="text-sm font-bold text-brand-deep">
                      {service.priceDisplay}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      href={`/services/${service.slug}`}
                      variant="secondary"
                      size="sm"
                      className="text-xs min-h-[40px] px-3 font-semibold"
                    >
                      View Details
                    </Button>
                    <Button
                      href={`/get-started?service=${service.slug}&department=${service.departmentSlug}`}
                      variant="primary"
                      size="sm"
                      className="text-xs min-h-[40px] px-3 font-semibold"
                    >
                      Get Started →
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-[#F3F4F6] rounded-[16px] border border-dashed border-[#E5E7EB]">
          <p className="text-lg font-bold text-brand-deep">No services found matching your criteria</p>
          <p className="mt-1 text-sm text-[#4B5563]">
            Try adjusting your search terms or clearing selected department filters.
          </p>
          <div className="mt-6">
            <Button onClick={clearFilters} variant="secondary" size="sm">
              Clear All Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function ServiceExplorer() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading services...</div>}>
      <ServiceExplorerContent />
    </Suspense>
  );
}
