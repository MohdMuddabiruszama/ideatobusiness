import React from 'react';
import Link from 'next/link';
import { requireAdmin } from '@/lib/auth/session';
import { getDashboardData } from '@/lib/dal/dashboard';
import {
  Inbox,
  UserCheck,
  Send,
  CheckCircle2,
  XCircle,
  TrendingUp,
  ArrowRight,
  Clock,
  Layers,
  ShieldCheck,
  Activity,
  Plus,
} from 'lucide-react';

import { AdminLiveBar } from '@/components/admin/AdminLiveBar';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function AdminDashboardPage() {
  const sessionCtx = await requireAdmin();
  const data = await getDashboardData();

  const kpis = [
    {
      label: 'Total Enquiries',
      value: data.totalCount,
      icon: Inbox,
      color: 'bg-slate-900 text-white',
      border: 'border-slate-200',
    },
    {
      label: 'New Unread',
      value: data.counts.NEW,
      icon: Activity,
      color: 'bg-blue-600 text-white',
      border: 'border-blue-200 bg-blue-50/30',
    },
    {
      label: 'In Discussion',
      value: data.counts.CONTACTED,
      icon: Clock,
      color: 'bg-amber-600 text-white',
      border: 'border-amber-200 bg-amber-50/30',
    },
    {
      label: 'Qualified Leads',
      value: data.counts.QUALIFIED,
      icon: UserCheck,
      color: 'bg-purple-600 text-white',
      border: 'border-purple-200 bg-purple-50/30',
    },
    {
      label: 'Quotations Sent',
      value: data.counts.QUOTATION_SENT,
      icon: Send,
      color: 'bg-orange-600 text-white',
      border: 'border-orange-200 bg-orange-50/30',
    },
    {
      label: 'Converted Clients',
      value: data.counts.CONVERTED,
      icon: CheckCircle2,
      color: 'bg-emerald-600 text-white',
      border: 'border-emerald-200 bg-emerald-50/30',
    },
    {
      label: 'Lost / Closed',
      value: data.counts.LOST,
      icon: XCircle,
      color: 'bg-slate-600 text-white',
      border: 'border-slate-200',
    },
    {
      label: 'Conversion Rate',
      value: `${data.conversionRate}%`,
      icon: TrendingUp,
      color: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white',
      border: 'border-emerald-300 bg-emerald-50/50',
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
      {/* Top Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Executive Overview
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase bg-emerald-100 text-emerald-800 border border-emerald-200">
              {sessionCtx.user.role}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Welcome back, <strong className="text-slate-800">{sessionCtx.user.name}</strong>. Here is your live business pipeline and performance metrics.
          </p>
        </div>

        {/* Quick Action Shortcuts */}
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin/enquiries"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors"
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Manage Enquiries</span>
          </Link>
          <Link
            href="/admin/services"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Service Catalog</span>
          </Link>
        </div>
      </div>

      {/* Real-time Pipeline & Sync Status */}
      <AdminLiveBar isOfflineMode={data.isOfflineMode} />

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.label}
              className={`p-4 sm:p-5 rounded-2xl border ${kpi.border} bg-white shadow-xs flex flex-col justify-between transition-all hover:shadow-md`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                  {kpi.label}
                </span>
                <div className={`p-2 rounded-xl ${kpi.color} shadow-xs`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {kpi.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Section: Recent Enquiries & Department Demand */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Recent Enquiries (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">Recent Customer Enquiries</h2>
              <p className="text-xs text-slate-400">Incoming leads awaiting follow-up</p>
            </div>
            <Link
              href="/admin/enquiries"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {data.recentEnquiries.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {data.recentEnquiries.map((lead) => (
                <Link
                  key={lead.id}
                  href={`/admin/enquiries/${lead.id}`}
                  className="py-3 px-2 flex items-center justify-between gap-4 hover:bg-slate-50 rounded-xl transition-colors group"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 truncate">
                        {lead.fullName}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {lead.referenceId || lead.id.slice(-6)}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">
                      {lead.email} • {lead.phone}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {lead.departmentSlug}
                      </span>
                      {lead.serviceSlug && <span>→ {lead.serviceSlug}</span>}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-block text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {lead.status}
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-1">
                      {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-slate-400">
              No recent enquiries logged yet.
            </div>
          )}
        </div>

        {/* Department Demand Summary (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">Department Demand</h2>
            <p className="text-xs text-slate-400">Share of customer interest</p>
          </div>

          <div className="space-y-3">
            {data.departmentDemand.map((dept) => {
              const pct = data.totalCount > 0 ? Math.round((dept.count / data.totalCount) * 100) : 0;
              return (
                <div key={dept.departmentSlug} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 capitalize">
                      {dept.departmentSlug.replace('-', ' ')}
                    </span>
                    <span className="text-slate-500 font-semibold">{dept.count} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(5, pct)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              href="/admin/reports"
              className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>View Conversion Funnel</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Security & Audit Activity Feed */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-bold text-slate-900">Recent Security & Admin Activities</h2>
          </div>
          <Link
            href="/admin/audit-logs"
            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
          >
            <span>Audit Trail</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="divide-y divide-slate-100">
          {data.recentAudits.map((log) => (
            <div key={log.id} className="py-2.5 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-md font-mono text-[10px] font-black uppercase bg-slate-100 text-slate-700">
                  {log.action}
                </span>
                <span className="font-semibold text-slate-800">{log.adminEmail}</span>
                <span className="text-slate-400 hidden sm:inline">• {log.resourceType}</span>
              </div>
              <div className="text-right text-[11px] text-slate-400 shrink-0">
                {new Date(log.createdAt).toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

