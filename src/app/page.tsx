import { HeroSection } from '@/components/home/HeroSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ServiceCategories } from '@/components/home/ServiceCategories';
import { HowItWorksPreview } from '@/components/home/HowItWorksPreview';
import { FeaturedPackages } from '@/components/home/FeaturedPackages';
import { FAQPreview } from '@/components/home/FAQPreview';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhyChooseUs />
      <ServiceCategories />
      <HowItWorksPreview />
      <FeaturedPackages />
      <FAQPreview />
      <CTASection />
    </div>
  );
}
