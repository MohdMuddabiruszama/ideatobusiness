'use client';

import React from 'react';
import { HOW_IT_WORKS_STORY_PHASES } from '@/data/howItWorksPhases';
import { Check } from 'lucide-react';

interface PhaseProgressProps {
  currentPhaseIndex: number;
  onSelectPhase?: (index: number) => void;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

export function PhaseProgress({
  currentPhaseIndex,
  onSelectPhase,
  className = '',
  orientation = 'vertical',
}: PhaseProgressProps) {
  if (orientation === 'horizontal') {
    return (
      <div className={`w-full ${className}`}>
        {/* Mobile / Tablet Horizontal Stepper */}
        <div className="flex items-center justify-between gap-1 sm:gap-2 px-2 py-2 bg-slate-900/5 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs">
          {HOW_IT_WORKS_STORY_PHASES.map((phase, idx) => {
            const isActive = idx === currentPhaseIndex;
            const isCompleted = idx < currentPhaseIndex;

            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => onSelectPhase?.(idx)}
                className={`flex-1 flex flex-col items-center py-1.5 px-1 rounded-xl transition-all duration-200 text-center select-none ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 scale-102'
                    : isCompleted
                    ? 'bg-brand-50 text-brand-900 hover:bg-brand-100'
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
                title={`Jump to Phase ${phase.phaseNumber}: ${phase.title}`}
                aria-label={`Phase ${phase.phaseNumber} ${phase.shortName}`}
              >
                <div className="flex items-center gap-1">
                  {isCompleted ? (
                    <Check className="w-3 h-3 text-brand-600 stroke-[3]" />
                  ) : (
                    <span
                      className={`text-[10px] font-black ${
                        isActive ? 'text-white' : 'text-slate-400'
                      }`}
                    >
                      {phase.phaseNumber}
                    </span>
                  )}
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-bold truncate max-w-[55px] sm:max-w-none ${
                    isActive ? 'text-white' : isCompleted ? 'text-brand-800' : 'text-slate-600'
                  }`}
                >
                  {phase.shortName}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Vertical Stepper
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      {HOW_IT_WORKS_STORY_PHASES.map((phase, idx) => {
        const isActive = idx === currentPhaseIndex;
        const isCompleted = idx < currentPhaseIndex;

        return (
          <button
            key={phase.id}
            type="button"
            onClick={() => onSelectPhase?.(idx)}
            className={`group flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition-all duration-300 text-left select-none ${
              isActive
                ? 'bg-brand-50/90 border border-brand-200 shadow-sm translate-x-1'
                : 'hover:bg-slate-50 border border-transparent hover:border-slate-100'
            }`}
          >
            {/* Step badge icon */}
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-lg font-black text-xs transition-colors duration-200 shrink-0 ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : isCompleted
                  ? 'bg-brand-100 text-brand-700'
                  : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'
              }`}
            >
              {isCompleted ? <Check className="w-4 h-4 stroke-[2.5]" /> : phase.phaseNumber}
            </div>

            {/* Step Label */}
            <div className="flex flex-col min-w-0">
              <span
                className={`text-xs font-bold tracking-tight transition-colors ${
                  isActive
                    ? 'text-brand-900'
                    : isCompleted
                    ? 'text-slate-700'
                    : 'text-slate-400 group-hover:text-slate-600'
                }`}
              >
                {phase.phaseNumber} — {phase.shortName}
              </span>
              <span className="text-[11px] text-slate-400 truncate max-w-[170px] hidden xl:block">
                {phase.title}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

