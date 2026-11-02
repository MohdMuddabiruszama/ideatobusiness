import React from 'react';
import { requireAdmin } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';
import { TeamManagerView, AdminUserData } from '@/components/admin/TeamManagerView';

export const dynamic = 'force-dynamic';

export default async function AdminTeamPage() {
  const sessionCtx = await requireAdmin('SUPER_ADMIN');

  const users = await prisma.adminUser.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      lastLoginAt: true,
      createdAt: true,
    },
  });

  const formattedUsers: AdminUserData[] = users.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role,
    isActive: u.isActive,
    lastLoginAt: u.lastLoginAt ? u.lastLoginAt.toISOString() : null,
    createdAt: u.createdAt.toISOString(),
  }));

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Team & Authorization Access
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Role-Based Access Control (RBAC) governance for Super Admins, Operations Admins, and Client Coordinators.
        </p>
      </div>

      <TeamManagerView
        initialUsers={formattedUsers}
        currentUserId={sessionCtx.user.id}
      />
    </div>
  );
}

