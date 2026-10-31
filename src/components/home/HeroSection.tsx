'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import {
  ArrowRight,
  Sparkles,
  FileText,
  Layers,
  Users,
  TrendingUp,
  Building2,
  Palette,
  Globe,
  ShoppingCart,
  Megaphone,
} from 'lucide-react';

const FLOATING_SERVICES = [
  {
    icon: <Building2 className="w-3.5 h-3.5 text-orange-600" />,
    label: 'Business Setup',
    iconBg: 'bg-orange-100',
  },
  {
    icon: <Palette className="w-3.5 h-3.5 text-amber-600" />,
    label: 'Branding & Design',
    iconBg: 'bg-amber-100',
  },
  {
    icon: <Globe className="w-3.5 h-3.5 text-blue-600" />,
    label: 'Website & App',
    iconBg: 'bg-blue-100',
  },
  {
    icon: <ShoppingCart className="w-3.5 h-3.5 text-yellow-600" />,
    label: 'Marketplace Selling',
    iconBg: 'bg-yellow-100',
  },
  {
    icon: <Megaphone className="w-3.5 h-3.5 text-purple-600" />,
    label: 'Marketing & Growth',
    iconBg: 'bg-purple-100',
  },
];

const MINI_STATS = [
  {
    icon: <FileText className="w-4 h-4 text-slate-500" />,
    value: '30+',
    label: 'Business Services',
  },
  {
    icon: <Layers className="w-4 h-4 text-slate-500" />,
    value: 'All in One',
    label: 'Platform',
  },
  {
    icon: <Users className="w-4 h-4 text-slate-500" />,
    value: 'Expert Team',
    label: 'Support',
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-slate-500" />,
    value: 'From Idea',
    label: 'to Revenue',
  },
];

const PLATFORMS = [
  { name: 'meesho', color: '#9b2c8d', style: 'font-extrabold tracking-tight' },
  { name: 'amazon', color: '#ff9900', style: 'font-black tracking-tighter' },
  { name: 'Flipkart', color: '#2874f0', style: 'font-extrabold italic' },
  { name: 'Shopify', color: '#5e8e3e', style: 'font-bold' },
  { name: 'Google', color: '#4285f4', style: 'font-black' },
  { name: 'Meta', color: '#0668E1', style: 'font-extrabold' },
];

export function HeroSection() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white pt-10 pb-14 lg:pt-16 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

            {/* Left Column (Content) */}
            <div className="lg:col-span-7 pr-0 lg:pr-4">
              {/* Badge: From Idea to Business */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0B2D1F] px-3.5 py-1 text-xs font-semibold text-white mb-5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
                <span>From Idea to Business</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#111827] leading-[1.12] tracking-tight">
                Turn Your Idea <br />
                Into a <span className="text-brand-emerald">Real Business</span>
              </h1>

              {/* Subheading */}
              <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                We help you plan, build, launch and grow your business with strategy, design, technology and ongoing support &mdash; all in one place.
              </p>

              {/* CTA Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 shadow-sm transition-all duration-150 hover:scale-[1.01] active:scale-[0.98]"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-6 py-3 transition-all duration-150"
                >
                  Explore Services
                </Link>
              </div>

              {/* Micro Stats Row (Immediately under buttons) */}
              <div className="mt-9 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {MINI_STATS.map((stat) => (
                  <div key={stat.label} className="flex items-start gap-2.5">
                    <span className="p-1 rounded bg-slate-50 mt-0.5 shrink-0">
                      {stat.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#111827] leading-tight">{stat.value}</p>
                      <p className="text-[11px] text-[#6B7280] leading-tight mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Hero Visual matching reference) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white group">
                <div className="relative w-full h-[260px] sm:h-[320px]">
                  <Image
                    src="/images/hero-visual.jpg"
                    alt="Turn Your Idea Into a Real Business - Founder & Growth Strategy"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── PLATFORM LOGOS BAR ── */}
      <section className="bg-slate-50/70 border-y border-slate-100 py-4">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Launch &amp; Sell on Leading Platforms
            </span>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-sm sm:text-base">
              {PLATFORMS.map((p) => (
                <span
                  key={p.name}
                  className={`transition-opacity hover:opacity-80 ${p.style}`}
                  style={{ color: p.color }}
                >
                  {p.name}
                </span>
              ))}
              <span className="text-xs text-slate-400 font-medium">
                and more...
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
