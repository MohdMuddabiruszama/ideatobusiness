import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { GetStartedForm } from '@/components/forms/GetStartedForm';
import { ShieldCheck, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Started — Launch Your Business With Us',
  description:
    'Submit your startup or business requirements in 2 minutes. Receive a customized execution roadmap, transparent pricing, and expert guidance.',
};

export default function GetStartedPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white py-12 sm:py-16 border-b border-slate-200/60 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-100 text-brand-800 mb-3 border border-brand-200">
              Zero Commitment Intake
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Get Started with <span className="text-brand-600">IDEATOBUSINESS</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Tell us about your venture or service needs. We will review your requirements and provide an actionable roadmap within 24 business hours.
            </p>

            {/* Quick trust metrics */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-600" /> Response within 24h
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-600" /> 100% Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-600" /> Transparent Scope
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Form Section */}
      <Section background="white" padding="md">
        <Container>
          <GetStartedForm />
        </Container>
      </Section>
    </div>
  );
}

