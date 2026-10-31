import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-gradient-to-b from-[#ECFDF5]/50 via-white to-white">
      <Container size="narrow">
        <div className="text-center max-w-lg mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-900 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Page Not Found</span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-black text-brand-deep tracking-tight mb-4">
            4<span className="text-brand-emerald">0</span>4
          </h1>

          <h2 className="text-2xl font-bold text-brand-deep mb-3">
            Looking for a business service?
          </h2>

          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            The page you are looking for does not exist or has been moved. Explore our 30 specialized business launch and growth services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3.5 shadow-sm transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 hover:border-brand-deep bg-white text-brand-deep font-bold text-sm px-6 py-3.5 transition-all"
            >
              <span>Explore All Services</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

