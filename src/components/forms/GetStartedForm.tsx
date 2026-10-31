'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { DEPARTMENTS } from '@/data/departments';
import { SERVICES, getServicesByDepartment } from '@/data/services';
import { BUSINESS_PACKAGES } from '@/data/packages';
import { enquiryFormSchema, EnquiryFormInput } from '@/lib/validation/schemas';
import { submitEnquiry } from '@/lib/actions/enquiry';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  User,
  Building,
  Layers,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

function GetStartedFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<EnquiryFormInput>({
    fullName: '',
    email: '',
    phone: '',
    businessStage: 'IDEA',
    departmentSlug: 'business-launch',
    serviceSlug: '',
    packageSlug: '',
    businessName: '',
    city: '',
    country: 'India',
    message: '',
    preferredContact: 'ANY',
    consentAccepted: true,
    honeypot: '',
  });

  // Pre-fill from query params if coming from a specific service or package page
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const departmentParam = searchParams.get('department');
    const packageParam = searchParams.get('package');

    if (departmentParam) {
      setFormData((prev) => ({ ...prev, departmentSlug: departmentParam }));
    }
    if (serviceParam) {
      const s = SERVICES.find((item) => item.slug === serviceParam);
      if (s) {
        setFormData((prev) => ({
          ...prev,
          serviceSlug: s.slug,
          departmentSlug: s.departmentSlug,
        }));
      }
    }
    if (packageParam) {
      setFormData((prev) => ({ ...prev, packageSlug: packageParam }));
    }
  }, [searchParams]);

  const availableServices = getServicesByDepartment(formData.departmentSlug);

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim() || formData.fullName.length < 2) {
        errors.fullName = 'Please enter your full name (at least 2 characters).';
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        errors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone.trim() || formData.phone.length < 7) {
        errors.phone = 'Please enter a valid phone number with country code.';
      }
    }

    if (step === 2) {
      if (!formData.businessStage) {
        errors.businessStage = 'Please choose your current business stage.';
      }
    }

    if (step === 3) {
      if (!formData.departmentSlug) {
        errors.departmentSlug = 'Please select a service department.';
      }
      if (!formData.message.trim() || formData.message.length < 10) {
        errors.message = 'Please provide a brief message of at least 10 characters.';
      }
    }

    if (step === 4) {
      if (!formData.consentAccepted) {
        errors.consentAccepted = 'Consent is required to submit your enquiry.';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setFieldErrors({});
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setFieldErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateStep(4)) return;

    setIsSubmitting(true);

    try {
      const result = await submitEnquiry(formData);
      if (!result.success) {
        setServerError(result.error);
        if (result.fieldErrors) setFieldErrors(result.fieldErrors);
      } else {
        router.push(`/thank-you?id=${result.enquiryId}`);
      }
    } catch (err) {
      setServerError('An unexpected error occurred. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { num: 1, title: 'Contact', icon: User },
    { num: 2, title: 'Business', icon: Building },
    { num: 3, title: 'Requirements', icon: Layers },
    { num: 4, title: 'Review', icon: CheckCircle2 },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot || ''}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Progress Steps Header */}
      <div className="mb-8">
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {steps.map((s) => {
            const isCompleted = currentStep > s.num;
            const isCurrent = currentStep === s.num;
            const StepIcon = s.icon;

            return (
              <div
                key={s.num}
                className={cn(
                  'flex flex-col items-center p-2.5 sm:p-3 rounded-xl border transition-all text-center',
                  isCurrent
                    ? 'border-brand-500 bg-brand-50/70 shadow-sm'
                    : isCompleted
                    ? 'border-slate-200 bg-slate-50 text-slate-700'
                    : 'border-slate-100 bg-white text-slate-400'
                )}
              >
                <div
                  className={cn(
                    'flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-xs font-bold mb-1.5 transition-colors',
                    isCurrent
                      ? 'bg-brand-600 text-white'
                      : isCompleted
                      ? 'bg-brand-100 text-brand-800'
                      : 'bg-slate-100 text-slate-400'
                  )}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span
                  className={cn(
                    'text-[11px] sm:text-xs font-semibold leading-tight truncate w-full',
                    isCurrent ? 'text-brand-900' : 'text-slate-600'
                  )}
                >
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Form Card */}
      <Card className="p-6 sm:p-10 border-2 border-slate-200 shadow-md">
        <form onSubmit={handleSubmit}>
          {/* STEP 1: Contact Information */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 1: Your Contact Information</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  How should our business advisory team reach you with your roadmap?
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                {fieldErrors.fullName && (
                  <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number (with country code) *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  {fieldErrors.phone && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'ANY', label: 'Any Method' },
                    { id: 'WHATSAPP', label: 'WhatsApp' },
                    { id: 'PHONE', label: 'Phone Call' },
                  ].map((method) => (
                    <button
                      type="button"
                      key={method.id}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          preferredContact: method.id as 'EMAIL' | 'PHONE' | 'WHATSAPP' | 'ANY',
                        })
                      }
                      className={cn(
                        'py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all',
                        formData.preferredContact === method.id
                          ? 'border-brand-500 bg-brand-50 text-brand-800'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      )}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Business Stage & Details */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 2: Tell Us About Your Venture</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  What stage is your business currently in?
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Business Stage *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'IDEA',
                      title: 'Only An Idea',
                      desc: 'Validating concept & planning startup roadmap',
                    },
                    {
                      id: 'NEW_BUSINESS',
                      title: 'Newly Started',
                      desc: 'Ready for entity registration, logo & website',
                    },
                    {
                      id: 'EXISTING_BUSINESS',
                      title: 'Existing Business',
                      desc: 'Scaling marketplace sales, SEO & marketing',
                    },
                  ].map((stage) => {
                    const isSelected = formData.businessStage === stage.id;
                    return (
                      <button
                        type="button"
                        key={stage.id}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            businessStage: stage.id as 'IDEA' | 'NEW_BUSINESS' | 'EXISTING_BUSINESS',
                          })
                        }
                        className={cn(
                          'p-4 rounded-xl border text-left transition-all flex flex-col justify-between',
                          isSelected
                            ? 'border-brand-500 bg-brand-50/80 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300'
                        )}
                      >
                        <span className={cn('text-sm font-bold', isSelected ? 'text-brand-800' : 'text-slate-900')}>
                          {stage.title}
                        </span>
                        <span className="text-xs text-slate-500 mt-1 leading-snug">{stage.desc}</span>
                      </button>
                    );
                  })}
                </div>
                {fieldErrors.businessStage && (
                  <p className="mt-1 text-xs text-red-600">{fieldErrors.businessStage}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Business Name (if already decided)
                </label>
                <input
                  type="text"
                  value={formData.businessName || ''}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Apex Organic Foods"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    City / Town
                  </label>
                  <input
                    type="text"
                    value={formData.city || ''}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Bengaluru"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Country
                  </label>
                  <input
                    type="text"
                    value={formData.country || 'India'}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="India"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Service Selection & Message */}
          {currentStep === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 3: Select Services Needed</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Choose the department and specific service you are interested in.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Interested Department *
                </label>
                <select
                  value={formData.departmentSlug}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      departmentSlug: e.target.value,
                      serviceSlug: '', // reset selected service when department changes
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.slug} value={dept.slug}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Specific Service (Optional)
                </label>
                <select
                  value={formData.serviceSlug || ''}
                  onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">-- General consultation for this department --</option>
                  {availableServices.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.name} ({service.priceDisplay})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Package Interest (Optional)
                </label>
                <select
                  value={formData.packageSlug || ''}
                  onChange={(e) => setFormData({ ...formData, packageSlug: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">-- None / Standalone Service --</option>
                  {BUSINESS_PACKAGES.map((pkg) => (
                    <option key={pkg.slug} value={pkg.slug}>
                      {pkg.name} ({pkg.priceDisplay})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Brief Requirements / Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your business idea, product category, or specific goals you want assistance with..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 4: Review & Confirm Submission</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Please verify your details before submitting your enquiry.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Name:</span>
                  <strong className="text-slate-900">{formData.fullName}</strong>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Contact:</span>
                  <span className="text-slate-900">{formData.email} | {formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Business Stage:</span>
                  <span className="text-slate-900 font-semibold">{formData.businessStage}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Department:</span>
                  <span className="text-slate-900 font-semibold">{formData.departmentSlug}</span>
                </div>
                {formData.serviceSlug && (
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Service:</span>
                    <span className="text-slate-900">{formData.serviceSlug}</span>
                  </div>
                )}
                {formData.packageSlug && (
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Package:</span>
                    <span className="text-brand-700 font-semibold">{formData.packageSlug}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 block mb-1">Message:</span>
                  <p className="text-slate-800 bg-white p-3 rounded-lg border border-slate-200 italic">
                    &quot;{formData.message}&quot;
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consentCheckbox"
                    checked={formData.consentAccepted}
                    onChange={(e) => setFormData({ ...formData, consentAccepted: e.target.checked })}
                    className="mt-1 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                  />
                  <label htmlFor="consentCheckbox" className="text-xs text-slate-600 leading-snug">
                    I consent to be contacted by IDEATOBUSINESS regarding my business consultation request. I understand my contact details will be handled strictly in accordance with the Privacy Policy and will never be sold to third-party telemarketers.
                  </label>
                </div>
                {fieldErrors.consentAccepted && (
                  <p className="mt-1 text-xs text-red-600">{fieldErrors.consentAccepted}</p>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <Button
                type="button"
                onClick={prevStep}
                variant="secondary"
                size="md"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                Previous Step
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <Button
                type="button"
                onClick={nextStep}
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                isLoading={isSubmitting}
                size="lg"
                rightIcon={<Check className="w-4 h-4" />}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 shadow-md"
              >
                Submit Business Enquiry
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}

export function GetStartedForm() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading form...</div>}>
      <GetStartedFormContent />
    </Suspense>
  );
}

