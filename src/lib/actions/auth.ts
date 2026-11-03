'use server';

import { prisma } from '@/lib/db/prisma';
import bcrypt from 'bcryptjs';
import { createAdminSession, destroyAdminSession, getAdminSession } from '@/lib/auth/session';
import { recordAuditLog } from '@/lib/auth/audit';
import { checkRateLimit } from '@/lib/rate-limit';
import { redirect } from 'next/navigation';

export interface AuthActionResult {
  success: boolean;
  error?: string;
}

/**
 * Super Admin / Admin login server action with rate-limiting and generic failed messages.
 */
export async function loginAdminAction(formData: FormData): Promise<AuthActionResult> {
  const email = (formData.get('email') as string)?.trim().toLowerCase();
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { success: false, error: 'Email and password are required.' };
  }

  // Rate Limiting: 5 attempts per 15 minutes
  const rateLimit = checkRateLimit(`login_${email}`, 5, 15 * 60 * 1000);
  if (!rateLimit.allowed) {
    const remainingMin = Math.ceil(rateLimit.resetInMs / 60000);
    return {
      success: false,
      error: `Too many login attempts. Please wait ${remainingMin} minute(s) before trying again.`,
    };
  }

  // Lookup admin user
  let user;
  try {
    user = await prisma.adminUser.findUnique({
      where: { email },
    });
  } catch (dbError) {
    console.error('Database connection error during login:', dbError);
    return {
      success: false,
      error: 'Cannot reach the database server. Please ensure the database service is running.',
    };
  }

  if (!user || !user.isActive) {
    await recordAuditLog({
      adminEmail: email,
      action: 'LOGIN_FAILED',
      resourceType: 'AUTH',
      details: { reason: 'User not found or inactive' },
    });
    return { success: false, error: 'Invalid email or password.' };
  }

  // Verify password with bcrypt constant-time comparison
  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    await recordAuditLog({
      adminUserId: user.id,
      adminEmail: user.email,
      action: 'LOGIN_FAILED',
      resourceType: 'AUTH',
      details: { reason: 'Incorrect password' },
    });
    return { success: false, error: 'Invalid email or password.' };
  }

  // Update last login
  await prisma.adminUser.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  // Create session
  await createAdminSession(user.id);

  // Record audit log
  await recordAuditLog({
    adminUserId: user.id,
    adminEmail: user.email,
    action: 'LOGIN_SUCCESS',
    resourceType: 'AUTH',
    details: { role: user.role },
  });

  redirect('/admin/dashboard');
}

/**
 * Logout action: cleans database session and cookie.
 */
export async function logoutAdminAction(): Promise<void> {
  const sessionCtx = await getAdminSession();
  if (sessionCtx) {
    await recordAuditLog({
      adminUserId: sessionCtx.user.id,
      adminEmail: sessionCtx.user.email,
      action: 'LOGOUT',
      resourceType: 'AUTH',
    });
  }

  await destroyAdminSession();
  redirect('/admin/login');
}

/**
 * Change admin password securely.
 */
export async function changePasswordAction(formData: FormData): Promise<AuthActionResult> {
  const sessionCtx = await getAdminSession();
  if (!sessionCtx) {
    return { success: false, error: 'Unauthorized.' };
  }

  const currentPassword = formData.get('currentPassword') as string;
  const newPassword = formData.get('newPassword') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return { success: false, error: 'All fields are required.' };
  }

  if (newPassword !== confirmPassword) {
    return { success: false, error: 'New passwords do not match.' };
  }

  if (newPassword.length < 8) {
    return { success: false, error: 'Password must be at least 8 characters.' };
  }

  // Verify current password
  const isCurrentValid = await bcrypt.compare(currentPassword, sessionCtx.user.passwordHash);
  if (!isCurrentValid) {
    return { success: false, error: 'Current password is incorrect.' };
  }

  const newHash = await bcrypt.hash(newPassword, 12);

  await prisma.adminUser.update({
    where: { id: sessionCtx.user.id },
    data: { passwordHash: newHash },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'PASSWORD_CHANGE',
    resourceType: 'AUTH',
  });

  return { success: true };
}

