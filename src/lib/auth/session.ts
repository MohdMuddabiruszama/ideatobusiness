import { cookies, headers } from 'next/headers';
import { prisma } from '@/lib/db/prisma';
import crypto from 'crypto';
import { AdminRole, AdminUser } from '@prisma/client';
import { redirect } from 'next/navigation';

export const ADMIN_SESSION_COOKIE = 'admin_session';
const SESSION_EXPIRY_HOURS = 8;

export interface SessionContext {
  user: AdminUser;
  session: {
    id: string;
    token: string;
    expiresAt: Date;
  };
}

/**
 * Creates a cryptographically secure 256-bit session token in PostgreSQL
 * and sets an HttpOnly, Secure, SameSite cookie.
 */
export async function createAdminSession(userId: string): Promise<string> {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + SESSION_EXPIRY_HOURS * 60 * 60 * 1000);

  const headerList = await headers();
  const ipAddress = headerList.get('x-forwarded-for') || headerList.get('x-real-ip') || '127.0.0.1';
  const userAgent = headerList.get('user-agent') || 'Unknown';

  await prisma.adminSession.create({
    data: {
      token,
      userId,
      ipAddress,
      userAgent,
      expiresAt,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: expiresAt,
  });

  return token;
}

/**
 * Verifies active session token from cookie against the database.
 * Auto-cleans expired sessions.
 */
export async function getAdminSession(): Promise<SessionContext | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
    if (!token) return null;

    const session = await prisma.adminSession.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!session || !session.user || !session.user.isActive) {
      return null;
    }

    if (new Date() > session.expiresAt) {
      // Session expired, purge it
      await prisma.adminSession.delete({ where: { id: session.id } }).catch(() => {});
      cookieStore.delete(ADMIN_SESSION_COOKIE);
      return null;
    }

    return {
      user: session.user,
      session: {
        id: session.id,
        token: session.token,
        expiresAt: session.expiresAt,
      },
    };
  } catch (error) {
    console.error('Session validation error:', error);
    return null;
  }
}

/**
 * Route / Page guard: Throws redirect to /admin/login if not authenticated.
 */
export async function requireAdmin(minRole?: AdminRole): Promise<SessionContext> {
  const sessionCtx = await getAdminSession();
  if (!sessionCtx) {
    redirect('/admin/login');
  }

  if (minRole === 'SUPER_ADMIN' && sessionCtx.user.role !== 'SUPER_ADMIN') {
    redirect('/admin/dashboard?error=unauthorized');
  }

  return sessionCtx;
}

/**
 * Destroys current session and clears cookie.
 */
export async function destroyAdminSession(): Promise<void> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
    if (token) {
      await prisma.adminSession.deleteMany({ where: { token } });
    }
    cookieStore.delete(ADMIN_SESSION_COOKIE);
  } catch (error) {
    console.error('Session destruction error:', error);
  }
}

