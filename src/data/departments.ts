import { ServiceDepartment } from '@/types';

export const DEPARTMENTS: ServiceDepartment[] = [
  {
    slug: 'business-launch',
    name: 'Business Launch',
    shortDescription: 'Idea validation, business planning, and registration coordination to get your venture officially off the ground.',
    description:
      'Turn your entrepreneurial concept into a structured, compliant, and legally recognised business entity with step-by-step guidance.',
    iconName: 'Rocket',
    accentColor: 'from-emerald-500 to-teal-700',
    servicesCount: 6,
  },
  {
    slug: 'branding-design',
    name: 'Branding & Design',
    shortDescription: 'Business naming, visual identity, logo design, packaging, and high-impact brand creative assets.',
    description:
      'Stand out in crowded markets with professional brand architecture, distinctive logos, cohesive colour palettes, and packaging that sells.',
    iconName: 'Palette',
    accentColor: 'from-amber-500 to-orange-600',
    servicesCount: 6,
  },
  {
    slug: 'website-technology',
    name: 'Website & Technology',
    shortDescription: 'Domains, professional email, high-converting websites, e-commerce storefronts, and custom apps.',
    description:
      'Establish a modern digital footprint with fast, responsive, and secure websites and e-commerce platforms engineered for lead conversion.',
    iconName: 'Globe',
    accentColor: 'from-teal-600 to-emerald-800',
    servicesCount: 6,
  },
  {
    slug: 'marketplace-selling',
    name: 'Marketplace Selling',
    shortDescription: 'End-to-end seller onboarding, catalogue creation, pricing research, and listings for Amazon, Flipkart, & Meesho.',
    description:
      'Launch your retail products across India’s biggest online marketplaces with complete account setup, SEO-optimised listings, and growth management.',
    iconName: 'ShoppingBag',
    accentColor: 'from-orange-500 to-amber-700',
    servicesCount: 6,
  },
  {
    slug: 'marketing-growth',
    name: 'Marketing & Growth',
    shortDescription: 'Social media management, high-ROI paid advertising, SEO rankings, and repeatable customer acquisition.',
    description:
      'Generate consistent customer demand through data-driven digital marketing campaigns, engaging social content, and organic search visibility.',
    iconName: 'TrendingUp',
    accentColor: 'from-emerald-600 to-teal-900',
    servicesCount: 6,
  },
];

export function getDepartmentBySlug(slug: string): ServiceDepartment | undefined {
  return DEPARTMENTS.find((dept) => dept.slug === slug);
}

