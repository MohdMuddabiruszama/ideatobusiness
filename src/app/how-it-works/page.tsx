import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { HOW_IT_WORKS_STEPS } from '@/data/how-it-works';
import { Check, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works — Step-by-Step Delivery Roadmap',
  description:
    'Discover our structured 6-step service delivery process from initial business concept intake to live operations and ongoing support.',
};

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white py-16 sm:py-24 border-b border-slate-200/60 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-100 text-brand-800 mb-4 border border-brand-200">
              Transparent Operations
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              A Clear Roadmap From <br />
              <span className="text-brand-600">Business Idea to Live Operations</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We eliminated bureaucratic confusion and scattered freelancers. Here is exactly what happens from the moment you submit your enquiry to project delivery.
            </p>
          </div>
        </Container>
      </div>

      {/* 6 Steps Detailed Section */}
      <Section background="white">
        <Container size="narrow">
          <div className="space-y-12 sm:space-y-16">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 sm:p-8 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-3 md:flex-col md:items-center shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white font-black text-xl shadow-md">
                    0{step.step}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Phase {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    {step.shortSummary}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs sm:text-sm text-brand-900 font-semibold bg-brand-50/70 p-3 rounded-xl border border-brand-100">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Deliverable: {step.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/get-started" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Start Your Business Journey Today
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

