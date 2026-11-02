import React from 'react';
import { requireAdmin } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';
import { AdminSettingsView } from '@/components/admin/AdminSettingsView';

export const dynamic = 'force-dynamic';

export default async function AdminSettingsPage() {
  const sessionCtx = await requireAdmin();

  const sessions = await prisma.adminSession.findMany({
    where: { userId: sessionCtx.user.id },
    orderBy: { createdAt: 'desc' },
  });

  const formattedSessions = sessions.map((s) => ({
    id: s.id,
    ipAddress: s.ipAddress,
    userAgent: s.userAgent,
    expiresAt: s.expiresAt.toISOString(),
    createdAt: s.createdAt.toISOString(),
    isCurrent: s.token === sessionCtx.session.token,
  }));

  const formattedUser = {
    id: sessionCtx.user.id,
    name: sessionCtx.user.name,
    email: sessionCtx.user.email,
    role: sessionCtx.user.role,
    lastLoginAt: sessionCtx.user.lastLoginAt ? sessionCtx.user.lastLoginAt.toISOString() : null,
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          System & Security Settings
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Manage administrator profile credentials, active server sessions, and security configurations.
        </p>
      </div>

      <AdminSettingsView user={formattedUser} activeSessions={formattedSessions} />
    </div>
  );
}

