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
    bg: 'bg-emerald-500/10 text-brand-emerald',
  },
  {
    quote: 'Great support and clear guidance from idea to launch. Highly recommended for new entrepreneurs.',
    author: 'Sneha Patel',
    role: 'D2C Brand Founder',
    initials: 'SP',
    bg: 'bg-amber-500/10 text-amber-600',
  },
  {
    quote: 'They handled everything from website to marketplace listing. Very helpful and responsive team.',
    author: 'Rohit Sharma',
    role: 'Online Seller',
    initials: 'RS',
    bg: 'bg-blue-500/10 text-blue-600',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#F8FAF9] py-16 sm:py-20 border-b border-slate-100">
      <Container>
        {/* Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-[#4B5563] text-sm sm:text-base max-w-2xl">
              Real stories from founders and growing businesses.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-deep hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-deep hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={review.author}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-brand-emerald">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-[#374151] leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-sm ${review.bg}`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-deep">{review.author}</p>
                    <p className="text-xs text-[#6B7280]">{review.role}</p>
                  </div>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:text-brand-emerald group-hover:bg-brand-mint transition-colors">
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

