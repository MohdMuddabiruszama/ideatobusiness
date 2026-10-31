import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SERVICES, getServiceBySlug, getServicesByDepartment } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  Check,
  ArrowRight,
  Clock,
  FileCheck,
  ChevronRight,
  Sparkles,
  Shield,
} from 'lucide-react';

const DEPARTMENT_3D_ICONS: Record<string, string> = {
  'business-launch': '/icons/Glossy Emerald Rocket Launch Icon.png',
  'branding-design': '/icons/Glossy Creative Design Toolkit.png',
  'website-technology': '/icons/Glossy 3D Web Development Monitor.png',
  'marketplace-selling': '/icons/Glossy 3D Shopping Cart Icon.png',
  'marketing-growth': '/icons/Glossy Emerald Social Media Megaphone.png',
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} — ${service.departmentName}`,
    description: service.description,
    openGraph: {
      title: `${service.name} | IDEATOBUSINESS`,
      description: service.tagline,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getServicesByDepartment(service.departmentSlug)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const isComplianceService = [
    'business-registration-assistance',
    'gst-registration-assistance',
    'udyam-msme-registration-assistance',
    'shop-and-establishment-licence-assistance',
  ].includes(service.slug);

  const iconPath = DEPARTMENT_3D_ICONS[service.departmentSlug];

  return (
    <div>
      {/* Breadcrumbs & Hero Header */}
      <div className="bg-brand-mint/40 border-b border-[#E5E7EB] py-8 sm:py-12">
        <Container>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#4B5563] mb-4 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-brand-emerald transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/services" className="hover:text-brand-emerald transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link
              href={`/services?department=${service.departmentSlug}`}
              className="hover:text-brand-emerald transition-colors"
            >
              {service.departmentName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-brand-deep font-semibold truncate">{service.name}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-4xl">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-mint text-brand-emerald border border-brand-emerald/30 mb-3">
                {service.departmentName}
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-deep tracking-tight leading-tight">
                {service.name}
              </h1>
              <p className="mt-4 text-base sm:text-xl text-[#4B5563] font-medium leading-relaxed">
                {service.tagline}
              </p>
            </div>

            {iconPath && (
              <div className="relative h-20 w-20 sm:h-28 sm:w-28 shrink-0">
                <Image
                  src={iconPath}
                  alt={service.name}
                  fill
                  className="object-contain"
                  sizes="112px"
                  priority
                />
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Main Content & Sidebar Grid */}
      <Section background="white" padding="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            {/* Left 2 Cols: Main Service Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Compliance Notice if applicable */}
              {isComplianceService && (
                <div className="rounded-[16px] bg-amber-50 border border-amber-200/70 p-5 flex items-start gap-3.5 text-xs sm:text-sm text-amber-900">
                  <Shield className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5 text-brand-deep">
                      Statutory Assistance & Advisory Notice:
                    </strong>
                    IDEATOBUSINESS provides procedural assistance, documentation review, and filing coordination through qualified professionals. Final statutory certificates and approvals are issued exclusively by competent government authorities.
                  </div>
                </div>
              )}

              {/* Service Overview */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-deep tracking-tight mb-4">
                  Service Overview
                </h2>
                <p className="text-base text-[#4B5563] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 p-4 rounded-[12px] bg-brand-mint border border-brand-emerald/20 text-sm text-brand-deep">
                  <strong className="font-semibold text-brand-deep">The Problem It Solves:</strong>{' '}
                  <span className="text-[#4B5563]">{service.problemSolved}</span>
                </div>
              </div>

              {/* Who Is It For */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-deep tracking-tight mb-4">
                  Who Is It For?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.whoIsItFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-[12px] border border-[#E5E7EB] bg-white"
                    >
                      <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#4B5563] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-deep tracking-tight mb-4">
                  What&apos;s Included in This Service
                </h2>
                <ul className="space-y-3">
                  {service.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#4B5563]">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint text-brand-emerald shrink-0 mt-0.5 font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents / Information */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-deep tracking-tight mb-4">
                  Required Documents & Information
                </h2>
                <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F3F4F6] p-5">
                  <p className="text-xs sm:text-sm text-[#4B5563] mb-3">
                    To begin processing without delays, please have the following ready when our team contacts you:
                  </p>
                  <ul className="space-y-2">
                    {service.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-navy">
                        <FileCheck className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Delivery Process */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-deep tracking-tight mb-4">
                  Delivery Process & Milestones
                </h2>
                <div className="space-y-4">
                  {service.deliveryProcess.map((step) => (
                    <div
                      key={step.step}
                      className="flex items-start gap-4 p-4 rounded-[12px] border border-[#E5E7EB] bg-white"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-deep text-white font-bold text-xs shrink-0">
                        0{step.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-brand-deep">{step.title}</h4>
                        <p className="mt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div>
                <h2 className="text-lg font-bold text-brand-deep tracking-tight mb-2">
                  Exclusions & Third-Party Dependencies
                </h2>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-500">
                  {service.exclusions.map((ex, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sticky Pricing & Action Sidebar */}
            <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-6">
              {/* Order Card */}
              <div className="rounded-[16px] border-2 border-brand-emerald bg-white shadow-card-hover p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-deep">
                    Pricing Approach
                  </span>
                  {service.popular && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-navy bg-accent-yellow px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" /> Popular
                    </span>
                  )}
                </div>

                <div className="mb-5 pb-5 border-b border-slate-100">
                  <p className="text-3xl font-bold text-brand-deep tracking-tight">
                    {service.priceDisplay}
                  </p>
                  <p className="text-xs text-[#4B5563] mt-1">
                    Indicative professional service fee. Clear itemized quotation provided after consultation.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                    <Clock className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Rapid 24-48h initial review</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                    <Check className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>Dedicated account coordinator</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                    <Shield className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>100% Asset ownership upon completion</span>
                  </div>
                </div>

                <Button
                  href={`/get-started?service=${service.slug}&department=${service.departmentSlug}`}
                  variant="primary"
                  fullWidth
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started →
                </Button>

                <p className="mt-3 text-center text-[11px] text-slate-400">
                  No advance payment required to submit requirements.
                </p>
              </div>

              {/* Related Services in Department */}
              {relatedServices.length > 0 && (
                <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F3F4F6] p-5">
                  <h4 className="text-sm font-bold text-brand-deep mb-3">
                    Other {service.departmentName} Services
                  </h4>
                  <div className="space-y-2.5">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className="block p-3 rounded-[10px] bg-white border border-[#E5E7EB] hover:border-brand-emerald hover:shadow-card transition-all group"
                      >
                        <p className="text-xs sm:text-sm font-semibold text-brand-deep group-hover:text-brand-emerald">
                          {rel.name}
                        </p>
                        <p className="text-[11px] text-[#4B5563] mt-0.5">{rel.priceDisplay}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
