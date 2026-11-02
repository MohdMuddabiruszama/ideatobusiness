'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOW_IT_WORKS_STORY_PHASES } from '@/data/howItWorksPhases';
import { useFrameSequence } from './useFrameSequence';
import { FrameSequenceCanvas } from './FrameSequenceCanvas';
import { PhaseProgress } from './PhaseProgress';
import { PhaseContent } from './PhaseContent';
import { Container } from '@/components/ui/Container';

// Ensure GSAP plugins are registered safely on the client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollStoryExperience() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // References for GSAP pinning
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const scrollTriggerInstanceRef = useRef<ScrollTrigger | null>(null);

  // Hook for progressive loading and high-performance caching
  const { getFrame, isInitialReady } = useFrameSequence(activePhaseIndex);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mq.matches);
      const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  // Handle phase jump via click
  const handleSelectPhase = useCallback((targetIndex: number) => {
    const st = scrollTriggerInstanceRef.current;
    if (!st) return;

    const totalDistance = st.end - st.start;
    const phaseFraction = 1 / HOW_IT_WORKS_STORY_PHASES.length;
    // Target position just after the phase start point (10% into the phase)
    const targetProgress = targetIndex * phaseFraction + phaseFraction * 0.1;
    const targetScrollY = st.start + targetProgress * totalDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  }, []);

  const handleNextPhase = useCallback(() => {
    if (activePhaseIndex < HOW_IT_WORKS_STORY_PHASES.length - 1) {
      handleSelectPhase(activePhaseIndex + 1);
    }
  }, [activePhaseIndex, handleSelectPhase]);

  const handlePrevPhase = useCallback(() => {
    if (activePhaseIndex > 0) {
      handleSelectPhase(activePhaseIndex - 1);
    }
  }, [activePhaseIndex, handleSelectPhase]);

  // Setup GSAP ScrollTrigger
  useEffect(() => {
    if (reducedMotion) return;

    const triggerEl = triggerRef.current;
    const pinEl = pinTargetRef.current;
    if (!triggerEl || !pinEl) return;

    const totalPhases = HOW_IT_WORKS_STORY_PHASES.length;

    // Use GSAP Context for seamless React 19 StrictMode cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop layout (>= 1024px)
      mm.add('(min-width: 1024px)', () => {
        const st = ScrollTrigger.create({
          trigger: triggerEl,
          start: 'top top',
          end: `+=${window.innerHeight * 5}`,
          pin: pinEl,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress; // 0 to 1
            const rawPhase = progress * totalPhases;
            const currentPhase = Math.min(totalPhases - 1, Math.max(0, Math.floor(rawPhase)));

            // Progress within the current phase: 0 to 1
            const phaseLocalProgress = rawPhase - currentPhase;
            const currentFrame = Math.min(98, Math.max(0, Math.floor(phaseLocalProgress * 99)));

            setActivePhaseIndex((prev) => (prev !== currentPhase ? currentPhase : prev));
            setActiveFrameIndex(currentFrame);
          },
        });

        scrollTriggerInstanceRef.current = st;
      });

      // Tablet and Mobile layout (< 1024px)
      mm.add('(max-width: 1023px)', () => {
        const st = ScrollTrigger.create({
          trigger: triggerEl,
          start: 'top top',
          end: `+=${window.innerHeight * 3.5}`,
          pin: pinEl,
          pinSpacing: true,
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const rawPhase = progress * totalPhases;
            const currentPhase = Math.min(totalPhases - 1, Math.max(0, Math.floor(rawPhase)));
            const phaseLocalProgress = rawPhase - currentPhase;
            const currentFrame = Math.min(98, Math.max(0, Math.floor(phaseLocalProgress * 99)));

            setActivePhaseIndex((prev) => (prev !== currentPhase ? currentPhase : prev));
            setActiveFrameIndex(currentFrame);
          },
        });

        scrollTriggerInstanceRef.current = st;
      });
    }, triggerRef);

    return () => {
      ctx.revert();
      scrollTriggerInstanceRef.current = null;
    };
  }, [reducedMotion]);

  // Reduced motion accessible fallback
  if (reducedMotion) {
    return (
      <section className="py-16 bg-white">
        <Container>
          <div className="space-y-12">
            {HOW_IT_WORKS_STORY_PHASES.map((phase) => (
              <div
                key={phase.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="space-y-4">
                  <span className="text-xs font-black uppercase text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                    Phase {phase.phaseNumber}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">{phase.title}</h3>
                  <p className="text-base font-semibold text-slate-700">{phase.description}</p>
                  <p className="text-sm text-slate-600">{phase.additionalContent}</p>
                  <div className="p-3 bg-brand-50/80 rounded-xl border border-brand-100 text-xs sm:text-sm font-semibold text-brand-900">
                    Deliverable: {phase.deliverable}
                  </div>
                </div>
                <div className="flex justify-center bg-white rounded-2xl p-4 border border-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={phase.posterFrame}
                    alt={phase.title}
                    className="max-h-[400px] object-contain rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  const currentPhase = HOW_IT_WORKS_STORY_PHASES[activePhaseIndex];

  return (
    <section
      ref={triggerRef}
      className="relative w-full bg-slate-50/70 border-y border-slate-200/80"
    >
      {/* Sticky Full-Viewport Story Stage */}
      <div
        ref={pinTargetRef}
        className="w-full h-screen flex flex-col justify-between overflow-hidden relative"
      >
        <Container className="h-full flex flex-col justify-center py-4 sm:py-6 lg:py-8">
          {/* Main 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center h-full max-h-[880px]">
            {/* Mobile / Tablet Horizontal Stepper (shown above on small screens) */}
            <div className="block lg:hidden w-full order-1">
              <PhaseProgress
                currentPhaseIndex={activePhaseIndex}
                onSelectPhase={handleSelectPhase}
                orientation="horizontal"
              />
            </div>

            {/* Left Content Column (Story Narrative & Desktop Progress) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-[42vh] lg:h-[620px] bg-white rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-200/90 shadow-lg shadow-slate-900/5 order-3 lg:order-1 overflow-y-auto lg:overflow-visible">
              <PhaseContent
                phase={currentPhase}
                activePhaseIndex={activePhaseIndex}
                totalPhases={HOW_IT_WORKS_STORY_PHASES.length}
                onNext={handleNextPhase}
                onPrev={handlePrevPhase}
              />
            </div>

            {/* Middle Vertical Stepper (Desktop only) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col justify-center items-center order-2">
              <PhaseProgress
                currentPhaseIndex={activePhaseIndex}
                onSelectPhase={handleSelectPhase}
                orientation="vertical"
              />
            </div>

            {/* Right Column: Character Animation Canvas Stage */}
            <div className="lg:col-span-5 h-[34vh] sm:h-[38vh] lg:h-[620px] w-full flex items-center justify-center bg-white rounded-3xl p-2 sm:p-4 border border-slate-200/90 shadow-lg shadow-slate-900/5 relative order-2 lg:order-3">
              <FrameSequenceCanvas
                phaseIndex={activePhaseIndex}
                frameIndex={activeFrameIndex}
                getFrame={getFrame}
                isInitialReady={isInitialReady}
                className="w-full h-full"
              />

              {/* Subtle Scroll Hint Indicator at bottom */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/75 backdrop-blur-md text-[11px] font-bold text-white tracking-wider uppercase pointer-events-none opacity-80 shadow-md">
                Scroll to explore • {activePhaseIndex + 1}/6
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

