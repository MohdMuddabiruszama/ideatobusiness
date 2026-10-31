'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  ArrowRight,
  Sparkles,
  Building2,
  Palette,
  Globe,
  ShoppingCart,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

const FLOATING_SERVICES = [
  {
    icon: <Building2 className="w-4 h-4 text-emerald-600" />,
    label: 'Business Setup',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-100',
  },
  {
    icon: <Palette className="w-4 h-4 text-orange-600" />,
    label: 'Branding & Design',
    badgeBg: 'bg-orange-50 text-orange-800 border-orange-100',
  },
  {
    icon: <Globe className="w-4 h-4 text-blue-600" />,
    label: 'Website & App',
    badgeBg: 'bg-blue-50 text-blue-800 border-blue-100',
  },
  {
    icon: <ShoppingCart className="w-4 h-4 text-amber-600" />,
    label: 'Marketplace Selling',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-100',
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-purple-600" />,
    label: 'Marketing & Growth',
    badgeBg: 'bg-purple-50 text-purple-800 border-purple-100',
  },
];

const MINI_STATS = [
  { value: '30+', label: 'Business Services' },
  { value: 'All in One', label: 'Platform' },
  { value: 'Expert Team', label: 'Support' },
  { value: 'From Idea', label: 'to Revenue' },
];

const PLATFORMS = [
  { name: 'meesho', color: '#9b2c8d', style: 'font-extrabold tracking-tight' },
  { name: 'amazon', color: '#ff9900', style: 'font-black tracking-tighter' },
  { name: 'Flipkart', color: '#2874f0', style: 'font-extrabold italic' },
  { name: '🛒 Shopify', color: '#5e8e3e', style: 'font-bold' },
  { name: 'Google', color: '#4285f4', style: 'font-black' },
  { name: 'Meta', color: '#0668E1', style: 'font-extrabold' },
];

export function HeroSection() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#ECFDF5]/80 via-white to-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-100">
        {/* Soft background glows */}
        <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-emerald/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 -z-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (Content) */}
            <div className="lg:col-span-7">
              {/* Badge: From Idea to Business */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 border border-emerald-200/80 px-4 py-1.5 text-xs font-bold text-emerald-900 mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
                <span>From Idea to Business</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-brand-deep leading-[1.12] tracking-tight">
                Turn Your Idea <br />
                Into a <span className="text-brand-emerald">Real Business</span>
              </h1>

              {/* Subheading */}
              <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                We help you plan, build, launch and grow your business with strategy, design, technology and ongoing support &mdash; all in one place.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-bold text-[15px] px-8 py-4 shadow-lg shadow-emerald-900/15 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 hover:border-brand-deep bg-white hover:bg-slate-50 text-brand-deep font-bold text-[15px] px-8 py-4 transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>

              {/* Micro Stats Row */}
              <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {MINI_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-extrabold text-brand-deep">{stat.value}</p>
                    <p className="text-xs text-[#6B7280] font-medium mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Hero Illustration / Partner Graphic) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">

                {/* Glowing lightbulb card with upward growth trajectory */}
                <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-50/50 border border-emerald-100/80 p-7 shadow-xl">
                  {/* Handwritten-style process note */}
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-4 px-2">
                    <span className="text-emerald-700">Idea</span>
                    <span className="text-slate-300">&rarr;</span>
                    <span className="text-amber-700">Strategy</span>
                    <span className="text-slate-300">&rarr;</span>
                    <span className="text-blue-700">Execution</span>
                    <span className="text-slate-300">&rarr;</span>
                    <span className="text-brand-emerald">Growth</span>
                  </div>

                  {/* Central Graphic Container */}
                  <div className="relative h-60 rounded-2xl bg-gradient-to-br from-[#0B2D1F] via-[#103D2A] to-[#0B2D1F] flex flex-col items-center justify-center text-center p-6 text-white overflow-hidden shadow-inner">
                    {/* Glowing golden bulb */}
                    <div className="relative mb-3">
                      <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-60 animate-pulse" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-brand-deep shadow-lg">
                        <Lightbulb className="w-10 h-10 fill-amber-300 stroke-brand-deep stroke-[1.5]" />
                      </div>
                    </div>

                    <p className="text-lg font-bold text-white tracking-wide">
                      Start Your Journey
                    </p>
                    <p className="text-xs text-emerald-200/90 mt-1">
                      Guided by business strategy specialists
                    </p>

                    {/* Green growth arrow illustration badge */}
                    <div className="absolute top-3 right-3 text-emerald-400 text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" /> Scale Up
                    </div>
                  </div>

                  {/* Floating Service Badges Column */}
                  <div className="mt-5 space-y-2">
                    {FLOATING_SERVICES.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2 text-xs font-bold shadow-sm transition-transform hover:translate-x-1 ${item.badgeBg}`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom "Your Business Partner" Ribbon */}
                  <div className="mt-5 text-center">
                    <span className="inline-block bg-accent-orange text-brand-deep text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                      Your Business Partner
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── PLATFORM LOGOS BAR ── */}
      <section className="bg-white border-b border-slate-100 py-6">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] shrink-0">
              Launch &amp; Sell on Leading Platforms
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {PLATFORMS.map((p) => (
                <span
                  key={p.name}
                  className={`text-base sm:text-lg transition-opacity hover:opacity-80 ${p.style}`}
                  style={{ color: p.color }}
                >
                  {p.name}
                </span>
              ))}
              <span className="text-xs text-[#9CA3AF] font-semibold">
                and more...
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
