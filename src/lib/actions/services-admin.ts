'use server';

import { prisma } from '@/lib/db/prisma';
import { requireAdmin } from '@/lib/auth/session';
import { recordAuditLog } from '@/lib/auth/audit';
import { revalidatePath } from 'next/cache';
import { slugify } from '@/lib/utils';

export async function toggleServiceStatusAction(serviceId: string) {
  const sessionCtx = await requireAdmin('ADMIN');

  const service = await prisma.service.findUnique({
    where: { id: serviceId },
    select: { id: true, name: true, isActive: true },
  });

  if (!service) {
    return { success: false, error: 'Service not found.' };
  }

  const updated = await prisma.service.update({
    where: { id: serviceId },
    data: { isActive: !service.isActive },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'SERVICE_TOGGLE_ACTIVE',
    resourceType: 'SERVICE',
    resourceId: serviceId,
    details: { serviceName: service.name, newState: updated.isActive },
  });

  revalidatePath('/admin/services');
  revalidatePath('/services');

  return { success: true, service: updated };
}

export async function createServiceAction(formData: FormData) {
  const sessionCtx = await requireAdmin('ADMIN');

  const name = (formData.get('name') as string)?.trim();
  const departmentSlug = (formData.get('departmentSlug') as string)?.trim();
  const tagline = (formData.get('tagline') as string)?.trim();
  const description = (formData.get('description') as string)?.trim();
  const priceDisplay = (formData.get('priceDisplay') as string)?.trim() || 'Request Quote';
  const startingPriceRaw = formData.get('startingPrice') as string;
  const startingPrice = startingPriceRaw ? parseInt(startingPriceRaw, 10) : null;
  const isStartingPriceEstimate = formData.get('isStartingPriceEstimate') === 'true';

  if (!name || !departmentSlug || !tagline || !description) {
    return { success: false, error: 'Name, department, tagline, and description are required.' };
  }

  const department = await prisma.serviceDepartment.findUnique({
    where: { slug: departmentSlug },
  });

  if (!department) {
    return { success: false, error: 'Invalid department selected.' };
  }

  let slug = slugify(name);
  // Ensure unique slug
  const existing = await prisma.service.findUnique({ where: { slug } });
  if (existing) {
    slug = `${slug}-${Date.now().toString(36).slice(-4)}`;
  }

  const service = await prisma.service.create({
    data: {
      slug,
      departmentId: department.id,
      departmentSlug: department.slug,
      name,
      tagline,
      description,
      startingPrice,
      priceDisplay,
      isStartingPriceEstimate,
      isActive: true,
    },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'SERVICE_CREATE',
    resourceType: 'SERVICE',
    resourceId: service.id,
    details: { name: service.name, slug: service.slug },
  });

  revalidatePath('/admin/services');
  revalidatePath('/services');

  return { success: true, service };
}

export async function updateServiceAction(serviceId: string, formData: FormData) {
  const sessionCtx = await requireAdmin('ADMIN');

  const name = (formData.get('name') as string)?.trim();
  const tagline = (formData.get('tagline') as string)?.trim();
  const description = (formData.get('description') as string)?.trim();
  const priceDisplay = (formData.get('priceDisplay') as string)?.trim() || 'Request Quote';
  const startingPriceRaw = formData.get('startingPrice') as string;
  const startingPrice = startingPriceRaw ? parseInt(startingPriceRaw, 10) : null;
  const isStartingPriceEstimate = formData.get('isStartingPriceEstimate') === 'true';

  if (!name || !tagline || !description) {
    return { success: false, error: 'Name, tagline, and description are required.' };
  }

  const updated = await prisma.service.update({
    where: { id: serviceId },
    data: {
      name,
      tagline,
      description,
      startingPrice,
      priceDisplay,
      isStartingPriceEstimate,
    },
  });

  await recordAuditLog({
    adminUserId: sessionCtx.user.id,
    adminEmail: sessionCtx.user.email,
    action: 'SERVICE_UPDATE',
    resourceType: 'SERVICE',
    resourceId: serviceId,
    details: { name: updated.name },
  });

  revalidatePath('/admin/services');
  revalidatePath('/services');

  return { success: true, service: updated };
}

