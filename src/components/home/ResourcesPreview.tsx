import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight, BookOpen, ShoppingBag, Megaphone } from 'lucide-react';

const GUIDES = [
  {
    title: 'Business Plan Guide',
    desc: 'A complete step-by-step guide to start your business.',
    tag: 'Planning',
    icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
    image: '/icons/Glossy Emerald Document Icon.png',
    bg: 'bg-emerald-500/10',
    link: '/resources#business-plan',
  },
  {
    title: 'E-commerce Selling Guide',
    desc: 'How to sell on Meesho, Amazon and Flipkart.',
    tag: 'E-Commerce',
    icon: <ShoppingBag className="w-5 h-5 text-amber-600" />,
    image: '/icons/Glossy 3D Shopping Cart Icon.png',
    bg: 'bg-amber-500/10',
    link: '/resources#ecommerce-guide',
  },
  {
    title: 'Marketing Guide',
    desc: 'Social media, SEO and ads for business growth.',
    tag: 'Growth',
    icon: <Megaphone className="w-5 h-5 text-purple-600" />,
    image: '/icons/Glossy Emerald Social Media Megaphone.png',
    bg: 'bg-purple-500/10',
    link: '/resources#marketing-guide',
  },
];

export function ResourcesPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">
              RESOURCES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
              Learn, Plan and Grow
            </h2>
            <p className="mt-2 text-[#4B5563] text-sm sm:text-base max-w-2xl">
              Explore our guides, tutorials and business tools.
            </p>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald hover:text-brand-deep whitespace-nowrap transition-colors shrink-0"
          >
            View All Resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDES.map((g) => (
            <Link
              key={g.title}
              href={g.link}
              className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className={`relative h-44 w-full flex items-center justify-center ${g.bg} p-6 border-b border-slate-100`}>
                <div className="relative h-24 w-24 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={g.image}
                    alt={g.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-deep shadow-sm">
                  {g.icon}
                  {g.tag}
                </span>
              </div>

              {/* Text content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-brand-deep group-hover:text-brand-emerald transition-colors leading-snug">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {g.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-brand-emerald">
                  Read Full Guide <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

