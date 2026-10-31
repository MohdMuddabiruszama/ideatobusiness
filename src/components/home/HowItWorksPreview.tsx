'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  ArrowRight,
  Lightbulb,
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
    circleBg: 'bg-white text-emerald-800 ring-4 ring-white/20',
    icon: <Lightbulb className="w-6 h-6 text-emerald-700" />,
  },
  {
    num: 2,
    title: '2. Get Your Roadmap',
    desc: 'We suggest the best plan and services for you.',
    circleBg: 'bg-[#FF6A14] text-white ring-4 ring-orange-500/25',
    icon: <FileSpreadsheet className="w-6 h-6 text-white" />,
  },
  {
    num: 3,
    title: '3. Choose Services',
    desc: 'Select the services you need.',
    circleBg: 'bg-[#1D63FF] text-white ring-4 ring-blue-500/25',
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
  },
  {
    num: 4,
    title: '4. Work With Our Team',
    desc: 'Our experts handle the work.',
    circleBg: 'bg-[#FBA705] text-white ring-4 ring-amber-500/25',
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    num: 5,
    title: '5. Launch & Grow',
    desc: 'Start your business and get ongoing support.',
    circleBg: 'bg-[#05B272] text-white ring-4 ring-emerald-500/25',
    icon: <TrendingUp className="w-6 h-6 text-white" />,
  },
];

export function HowItWorksPreview() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        {/* Dark Emerald Container Card as in Img 2 */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#031d12] via-[#083321] to-[#041a10] border border-emerald-900/40 text-white overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12">

          {/* Background glowing gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.18)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          {/* Top Section Header inside Card */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12">
            <div>
              {/* Eyebrow: SIMPLE (Orange) PROCESS (Green) */}
              <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest mb-1.5">
                <span className="text-amber-400">SIMPLE</span>
                <span className="text-brand-emerald">PROCESS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                How It Works
              </h2>
              <p className="mt-1 text-slate-300 text-xs sm:text-sm max-w-xl">
                Your business journey in 5 simple steps.
              </p>
            </div>

            {/* Pill Button: Learn More -> */}
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 px-5 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur transition-all shadow-xs self-start sm:self-auto shrink-0"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-emerald" />
            </Link>
          </div>

          {/* Main Grid: Steps on Left + Staircase Climber Visual on Right */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left 5-Steps Flow (8 cols) */}
            <div className="lg:col-span-8">
              {/* Desktop Horizontal Step Flow */}
              <div className="hidden md:flex items-start justify-between relative">
                {PROCESS_STEPS.map((step, idx) => (
                  <React.Fragment key={step.num}>
                    {/* Single Step Node */}
                    <div className="flex flex-col items-center text-center flex-1 min-w-0 px-1 group">
                      {/* Icon Circle */}
                      <div
                        className={`flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full shadow-lg transition-transform duration-200 group-hover:scale-110 mb-3.5 shrink-0 ${step.circleBg}`}
                      >
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-snug mb-1">
                        {step.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed max-w-[130px]">
                        {step.desc}
                      </p>
                    </div>

                    {/* Dotted Green Arrow Connector between nodes */}
                    {idx < PROCESS_STEPS.length - 1 && (
                      <div className="flex items-center justify-center pt-5 px-1 shrink-0">
                        <div className="flex items-center text-emerald-400/80">
                          <span className="w-4 lg:w-6 border-t-2 border-dotted border-emerald-400/70" />
                          <span className="text-emerald-400 text-xs -ml-1">▸</span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile / Tablet Vertical Steps */}
              <div className="flex flex-col gap-3.5 md:hidden">
                {PROCESS_STEPS.map((step, idx) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-3.5 rounded-2xl bg-white/5 border border-white/10 p-3.5 backdrop-blur-sm"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full shrink-0 shadow-md ${step.circleBg}`}
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

            {/* Right Staircase Climber Illustration (4 cols) */}
            <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-emerald-500/30 bg-gradient-to-b from-[#0e3b28] via-[#08281b] to-[#04150e] p-6 shadow-xl min-h-[260px] flex flex-col justify-between">

                {/* Decorative architectural background lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(to_right,rgba(16,185,129,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

                {/* Top header badge */}
                <div className="relative z-10 flex items-center justify-between text-xs text-emerald-300 font-bold">
                  <span>Growth Trajectory</span>
                  <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-400/30">
                    Live Scaling
                  </span>
                </div>

                {/* Stepped Glassmorphism Growth Badges (Ascending staircase effect) */}
                <div className="relative z-10 my-4 space-y-2.5 pl-4">
                  {/* Step 1: BUILD */}
                  <div className="w-3/5 ml-auto flex items-center justify-between rounded-xl bg-emerald-950/70 border border-emerald-500/30 px-3.5 py-2 text-xs font-bold text-white shadow-md backdrop-blur transition-transform hover:translate-x-1">
                    <span>BUILD</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </div>

                  {/* Step 2: LAUNCH */}
                  <div className="w-4/5 ml-auto flex items-center justify-between rounded-xl bg-emerald-900/80 border border-emerald-400/50 px-3.5 py-2.5 text-xs font-extrabold text-white shadow-lg backdrop-blur transition-transform hover:translate-x-1">
                    <span>LAUNCH</span>
                    <ArrowRight className="w-4 h-4 text-emerald-300" />
                  </div>

                  {/* Step 3: GROW (Top of staircase) */}
                  <div className="w-full ml-auto flex items-center justify-between rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 border border-emerald-300/80 px-4 py-3 text-xs sm:text-sm font-black text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] backdrop-blur transition-transform hover:translate-x-1">
                    <span className="tracking-wide">GROW</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Bottom Climber Avatar & Caption */}
                <div className="relative z-10 pt-2 border-t border-emerald-500/20 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs">
                      💼
                    </span>
                    <span className="font-semibold text-white">Founder to CEO</span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% Support</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
