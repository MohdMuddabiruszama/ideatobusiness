export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Startup Guide' | 'GST & Legal' | 'Marketplace' | 'Branding' | 'Technology';
  readTime: string;
  publishedDate: string;
  author: string;
  checklistItems?: string[];
  content: string[];
}

export const RESOURCES: ResourceArticle[] = [
  {
    id: 'res-1',
    slug: 'startup-launch-checklist-india',
    title: 'The Complete Startup Launch Checklist for India',
    excerpt:
      'A practical step-by-step checklist covering entity selection, bank account opening, GST, MSME, and initial brand assets.',
    category: 'Startup Guide',
    readTime: '6 min read',
    publishedDate: 'October 2026',
    author: 'IDEATOBUSINESS Advisory Team',
    checklistItems: [
      'Define unique business name and verify trademark class availability',
      'Choose legal structure: Proprietorship vs LLP vs Private Limited',
      'Obtain PAN card and open a dedicated business current bank account',
      'Apply for GSTIN and Udyam/MSME certificate registration',
      'Secure primary web domain (.com / .in) and setup professional mailboxes',
      'Create high-resolution vector logo and brand guidelines',
    ],
    content: [
      'Launching a business in India requires balancing commercial ambition with regulatory compliance. Whether you are selling physical goods or offering specialized consulting, establishing a solid legal and financial foundation early prevents costly legal headaches later.',
      'Step 1 begins with choosing your business entity. For solo entrepreneurs testing an idea with limited liability exposure, a Sole Proprietorship offers simplicity. However, if you plan to seek venture capital or onboard co-founders, a Private Limited Company provides shareholding flexibility.',
      'Step 2 is securing your tax identity. Registering for GST is not only legally required above turnover thresholds, but mandatory if you intend to sell on e-commerce marketplaces like Amazon or Flipkart.',
      'Step 3 is establishing a credible digital footprint. Customers today perform Google searches before committing money. A fast, modern website and professional corporate email build instant trust.',
    ],
  },
  {
    id: 'res-2',
    slug: 'gst-registration-guide-for-online-sellers',
    title: 'GST Registration Guide: Everything E-Commerce Sellers Must Know',
    excerpt:
      'Understanding HSN codes, interstate supply regulations, and required business premises documentation for GST.',
    category: 'GST & Legal',
    readTime: '5 min read',
    publishedDate: 'October 2026',
    author: 'Compliance Advisory Desk',
    checklistItems: [
      'Identity and KYC proofs (PAN & Aadhaar of all promoters)',
      'Proof of principal place of business (Electricity bill + Rent agreement + NOC)',
      'Valid cancelled cheque or bank statement showing business name',
      'Selection of appropriate 4-digit or 6-digit HSN codes',
    ],
    content: [
      'To sell online across state borders on portals like Amazon, Flipkart, or Meesho, GST registration is compulsory regardless of whether your revenue is zero or one crore.',
      'The most frequent cause of GST application delay is improper address documentation. The address on your electricity bill must match the rent agreement verbatim, and the property owner must provide an explicit No Objection Certificate (NOC).',
      'Ensure you select accurate HSN (Harmonized System of Nomenclature) codes for your products. Incorrect codes can result in mismatched tax rates and scrutiny notices.',
    ],
  },
  {
    id: 'res-3',
    slug: 'how-to-start-selling-on-meesho-amazon-flipkart',
    title: 'How to Start Selling on Meesho, Amazon, and Flipkart in 2026',
    excerpt:
      'Compare fees, onboarding steps, logistics, and target customer demographics across India’s top 3 marketplaces.',
    category: 'Marketplace',
    readTime: '8 min read',
    publishedDate: 'October 2026',
    author: 'E-commerce Growth Team',
    checklistItems: [
      'Active GSTIN with pickup address located in a serviceable pin code',
      'Verified current bank account for weekly marketplace settlements',
      'Minimum 5 high-resolution product photographs (white background)',
      'Competitive price margin calculation accounting for return shipping costs',
    ],
    content: [
      'India’s e-commerce landscape offers massive consumer reach, but each marketplace serves a distinct customer demographic with unique fee dynamics.',
      'Meesho excels in tier-2, tier-3, and rural regions with zero seller commission, making it ideal for unbranded apparel, home utilities, and accessories. However, pricing must remain extremely competitive.',
      'Amazon Prime customers prioritize fast delivery and brand authenticity. Selling on Amazon demands professional catalogue feeds, barcode compliance, and prompt dispatch adherence.',
      'Flipkart dominates electronics, mobile accessories, and branded fashion. Sellers benefit from Ekart’s extensive nationwide logistics coverage.',
    ],
  },
  {
    id: 'res-4',
    slug: 'branding-vs-logo-why-identity-matters',
    title: 'Logo vs Brand Identity: Why High-Growth Startups Need More Than a Icon',
    excerpt:
      'Why a standalone logo is not enough to build customer loyalty, and how color psychology and consistent typography convert buyers.',
    category: 'Branding',
    readTime: '4 min read',
    publishedDate: 'October 2026',
    author: 'Brand Design Studio',
    content: [
      'A logo is merely the visual signature of your company. Your brand identity, by contrast, is the entire sensory ecosystem through which customers perceive, remember, and trust your business.',
      'A complete visual identity establishes deliberate typography hierarchies, strict colour ratios, packaging dielines, and conversational brand tone. When customers encounter consistent design across your Instagram, packaging box, and website, perceived product value triples.',
    ],
  },
];

