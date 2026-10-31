import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/data/site';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-mint/70 via-white to-white py-16 sm:py-24 lg:py-28">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#10B9810a_1px,transparent_1px),linear-gradient(to_bottom,#10B9810a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-brand-emerald/15 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 -z-10 h-80 w-80 rounded-full bg-accent-orange/15 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-mint px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-deep border border-brand-emerald/30 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-emerald" />
            <span>Turn Your Idea Into a Real Business</span>
          </div>

          {/* Main H1 Heading — Official 56-64px desktop / 40-48px tablet / 32-40px mobile */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-deep leading-tight">
            Turn Your Idea Into a <br />
            <span className="bg-gradient-to-r from-brand-emerald to-accent-orange bg-clip-text text-transparent">
              Real, Sustainable Business
            </span>
          </h1>

          {/* Body Subtitle — Official 16-18px */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            {SITE_CONFIG.subtagline} We help you plan, build, launch, and grow your business with expert support under one roof.
          </p>

          {/* Trust points */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-neutral-navy">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Tailored Business Roadmaps
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Transparent Package Pricing
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Dedicated Support Lead
            </span>
          </div>

          {/* Official Button UI: Primary (Emerald) & Secondary (Deep Green border) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/get-started"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Get Started →
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* 3D Visual Highlights & Stats */}
        <div className="mt-16 sm:mt-20 border-t border-[#E5E7EB] pt-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
            {SITE_CONFIG.stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-[16px] bg-white border border-[#E5E7EB] shadow-card">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-deep tracking-tight">
                  <span className="bg-gradient-to-r from-brand-emerald to-accent-orange bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-[#4B5563]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
