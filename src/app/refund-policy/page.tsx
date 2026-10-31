import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'Refund, cancellation, and milestone billing policy for IDEATOBUSINESS.',
};

export default function RefundPolicyPage() {
  return (
    <Section background="white">
      <Container size="narrow">
        <div className="prose prose-slate max-w-none">
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            [LEGAL NOTICE — SUBJECT TO FORMAL REVIEW BEFORE PRODUCTION]
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-2">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs text-slate-500 mb-8">Last Updated: October 30, 2026</p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. Milestone-Based Service Delivery</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Because our services involve customized advisory time, technical engineering, creative graphic design, and specialized legal documentation, services are structured and billed based on mutually agreed milestone stages.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. Pre-Execution Cancellation</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            If an order is cancelled prior to the commencement of work, research, or drafting, the client is eligible for a full refund minus applicable payment gateway processing charges (typically 2-3%).
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Work in Progress</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Once work on a particular milestone has commenced (such as logo concepts submitted, website wireframes delivered, or government portal forms drafted), fees allocated to that completed or in-progress milestone are non-refundable. Any uninitiated subsequent milestone fees will be credited or refunded.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">4. Government Statutory Fees & Third Parties</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Statutory government fees (MCA fees, stamp duties, GST challans, trademark registry fees), domain registration charges, and third-party advertising spends are disbursed directly to external bodies and are strictly non-refundable under all circumstances.
          </p>
        </div>
      </Container>
    </Section>
  );
}

