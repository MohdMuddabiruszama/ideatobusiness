import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { ScrollStoryExperience } from '@/components/how-it-works/ScrollStoryExperience';

export const metadata: Metadata = {
  title: 'How It Works — Step-by-Step Delivery Roadmap',
  description:
    'Discover our structured 6-step service delivery process from initial business concept intake to live operations and ongoing support.',
};

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white py-16 sm:py-24 border-b border-slate-200/60 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-100 text-brand-800 mb-4 border border-brand-200 shadow-2xs">
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

      {/* Six-Phase Interactive Scroll-Driven Storytelling Experience */}
      <ScrollStoryExperience />

      {/* Bottom Call to Action Section */}
      <Section background="white" className="border-t border-slate-100">
        <Container size="narrow">
          <div className="text-center space-y-6 py-6 sm:py-10">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Ready to Turn Your Vision Into Reality?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Join hundreds of entrepreneurs who launched with clarity, confidence, and complete support.
            </p>
            <div className="pt-2">
              <Button href="/get-started" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start Your Business Journey Today
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
