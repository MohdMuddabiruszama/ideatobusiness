import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { BUSINESS_PACKAGES, MONTHLY_PLANS } from '@/data/packages';
import { FAQS } from '@/data/faqs';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, HelpCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Pricing & Packages — Transparent Business Bundles',
  description:
    'Explore our startup bundles and monthly support plans. Clear itemized deliverables, zero hidden markups, and transparent service scope.',
};

export default function PricingPage() {
  const pricingFaqs = FAQS.filter((f) => f.category === 'pricing' || f.category === 'general').slice(0, 6).map((f) => ({
    id: f.id,
    title: f.question,
    content: f.answer,
  }));

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white py-16 sm:py-24 border-b border-slate-200/60 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-100 text-brand-800 mb-4 border border-brand-200">
              Transparent Pricing
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Simple, Predictable Packages <br />
              <span className="text-brand-600">For Every Stage of Your Business</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Choose an all-in-one launch package or pick standalone services. No long-term locked contracts, no hidden agency commissions.
            </p>

            {/* Proposal Notice */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/80 text-xs sm:text-sm">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Note:</strong> Displayed prices are initial working proposals. Exact scopes and quotations are finalized upon reviewing your specific entity type.
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* 4 Launch Packages */}
      <Section background="white">
        <Container>
          <SectionHeading
            eyebrow="Business Launch Packages"
            title="Complete Bundles for Starting & Scaling"
            subtitle="Save up to 40% compared to purchasing individual standalone services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {BUSINESS_PACKAGES.map((pkg) => {
              const isPopular = pkg.popular;
              return (
                <div
                  key={pkg.id}
                  className={cn(
                    'relative rounded-2xl flex flex-col justify-between p-6 sm:p-7 transition-all duration-300',
                    isPopular
                      ? 'border-2 border-brand-500 bg-white shadow-xl shadow-brand-500/10 -translate-y-1'
                      : 'border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
                  )}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-600 to-emerald-700 px-3 py-1 text-xs font-bold text-white shadow-sm">
                        <Sparkles className="w-3 h-3" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                    <p className="mt-1 text-xs text-slate-500 min-h-[32px]">{pkg.tagline}</p>

                    <div className="mt-5 pb-5 border-b border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                          {pkg.priceDisplay}
                        </span>
                        {pkg.isIndicative && (
                          <span className="text-xs font-medium text-slate-500">/ package</span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Professional service fee. Taxes & govt fees separate.
                      </p>
                    </div>

                    {/* Target audience */}
                    <p className="mt-4 text-xs font-medium text-brand-700 bg-brand-50/70 p-2 rounded-lg">
                      Best for: {pkg.targetAudience}
                    </p>

                    {/* Inclusions */}
                    <div className="mt-5">
                      <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                        What&apos;s Included:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {pkg.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Not Included:
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-slate-400">
                        {pkg.exclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <X className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Button
                      href={`/get-started?package=${pkg.slug}`}
                      variant={isPopular ? 'primary' : 'outline'}
                      fullWidth
                      size="md"
                    >
                      {pkg.ctaLabel}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Monthly Care & Maintenance Plans */}
      <Section background="subtle">
        <Container>
          <SectionHeading
            eyebrow="Monthly Plans"
            title="Ongoing Operational & Tech Support"
            subtitle="Ensure your business website stays updated, secure, and actively promoted on social channels every month."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MONTHLY_PLANS.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  'flex flex-col justify-between',
                  plan.highlight && 'border-2 border-brand-500 shadow-md'
                )}
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{plan.tagline}</p>

                  <div className="mt-4 pb-4 border-b border-slate-100">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {plan.priceDisplay}
                    </span>
                    <span className="text-xs text-slate-500 ml-1">/ {plan.billingPeriod}</span>
                  </div>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Button
                    href={`/get-started?package=${plan.slug}`}
                    variant={plan.highlight ? 'primary' : 'secondary'}
                    fullWidth
                    size="sm"
                  >
                    Select Plan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* What is NOT Included (Transparency Section) */}
      <Section background="white">
        <Container size="narrow">
          <div className="rounded-2xl border-2 border-slate-200 bg-slate-50/70 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-brand-600" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                What Is Never Bundled Into Service Fees (100% Transparency)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              To keep our costs completely transparent, we do not bundle third-party or government expenses into professional service charges. These are billed at actuals directly to respective providers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <strong>Government Fees:</strong> MCA incorporation filing fees, stamp duties, and municipal taxes.
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <strong>Domains & Hosting:</strong> Annual domain registrar and cloud hosting subscriptions.
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <strong>Ad Budgets:</strong> Media ad spend paid directly to Meta or Google Ads accounts.
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <strong>Marketplace Commissions:</strong> Referral & shipping fees charged by Amazon/Flipkart/Meesho.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing FAQs */}
      <Section background="subtle">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Pricing FAQ"
            title="Common Questions About Pricing & Payments"
            subtitle="Everything you need to know about invoices, payment modes, and refund policies."
          />

          <Accordion items={pricingFaqs} defaultOpenId="faq-5" />

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600 mb-4">Need a tailored quotation for a customized project?</p>
            <Button href="/contact" variant="secondary" size="lg">
              Request a Custom Quotation
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

