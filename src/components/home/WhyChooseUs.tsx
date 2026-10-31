import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

const BENEFITS = [
  {
    iconImg: '/icons/Glossy Emerald Document Icon.png',
    title: 'One Platform, 30 Essential Services',
    description:
      'No more juggling between five freelance agencies, accountants, and web developers. We coordinate everything in one streamlined workflow.',
  },
  {
    iconImg: '/icons/Glossy Blue Shield with Golden Padlock.png',
    title: 'Transparent Pricing & No Surprises',
    description:
      'Clear itemized deliverables. We transparently separate government statutory fees, domain registrations, and third-party costs from service charges.',
  },
  {
    iconImg: '/icons/Glossy Emerald Team Icon.png',
    title: 'Dedicated Account Specialist',
    description:
      'Work with a single dedicated point of contact who understands your overall business goals and guides you through each milestone.',
  },
  {
    iconImg: '/icons/Glossy Green Checklist Clock Icon.png',
    title: 'Fast Execution & Milestone Delivery',
    description:
      'Get your business entity registered, brand assets crafted, and website deployed with rapid 24-48h initial review turnarounds.',
  },
];

export function WhyChooseUs() {
  return (
    <Section background="subtle">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Designed for Aspiring Entrepreneurs and Growing Businesses"
          subtitle="Starting a business shouldn't feel chaotic. We provide structured guidance, verified domain processes, and reliable technical execution."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <Card key={benefit.title} hoverable className="flex flex-col">
              <div className="relative h-14 w-14 mb-5 shrink-0">
                <Image
                  src={benefit.iconImg}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-brand-deep leading-snug">
                {benefit.title}
              </h3>
              <p className="mt-2.5 text-base text-[#4B5563] leading-relaxed flex-1">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
