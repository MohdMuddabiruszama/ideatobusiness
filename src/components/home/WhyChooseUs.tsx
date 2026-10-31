import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRight, LayoutGrid, Headphones, Sliders, RefreshCcw } from 'lucide-react';

const FEATURES = [
  {
    icon: <LayoutGrid className="w-5 h-5" />,
    title: 'All in One Place',
    desc: 'From planning to growth.',
    bg: 'bg-brand-emerald/20',
    color: 'text-brand-emerald',
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: 'Expert Support',
    desc: 'Guidance at every step.',
    bg: 'bg-amber-400/20',
    color: 'text-amber-400',
  },
  {
    icon: <Sliders className="w-5 h-5" />,
    title: 'Customized Solutions',
    desc: 'For your business goals.',
    bg: 'bg-blue-400/20',
    color: 'text-blue-400',
  },
  {
    icon: <RefreshCcw className="w-5 h-5" />,
    title: 'Ongoing Support',
    desc: 'Even after launch.',
    bg: 'bg-purple-400/20',
    color: 'text-purple-400',
  },
];

const STATS = [
  { value: '30+', label: 'Services' },
  { value: '500+', label: 'Happy Clients' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '4+ Years', label: 'Industry Experience' },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#0B2D1F] py-16 sm:py-20 text-white">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-emerald/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-3">
              WHY CHOOSE IDEATOBUSINESS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              More Than a Service.<br />
              <span className="text-brand-emerald">We&apos;re Your Business Partner.</span>
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
              We combine strategy, design, technology and growth support to turn ideas into real businesses with complete support.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-brand-emerald text-brand-emerald hover:bg-brand-emerald hover:text-white font-bold text-sm px-6 py-3 transition-all"
            >
              About Us <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center border border-white/10 rounded-2xl py-4 px-3 bg-white/5 backdrop-blur-sm">
                  <p className="text-xl sm:text-2xl font-extrabold text-brand-emerald">{s.value}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${f.bg} ${f.color} mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}

            {/* "For Your Growth Partner" card */}
            <div className="sm:col-span-2 rounded-2xl bg-gradient-to-r from-brand-emerald/20 to-amber-500/10 border border-brand-emerald/20 p-5 flex items-center gap-4">
              <div className="text-4xl">🏢</div>
              <div>
                <p className="text-sm font-bold text-white">For Your Growth Partner</p>
                <p className="text-xs text-slate-400 mt-1">Our business leaders are here to guide you every step of the way from idea to scale.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
