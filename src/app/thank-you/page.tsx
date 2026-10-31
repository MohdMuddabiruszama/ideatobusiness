'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/data/site';
import { CheckCircle2, MessageCircle, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const enquiryId = searchParams.get('id');

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    `Hi IDEATOBUSINESS, I just submitted an enquiry${enquiryId ? ` (Ref: ${enquiryId})` : ''} and wanted to follow up.`
  )}`;

  return (
    <div className="max-w-2xl mx-auto text-center py-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 mx-auto mb-6 shadow-sm">
        <CheckCircle2 className="w-10 h-10 text-brand-600" />
      </div>

      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700 border border-brand-200 mb-3">
        Submission Successful
      </span>

      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
        Thank You! Your Enquiry Has Been Received.
      </h1>

      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
        We have safely logged your requirements. A dedicated IDEATOBUSINESS specialist will review your stage and contact you within 24 business hours.
      </p>

      {enquiryId && (
        <div className="mt-4 inline-block bg-slate-100 px-4 py-2 rounded-xl text-xs font-mono text-slate-700 border border-slate-200">
          Enquiry Reference ID: <strong className="text-slate-900">{enquiryId}</strong>
        </div>
      )}

      {/* What Happens Next Card */}
      <Card className="mt-8 p-6 sm:p-8 text-left border border-slate-200/90 bg-slate-50/70">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-brand-600" /> What Happens Next?
        </h3>
        <ol className="space-y-4 text-xs sm:text-sm text-slate-700">
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-xs shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-slate-900 block font-semibold">Requirement Assessment:</strong>
              Our team reviews your business idea, required licenses, brand assets, and platform suitability.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-xs shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-slate-900 block font-semibold">Specialist Outreach:</strong>
              Your assigned coordinator will reach out via your preferred method (WhatsApp, phone, or email).
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-xs shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-slate-900 block font-semibold">Customized Proposal:</strong>
              You receive an itemized deliverable checklist with milestone schedules and clear pricing.
            </div>
          </li>
        </ol>
      </Card>

      {/* Urgent actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          href={whatsappUrl}
          target="_blank"
          variant="primary"
          size="lg"
          leftIcon={<MessageCircle className="w-5 h-5 text-white" />}
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
        >
          Need Immediate Assistance? Chat on WhatsApp
        </Button>
        <Button href="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
          Browse More Services
        </Button>
      </div>

      <div className="mt-8 text-xs text-slate-400">
        <Link href="/" className="hover:text-slate-600 underline">
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Section background="white" padding="md">
      <Container>
        <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading confirmation...</div>}>
          <ThankYouContent />
        </Suspense>
      </Container>
    </Section>
  );
}

