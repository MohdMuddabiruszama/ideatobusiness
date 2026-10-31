import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight, LayoutGrid, Headphones, Sliders, RefreshCcw } from 'lucide-react';

const FEATURES = [
  {
    icon: <LayoutGrid className="w-4 h-4" />,
    title: 'All in One Place',
    desc: 'From planning to growth',
    bg: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    icon: <Headphones className="w-4 h-4" />,
    title: 'Expert Support',
    desc: 'Guidance at every step',
    bg: 'bg-amber-400/20 text-amber-400',
  },
  {
    icon: <Sliders className="w-4 h-4" />,
    title: 'Customized Solutions',
    desc: 'For your business goals',
    bg: 'bg-blue-400/20 text-blue-400',
  },
  {
    icon: <RefreshCcw className="w-4 h-4" />,
    title: 'Ongoing Support',
    desc: 'Even after launch',
    bg: 'bg-purple-400/20 text-purple-400',
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
      {/* Background glow overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-emerald/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Text Column (5 cols) */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2.5">
              WHY CHOOSE IDEATOBUSINESS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              More Than a Service.<br />
              <span className="text-brand-emerald">We&apos;re Your Business Partner.</span>
            </h2>
            <p className="mt-3.5 text-slate-300 text-sm leading-relaxed">
              We combine strategy, design, technology and growth support to turn ideas into real businesses.
            </p>

            <div className="mt-7">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 transition-all hover:scale-[1.01]"
              >
                About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Middle: Features & Stats (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="grid grid-cols-2 gap-2.5">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3.5"
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${f.bg} mb-2.5`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xs font-bold text-white leading-tight">{f.title}</h3>
                  <p className="text-[10px] text-slate-300 mt-0.5 leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10 text-center">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-base sm:text-lg font-extrabold text-brand-emerald">{s.value}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Glass Building Partner Graphic (3 cols) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-black/20 group">
              <div className="relative w-full h-[180px] sm:h-[200px]">
                <Image
                  src="/images/building-partner.jpg"
                  alt="IDEATOBUSINESS Growth Headquarters"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 300px"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
