import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/site';
import { Target, Compass, Users, CheckCircle2, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Mission, Vision & Platform Approach',
  description:
    'Learn about IDEATOBUSINESS, our mission to simplify the entrepreneurial journey, and our coordinated service platform for founders.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white py-16 sm:py-24 border-b border-slate-200/60 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-100 text-brand-800 mb-4 border border-brand-200">
              Our Story & Purpose
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Making Entrepreneurship <br />
              <span className="text-brand-600">Simpler, Understandable & Accessible</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              IDEATOBUSINESS was founded with a singular conviction: starting and scaling a business should not be bogged down by opaque pricing, fragmented agencies, and bureaucratic maze.
            </p>
          </div>
        </Container>
      </div>

      {/* Mission & Vision Section */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-brand-100 bg-gradient-to-br from-brand-50/40 to-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white mb-5 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Make the journey of starting and growing a business simpler, more understandable, accessible, and convenient by bringing essential services together under one coordinated roof.
              </p>
            </Card>

            <Card className="p-8 border-2 border-accent-100 bg-gradient-to-br from-accent-50/40 to-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600 text-white mb-5 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Become India&apos;s most trusted, transparent business launchpad that reliably helps people turn creative ideas into viable, legally compliant, and sustainable enterprises.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Who We Help */}
      <Section background="subtle">
        <Container>
          <SectionHeading
            eyebrow="Target Audience"
            title="Who We Are Built For"
            subtitle="Tailored workflows designed around the real hurdles entrepreneurs encounter at each phase."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <span className="text-xs font-bold uppercase text-brand-600 tracking-wider">Group 01</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">Idea-Stage Founders</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Individuals with a business concept who need market validation, entity selection guidance, and a concrete operational plan before leaving a job or deploying capital.
              </p>
            </Card>

            <Card className="p-6">
              <span className="text-xs font-bold uppercase text-brand-600 tracking-wider">Group 02</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">New Business Owners</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Entrepreneurs who require legal GST/MSME registrations, distinctive logo and brand assets, corporate email mailboxes, and high-converting websites.
              </p>
            </Card>

            <Card className="p-6">
              <span className="text-xs font-bold uppercase text-brand-600 tracking-wider">Group 03</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">Existing Small Businesses</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Physical retail stores and manufacturers seeking to expand into multi-channel e-commerce on Amazon, Flipkart, Meesho, or their own D2C web storefront.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Service Delivery Philosophy */}
      <Section background="white">
        <Container size="narrow">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="w-6 h-6 text-brand-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Our Operational Principles
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              We operate as a coordinated service provider. IDEATOBUSINESS delivers design, technology, and marketing services directly while partnering with qualified Chartered Accountants and legal practitioners for statutory compliance:
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span><strong>No False Promises:</strong> We never promise &quot;guaranteed approvals&quot; or &quot;instant revenue&quot;. We provide diligent, compliant execution.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span><strong>100% Asset Ownership:</strong> All domains, master vector design files, and website repositories belong fully to you upon project handover.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span><strong>Itemized Transparency:</strong> Government statutory fees and third-party infrastructure costs are always kept distinct from service fees.</span>
              </div>
            </div>

            <div className="mt-8 text-center sm:text-left">
              <Button href="/get-started" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Work With Us Today
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

