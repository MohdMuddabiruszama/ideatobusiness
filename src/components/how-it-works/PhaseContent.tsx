'use client';

import React from 'react';
import Link from 'next/link';
import { StoryPhase } from '@/data/howItWorksPhases';
import { CheckCircle2, ArrowRight, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

interface PhaseContentProps {
  phase: StoryPhase;
  activePhaseIndex: number;
  totalPhases: number;
  onNext?: () => void;
  onPrev?: () => void;
  className?: string;
}

export function PhaseContent({
  phase,
  activePhaseIndex,
  totalPhases,
  onNext,
  onPrev,
  className = '',
}: PhaseContentProps) {
  return (
    <div className={`flex flex-col justify-between h-full space-y-6 ${className}`}>
      <div className="space-y-5">
        {/* Top Eyebrow Badges */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-100/80 text-brand-800 border border-brand-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Phase {phase.phaseNumber}</span>
          </div>

          <div className="text-xs font-semibold text-slate-400">
            {phase.id} of {totalPhases}
          </div>
        </div>

        {/* Phase Main Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-900 tracking-tight leading-tight">
          {phase.title}
        </h2>

        {/* Short Summary Tagline */}
        <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed border-l-4 border-brand-500 pl-3.5 py-0.5 bg-brand-50/40 rounded-r-xl">
          {phase.description}
        </p>

        {/* Detailed Supporting Information */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {phase.additionalContent}
        </p>

        {/* Deliverable Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-brand-50/90 to-white border border-brand-200/90 shadow-sm space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
            <CheckCircle2 className="w-4 h-4 text-brand-600 stroke-[2.5]" />
            <span>Guaranteed Deliverable</span>
          </div>
          <p className="text-sm sm:text-base font-bold text-brand-950">
            {phase.deliverable}
          </p>
        </div>
      </div>

      {/* Action CTA & Navigation Controls */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-600/25 transition-all hover:scale-102 active:scale-98"
        >
          <span>Get Started With This</span>
          <ArrowRight className="w-4 h-4 text-brand-100" />
        </Link>

        {/* Quick Stepper Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onPrev}
            disabled={activePhaseIndex === 0}
            aria-label="Previous Phase"
            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={activePhaseIndex === totalPhases - 1}
            aria-label="Next Phase"
            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

