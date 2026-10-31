import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions governing the use of IDEATOBUSINESS services and public website.',
};

export default function TermsPage() {
  return (
    <Section background="white">
      <Container size="narrow">
        <div className="prose prose-slate max-w-none">
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            [LEGAL NOTICE — SUBJECT TO FORMAL REVIEW BEFORE PRODUCTION]
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-2">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500 mb-8">Last Updated: October 30, 2026</p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. Scope of Services</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            IDEATOBUSINESS provides business advisory, branding, software development, e-commerce onboarding, and marketing services. For statutory and regulatory filings, we act as an advisory and procedural facilitation partner coordinating with verified legal and accounting professionals.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. Quotations and Commercial Engagements</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            All prices displayed on the public website are indicative working proposals. Formal binding engagements are initiated only upon customer review and mutual execution of an itemized statement of work (SOW) or invoice detailing exact inclusions, exclusions, and payment milestones.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Customer Obligations</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Customers agree to furnish genuine, accurate documentation (including valid KYC credentials and proofs of address) required for regulatory, marketplace, or payment gateway applications. IDEATOBUSINESS is not liable for delays or rejections arising from forged, incomplete, or expired documentation provided by the client.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">4. Intellectual Property</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Upon full settlement of agreed service invoices, 100% of final approved deliverables—including vector logo files, brand identity guides, website source code, and registered domain accounts—are transferred to the client.
          </p>
        </div>
      </Container>
    </Section>
  );
}

