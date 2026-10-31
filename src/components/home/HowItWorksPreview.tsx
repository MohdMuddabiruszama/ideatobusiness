import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { HOW_IT_WORKS_STEPS } from '@/data/how-it-works';
import { ArrowRight, Check } from 'lucide-react';

export function HowItWorksPreview() {
  return (
    <Section background="subtle">
      <Container>
        <SectionHeading
          eyebrow="Simple 6-Step Process"
          title="From Business Idea to Live Operations"
          subtitle="A clear, transparent journey with continuous milestones and complete asset ownership at every stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white font-extrabold text-sm shadow-sm">
                    0{step.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Step {step.step} of 6
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-brand-800 font-medium bg-brand-50/60 p-2.5 rounded-lg">
                <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                <span>{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/how-it-works" variant="secondary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Read the Detailed Execution Process
          </Button>
        </div>
      </Container>
    </Section>
  );
}

