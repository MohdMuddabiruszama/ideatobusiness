export type BusinessStage = 'IDEA' | 'NEW_BUSINESS' | 'EXISTING_BUSINESS';

export type EnquiryStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUALIFIED'
  | 'QUOTED'
  | 'CONVERTED'
  | 'NOT_CONVERTED'
  | 'CLOSED';

export type ContactMethod = 'EMAIL' | 'PHONE' | 'WHATSAPP' | 'ANY';

export interface ServiceDepartment {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  iconName: string;
  accentColor: string;
  servicesCount: number;
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  departmentSlug: string;
  departmentName: string;
  tagline: string;
  description: string;
  whoIsItFor: string[];
  problemSolved: string;
  inclusions: string[];
  requirements: string[];
  deliveryProcess: {
    step: number;
    title: string;
    description: string;
  }[];
  priceDisplay: string;
  startingPrice?: number;
  isStartingPriceEstimate?: boolean;
  exclusions: string[];
  popular?: boolean;
  iconName: string;
}

export interface PackageFeature {
  name: string;
  included: boolean;
  notes?: string;
}

export interface BusinessPackage {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  priceDisplay: string;
  priceNumber: number;
  isIndicative: boolean;
  popular?: boolean;
  targetAudience: string;
  description: string;
  inclusions: string[];
  exclusions: string[];
  ctaLabel: string;
}

export interface MonthlyPlan {
  id: string;
  slug: string;
  name: string;
  priceDisplay: string;
  billingPeriod: string;
  tagline: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'pricing' | 'process' | 'registration';
}

export interface ProcessStep {
  step: number;
  title: string;
  shortSummary: string;
  description: string;
  deliverable: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    iconName?: string;
  }[];
}

export interface EnquirySubmission {
  fullName: string;
  email: string;
  phone: string;
  businessStage: BusinessStage;
  departmentSlug: string;
  serviceSlug?: string;
  packageSlug?: string;
  businessName?: string;
  city?: string;
  country?: string;
  message: string;
  preferredContact: ContactMethod;
  consentAccepted: boolean;
  sourcePath?: string;
}

