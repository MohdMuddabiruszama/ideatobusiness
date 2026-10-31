'use client';

import React from 'react';
import Link from 'next/link';
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
    circleBg: 'bg-white text-emerald-800 ring-4 ring-emerald-500/20',
    icon: <ShieldCheck className="w-6 h-6 text-emerald-700 stroke-[2]" />,
  },
  {
    num: 2,
    title: '2. Get Your Roadmap',
    desc: 'We suggest the best plan and services for you.',
    circleBg: 'bg-[#FF6A14] text-white ring-4 ring-orange-500/25',
    icon: <FileSpreadsheet className="w-6 h-6 text-white stroke-[2]" />,
  },
  {
    num: 3,
    title: '3. Choose Services',
    desc: 'Select the services you need.',
    circleBg: 'bg-[#1D63FF] text-white ring-4 ring-blue-500/25',
    icon: <CheckCircle2 className="w-6 h-6 text-white stroke-[2]" />,
  },
  {
    num: 4,
    title: '4. Work With Our Team',
    desc: 'Our experts handle the work.',
    circleBg: 'bg-[#FBA705] text-white ring-4 ring-amber-500/25',
    icon: <Users className="w-6 h-6 text-white stroke-[2]" />,
  },
  {
    num: 5,
    title: '5. Launch & Grow',
    desc: 'Start your business and get ongoing support.',
    circleBg: 'bg-[#05B272] text-white ring-4 ring-emerald-500/25',
    icon: <TrendingUp className="w-6 h-6 text-white stroke-[2]" />,
  },
];

export function HowItWorksPreview() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        {/* Main Banner Card using the uploaded background image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/30 text-white min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex flex-col justify-between p-6 sm:p-9 lg:p-11 bg-[#062418]">

          {/* Background image: dark green on left, entrepreneur on stairs on right */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center lg:bg-right pointer-events-none"
            style={{
              backgroundImage: "url('/images/how-it-works-bg.jpg')",
            }}
          />

          {/* Dark gradient overlay for mobile/tablet text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#052216]/95 via-[#052216]/85 to-transparent lg:via-[#052216]/60 pointer-events-none" />

          {/* Top Row: Eyebrow + Title + Learn More Pill */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 sm:mb-8">
            <div>
              {/* Eyebrow: SIMPLE (Amber) PROCESS (Emerald) */}
              <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest mb-1.5">
                <span className="text-amber-400">SIMPLE</span>
                <span className="text-emerald-400">PROCESS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                How It Works
              </h2>
              <p className="mt-1 text-slate-300 text-xs sm:text-sm max-w-xl">
                Your business journey in 5 simple steps.
              </p>
            </div>

            {/* Pill Button: Learn More -> */}
            <div className="lg:mr-64 xl:mr-80 shrink-0 self-start sm:self-auto">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-5 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all shadow-sm hover:scale-[1.02]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </Link>
            </div>
          </div>

          {/* Bottom Area: 5 Step Nodes (Aligned over the left/middle area, leaving the right staircase clear) */}
          <div className="relative z-10 mt-auto pt-6 lg:max-w-[65%] xl:max-w-[68%]">
            {/* Desktop Horizontal Step Flow */}
            <div className="hidden md:flex items-start justify-between relative">
              {PROCESS_STEPS.map((step, idx) => (
                <React.Fragment key={step.num}>
                  {/* Single Step Node */}
                  <div className="flex flex-col items-center text-center flex-1 min-w-0 px-1 group">
                    {/* Glowing Circular Icon */}
                    <div
                      className={`flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 group-hover:scale-110 mb-3 shrink-0 ${step.circleBg}`}
                    >
                      {step.icon}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xs sm:text-[13px] font-bold text-white leading-snug mb-1">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[11px] text-slate-300/90 leading-relaxed max-w-[125px]">
                      {step.desc}
                    </p>
                  </div>

                  {/* Dotted Arrow Connector */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="flex items-center justify-center pt-4 px-1 shrink-0">
                      <div className="flex items-center text-emerald-400/80">
                        <span className="w-3 lg:w-5 border-t-2 border-dotted border-emerald-400/70" />
                        <span className="text-emerald-400 text-xs -ml-1">▸</span>
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
                  className="flex items-start gap-3.5 rounded-2xl bg-white/10 border border-white/15 p-3 backdrop-blur-md"
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

        </div>
      </Container>
    </section>
  );
}
