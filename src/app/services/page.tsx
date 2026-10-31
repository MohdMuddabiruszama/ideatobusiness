import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceExplorer } from '@/components/services/ServiceExplorer';

export const metadata: Metadata = {
  title: 'Services Directory — All 30 Startup & Growth Offerings',
  description:
    'Browse our complete catalogue of business launch, branding, website development, marketplace selling, and marketing growth services.',
};

export default function ServicesPage() {
  return (
    <Section background="white" padding="md">
      <Container>
        <SectionHeading
          eyebrow="Service Directory"
          title="Browse All 30 Professional Services"
          subtitle="Filter by department or search specifically for the capability your venture needs today."
          align="left"
        />

        <ServiceExplorer />
      </Container>
    </Section>
  );
}

