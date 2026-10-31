import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BUSINESS_PACKAGES } from '@/data/packages';
import { Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FeaturedPackages() {
  return (
    <Section background="white">
      <Container>
        <SectionHeading
          eyebrow="Popular Bundles"
          title="Curated Packages for Every Growth Stage"
          subtitle="Pre-configured bundles designed to minimize initial overhead. All prices are indicative proposals with transparent deliverable checklists."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={cn(
                  'relative rounded-[16px] flex flex-col justify-between p-6 sm:p-7 transition-all duration-300',
                  isPopular
                    ? 'border-2 border-brand-emerald bg-white shadow-card-hover -translate-y-1'
                    : 'border border-[#E5E7EB] bg-white hover:border-brand-emerald hover:shadow-card-hover'
                )}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-emerald to-accent-orange px-3 py-1 text-xs font-bold text-white shadow-sm">
                      <Sparkles className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-[22px] font-semibold text-brand-deep">{pkg.name}</h3>
                  <p className="mt-1 text-xs text-[#4B5563] min-h-[32px]">{pkg.tagline}</p>

                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-brand-deep tracking-tight">
                        {pkg.priceDisplay}
                      </span>
                      {pkg.isIndicative && (
                        <span className="text-xs font-medium text-slate-500">/ package*</span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      *Indicative service fee. Taxes & govt fees additional.
                    </p>
                  </div>

                  {/* Inclusions */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold text-brand-deep uppercase tracking-wider mb-3">
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Button
                    href={`/get-started?package=${pkg.slug}`}
                    variant={isPopular ? 'primary' : 'secondary'}
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

        <div className="mt-12 text-center text-sm text-[#4B5563]">
          Looking for monthly maintenance or custom enterprise scope?{' '}
          <Link href="/pricing" className="font-semibold text-brand-emerald hover:underline">
            Compare all packages and monthly plans →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
