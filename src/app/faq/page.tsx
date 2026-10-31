'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { FAQS } from '@/data/faqs';
import { cn } from '@/lib/utils';
import { ArrowRight, HelpCircle } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & Platform' },
  { id: 'services', label: 'Services' },
  { id: 'registration', label: 'Legal & Registration' },
  { id: 'pricing', label: 'Pricing & Invoices' },
  { id: 'process', label: 'Delivery Process' },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFaqs = FAQS.filter(
    (faq) => selectedCategory === 'all' || faq.category === selectedCategory
  ).map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white py-16 sm:py-24 border-b border-slate-200/60 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-100 text-brand-800 mb-4 border border-brand-200">
              Help Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked <br />
              <span className="text-brand-600">Questions</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Find transparent answers regarding our service deliverables, regulatory compliance assistance, payments, timelines, and ownership.
            </p>
          </div>
        </Container>
      </div>

      {/* Categories & Accordion */}
      <Section background="white">
        <Container size="narrow">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start sm:justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all duration-200',
                  selectedCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <Accordion items={filteredFaqs} defaultOpenId="faq-1" />

          {/* Still have questions */}
          <div className="mt-16 text-center p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Still have a question not listed here?</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Our specialists are ready to discuss your specific venture and help you choose the right roadmap.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact" variant="secondary" size="md">
                Contact Advisory Team
              </Button>
              <Button href="/get-started" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

