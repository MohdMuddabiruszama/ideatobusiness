'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `/get-started?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2D1F] via-[#0e3d2a] to-[#081e14] py-16 sm:py-20 text-white">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-emerald/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">💡</div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ready to Turn Your{' '}
            <span className="text-brand-emerald">Idea</span> Into Reality?
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Get personalised guidance from our team and take the first step today.
          </p>

          {/* Email CTA bar */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur text-white placeholder:text-slate-400 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-emerald"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-400 text-white font-bold text-sm px-7 py-3.5 shadow-lg transition-all hover:scale-[1.02] whitespace-nowrap"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-500">
            No obligation · We respond within 24 business hours
          </p>
        </div>
      </Container>
    </section>
  );
}
