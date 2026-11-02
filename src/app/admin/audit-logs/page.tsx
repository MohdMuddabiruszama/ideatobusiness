import React from 'react';
import { requireAdmin } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';
import { ShieldCheck, ShieldAlert, Clock, User, Globe, Activity } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminAuditLogsPage() {
  await requireAdmin('SUPER_ADMIN');

  const logs = await prisma.auditLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <span>Security & Audit Trails</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Immutable system logs documenting all authentication, status modifications, and data access.
          </p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-slate-900 text-white font-mono font-bold self-start sm:self-auto">
          {logs.length} Recent Events Logged
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <th className="py-3.5 px-4">Action</th>
              <th className="py-3.5 px-4">Admin Actor</th>
              <th className="py-3.5 px-4">Resource</th>
              <th className="py-3.5 px-4">Network / IP</th>
              <th className="py-3.5 px-4">Timestamp</th>
              <th className="py-3.5 px-4 text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {logs.map((log) => {
              const isWarning = log.action.includes('FAILED') || log.action.includes('SUSPEND');
              return (
                <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-md font-mono text-[10px] font-black uppercase border ${
                        isWarning
                          ? 'bg-red-50 text-red-800 border-red-200'
                          : log.action.includes('SUCCESS')
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-slate-100 text-slate-800 border-slate-200'
                      }`}
                    >
                      {log.action}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-bold text-slate-900 block">{log.adminEmail}</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[10px]">
                      {log.resourceType}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">
                    {log.ipAddress || '127.0.0.1'}
                  </td>

                  <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                    {new Date(log.createdAt).toLocaleString('en-IN')}
                  </td>

                  <td className="py-3.5 px-4 text-right text-[10px] text-slate-500 font-mono truncate max-w-[200px]">
                    {log.details ? JSON.stringify(log.details) : '—'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

