import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { FAQS } from '@/data/faqs';
import { ArrowRight } from 'lucide-react';

export function FAQPreview() {
  const topFaqs = FAQS.slice(0, 5).map((f) => ({
    id: f.id,
    title: f.question,
    content: f.answer,
  }));

  return (
    <Section background="subtle">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Clear answers about how we operate, our pricing, legal compliance coordination, and delivery workflows."
        />

        <Accordion items={topFaqs} defaultOpenId="faq-1" />

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline"
          >
            View all frequently asked questions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

