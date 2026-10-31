import { FAQItem } from '@/types';

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is IDEATOBUSINESS and how does it work?',
    answer:
      'IDEATOBUSINESS is a coordinated service-led platform that helps aspiring entrepreneurs, new business owners, and growing enterprises access essential business startup, branding, tech, and marketing services from a single trusted partner. You submit your business idea or requirements, receive a clear roadmap and quotation, confirm your service package, and track deliverables with dedicated support.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'Is IDEATOBUSINESS a government department or agency?',
    answer:
      'No. IDEATOBUSINESS is an independent private consultancy and services firm. For all statutory registrations (such as GST, MSME, or company incorporation), we provide coordination, documentation review, and procedural assistance through qualified legal and financial professionals. Statutory approvals are granted solely by respective government authorities.',
  },
  {
    id: 'faq-3',
    category: 'services',
    question: 'Can I select just one individual service rather than a package?',
    answer:
      'Yes. While our curated packages bundle complementary services at discounted rates, every one of our 30 individual services can be availed standalone. You can request a quote or get started with just the specific service you need today.',
  },
  {
    id: 'faq-4',
    category: 'registration',
    question: 'Do you guarantee government approval for GST or Company Registration?',
    answer:
      'No legitimate professional can guarantee government approval. Official registrations are granted solely at the discretion of government departments (e.g., Ministry of Corporate Affairs, GST department). However, our thorough pre-submission verification of documents, premises proofs, and HSN codes minimizes errors and significantly reduces the likelihood of queries or rejections.',
  },
  {
    id: 'faq-5',
    category: 'pricing',
    question: 'Are government statutory fees included in your displayed prices?',
    answer:
      'No. Government statutory fees (such as MCA filing fees, stamp duty, municipal licence fees, and trademark registry costs) vary by state, authorized capital, and entity type. We clearly separate our professional service coordination charges from government statutory fees and third-party costs so there are never any hidden surprises.',
  },
  {
    id: 'faq-6',
    category: 'services',
    question: 'How do you help with marketplace selling on Amazon, Flipkart, and Meesho?',
    answer:
      'We provide end-to-end seller onboarding: setting up your seller central accounts, configuring shipping zones and tax codes, optimizing product catalogue feeds with high-converting search keywords, and calculating realistic profit margins factoring in all marketplace commissions and return costs.',
  },
  {
    id: 'faq-7',
    category: 'process',
    question: 'What happens after I submit the Get Started form?',
    answer:
      'Once submitted, your enquiry is logged securely in our system. An account coordinator will review your business requirements within 24 business hours and contact you via your preferred method (WhatsApp, phone, or email) to discuss scope, deliverables, timeline, and an exact quotation.',
  },
  {
    id: 'faq-8',
    category: 'services',
    question: 'Who owns the website and design files you create for my business?',
    answer:
      'You do! Upon full project completion and payment settlement, 100% of the intellectual property—including vector source files (AI/EPS/SVG), website code, and domain registrations—belongs entirely to your business. We never hold your digital assets hostage.',
  },
  {
    id: 'faq-9',
    category: 'pricing',
    question: 'What payment methods do you accept?',
    answer:
      'Once your scope and quotation are approved, we accept payments via secure UPI (Google Pay, PhonePe, Paytm), direct NEFT/IMPS bank transfers, and major debit/credit cards. Milestone-based payment schedules are available for larger customized projects.',
  },
  {
    id: 'faq-10',
    category: 'process',
    question: 'How do I track the progress of my requested services?',
    answer:
      'You are assigned a dedicated project coordinator who provides regular milestone updates via email and WhatsApp. For complex website or design projects, staging links and revision previews are shared at each key milestone before final sign-off.',
  },
];

export function getFAQsByCategory(category?: string): FAQItem[] {
  if (!category || category === 'all') return FAQS;
  return FAQS.filter((faq) => faq.category === category);
}

