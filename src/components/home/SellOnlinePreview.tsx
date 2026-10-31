import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRight, ShoppingCart, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react';

const MARKETPLACES = [
  {
    name: 'meesho',
    color: 'text-[#9b2c8d]',
    badgeBg: 'bg-pink-50 border-pink-100',
    desc: 'Product listing & catalog setup',
  },
  {
    name: 'amazon',
    color: 'text-[#ff9900]',
    badgeBg: 'bg-orange-50 border-orange-100',
    desc: 'Account setup & product launch',
  },
  {
    name: 'Flipkart',
    color: 'text-[#2874f0]',
    badgeBg: 'bg-blue-50 border-blue-100',
    desc: 'Listing, pricing & order management',
  },
  {
    name: 'Shopify',
    color: 'text-[#5e8e3e]',
    badgeBg: 'bg-green-50 border-green-100',
    desc: 'Your own online store',
  },
];

export function SellOnlinePreview() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column - 7 cols */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">
              SELL ONLINE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
              Start Selling on Top Marketplaces
            </h2>
            <p className="mt-3 text-[#4B5563] text-sm sm:text-base max-w-xl">
              We help you set up and grow your business on leading platforms with complete support.
            </p>

            {/* 4 Marketplace Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {MARKETPLACES.map((m) => (
                <div
                  key={m.name}
                  className={`rounded-2xl border p-4 transition-all duration-200 hover:shadow-sm ${m.badgeBg}`}
                >
                  <p className={`text-lg font-black tracking-tight ${m.color}`}>
                    {m.name}
                  </p>
                  <p className="text-xs text-[#4B5563] mt-1 font-medium">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/sell-online"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-500 text-white font-bold text-sm px-7 py-3.5 shadow-md shadow-emerald-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column - 5 cols (Phone / E-commerce visual mockup) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-50/40 border border-slate-200/90 p-6 sm:p-8 shadow-lg">
              {/* Top Banner inside visual */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-brand-emerald text-white flex items-center justify-center font-bold text-xs">
                    iB
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-deep">Seller Dashboard</p>
                    <p className="text-[10px] text-slate-400">Live Multi-Channel Sync</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  <Sparkles className="w-3 h-3 text-brand-emerald" /> Active
                </span>
              </div>

              {/* Product Revenue Showcase */}
              <div className="mt-5 rounded-2xl bg-white border border-slate-100 p-4 shadow-sm text-center">
                <div className="text-3xl mb-1">📦</div>
                <h4 className="text-sm font-bold text-brand-deep">
                  Turn Your Products into Revenue
                </h4>
                <p className="text-[11px] text-[#6B7280] mt-0.5">
                  Automated orders, catalogue SEO &amp; daily dispatches
                </p>

                {/* Channel pills */}
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  <span className="rounded-md bg-slate-50 border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
                    Meesho Catalog
                  </span>
                  <span className="rounded-md bg-slate-50 border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
                    Amazon FBA/FBM
                  </span>
                  <span className="rounded-md bg-slate-50 border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
                    Flipkart Assured
                  </span>
                  <span className="rounded-md bg-slate-50 border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
                    Shopify D2C
                  </span>
                </div>
              </div>

              {/* Feature check list */}
              <div className="mt-4 space-y-2 text-xs text-[#4B5563]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                  <span>GST-ready invoices and barcode generation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                  <span>Professional product photography &amp; A+ content</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
