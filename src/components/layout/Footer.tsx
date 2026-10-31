'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Check, Send } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Sell Online', href: '/sell-online' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const OUR_SERVICES_LINKS = [
  { label: 'Business Setup', href: '/services?department=business-launch' },
  { label: 'Branding & Design', href: '/services?department=branding-design' },
  { label: 'Website & Technology', href: '/services?department=website-technology' },
  { label: 'Marketplace Selling', href: '/services?department=marketplace-selling' },
  { label: 'Marketing & Growth', href: '/services?department=marketing-growth' },
];

const SUPPORT_LINKS = [
  { label: 'Help Center', href: '/contact' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', label: 'in', href: 'https://linkedin.com' },
  { name: 'Instagram', label: 'ig', href: 'https://instagram.com' },
  { name: 'YouTube', label: 'yt', href: 'https://youtube.com' },
  { name: 'X', label: 'x', href: 'https://x.com' },
  { name: 'Facebook', label: 'fb', href: 'https://facebook.com' },
];

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0B2D1F] text-slate-300 border-t border-emerald-950">
      {/* Main Footer Container */}
      <div className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Brand Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-block">
                <div className="relative h-11 w-48">
                  <Image
                    src="/logos/Light logo.png"
                    alt="IDEATOBUSINESS Logo"
                    fill
                    className="object-contain object-left"
                    sizes="200px"
                  />
                </div>
              </Link>
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                We help individuals and businesses turn their ideas into real businesses with the right strategy, branding, technology and ongoing support.
              </p>

              {/* Social Channels Row */}
              <div className="flex items-center gap-2 pt-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-brand-emerald hover:text-white transition-all text-xs font-bold uppercase"
                    aria-label={s.name}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-brand-emerald transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Our Services
              </h4>
              <ul className="space-y-2 text-sm">
                {OUR_SERVICES_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-brand-emerald transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Support
              </h4>
              <ul className="space-y-2 text-sm">
                {SUPPORT_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-brand-emerald transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe to Updates (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Subscribe to Updates
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Get business tips, new resources and offers.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-bold text-brand-emerald bg-emerald-950/60 border border-emerald-800 p-2.5 rounded-xl">
                  <Check className="w-4 h-4" /> Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full text-xs px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-emerald"
                  />
                  <button
                    type="submit"
                    className="bg-brand-emerald hover:bg-emerald-600 text-white p-2.5 rounded-lg transition-colors shrink-0"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom Legal Notice */}
      <div className="border-t border-white/10 py-5 bg-[#081e14]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
            <p>&copy; 2026 IDEATOBUSINESS. All rights reserved.</p>
            <p className="text-slate-400">
              From Idea to Business &nbsp;|&nbsp; Built for Entrepreneurs
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
