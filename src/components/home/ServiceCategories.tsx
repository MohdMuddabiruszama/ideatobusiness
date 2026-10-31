import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  Palette,
  Monitor,
  ShoppingCart,
  Megaphone,
} from 'lucide-react';

const SERVICES_CONFIG = [
  {
    slug: 'business-launch',
    name: 'Business Setup',
    appIcon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    appIconBg: 'bg-emerald-600',
    illustration: '/icons/Glossy 3D Business Chart Icon.png',
    bg: 'bg-[#E8F8F2]',
    border: 'border-[#CDEEDF]',
    accentText: 'text-emerald-700',
    arrowBtnBg: 'bg-emerald-200/70 text-emerald-800 hover:bg-emerald-300',
    checkColor: 'text-emerald-700',
    bullets: [
      'Business plan',
      'Registration (GST, Udyam)',
      'Licences & Compliance',
    ],
  },
  {
    slug: 'branding-design',
    name: 'Branding & Design',
    appIcon: <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    appIconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
    illustration: '/icons/Glossy Creative Design Toolkit.png',
    bg: 'bg-[#FFF5ED]',
    border: 'border-[#FEDCC7]',
    accentText: 'text-orange-700',
    arrowBtnBg: 'bg-orange-200/70 text-orange-800 hover:bg-orange-300',
    checkColor: 'text-orange-700',
    bullets: [
      'Logo & Brand Identity',
      'Packaging Design',
      'Product Graphics',
    ],
  },
  {
    slug: 'website-technology',
    name: 'Website & Technology',
    appIcon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    appIconBg: 'bg-blue-600',
    illustration: '/icons/Glossy 3D Web Development Monitor.png',
    bg: 'bg-[#EFF6FF]',
    border: 'border-[#D4E7FE]',
    accentText: 'text-blue-700',
    arrowBtnBg: 'bg-blue-200/70 text-blue-800 hover:bg-blue-300',
    checkColor: 'text-blue-700',
    bullets: [
      'Website Development',
      'E-commerce Store',
      'Mobile App & Software',
    ],
  },
  {
    slug: 'marketplace-selling',
    name: 'Marketplace Selling',
    appIcon: <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    appIconBg: 'bg-gradient-to-br from-amber-400 to-amber-500',
    illustration: '/icons/Glossy 3D Shopping Cart Icon.png',
    bg: 'bg-[#FFFBEB]',
    border: 'border-[#FDE8BE]',
    accentText: 'text-amber-700',
    arrowBtnBg: 'bg-amber-200/70 text-amber-800 hover:bg-amber-300',
    checkColor: 'text-amber-700',
    bullets: [
      'Meesho, Amazon, Flipkart',
      'Product Listing',
      'Inventory & Order Support',
    ],
  },
  {
    slug: 'marketing-growth',
    name: 'Marketing & Growth',
    appIcon: <Megaphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
    appIconBg: 'bg-purple-600',
    illustration: '/icons/Glossy Emerald Social Media Megaphone.png',
    bg: 'bg-[#F6F3FF]',
    border: 'border-[#E5DEFE]',
    accentText: 'text-purple-700',
    arrowBtnBg: 'bg-purple-200/70 text-purple-800 hover:bg-purple-300',
    checkColor: 'text-purple-700',
    bullets: [
      'Social Media Marketing',
      'SEO & Ads',
      'Influencer Campaigns',
    ],
  },
];

export function ServiceCategories() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-emerald mb-2">
              OUR SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-brand-deep leading-tight">
              Everything You Need to Start &amp; Grow Your Business
            </h2>
            <p className="mt-2 text-[#4B5563] text-sm sm:text-base max-w-2xl leading-relaxed">
              From planning to execution, we provide complete support for your business journey.
            </p>
          </div>

          {/* Pill Button: View All Services -> */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/70 bg-white hover:bg-emerald-50 px-5 py-2 text-xs sm:text-sm font-semibold text-emerald-800 shadow-sm transition-all whitespace-nowrap shrink-0 self-start sm:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
          </Link>
        </div>

        {/* 5-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-4.5 xl:gap-5">
          {SERVICES_CONFIG.map((dept) => (
            <div
              key={dept.slug}
              className={`group flex flex-col justify-between rounded-3xl border p-5 sm:p-5.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${dept.bg} ${dept.border}`}
            >
              <div>
                {/* Dual Visual Header: App Icon Square on Left + 3D Illustration on Right */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Square App Icon Badge */}
                  <div
                    className={`flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-2xl shadow-xs shrink-0 ${dept.appIconBg}`}
                  >
                    {dept.appIcon}
                  </div>

                  {/* 3D Illustration Graphic */}
                  <div className="relative h-14 w-18 sm:h-16 sm:w-20 shrink-0 transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src={dept.illustration}
                      alt={dept.name}
                      fill
                      className="object-contain object-right"
                      sizes="80px"
                    />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-[17px] font-bold text-brand-deep leading-snug mb-3">
                  {dept.name}
                </h3>

                {/* 3 Checkmark Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {dept.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 font-medium leading-snug"
                    >
                      <Check
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 stroke-[2.5] ${dept.checkColor}`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Learn More Link + Circular ↗ Button */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-900/5 mt-auto">
                <Link
                  href={`/services?department=${dept.slug}`}
                  className={`inline-flex items-center gap-1 text-xs font-bold transition-all hover:gap-1.5 ${dept.accentText}`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/services?department=${dept.slug}`}
                  aria-label={`Learn more about ${dept.name}`}
                  className={`flex h-8 w-8 items-center justify-center rounded-full shadow-xs transition-transform duration-200 group-hover:rotate-45 ${dept.arrowBtnBg}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
