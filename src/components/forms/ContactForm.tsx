'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { contactFormSchema, ContactFormInput } from '@/lib/validation/schemas';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormInput>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consentAccepted: true,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setServerError(null);

    // Validate
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Bot check
    if (formData.honeypot) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // In production/dev this will call the enquiries API endpoint
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          businessStage: 'IDEA',
          departmentSlug: 'business-launch',
          message: `[Contact Form - ${formData.subject}]: ${formData.message}`,
          preferredContact: 'ANY',
          consentAccepted: true,
          honeypot: formData.honeypot,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit enquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-brand-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          Thank you for reaching out. An account specialist will review your message and get in touch within 24 business hours.
        </p>
        <div className="mt-6">
          <Button onClick={() => setIsSubmitted(false)} variant="secondary" size="sm">
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot || ''}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {serverError && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{serverError}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
          Full Name *
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g. Ramesh Kumar"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@domain.com"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 9876543210"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
          Subject *
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="e.g. Inquiry regarding Pvt Ltd & GST Registration"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
          Message *
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us a bit about your venture and what you are looking to achieve..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          id="contactConsent"
          checked={formData.consentAccepted}
          onChange={(e) => setFormData({ ...formData, consentAccepted: e.target.checked })}
          className="mt-1 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
        />
        <label htmlFor="contactConsent" className="text-xs text-slate-600 leading-snug">
          I agree to be contacted by IDEATOBUSINESS regarding my enquiry in accordance with the Privacy Policy.
        </label>
      </div>
      {errors.consentAccepted && <p className="text-xs text-red-600">{errors.consentAccepted}</p>}

      <div className="pt-2">
        <Button type="submit" isLoading={isSubmitting} fullWidth size="lg">
          Send Message
        </Button>
      </div>
    </form>
  );
}

