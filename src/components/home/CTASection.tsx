'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `/get-started?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        {/* Sleek Horizontal Banner Card matching Img 2 */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/40 bg-gradient-to-r from-[#012217] via-[#022c1f] to-[#011c13] px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Background Ambient Glows & Vector Waves */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,229,153,0.18)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 right-1/4 w-60 h-60 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          {/* Left Column: Heading & Subtitle */}
          <div className="relative z-10 text-center lg:text-left max-w-xl">
            <h2 className="text-xl sm:text-2xl lg:text-[1.65rem] font-extrabold text-white tracking-tight leading-snug drop-shadow-sm">
              Ready to Turn{' '}
              <span className="text-[#00E599] font-black">Your Idea Into</span>{' '}
              Reality?
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-200/95 font-normal leading-relaxed drop-shadow-xs">
              Get personalised guidance from our team and take the first step today.
            </p>
          </div>

          {/* Center Column: Unified Search Pill Bar (White Box + Attached Green Button) */}
          <form
            onSubmit={handleSubmit}
            className="relative z-10 w-full lg:w-auto flex-1 max-w-md flex items-center rounded-2xl bg-white p-1 sm:p-1.5 shadow-xl border border-white/20 transition-all focus-within:ring-2 focus-within:ring-[#00E599]"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-[#00E599] hover:bg-[#00c985] text-slate-950 font-black text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </form>

          {/* Right Column: 3D Glowing Bulb + Upward Growth Graphic */}
          <div className="relative z-10 hidden md:flex items-center justify-end shrink-0 -my-2 lg:-my-4">
            <div className="relative h-18 w-36 lg:h-20 lg:w-44 flex items-center justify-end">
              <Image
                src="/images/cta-bulb-growth.png"
                alt="Glowing lightbulb and green growth chart"
                fill
                priority
                className="object-contain object-right drop-shadow-[0_0_20px_rgba(251,191,36,0.35)]"
                sizes="176px"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
