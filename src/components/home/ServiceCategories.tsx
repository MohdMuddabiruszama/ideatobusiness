import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { DEPARTMENTS } from '@/data/departments';
import { ArrowRight } from 'lucide-react';

const DEPARTMENT_3D_ICONS: Record<string, string> = {
  'business-launch': '/icons/Glossy Emerald Rocket Launch Icon.png',
  'branding-design': '/icons/Glossy Creative Design Toolkit.png',
  'website-technology': '/icons/Glossy 3D Web Development Monitor.png',
  'marketplace-selling': '/icons/Glossy 3D Shopping Cart Icon.png',
  'marketing-growth': '/icons/Glossy Emerald Social Media Megaphone.png',
};

export function ServiceCategories() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          eyebrow="Core Departments"
          title="Everything You Need to Grow"
          subtitle="Explore our 5 specialized departments designed to support you from startup ideation through market scale."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((dept) => {
            const iconPath = DEPARTMENT_3D_ICONS[dept.slug];
            return (
              <Card key={dept.slug} hoverable className="flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {iconPath ? (
                      <div className="relative h-14 w-14 shrink-0 transition-transform group-hover:scale-110 duration-200">
                        <Image
                          src={iconPath}
                          alt={dept.name}
                          fill
                          className="object-contain"
                          sizes="56px"
                        />
                      </div>
                    ) : (
                      <div className="h-12 w-12 rounded-xl bg-brand-mint text-brand-emerald flex items-center justify-center font-bold">
                        IB
                      </div>
                    )}
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-[#4B5563]">
                      {dept.servicesCount} Services
                    </span>
                  </div>

                  <h3 className="text-[22px] font-semibold text-brand-deep leading-snug group-hover:text-brand-emerald transition-colors">
                    {dept.name}
                  </h3>
                  <p className="mt-2.5 text-base text-[#4B5563] leading-relaxed">
                    {dept.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/services?department=${dept.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald hover:text-brand-deep group-hover:translate-x-1 transition-all"
                  >
                    Browse {dept.name} Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            );
          })}

          {/* Callout Card */}
          <div className="rounded-[16px] bg-gradient-to-br from-brand-deep via-[#0e3b29] to-brand-deep p-6 sm:p-8 text-white flex flex-col justify-between shadow-lg">
            <div>
              <span className="inline-block text-xs uppercase tracking-wider font-bold text-accent-yellow mb-2">
                Need Help Deciding?
              </span>
              <h3 className="text-2xl font-bold text-white leading-tight">
                Not sure which services you need?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Fill out our 2-minute business assessment and receive a tailored roadmap created specifically for your startup stage.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/get-started" variant="accent" fullWidth size="md">
                Get a Free Roadmap →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
