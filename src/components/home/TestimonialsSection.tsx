'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowUpRight } from 'lucide-react';

const REVIEWS = [
  {
    quote: 'The team helped me set up my brand and online store. The process was simple and professional.',
    author: 'Aman Verma',
    role: 'Small Business Owner',
    initials: 'AV',
    bg: 'bg-emerald-500/15 text-emerald-800',
  },
  {
    quote: 'Great support and clear guidance from idea to launch. Highly recommended for new entrepreneurs.',
    author: 'Sneha Patel',
    role: 'D2C Brand Founder',
    initials: 'SP',
    bg: 'bg-amber-500/15 text-amber-800',
  },
  {
    quote: 'They handled everything from website to marketplace listing. Very helpful and responsive team.',
    author: 'Rohit Sharma',
    role: 'Online Seller',
    initials: 'RS',
    bg: 'bg-blue-500/15 text-blue-800',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((p) => (p === 0 ? REVIEWS.length - 1 : p - 1));
  };

  const next = () => {
    setCurrentIndex((p) => (p === REVIEWS.length - 1 ? 0 : p + 1));
  };

  return (
    <section className="bg-[#F8FAF9] py-14 sm:py-20 border-b border-slate-100">
      <Container>
        {/* Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-1.5 text-[#4B5563] text-sm sm:text-base max-w-2xl">
              Real stories from founders and growing businesses.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-brand-emerald">
                    <Quote className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full font-bold text-xs ${review.bg}`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-brand-deep leading-tight">{review.author}</p>
                    <p className="text-[11px] text-[#6B7280] leading-tight mt-0.5">{review.role}</p>
                  </div>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:text-brand-emerald group-hover:bg-emerald-50 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
