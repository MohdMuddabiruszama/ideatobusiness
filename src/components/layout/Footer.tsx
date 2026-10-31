import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_LINKS } from '@/data/navigation';
import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-slate-300 border-t border-brand-950">
      {/* Main Footer */}
      <div className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <div className="relative h-12 w-52">
                  <Image
                    src="/logos/logo-light.png"
                    alt="IDEATOBUSINESS Logo"
                    fill
                    className="object-contain object-left"
                    sizes="220px"
                  />
                </div>
              </Link>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
                {SITE_CONFIG.subtagline}
              </p>
              <div className="space-y-2.5 text-sm pt-2">
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-brand-emerald transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-brand-emerald" />
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-brand-emerald transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-brand-emerald" />
                  {SITE_CONFIG.contact.email}
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
                    SITE_CONFIG.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-brand-emerald transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-brand-emerald" />
                  WhatsApp Direct Support
                </a>
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-brand-emerald" />
                  <span>
                    {SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.state},{' '}
                    {SITE_CONFIG.contact.address.country}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Clock className="w-4 h-4 shrink-0 text-brand-emerald" />
                  {SITE_CONFIG.contact.businessHours}
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-brand-800 pb-2">
                Popular Services
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-brand-emerald transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-brand-800 pb-2">
                Company & Resources
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-brand-emerald transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-brand-800 pb-2">
                Legal & Disclosures
              </h4>
              <ul className="space-y-2.5 mb-8">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-brand-emerald transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Channels */}
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Connect With Us
              </h4>
              <div className="flex items-center gap-2.5">
                {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-800 text-slate-200 hover:bg-brand-emerald hover:text-white transition-all text-xs font-bold uppercase"
                    aria-label={`Follow us on ${platform}`}
                  >
                    {platform.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal Notice Bar */}
      <div className="border-t border-brand-800/80 py-6 bg-brand-950">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
            <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
            <p>
              Prices shown are working proposals. Government fees, GST, and third-party charges are billed separately at actuals.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
