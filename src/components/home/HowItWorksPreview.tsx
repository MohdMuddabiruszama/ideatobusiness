'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import {
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  CheckCircle2,
  Users,
  TrendingUp,
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    num: 1,
    title: '1. Tell Us Your Idea',
    desc: 'Share your business goal and requirements.',
    circleBg: 'bg-white text-emerald-800 ring-4 ring-emerald-500/20 shadow-lg',
    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 stroke-[2.2]" />,
  },
  {
    num: 2,
    title: '2. Get Your Roadmap',
    desc: 'We suggest the best plan and services for you.',
    circleBg: 'bg-[#FF6A14] text-white ring-4 ring-orange-500/25 shadow-lg',
    icon: <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />,
  },
  {
    num: 3,
    title: '3. Choose Services',
    desc: 'Select the services you need.',
    circleBg: 'bg-[#1D63FF] text-white ring-4 ring-blue-500/25 shadow-lg',
    icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />,
  },
  {
    num: 4,
    title: '4. Work With Our Team',
    desc: 'Our experts handle the work.',
    circleBg: 'bg-[#FBA705] text-white ring-4 ring-amber-500/25 shadow-lg',
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />,
  },
  {
    num: 5,
    title: '5. Launch & Grow',
    desc: 'Start your business and get ongoing support.',
    circleBg: 'bg-[#05B272] text-white ring-4 ring-emerald-500/25 shadow-lg',
    icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />,
  },
];

const STAIRCASE_BADGES = [
  { label: 'BUILD', offset: 'right-16 lg:right-24 bottom-32 sm:bottom-36' },
  { label: 'LAUNCH', offset: 'right-12 lg:right-16 bottom-20 sm:bottom-24' },
  { label: 'GROW', offset: 'right-6 lg:right-8 bottom-8 sm:bottom-10' },
];

export function HowItWorksPreview() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <Container>
        {/* Main Banner Card using the user's master image as background */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/40 text-white min-h-[400px] lg:min-h-[440px] flex flex-col justify-between p-6 sm:p-9 lg:p-11 bg-[#022A1E]">

          {/* Full-bleed Background Image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/how-it-works-bg.jpg"
              alt="How It Works Background Scene"
              fill
              priority
              className="object-cover object-right lg:object-center"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>

          {/* Left-to-right gradient overlay to ensure text and steps pop crisp and clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#012217]/95 via-[#012217]/80 to-transparent lg:via-[#012217]/50 pointer-events-none" />

          {/* Glowing badges superimposed on the right staircase */}
          <div className="hidden sm:block pointer-events-none">
            {STAIRCASE_BADGES.map((badge) => (
              <div
                key={badge.label}
                className={`absolute z-10 ${badge.offset} flex items-center gap-1.5 rounded-lg border border-emerald-400/50 bg-[#032014]/75 px-3.5 py-1.5 text-xs font-black text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.35)] backdrop-blur-md transition-transform hover:scale-105`}
              >
                <span>{badge.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            ))}
          </div>

          {/* Top Row: Eyebrow + Title + Learn More Pill */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              {/* Eyebrow: SIMPLE (Amber) PROCESS (Emerald) */}
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest mb-1.5">
                <span className="text-[#FBBF24]">SIMPLE</span>
                <span className="text-[#10B981]">PROCESS</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm">
                How It Works
              </h2>

              {/* Subtitle */}
              <p className="mt-1 text-slate-200 text-xs sm:text-sm font-normal max-w-lg leading-relaxed drop-shadow-xs">
                Your business journey in 5 simple steps.
              </p>
            </div>

            {/* Pill Button: Learn More -> */}
            <div className="lg:mr-72 xl:mr-96 shrink-0 self-start sm:self-auto">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-5 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </Link>
            </div>
          </div>

          {/* Bottom Area: 5 Step Nodes (Positioned over the left/middle area) */}
          <div className="relative z-10 mt-auto pt-4 lg:max-w-[62%] xl:max-w-[65%]">
            {/* Desktop Horizontal Step Flow */}
            <div className="hidden md:flex items-start justify-between relative">
              {PROCESS_STEPS.map((step, idx) => (
                <React.Fragment key={step.num}>
                  {/* Single Step Node */}
                  <div className="flex flex-col items-center text-center flex-1 min-w-0 px-1 group">
                    {/* Glowing Circular Icon Badge */}
                    <div
                      className={`flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110 mb-2.5 shrink-0 ${step.circleBg}`}
                    >
                      {step.icon}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xs sm:text-[13px] font-bold text-white leading-snug mb-1 drop-shadow-xs">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[10.5px] sm:text-[11px] text-slate-200/90 leading-relaxed max-w-[115px]">
                      {step.desc}
                    </p>
                  </div>

                  {/* Dotted Arrow Connector between nodes */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="flex items-center justify-center pt-4 px-0.5 shrink-0">
                      <div className="flex items-center text-emerald-400/80">
                        <span className="w-3 sm:w-4 lg:w-5 border-t-2 border-dotted border-emerald-400/60" />
                        <span className="text-emerald-400 text-[10px] -ml-0.5">▸</span>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile / Tablet Vertical Steps */}
            <div className="flex flex-col gap-3 md:hidden">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-3.5 rounded-2xl bg-black/30 border border-white/15 p-3.5 backdrop-blur-md shadow-sm"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full shrink-0 ${step.circleBg}`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{step.title}</h3>
                    <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
