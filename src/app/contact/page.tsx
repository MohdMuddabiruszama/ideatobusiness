import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import { SITE_CONFIG } from '@/data/site';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us — Speak with a Business Advisory Specialist',
  description:
    'Get in touch with the IDEATOBUSINESS advisory desk via phone, email, WhatsApp, or through our direct enquiry form.',
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappMessage)}`;

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white py-16 sm:py-24 border-b border-slate-200/60 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-100 text-brand-800 mb-4 border border-brand-200">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              We&apos;re Here to Help You <br />
              <span className="text-brand-600">Build Your Business</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Have questions about our service packages, need an exact quotation, or want to discuss a customized project? Reach out through any of our channels below.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Contact Grid */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 5 Cols: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Our advisory desk is available Monday through Saturday. We typically respond to new enquiries within 24 business hours.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us</h4>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                      className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors"
                    >
                      {SITE_CONFIG.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">{SITE_CONFIG.contact.businessHours}</p>
                  </div>
                </Card>

                <Card className="p-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</h4>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">For enquiries and proposals</p>
                  </div>
                </Card>

                <Card className="p-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp</h4>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-green-700 hover:underline inline-flex items-center gap-1"
                    >
                      Chat on WhatsApp →
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Quick questions & status checks</p>
                  </div>
                </Card>

                <Card className="p-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Office Location</h4>
                    <p className="text-sm font-semibold text-slate-900">
                      {SITE_CONFIG.contact.address.line1}
                    </p>
                    <p className="text-xs text-slate-500">
                      {SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.state} - {SITE_CONFIG.contact.address.postalCode}
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right 7 Cols: Contact Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8 border-2 border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Message</h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  Fill out the form below and an advisory coordinator will respond shortly.
                </p>
                <ContactForm />
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

