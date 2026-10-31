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
    bg: 'bg-emerald-50/60 hover:bg-emerald-50',
    border: 'border-emerald-100',
    link: '/get-started?segment=entrepreneurs',
  },
  {
    title: 'Small & Medium Businesses',
    desc: 'Get digital and market your business.',
    avatar: '/icons/Glossy Emerald Team Icon.png',
    bg: 'bg-amber-50/60 hover:bg-amber-50',
    border: 'border-amber-100',
    link: '/get-started?segment=smb',
  },
  {
    title: 'Creators & Influencers',
    desc: 'Launch your own brand and products.',
    avatar: '/icons/Glossy Creative Design Toolkit.png',
    bg: 'bg-blue-50/60 hover:bg-blue-50',
    border: 'border-blue-100',
    link: '/get-started?segment=creators',
  },
  {
    title: 'Established Brands',
    desc: 'Scale with technology and marketing.',
    avatar: '/icons/Glossy 3D Growth Chart Icon.png',
    bg: 'bg-purple-50/60 hover:bg-purple-50',
    border: 'border-purple-100',
    link: '/get-started?segment=brands',
  },
];

export function WhoWeHelp() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">
            WHO WE HELP
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
            Business Ideas for Every Dream
          </h2>
          <p className="mt-2 text-[#4B5563] text-sm sm:text-base max-w-2xl">
            We work with individuals, startups, small businesses and established brands.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PERSONAS.map((p) => (
            <Link
              key={p.title}
              href={p.link}
              className={`group flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${p.bg} ${p.border}`}
            >
              <div>
                <div className="relative h-14 w-14 mb-4 rounded-xl bg-white p-2.5 shadow-sm border border-slate-100/80">
                  <Image
                    src={p.avatar}
                    alt={p.title}
                    fill
                    className="object-contain p-1"
                    sizes="56px"
                  />
                </div>
                <h3 className="text-base font-bold text-brand-deep leading-snug group-hover:text-brand-emerald transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-end">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-deep shadow-sm group-hover:bg-brand-emerald group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
