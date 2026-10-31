import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';

const SERVICES_DATA = [
  {
    slug: 'business-launch',
    name: 'Business Setup',
    icon: '/icons/Glossy Emerald Rocket Launch Icon.png',
    color: 'bg-emerald-50 border-emerald-100',
    iconBg: 'bg-emerald-100',
    accent: 'text-brand-emerald',
    bullets: ['Business plan', 'GST, UDYAM', 'Licenses & Compliance', 'Product Catalogue'],
  },
  {
    slug: 'branding-design',
    name: 'Branding & Design',
    icon: '/icons/Glossy Creative Design Toolkit.png',
    color: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100',
    accent: 'text-orange-600',
    bullets: ['Logo & Brand Identity', 'Packaging Design', 'Product Graphics'],
  },
  {
    slug: 'website-technology',
    name: 'Website & Technology',
    icon: '/icons/Glossy 3D Web Development Monitor.png',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
    accent: 'text-blue-600',
    bullets: ['Website Development', 'E-commerce Store', 'Mobile App & Software'],
  },
  {
    slug: 'marketplace-selling',
    name: 'Marketplace Selling',
    icon: '/icons/Glossy 3D Shopping Cart Icon.png',
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100',
    accent: 'text-purple-600',
    bullets: ['Meesho, Amazon, Flipkart', 'Product Listing', 'Inventory & Order Support'],
  },
  {
    slug: 'marketing-growth',
    name: 'Marketing & Growth',
    icon: '/icons/Glossy Emerald Social Media Megaphone.png',
    color: 'bg-yellow-50 border-yellow-100',
    iconBg: 'bg-yellow-100',
    accent: 'text-yellow-600',
    bullets: ['Social Media Marketing', 'SEO & Content', 'Influencer Campaigns'],
  },
];

export function ServiceCategories() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">OUR SERVICES</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
              Everything You Need to Start &amp; Grow Your Business
            </h2>
            <p className="mt-2 text-[#4B5563] text-sm sm:text-base max-w-2xl">
              From planning to execution, we provide complete support for your business journey.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald hover:text-brand-deep whitespace-nowrap transition-colors shrink-0"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5-col card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {SERVICES_DATA.map((dept) => (
            <div
              key={dept.slug}
              className={`group relative flex flex-col rounded-2xl border p-5 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 ${dept.color}`}
            >
              {/* Icon */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${dept.iconBg} mb-4 shrink-0`}>
                <div className="relative h-8 w-8">
                  <Image src={dept.icon} alt={dept.name} fill className="object-contain" sizes="32px" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-brand-deep leading-snug mb-3 group-hover:text-brand-emerald transition-colors">
                {dept.name}
              </h3>

              {/* Bullet points */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {dept.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-1.5 text-xs text-[#4B5563]">
                    <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${dept.accent}`} />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={`/services?department=${dept.slug}`}
                className={`inline-flex items-center gap-1 text-xs font-bold mt-auto transition-all ${dept.accent} hover:gap-2`}
              >
                Learn More <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
