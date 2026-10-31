import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Lightbulb, Map, CheckSquare, Users, Rocket } from 'lucide-react';

const STEPS = [
  {
    num: 1,
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    title: 'Tell Us Your Idea',
    desc: 'Share your business goal and requirements.',
    color: 'bg-emerald-600',
  },
  {
    num: 2,
    icon: <Map className="w-5 h-5 text-white" />,
    title: 'Get Your Roadmap',
    desc: 'We suggest the best plan and services for you.',
    color: 'bg-amber-500',
  },
  {
    num: 3,
    icon: <CheckSquare className="w-5 h-5 text-white" />,
    title: 'Choose Services',
    desc: 'Select the services you need.',
    color: 'bg-blue-600',
  },
  {
    num: 4,
    icon: <Users className="w-5 h-5 text-white" />,
    title: 'Work With Our Team',
    desc: 'Our experts handle the work.',
    color: 'bg-orange-500',
  },
  {
    num: 5,
    icon: <Rocket className="w-5 h-5 text-white" />,
    title: 'Launch & Grow',
    desc: 'Start your business and get ongoing support.',
    color: 'bg-teal-600',
  },
];

export function HowItWorksPreview() {
  return (
    <section className="bg-[#F8FAF9] py-16 sm:py-20 border-b border-slate-100 overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Steps (8 cols) */}
          <div className="lg:col-span-8">
            {/* Desktop: horizontal flow */}
            <div className="hidden md:flex items-start justify-between gap-1 relative">
              {STEPS.map((step, i) => (
                <React.Fragment key={step.num}>
                  <div className="flex flex-col items-center text-center flex-1 min-w-0 px-1">
                    {/* Circle icon */}
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${step.color} shadow-md mb-2.5 shrink-0`}>
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <span className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 rounded-full px-2 py-0.5 mb-1.5">
                      {step.num}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-brand-deep leading-tight">{step.title}</h3>
                    <p className="mt-1 text-[11px] text-[#6B7280] leading-snug">{step.desc}</p>
                  </div>
                  {/* Arrow connector */}
                  {i < STEPS.length - 1 && (
                    <div className="flex items-start pt-5 shrink-0 text-slate-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile: vertical list */}
            <div className="flex flex-col gap-3 md:hidden">
              {STEPS.map((step) => (
                <div key={step.num} className="flex items-start gap-3.5 rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${step.color} shrink-0 shadow-sm`}>
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Step {step.num}</span>
                    <h3 className="text-sm font-bold text-brand-deep mt-0.5">{step.title}</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 shadow-sm transition-all hover:scale-[1.01]"
              >
                See Full Process <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right visual: 3D Stairs with Plan, Build, Launch, Grow (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white group">
              <div className="relative w-full h-[200px] sm:h-[230px]">
                <Image
                  src="/images/process-stairs.jpg"
                  alt="Business Growth Process - Plan, Build, Launch, Grow"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
