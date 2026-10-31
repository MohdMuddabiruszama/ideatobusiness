import { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ideatobusiness.in';

  // Static routes
  const staticRoutes = [
    '',
    '/services',
    '/sell-online',
    '/how-it-works',
    '/pricing',
    '/resources',
    '/about',
    '/contact',
    '/get-started',
    '/faq',
    '/privacy-policy',
    '/terms',
    '/refund-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic service routes (all 30 services)
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

