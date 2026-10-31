import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Percent,
  Truck,
  ShieldCheck,
  Store,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sell Online — Amazon, Flipkart, Meesho & Direct E-commerce Store',
  description:
    'Start selling your products across India’s leading marketplaces. Complete onboarding, catalogue creation, tax configuration, and direct store setups.',
};

const PLATFORMS = [
  {
    name: 'Meesho',
    tagline: 'India’s fastest-growing marketplace with 0% commission',
    targetAudience: 'Tier-2, Tier-3, and value-conscious Indian consumers',
    commission: '0% commission on most product categories',
    logistics: 'Handled via Meesho 3PL partner network',
    bestFor: 'Fashion apparel, home decor, kitchenware, accessories',
    badge: 'Zero Commission',
    link: '/services/meesho-seller-account-setup-assistance',
  },
  {
    name: 'Amazon India',
    tagline: 'Access millions of high-intent Amazon Prime buyers',
    targetAudience: 'Metro & Tier-1 shoppers prioritizing brand trust and speed',
    commission: 'Category-based referral fee (3% - 15%)',
    logistics: 'Amazon Easy Ship or Fulfillment by Amazon (FBA)',
    bestFor: 'Branded goods, electronics, personal care, books, sports',
    badge: 'High Volume',
    link: '/services/amazon-seller-account-setup-assistance',
  },
  {
    name: 'Flipkart',
    tagline: 'The homegrown retail giant with nationwide delivery',
    targetAudience: 'Pan-India buyers during mega festive sale events',
    commission: 'Category commission + fixed closing fees',
    logistics: 'Integrated Ekart nationwide logistics network',
    bestFor: 'Electronics, fashion, mobiles, large appliances',
    badge: 'Mega Reach',
    link: '/services/flipkart-seller-account-setup-assistance',
  },
  {
    name: 'Own Online Store',
    tagline: 'Build customer loyalty with 100% margin retention',
    targetAudience: 'Direct-to-consumer (D2C) brand loyalists',
    commission: '0% platform fee (standard 2% payment gateway only)',
    logistics: 'Integrated with Shiprocket, NimbusPost, Delhivery',
    bestFor: 'Custom brands wanting direct customer relationships & repeat orders',
    badge: '100% Control',
    link: '/services/ecommerce-website-development',
  },
];

export default function SellOnlinePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white py-16 sm:py-24 border-b border-slate-200/60">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="orange" size="md" className="mb-4">
              Marketplace & E-Commerce Growth
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Launch Your Products on <br />
              <span className="text-brand-600">Amazon, Flipkart, Meesho & Your Own Store</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              We eliminate the complexity of seller onboarding, catalogue feeds, GST configuration, and margin modeling so you can focus on inventory and sales.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/get-started?department=marketplace-selling" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Start Selling Online
              </Button>
              <Button href="#comparison" variant="secondary" size="lg">
                Compare Platforms
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Platform Cards Section */}
      <Section id="comparison" background="white">
        <Container>
          <SectionHeading
            eyebrow="Channel Selection"
            title="Which Marketplace Is Right For Your Business?"
            subtitle="Understand fee structures, fulfillment expectations, and customer profiles across India’s leading sales channels."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORMS.map((platform) => (
              <Card key={platform.name} hoverable className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Channel
                    </span>
                    <Badge variant={platform.name === 'Own Online Store' ? 'amber' : 'emerald'} size="sm">
                      {platform.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{platform.name}</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed min-h-[32px]">
                    {platform.tagline}
                  </p>

                  <div className="mt-5 space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-4">
                    <div>
                      <strong className="text-slate-900 block font-semibold">Audience:</strong>
                      {platform.targetAudience}
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Commissions:</strong>
                      {platform.commission}
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Logistics:</strong>
                      {platform.logistics}
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Best Suited For:</strong>
                      {platform.bestFor}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Button href={platform.link} variant="outline" fullWidth size="sm">
                    View Onboarding Details →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How We Support Marketplace Sellers */}
      <Section background="subtle">
        <Container>
          <SectionHeading
            eyebrow="Our Support Ecosystem"
            title="Complete Marketplace Handholding from Day One"
            subtitle="We handle the technical and operational tasks so your seller accounts stay healthy and highly ranked."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">1. Verification & Tax Readiness</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                GSTIN verification, bank mandate validation, pickup warehouse address confirmation, and category brand authorization.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">2. SEO Catalogues & Infographics</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Keyword-indexed titles, 5 benefit-driven bullet points, backend search tags, and professional white-background photo enhancements.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mb-4">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">3. Net Margin Modeling</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Accurate fee calculators factoring in closing fees, shipping weight slabs, and customer return buffers so you never sell at a loss.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button href="/get-started?department=marketplace-selling" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Get Marketplace Consultation
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

