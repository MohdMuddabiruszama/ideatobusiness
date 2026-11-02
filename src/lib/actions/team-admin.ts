'use server';

import { prisma } from '@/lib/db/prisma';
import bcrypt from 'bcryptjs';
import { requireAdmin } from '@/lib/auth/session';
import { recordAuditLog } from '@/lib/auth/audit';
import { AdminRole } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function createAdminUserAction(formData: FormData) {
  const sessionCtx = await requireAdmin('SUPER_ADMIN');

  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim().toLowerCase();
  const password = formData.get('password') as string;
  const role = (formData.get('role') as AdminRole) || 'ADMIN';

  if (!name || !email || !password) {
    return { success: false, error: 'Name, email, and password are required.' };
  }

  if (password.length < 8) {
    return { success: false, error: 'Password must be at least 8 characters.' };
  }

  // Check existing
  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) {
    return { success: false, error: 'An admin with this email already exists.' };
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const newUser = await prisma.adminUser.create({
    data: {
      name,
      email,
      passwordHash,
      role,
      isActive: true,
    },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'CREATE_ADMIN_USER',
    resourceType: 'ADMIN_USER',
    resourceId: newUser.id,
    details: { name: newUser.name, email: newUser.email, role: newUser.role },
  });

  revalidatePath('/admin/team');

  return { success: true, user: newUser };
}

export async function toggleAdminUserActiveAction(targetUserId: string) {
  const sessionCtx = await requireAdmin('SUPER_ADMIN');

  // Prevent disabling oneself
  if (targetUserId === sessionCtx.user.id) {
    return { success: false, error: 'You cannot disable your own Super Admin account.' };
  }

  const target = await prisma.adminUser.findUnique({
    where: { id: targetUserId },
  });

  if (!target) {
    return { success: false, error: 'User not found.' };
  }

  const updated = await prisma.adminUser.update({
    where: { id: targetUserId },
    data: { isActive: !target.isActive },
  });

  // If disabled, revoke all active sessions immediately
  if (!updated.isActive) {
    await prisma.adminSession.deleteMany({ where: { userId: targetUserId } });
  }

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'TOGGLE_ADMIN_ACTIVE',
    resourceType: 'ADMIN_USER',
    resourceId: targetUserId,
    details: { email: updated.email, newState: updated.isActive },
  });

  revalidatePath('/admin/team');

  return { success: true, user: updated };
}

