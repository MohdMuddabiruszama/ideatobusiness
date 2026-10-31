import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and data collection disclosures for IDEATOBUSINESS.',
};

export default function PrivacyPolicyPage() {
  return (
    <Section background="white">
      <Container size="narrow">
        <div className="prose prose-slate max-w-none">
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            [LEGAL NOTICE — SUBJECT TO FORMAL REVIEW BEFORE PRODUCTION]
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mb-8">Last Updated: October 30, 2026</p>

          <p className="text-sm leading-relaxed text-slate-700">
            At <strong>IDEATOBUSINESS</strong>, we respect your privacy and are committed to protecting the personal information you share with us through our website and service consultation workflows.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            When you submit an enquiry, request a roadmap, or contact us, we collect:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Contact details (Full Name, Email Address, Mobile Number)</li>
            <li>Business context (Business stage, proposed business name, city, and state)</li>
            <li>Service requirements and specific messages provided in enquiry forms</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. How We Use Your Information</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Your information is used strictly to:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Review and respond to your service requests and deliver tailored roadmaps</li>
            <li>Communicate project milestones and deliver requested deliverables</li>
            <li>Coordinate with accredited legal, tax, and technological specialists for service execution</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. We Do Not Sell Your Data</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            We never sell, rent, or lease customer contact lists or personal data to third-party telemarketers or external advertising networks.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">4. Data Retention and Security</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            We implement industry-standard encryption, SSL transport security, and parameterized database access controls to safeguard your data. You may request deletion or rectification of your lead information by writing to our support desk.
          </p>
        </div>
      </Container>
    </Section>
  );
}

