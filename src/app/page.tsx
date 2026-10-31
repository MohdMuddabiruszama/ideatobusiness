import { HeroSection } from '@/components/home/HeroSection';
import { ServiceCategories } from '@/components/home/ServiceCategories';
import { HowItWorksPreview } from '@/components/home/HowItWorksPreview';
import { SellOnlinePreview } from '@/components/home/SellOnlinePreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { WhoWeHelp } from '@/components/home/WhoWeHelp';
import { ResourcesPreview } from '@/components/home/ResourcesPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQPreview } from '@/components/home/FAQPreview';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero with Partner Logos Bar */}
      <HeroSection />

      {/* 2. Our Services (5 Core Departments) */}
      <ServiceCategories />

      {/* 3. Simple Process (5 Steps to Launch) */}
      <HowItWorksPreview />

      {/* 4. Sell Online (Marketplace Onboarding) */}
      <SellOnlinePreview />

      {/* 5. Why Choose Us (Dark Green Banner with Metrics) */}
      <WhyChooseUs />

      {/* 6. Who We Help (Target Audiences) */}
      <WhoWeHelp />

      {/* 7. Resources (Knowledge Guides) */}
      <ResourcesPreview />

      {/* 8. Testimonials (Client Reviews) */}
      <TestimonialsSection />

      {/* 9. FAQs (Top Inquiries Accordion) */}
      <FAQPreview />

      {/* 10. Final Call to Action (Email & Consultation) */}
      <CTASection />
    </div>
  );
}
