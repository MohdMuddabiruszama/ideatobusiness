import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

const MARKETPLACES = [
  {
    name: 'meesho',
    color: 'text-[#9b2c8d]',
    badgeBg: 'bg-pink-50/70 border-pink-100',
    desc: 'Product listing & catalog setup',
  },
  {
    name: 'amazon',
    color: 'text-[#ff9900]',
    badgeBg: 'bg-orange-50/70 border-orange-100',
    desc: 'Account setup & product launch',
  },
  {
    name: 'Flipkart',
    color: 'text-[#2874f0]',
    badgeBg: 'bg-blue-50/70 border-blue-100',
    desc: 'Listing, pricing & order management',
  },
  {
    name: 'Shopify',
    color: 'text-[#5e8e3e]',
    badgeBg: 'bg-green-50/70 border-green-100',
    desc: 'Your own online store',
  },
];

export function SellOnlinePreview() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">
              SELL ONLINE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
              Start Selling on Top Marketplaces
            </h2>
            <p className="mt-2 text-[#4B5563] text-sm sm:text-base max-w-xl">
              We help you set up and grow your business on leading platforms with complete support.
            </p>

            {/* 4 Marketplace Cards Grid */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {MARKETPLACES.map((m) => (
                <div
                  key={m.name}
                  className={`rounded-2xl border p-4 transition-all duration-200 hover:shadow-sm ${m.badgeBg}`}
                >
                  <p className={`text-base font-extrabold tracking-tight ${m.color}`}>
                    {m.name}
                  </p>
                  <p className="text-xs text-[#4B5563] mt-1 font-medium">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <Link
                href="/sell-online"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 shadow-sm transition-all hover:scale-[1.01]"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white group">
              <div className="relative w-full h-[180px] sm:h-[210px]">
                <Image
                  src="/images/sell-online-visual.jpg"
                  alt="Start Selling Online - Products to Revenue"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
