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
    circleBg: 'bg-white text-emerald-800 ring-4 ring-emerald-500/20 shadow-md',
    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 stroke-[2.2]" />,
  },
  {
    num: 2,
    title: '2. Get Your Roadmap',
    desc: 'We suggest the best plan and services for you.',
    circleBg: 'bg-[#FF6A14] text-white ring-4 ring-orange-500/25 shadow-md',
    icon: <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />,
  },
  {
    num: 3,
    title: '3. Choose Services',
    desc: 'Select the services you need.',
    circleBg: 'bg-[#1D63FF] text-white ring-4 ring-blue-500/25 shadow-md',
    icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />,
  },
  {
    num: 4,
    title: '4. Work With Our Team',
    desc: 'Our experts handle the work.',
    circleBg: 'bg-[#FBA705] text-white ring-4 ring-amber-500/25 shadow-md',
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />,
  },
  {
    num: 5,
    title: '5. Launch & Grow',
    desc: 'Start your business and get ongoing support.',
    circleBg: 'bg-[#05B272] text-white ring-4 ring-emerald-500/25 shadow-md',
    icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />,
  },
];

export function HowItWorksPreview() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <Container>
        {/* Main Card Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/40 text-white bg-gradient-to-r from-[#012217] via-[#022e20] to-[#011c13]">

          {/* Background subtle ambient glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout: Left Content (7-8 cols) + Right Staircase Scene (4-5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px] lg:min-h-[410px]">

            {/* ── LEFT COLUMN: Header + 5 Step Nodes ── */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10">

              {/* Top Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                <div>
                  {/* Two-tone Eyebrow */}
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest mb-1.5">
                    <span className="text-[#FBBF24]">SIMPLE</span>
                    <span className="text-[#10B981]">PROCESS</span>
                  </div>

                  {/* Main Title */}
                  <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-white tracking-tight leading-tight">
                    How It Works
                  </h2>

                  {/* Subtitle */}
                  <p className="mt-1.5 text-slate-300 text-xs sm:text-sm font-normal max-w-lg leading-relaxed">
                    Your business journey in 5 simple steps.
                  </p>
                </div>

                {/* Pill Button: Learn More -> */}
                <div className="shrink-0 self-start sm:self-auto">
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-5 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </Link>
                </div>
              </div>

              {/* Bottom: 5 Steps Horizontal Flow on Desktop */}
              <div className="mt-auto pt-2">
                {/* Desktop Flow (md and above) */}
                <div className="hidden md:flex items-start justify-between relative">
                  {PROCESS_STEPS.map((step, idx) => (
                    <React.Fragment key={step.num}>
                      {/* Step Node */}
                      <div className="flex flex-col items-center text-center flex-1 min-w-0 px-1 group">
                        {/* Circle Icon Badge */}
                        <div
                          className={`flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110 mb-2.5 shrink-0 ${step.circleBg}`}
                        >
                          {step.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xs sm:text-[13px] font-bold text-white leading-tight mb-1">
                          {step.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-[10.5px] sm:text-[11px] text-slate-300/85 leading-relaxed max-w-[120px]">
                          {step.desc}
                        </p>
                      </div>

                      {/* Dotted Arrow Connector between nodes */}
                      {idx < PROCESS_STEPS.length - 1 && (
                        <div className="flex items-center justify-center pt-4 px-0.5 shrink-0">
                          <div className="flex items-center text-emerald-400/75">
                            <span className="w-3 sm:w-4 lg:w-5 border-t-2 border-dotted border-emerald-400/60" />
                            <span className="text-emerald-400 text-[10px] -ml-0.5">▸</span>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Mobile Flow (below md) */}
                <div className="flex flex-col gap-3 md:hidden">
                  {PROCESS_STEPS.map((step) => (
                    <div
                      key={step.num}
                      className="flex items-start gap-3.5 rounded-2xl bg-white/5 border border-white/10 p-3.5 backdrop-blur-sm"
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full shrink-0 ${step.circleBg}`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">{step.title}</h3>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN: Staircase Climber Scene ── */}
            <div className="lg:col-span-4 relative hidden lg:block overflow-hidden rounded-r-3xl">
              {/* Staircase Background Scene */}
              <div className="absolute inset-0">
                <Image
                  src="/images/how-it-works-staircase.png"
                  alt="Growth Trajectory - Founder to CEO"
                  fill
                  priority
                  className="object-cover object-left-top"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              {/* Left Edge Gradient Blend: smooth transition into the card's dark green background */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#022e20] to-transparent pointer-events-none" />

              {/* Subtle top/bottom edge shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
