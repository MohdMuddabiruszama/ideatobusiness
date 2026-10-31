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
    cardBg: 'bg-emerald-50/50 hover:bg-emerald-50/80',
    border: 'border-emerald-100/90',
    iconBg: 'bg-emerald-100/80',
    accentText: 'text-emerald-800',
    checkColor: 'text-emerald-600',
    bullets: ['Business plan', 'Registration (GST, Udyam)', 'Licences & Compliance'],
  },
  {
    slug: 'branding-design',
    name: 'Branding & Design',
    icon: '/icons/Glossy Creative Design Toolkit.png',
    cardBg: 'bg-orange-50/50 hover:bg-orange-50/80',
    border: 'border-orange-100/90',
    iconBg: 'bg-orange-100/80',
    accentText: 'text-orange-800',
    checkColor: 'text-orange-600',
    bullets: ['Logo & Brand Identity', 'Packaging Design', 'Product Graphics'],
  },
  {
    slug: 'website-technology',
    name: 'Website & Technology',
    icon: '/icons/Glossy 3D Web Development Monitor.png',
    cardBg: 'bg-blue-50/50 hover:bg-blue-50/80',
    border: 'border-blue-100/90',
    iconBg: 'bg-blue-100/80',
    accentText: 'text-blue-800',
    checkColor: 'text-blue-600',
    bullets: ['Website Development', 'E-commerce Store', 'Mobile App & Software'],
  },
  {
    slug: 'marketplace-selling',
    name: 'Marketplace Selling',
    icon: '/icons/Glossy 3D Shopping Cart Icon.png',
    cardBg: 'bg-amber-50/50 hover:bg-amber-50/80',
    border: 'border-amber-100/90',
    iconBg: 'bg-amber-100/80',
    accentText: 'text-amber-800',
    checkColor: 'text-amber-600',
    bullets: ['Meesho, Amazon, Flipkart', 'Product Listing', 'Inventory & Order Support'],
  },
  {
    slug: 'marketing-growth',
    name: 'Marketing & Growth',
    icon: '/icons/Glossy Emerald Social Media Megaphone.png',
    cardBg: 'bg-purple-50/50 hover:bg-purple-50/80',
    border: 'border-purple-100/90',
    iconBg: 'bg-purple-100/80',
    accentText: 'text-purple-800',
    checkColor: 'text-purple-600',
    bullets: ['Social Media Marketing', 'SEO & Ads', 'Influencer Campaigns'],
  },
];

export function ServiceCategories() {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
      <Container>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">OUR SERVICES</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
              Everything You Need to Start &amp; Grow Your Business
            </h2>
            <p className="mt-1.5 text-[#4B5563] text-sm sm:text-base max-w-2xl">
              From planning to execution, we provide complete support for your business journey.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-brand-emerald hover:border-brand-emerald whitespace-nowrap transition-colors shrink-0"
          >
            View All Services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5-col card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES_DATA.map((dept) => (
            <div
              key={dept.slug}
              className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${dept.cardBg} ${dept.border}`}
            >
              <div>
                {/* 3D Icon */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${dept.iconBg} mb-4 shrink-0 shadow-sm`}>
                  <div className="relative h-8 w-8">
                    <Image src={dept.icon} alt={dept.name} fill className="object-contain" sizes="32px" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-brand-deep leading-snug mb-3 group-hover:text-brand-emerald transition-colors">
                  {dept.name}
                </h3>

                {/* Bullet points */}
                <ul className="space-y-1.5 mb-5">
                  {dept.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-1.5 text-xs text-[#4B5563]">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${dept.checkColor}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More link with rounded arrow */}
              <div className="pt-2 border-t border-black/5 flex items-center justify-between">
                <Link
                  href={`/services?department=${dept.slug}`}
                  className="text-xs font-bold text-slate-700 hover:text-brand-emerald transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href={`/services?department=${dept.slug}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm group-hover:bg-brand-emerald group-hover:text-white transition-colors"
                  aria-label={`Learn more about ${dept.name}`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
