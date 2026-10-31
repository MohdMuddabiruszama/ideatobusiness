'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PlatformLogosBar } from '@/components/home/PlatformLogosBar';
import {
  ArrowRight,
  Sparkles,
  Building2,
  Palette,
  Globe,
  ShoppingCart,
  TrendingUp,
  Lightbulb,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from 'lucide-react';

const FLOATING_SERVICES = [
  {
    icon: <Building2 className="w-4 h-4 text-emerald-600" />,
    label: 'Business Setup',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-100',
  },
  {
    icon: <Palette className="w-4 h-4 text-orange-600" />,
    label: 'Branding & Design',
    badgeBg: 'bg-orange-50 text-orange-800 border-orange-100',
  },
  {
    icon: <Globe className="w-4 h-4 text-blue-600" />,
    label: 'Website & App',
    badgeBg: 'bg-blue-50 text-blue-800 border-blue-100',
  },
  {
    icon: <ShoppingCart className="w-4 h-4 text-amber-600" />,
    label: 'Marketplace Selling',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-100',
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-purple-600" />,
    label: 'Marketing & Growth',
    badgeBg: 'bg-purple-50 text-purple-800 border-purple-100',
  },
];

const MINI_STATS = [
  { value: '30+', label: 'Business Services' },
  { value: 'All in One', label: 'Platform' },
  { value: 'Expert Team', label: 'Support' },
  { value: 'From Idea', label: 'to Revenue' },
];

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* ── HERO MAIN SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#ECFDF5]/80 via-white to-slate-50/50 pt-5 pb-10 sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
        {/* Soft background glows */}
        <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-emerald/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 -z-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Column (Content) */}
            <div className="lg:col-span-7">
              {/* Badge: From Idea to Business */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/90 border border-emerald-200/90 px-4 py-1.5 text-xs font-bold text-emerald-900 mb-6 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
                <span>From Idea to Business</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-brand-deep leading-[1.12] tracking-tight">
                Turn Your Idea <br />
                Into a <span className="text-brand-emerald">Real Business</span>
              </h1>

              {/* Subheading */}
              <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                We help you plan, build, launch and grow your business with strategy, design, technology and ongoing support &mdash; all in one place.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-bold text-[15px] px-8 py-3.5 sm:py-4 shadow-lg shadow-emerald-900/15 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 hover:border-brand-deep bg-white hover:bg-slate-50 text-brand-deep font-bold text-[15px] px-8 py-3.5 sm:py-4 transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>

              {/* Micro Stats Row */}
              <div className="mt-10 pt-8 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {MINI_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl sm:text-2xl font-extrabold text-brand-deep">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[#6B7280] font-medium mt-0.5 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Hero Graphic Card) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">

                {/* Glowing lightbulb card with upward growth trajectory */}
                <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-50/50 border border-emerald-100/90 p-6 sm:p-7 shadow-xl">
                  {/* Handwritten-style process note */}
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-4 px-2">
                    <span className="text-emerald-700">Idea</span>
                    <span className="text-slate-300">&rarr;</span>
                    <span className="text-amber-700">Strategy</span>
                    <span className="text-slate-300">&rarr;</span>
                    <span className="text-blue-700">Execution</span>
                    <span className="text-slate-300">&rarr;</span>
                    <span className="text-brand-emerald">Growth</span>
                  </div>

                  {/* Central Video Container */}
                  <div
                    onClick={togglePlay}
                    className="relative h-60 sm:h-72 rounded-2xl bg-[#0B2D1F] overflow-hidden shadow-2xl border border-emerald-900/40 cursor-pointer group select-none"
                  >
                    {/* Video Element */}
                    <video
                      ref={videoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-[1.02]"
                    >
                      <source src="/videos/web-hero-video.mp4" type="video/mp4" />
                      <source src="/videos/web hero video.mp4" type="video/mp4" />
                      <source src="/videos/hero-journey.mp4" type="video/mp4" />
                    </video>

                    {/* Subtle Gradient Overlays for High Contrast Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none z-10" />

                    {/* Top Bar Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B2D1F]/80 backdrop-blur-md border border-emerald-500/30 text-[11px] font-bold text-white shadow-sm">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Idea to Reality</span>
                      </div>

                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-semibold text-emerald-300">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Scale Up</span>
                      </div>
                    </div>

                    {/* Center Play Button Overlay (visible when paused) */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 backdrop-blur-[2px] transition-all">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-emerald text-white shadow-2xl transform transition hover:scale-110">
                          <Play className="w-7 h-7 fill-white translate-x-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Bottom Floating Bar with Details & Audio/Play Controls */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20">
                      <div className="pointer-events-none pr-2">
                        <p className="text-sm sm:text-base font-extrabold text-white tracking-wide leading-tight drop-shadow-md">
                          Start Your Journey
                        </p>
                        <p className="text-[11px] text-emerald-200/90 font-medium leading-tight drop-shadow-sm mt-0.5">
                          Guided by business strategy specialists
                        </p>
                      </div>

                      {/* Interactive Controls (Play/Pause & Sound) */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95"
                          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                          title={isMuted ? 'Unmute audio' : 'Mute audio'}
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 text-amber-300" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-emerald-400" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlay();
                          }}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-emerald/90 hover:bg-brand-emerald text-white backdrop-blur-md shadow-md transition-all hover:scale-105 active:scale-95"
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                          title={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? (
                            <Pause className="w-4 h-4 fill-white" />
                          ) : (
                            <Play className="w-4 h-4 fill-white translate-x-0.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Service Badges Column */}
                  <div className="mt-5 space-y-2">
                    {FLOATING_SERVICES.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2 text-xs font-bold shadow-xs transition-transform hover:translate-x-1 ${item.badgeBg}`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom "Your Business Partner" Ribbon */}
                  <div className="mt-5 text-center">
                    <span className="inline-block bg-accent-orange text-brand-deep text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                      Your Business Partner
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── FLOATING PLATFORM LOGOS BAR ── */}
      <div className="relative z-20 -mt-6 sm:-mt-8 mb-4">
        <PlatformLogosBar />
      </div>
    </>
  );
}
