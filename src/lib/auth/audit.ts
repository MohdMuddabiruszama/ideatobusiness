import { prisma } from '@/lib/db/prisma';
import { headers } from 'next/headers';

export interface AuditLogInput {
  adminUserId?: string;
  adminEmail: string;
  action: string;
  resourceType: string;
  resourceId?: string;
  details?: Record<string, unknown>;
}

export async function recordAuditLog(input: AuditLogInput) {
  try {
    const headerList = await headers();
    const ipAddress = headerList.get('x-forwarded-for') || headerList.get('x-real-ip') || '127.0.0.1';
    const userAgent = headerList.get('user-agent') || 'Unknown';

    return await prisma.auditLog.create({
      data: {
        adminUserId: input.adminUserId,
        adminEmail: input.adminEmail,
        action: input.action,
        resourceType: input.resourceType,
        resourceId: input.resourceId,
        details: input.details ? JSON.parse(JSON.stringify(input.details)) : undefined,
        ipAddress,
        userAgent,
      },
    });
  } catch (error) {
    console.error('Failed to create audit log entry:', error);
  }
}

