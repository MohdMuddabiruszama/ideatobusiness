import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowUpRight } from 'lucide-react';

const PERSONAS = [
  {
    title: 'Aspiring Entrepreneurs',
    desc: 'Turn your idea into a real business.',
    avatar: '/icons/Glossy Emerald Business Avatar.png',
    bg: 'bg-emerald-50/50 hover:bg-emerald-50/80',
    border: 'border-emerald-100',
    link: '/get-started?segment=entrepreneurs',
  },
  {
    title: 'Small & Medium Businesses',
    desc: 'Get digital and market your business.',
    avatar: '/icons/Glossy Emerald Team Icon.png',
    bg: 'bg-amber-50/50 hover:bg-amber-50/80',
    border: 'border-amber-100',
    link: '/get-started?segment=smb',
  },
  {
    title: 'Creators & Influencers',
    desc: 'Launch your own brand and products.',
    avatar: '/icons/Glossy Creative Design Toolkit.png',
    bg: 'bg-blue-50/50 hover:bg-blue-50/80',
    border: 'border-blue-100',
    link: '/get-started?segment=creators',
  },
  {
    title: 'Established Brands',
    desc: 'Scale with technology and marketing.',
    avatar: '/icons/Glossy 3D Growth Chart Icon.png',
    bg: 'bg-purple-50/50 hover:bg-purple-50/80',
    border: 'border-purple-100',
    link: '/get-started?segment=brands',
  },
];

export function WhoWeHelp() {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
      <Container>
        {/* Header */}
        <div className="mb-9">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">
            WHO WE HELP
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
            Business Ideas for Every Dream
          </h2>
          <p className="mt-1.5 text-[#4B5563] text-sm sm:text-base max-w-2xl">
            We work with individuals, startups, small businesses and established brands.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERSONAS.map((p) => (
            <Link
              key={p.title}
              href={p.link}
              className={`group flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${p.bg} ${p.border}`}
            >
              <div>
                <div className="relative h-12 w-12 mb-3.5 rounded-xl bg-white p-2 shadow-sm border border-slate-100">
                  <Image
                    src={p.avatar}
                    alt={p.title}
                    fill
                    className="object-contain p-0.5"
                    sizes="48px"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-brand-deep leading-snug group-hover:text-brand-emerald transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#4B5563] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 flex items-center justify-end border-t border-black/5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm group-hover:bg-brand-emerald group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
