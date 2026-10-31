import { NavItem } from '@/types';

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Business Launch',
        href: '/services?department=business-launch',
        description: 'Registrations, idea validation, and business planning',
        iconName: 'Rocket',
      },
      {
        label: 'Branding & Design',
        href: '/services?department=branding-design',
        description: 'Logos, visual identity, packaging, and promo assets',
        iconName: 'Palette',
      },
      {
        label: 'Website & Technology',
        href: '/services?department=website-technology',
        description: 'Corporate websites, e-commerce stores, and software',
        iconName: 'Globe',
      },
      {
        label: 'Marketplace Selling',
        href: '/services?department=marketplace-selling',
        description: 'Seller setup on Amazon, Flipkart, and Meesho',
        iconName: 'ShoppingBag',
      },
      {
        label: 'Marketing & Growth',
        href: '/services?department=marketing-growth',
        description: 'Social media, SEO rankings, and performance ads',
        iconName: 'TrendingUp',
      },
    ],
  },
  { label: 'Sell Online', href: '/sell-online', badge: 'Hot' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  services: [
    { label: 'Business Idea Validation', href: '/services/business-idea-validation' },
    { label: 'Business Registration Assistance', href: '/services/business-registration-assistance' },
    { label: 'GST Registration Assistance', href: '/services/gst-registration-assistance' },
    { label: 'Custom Logo Design', href: '/services/logo-design' },
    { label: 'Business Website Development', href: '/services/business-website-development' },
    { label: 'E-commerce Website Development', href: '/services/ecommerce-website-development' },
    { label: 'Amazon Seller Onboarding', href: '/services/amazon-seller-account-setup-assistance' },
    { label: 'Meesho Seller Setup', href: '/services/meesho-seller-account-setup-assistance' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing & Packages', href: '/pricing' },
    { label: 'Sell Online Guide', href: '/sell-online' },
    { label: 'Knowledge Resources', href: '/resources' },
    { label: 'Frequently Asked Questions', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund & Cancellation', href: '/refund-policy' },
    { label: 'Disclaimer & Disclosures', href: '/disclaimer' },
  ],
};

