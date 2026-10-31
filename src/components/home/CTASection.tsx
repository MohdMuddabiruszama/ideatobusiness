import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';

export function CTASection() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    SITE_CONFIG.contact.whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-brand-deep py-16 sm:py-24 text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-emerald/10 blur-3xl pointer-events-none" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-yellow bg-white/10 rounded-full border border-white/20 mb-4">
            Take The First Step Today
          </span>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Ready to turn your business idea into a launched enterprise?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Submit your requirements in under 2 minutes. Receive a customized execution roadmap, transparent quotation, and dedicated advisory support.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/get-started"
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Get Started →
            </Button>
            <Button
              href={whatsappUrl}
              target="_blank"
              size="lg"
              variant="secondary"
              leftIcon={<MessageCircle className="w-5 h-5 text-brand-emerald" />}
              className="w-full sm:w-auto border-white text-brand-deep hover:bg-slate-100"
            >
              Chat on WhatsApp
            </Button>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            No obligation. We respond within 24 business hours.
          </p>
        </div>
      </Container>
    </section>
  );
}
