'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Plus, Minus, FileText } from 'lucide-react';

const FAQS_LIST = [
  {
    id: 'faq-1',
    question: 'What services does IDEATOBUSINESS provide?',
    answer:
      'We provide end-to-end support across 5 departments: Business Launch (registration, GST, UDYAM, compliance), Branding & Design (logos, packaging, creative assets), Website & Technology (corporate sites, e-commerce stores, apps), Marketplace Selling (Meesho, Amazon, Flipkart setup & management), and Marketing & Growth (social media, SEO, paid ads).',
  },
  {
    id: 'faq-2',
    question: 'How much do the services cost?',
    answer:
      'We offer modular pricing and packages starting from ₹999 for foundational advisory, ₹4,999 for complete Business Launch setups, up to full-scale digital enterprise packages. All government statutory fees and third-party charges are itemized transparently with zero hidden costs.',
  },
  {
    id: 'faq-3',
    question: 'How long does it take to start a business?',
    answer:
      'Standard business registrations and digital identity setups typically begin within 24-48 hours. Most businesses have their foundation, brand identity, and basic digital presence ready within 7 to 14 business days, depending on government processing timelines.',
  },
  {
    id: 'faq-4',
    question: 'Do you help with Meesho, Amazon and Flipkart?',
    answer:
      'Yes, absolutely! We handle end-to-end seller onboarding, GST mapping, brand registry, product cataloguing, high-converting listing creation, pricing strategies, and order fulfillment guidelines for Meesho, Amazon, Flipkart, and Shopify.',
  },
];

export function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-2">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight">
              Got Questions? We&apos;ve Got Answers.
            </h2>
            <p className="mt-1.5 text-[#4B5563] text-sm sm:text-base max-w-2xl">
              Find answers to common questions about our services, process and support.
            </p>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-brand-emerald hover:border-brand-emerald whitespace-nowrap transition-colors shrink-0"
          >
            View All FAQs <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto space-y-2.5">
          {FAQS_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-brand-deep hover:text-brand-emerald transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-500 shrink-0 ml-3">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs text-[#4B5563] leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-150">
                    <p className="pl-6">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
