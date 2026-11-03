import React from 'react';
import { requireAdmin } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  UserCheck,
  Send,
  CheckCircle2,
  XCircle,
  Clock,
  Layers,
  ArrowRight,
} from 'lucide-react';

import { syncPendingBackupEnquiries } from '@/lib/db/recovery';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function AdminReportsPage() {
  await requireAdmin();
  await syncPendingBackupEnquiries().catch(() => {});

  const [totalCount, statusGroups, stageGroups, deptGroups, contactGroups] = await Promise.all([
    prisma.enquiry.count(),
    prisma.enquiry.groupBy({ by: ['status'], _count: { id: true } }),
    prisma.enquiry.groupBy({ by: ['businessStage'], _count: { id: true } }),
    prisma.enquiry.groupBy({ by: ['departmentSlug'], _count: { id: true } }),
    prisma.enquiry.groupBy({ by: ['preferredContact'], _count: { id: true } }),
  ]);

  const statusMap: Record<string, number> = {};
  statusGroups.forEach((g) => {
    statusMap[g.status] = g._count.id;
  });

  const funnelSteps = [
    { label: 'Total Inflow', count: totalCount, color: 'bg-slate-900', text: 'text-slate-900' },
    { label: 'Contacted', count: statusMap.CONTACTED || 0, color: 'bg-amber-500', text: 'text-amber-700' },
    { label: 'Qualified', count: statusMap.QUALIFIED || 0, color: 'bg-purple-600', text: 'text-purple-700' },
    { label: 'Quotation Sent', count: statusMap.QUOTATION_SENT || 0, color: 'bg-orange-500', text: 'text-orange-700' },
    { label: 'Converted', count: statusMap.CONVERTED || 0, color: 'bg-emerald-600', text: 'text-emerald-700' },
  ];

  const overallConversionPct = totalCount > 0 ? (((statusMap.CONVERTED || 0) / totalCount) * 100).toFixed(1) : '0.0';

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Reports & Business Funnel
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Data-driven pipeline analytics, lead conversion velocity, and department demand metrics.
        </p>
      </div>

      {/* Top Conversion Funnel */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">Lead Conversion Funnel</h2>
            <p className="text-xs text-slate-400">Step-by-step pipeline drop-off and closure rates</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 uppercase font-bold block">Overall Win Rate</span>
            <span className="text-2xl font-black text-emerald-600">{overallConversionPct}%</span>
          </div>
        </div>

        <div className="space-y-4">
          {funnelSteps.map((step, idx) => {
            const pct = totalCount > 0 ? Math.round((step.count / totalCount) * 100) : 0;
            return (
              <div key={step.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                    <span className="font-bold text-slate-800">{step.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-900">{step.count} leads</span>
                    <span className="text-slate-400 font-semibold">({pct}%)</span>
                  </div>
                </div>

                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div
                    className={`${step.color} h-full rounded-full transition-all duration-700`}
                    style={{ width: `${Math.max(4, pct)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid: Business Stage & Channel Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Business Stage Breakdown */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">Customer Stage Distribution</h2>
            <p className="text-xs text-slate-400">Venture maturity at intake</p>
          </div>

          <div className="space-y-3">
            {stageGroups.map((stage) => {
              const count = stage._count.id;
              const pct = totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;
              return (
                <div key={stage.businessStage} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-700 capitalize">
                      {stage.businessStage.replace('_', ' ')}
                    </span>
                    <span className="text-slate-900 font-bold">{count} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full rounded-full"
                      style={{ width: `${Math.max(4, pct)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Preferred Communication Channel */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">Contact Method Preferences</h2>
            <p className="text-xs text-slate-400">Channels preferred for outreach</p>
          </div>

          <div className="space-y-3">
            {contactGroups.map((channel) => {
              const count = channel._count.id;
              const pct = totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;
              return (
                <div key={channel.preferredContact} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-700 uppercase">{channel.preferredContact}</span>
                    <span className="text-slate-900 font-bold">{count} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-teal-600 h-full rounded-full"
                      style={{ width: `${Math.max(4, pct)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

