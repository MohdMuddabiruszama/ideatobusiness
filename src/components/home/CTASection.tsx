'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      window.location.href = `/get-started?email=${encodeURIComponent(email.trim())}`;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#02281b] via-[#053726] to-[#021f15] py-16 sm:py-20 lg:py-24 text-white border-t border-emerald-900/40">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.14)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-400/15 blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />

      {/* Decorative background grid and trajectory lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── LEFT COLUMN: Text + Email Intake (7 cols) ── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 text-xs font-bold text-emerald-300 mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Take The First Step Today</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-sm">
              Ready to Turn{' '}
              <span className="text-[#10B981] drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                Your Idea
              </span>{' '}
              Into Reality?
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-slate-200 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-xs">
              Get personalised guidance from our team and take the first step today.
            </p>

            {/* Combined Email Intake Bar */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-1.5 sm:p-2 rounded-2xl bg-white shadow-2xl border border-white/20 max-w-xl mx-auto lg:mx-0"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 w-full px-4 py-3 text-slate-800 placeholder:text-slate-400 text-sm sm:text-base bg-transparent focus:outline-none rounded-xl"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-bold text-sm sm:text-base px-7 py-3.5 shadow-md shadow-emerald-900/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0 whitespace-nowrap"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Trust Points Row */}
            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                No obligation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Tailored business roadmap
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Response within 24 hours
              </span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Glowing 3D Golden Lightbulb + Growth Arc (5 cols) ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center">

              {/* Golden Aura Glow behind the lightbulb */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-500/30 to-yellow-300/25 blur-3xl animate-pulse pointer-events-none" />

              {/* Upward Curved Green Growth Trajectory Arrow */}
              <div className="absolute -top-6 -right-4 sm:-right-8 text-emerald-400/40 pointer-events-none">
                <TrendingUp className="w-32 h-32 sm:w-40 sm:h-40 stroke-[1.2]" />
              </div>

              {/* 3D Glossy Golden Lightbulb Icon */}
              <div className="relative w-full h-full transition-transform duration-300 hover:scale-105 drop-shadow-[0_15px_30px_rgba(245,158,11,0.3)]">
                <Image
                  src="/icons/glossy-golden-lightbulb.png"
                  alt="Glossy Golden Lightbulb - Ideation to Business"
                  fill
                  priority
                  className="object-contain"
                  sizes="(min-width: 1024px) 320px, 260px"
                />
              </div>

              {/* Floating Mini Success Badge */}
              <div className="absolute -bottom-2 -left-2 sm:left-2 flex items-center gap-2 rounded-xl bg-[#042d1f]/90 border border-emerald-400/40 px-3.5 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-300">Idea to Launch</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
