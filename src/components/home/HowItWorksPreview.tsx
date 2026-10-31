import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: 1,
    icon: '💡',
    title: 'Tell Us Your Idea',
    desc: 'Share your business goal and requirements.',
    color: 'bg-brand-emerald',
  },
  {
    num: 2,
    icon: '🗺️',
    title: 'Get Your Roadmap',
    desc: 'We suggest the best plan and services for you.',
    color: 'bg-amber-500',
  },
  {
    num: 3,
    icon: '✅',
    title: 'Choose Services',
    desc: 'Select the services you need.',
    color: 'bg-blue-500',
  },
  {
    num: 4,
    icon: '🤝',
    title: 'Work With Our Team',
    desc: 'Our experts handle the work.',
    color: 'bg-purple-500',
  },
  {
    num: 5,
    icon: '🚀',
    title: 'Launch & Grow',
    desc: 'Start your business and get ongoing support.',
    color: 'bg-rose-500',
  },
];

const GROWTH_STEPS = ['PLAN', 'BUILD', 'LAUNCH', 'GROW'];

export function HowItWorksPreview() {
  return (
    <section className="bg-[#F8FAF9] py-16 sm:py-20 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">SIMPLE PROCESS</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
            How It Works
          </h2>
          <p className="mt-2 text-[#4B5563] text-sm sm:text-base">
            Your business journey in 5 simple steps.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* ── Steps ── */}
          <div className="flex-1">
            {/* Desktop: horizontal flow */}
            <div className="hidden md:flex items-start gap-0 relative">
              {STEPS.map((step, i) => (
                <React.Fragment key={step.num}>
                  <div className="flex flex-col items-center text-center flex-1 min-w-0 px-2">
                    {/* Circle */}
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full ${step.color} text-white font-extrabold text-lg shadow-lg mb-3 shrink-0`}>
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <span className={`text-[10px] font-bold text-white ${step.color} rounded-full px-2 py-0.5 mb-2`}>
                      Step {step.num}
                    </span>
                    <h3 className="text-sm font-bold text-brand-deep leading-snug">{step.title}</h3>
                    <p className="mt-1 text-[11px] text-[#6B7280] leading-relaxed">{step.desc}</p>
                  </div>
                  {/* Arrow connector */}
                  {i < STEPS.length - 1 && (
                    <div className="flex items-start pt-7 shrink-0 text-slate-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile: vertical list */}
            <div className="flex flex-col gap-4 md:hidden">
              {STEPS.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.color} text-white text-xl shrink-0 shadow`}>
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Step {step.num}</p>
                    <h3 className="text-sm font-bold text-brand-deep mt-0.5">{step.title}</h3>
                    <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 shadow transition-all hover:scale-[1.02]"
              >
                See Full Process <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── Right: PLAN BUILD LAUNCH GROW ── */}
          <div className="hidden lg:flex flex-col gap-2 shrink-0 w-36">
            {GROWTH_STEPS.map((label, i) => (
              <div
                key={label}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-white shadow-sm ${
                  i === 0 ? 'bg-blue-500' :
                  i === 1 ? 'bg-brand-emerald' :
                  i === 2 ? 'bg-amber-500' :
                  'bg-brand-deep'
                }`}
              >
                {label}
                <ArrowRight className="w-4 h-4 opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
