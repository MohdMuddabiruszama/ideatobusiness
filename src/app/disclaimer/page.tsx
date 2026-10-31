import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Disclaimer & Scope Disclosures',
  description: 'Scope, regulatory disclosures, and third-party dependency disclaimers for IDEATOBUSINESS.',
};

export default function DisclaimerPage() {
  return (
    <Section background="white">
      <Container size="narrow">
        <div className="prose prose-slate max-w-none">
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            [REGULATORY DISCLOSURE NOTICE]
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-2">
            Disclaimer & Disclosures
          </h1>
          <p className="text-xs text-slate-500 mb-8">Last Updated: October 30, 2026</p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. Non-Government Entity Disclaimer</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            <strong>IDEATOBUSINESS is an independent private consultancy firm.</strong> We are not affiliated with, operated by, or endorsed by the Ministry of Corporate Affairs (MCA), the Goods and Services Tax (GST) Council, the Ministry of MSME, or any other government authority or municipal body in India or elsewhere.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. No Guarantee of Government Approvals</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            While our team exercises high professional diligence in reviewing documentation, verifying business premises proofs, and aligning classification codes, statutory approvals (including GSTIN issuance, company incorporation, and municipal trade licenses) are granted solely at the discretion of respective government inspecting officers. No professional consultancy can or should guarantee statutory approval.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Marketplace Platform Independence</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Amazon, Flipkart, and Meesho are registered trademarks of their respective owners. IDEATOBUSINESS is an independent service facilitator helping sellers onboard and optimize listings. Marketplace algorithms, buy-box allocations, seller suspensions, and return policies are governed entirely by respective platforms.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">4. Commercial Results & Growth Disclaimers</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            We provide strategic blueprints, advertising configurations, and marketing creatives. We do not make exaggerated guarantees of sales volume, revenue growth, or specific financial results, as commercial outcomes depend on product quality, competitive pricing, inventory fulfillment, and market demand.
          </p>
        </div>
      </Container>
    </Section>
  );
}

