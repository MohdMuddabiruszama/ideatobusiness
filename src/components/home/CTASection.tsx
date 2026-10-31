'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Lightbulb } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `/get-started?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0B2D1F] py-14 sm:py-18 text-white border-t border-emerald-950">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-emerald/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Text & Form (8 cols) */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Ready to Turn <span className="text-brand-emerald">Your Idea</span> into <span className="text-amber-400">Reality?</span>
            </h2>

            <p className="mt-2.5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Get personalized guidance from our team and take the first step today.
            </p>

            {/* Email form */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-lg"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 rounded-xl border border-white/20 bg-white/10 backdrop-blur text-white placeholder:text-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-emerald"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 shadow transition-all hover:scale-[1.01] whitespace-nowrap"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Glowing Lightbulb graphic (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-2xl scale-125" />
              <div className="relative h-28 w-28 sm:h-36 sm:w-36">
                <Image
                  src="/icons/Glossy Golden Lightbulb Icon.png"
                  alt="Idea to Reality"
                  fill
                  className="object-contain drop-shadow-[0_10px_25px_rgba(245,158,11,0.5)]"
                  sizes="150px"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
