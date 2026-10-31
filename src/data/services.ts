import { ServiceItem } from '@/types';

export const SERVICES: ServiceItem[] = [
  // ==========================================
  // DEPARTMENT 1: Business Launch (6 Services)
  // ==========================================
  {
    id: 'bl-1',
    slug: 'business-idea-validation',
    name: 'Business Idea Validation',
    departmentSlug: 'business-launch',
    departmentName: 'Business Launch',
    tagline: 'Stress-test your concept before investing your time and capital.',
    description:
      'Evaluate the commercial viability, target market dynamics, and competitive landscape of your business idea before committing significant capital.',
    whoIsItFor: [
      'Aspiring entrepreneurs with a raw concept',
      'Professionals planning to transition into startup founders',
      'Innovators seeking independent third-party market feasibility feedback',
    ],
    problemSolved:
      'Prevents founders from pouring savings into unverified ideas that lack market demand or face prohibitive regulatory barriers.',
    inclusions: [
      'Target demographic & market demand assessment',
      'Direct competitor analysis and differentiation matrix',
      'Risk assessment and feasibility score card',
      '60-minute strategy review consultation',
    ],
    requirements: [
      'Brief description of your business idea',
      'Target geography or customer segment',
      'Proposed monetization model (if any)',
    ],
    deliveryProcess: [
      { step: 1, title: 'Concept Intake', description: 'Submit your business thesis and specific assumptions to test.' },
      { step: 2, title: 'Market Research', description: 'Our team examines market size, demand trends, and competitive density.' },
      { step: 3, title: 'Validation Report', description: 'Receive an actionable diagnostic report with clear recommendations.' },
    ],
    priceDisplay: 'Starting from ₹999',
    startingPrice: 999,
    isStartingPriceEstimate: true,
    exclusions: ['Product development', 'Legal incorporation fees', 'Customer acquisition execution'],
    popular: true,
    iconName: 'Lightbulb',
  },
  {
    id: 'bl-2',
    slug: 'business-plan-creation',
    name: 'Business Plan Creation',
    departmentSlug: 'business-launch',
    departmentName: 'Business Launch',
    tagline: 'A clear operational roadmap and financial projection document.',
    description:
      'Comprehensive business planning documentation designed to guide operational execution and support loan or investor discussions.',
    whoIsItFor: [
      'Entrepreneurs seeking bank loans or MSME financing',
      'Founders needing a step-by-step operational strategy',
      'Teams preparing initial investor pitch decks',
    ],
    problemSolved:
      'Eliminates confusion and lack of direction by structuring revenue models, cost structures, and milestone timelines into one unified document.',
    inclusions: [
      'Executive summary & value proposition',
      'Operational workflow & milestone roadmap',
      '3-year financial projection model (revenue, opex, breakeven)',
      'Editable document formats (PDF & Word/Excel)',
    ],
    requirements: [
      'Validated business model details',
      'Pricing strategy and cost assumptions',
      'Target customer profiles and geographic focus',
    ],
    deliveryProcess: [
      { step: 1, title: 'Discovery Session', description: 'Deep-dive interview into your revenue goals and operating model.' },
      { step: 2, title: 'Drafting & Modeling', description: 'Preparation of operational narratives and financial tables.' },
      { step: 3, title: 'Review & Refinement', description: 'Joint walkthrough session and delivery of finalized documentation.' },
    ],
    priceDisplay: 'Starting from ₹4,999',
    startingPrice: 4999,
    isStartingPriceEstimate: true,
    exclusions: ['Guaranteed loan or investor funding', 'Audited chartered accountant balance sheets'],
    iconName: 'FileText',
  },
  {
    id: 'bl-3',
    slug: 'business-registration-assistance',
    name: 'Business Registration Assistance',
    departmentSlug: 'business-launch',
    departmentName: 'Business Launch',
    tagline: 'End-to-end coordination for Sole Proprietorship, Partnership, LLP, or Pvt Ltd.',
    description:
      'Professional coordination and procedural assistance to structure and register your business entity with official regulatory authorities.',
    whoIsItFor: [
      'First-time founders setting up their first legal business entity',
      'Freelancers transitioning into formal registered businesses',
      'Co-founders incorporating a private limited company or LLP',
    ],
    problemSolved:
      'Demystifies confusing compliance documentation, MCA portals, and procedural paperwork.',
    inclusions: [
      'Entity type selection guidance (Proprietorship vs LLP vs Pvt Ltd)',
      'Name search and reservation coordination',
      'Document checklist, drafting, and portal submission guidance',
      'Coordination through certified legal/CA partners',
    ],
    requirements: [
      'Identity & address proofs of promoters (PAN, Aadhaar)',
      'Registered office address proof with utility bill and NOC',
      'Proposed business names in priority order',
    ],
    deliveryProcess: [
      { step: 1, title: 'Entity Selection', description: 'We help you choose the most appropriate legal structure.' },
      { step: 2, title: 'Document Verification', description: 'Collection and preliminary audit of all required records.' },
      { step: 3, title: 'Filing Coordination', description: 'Coordinated processing through registered professional channels.' },
    ],
    priceDisplay: 'Starting from ₹1,999',
    startingPrice: 1999,
    isStartingPriceEstimate: true,
    exclusions: ['Government statutory filing fees and stamp duties', 'Post-incorporation ongoing compliance'],
    popular: true,
    iconName: 'Building',
  },
  {
    id: 'bl-4',
    slug: 'gst-registration-assistance',
    name: 'GST Registration Assistance',
    departmentSlug: 'business-launch',
    departmentName: 'Business Launch',
    tagline: 'Obtain your Goods & Services Tax identification number smoothly.',
    description:
      'Guidance and document coordination to apply for your GSTIN, enabling inter-state commerce and online marketplace selling.',
    whoIsItFor: [
      'Marketplace sellers on Amazon, Flipkart, or Meesho',
      'Businesses crossing statutory annual turnover limits',
      'Vendors needing GST invoices to work with corporate clients',
    ],
    problemSolved:
      'Prevents application rejections or clarifications caused by incorrect HSN code selection or flawed premises documentation.',
    inclusions: [
      'Eligibility verification & HSN/SAC classification',
      'Documentation review for business premises & ownership',
      'Application drafting and portal submission assistance',
      'Clarification notice response coordination if raised by tax officer',
    ],
    requirements: [
      'PAN card and Aadhaar card of applicant/directors',
      'Bank account proof (cancelled cheque or statement)',
      'Rent agreement/electricity bill and owner NOC for premises',
    ],
    deliveryProcess: [
      { step: 1, title: 'Document Collection', description: 'Review your KYC and place-of-business proofs against GST rules.' },
      { step: 2, title: 'Portal Application', description: 'Accurate filing of GST REG-01 with appropriate HSN codes.' },
      { step: 3, title: 'Certificate Handover', description: 'Delivery of GST certificate (REG-06) upon approval.' },
    ],
    priceDisplay: 'Starting from ₹1,499',
    startingPrice: 1499,
    isStartingPriceEstimate: true,
    exclusions: ['Monthly or quarterly GST return filings', 'Government penalties for prior non-compliance'],
    iconName: 'Receipt',
  },
  {
    id: 'bl-5',
    slug: 'udyam-msme-registration-assistance',
    name: 'Udyam / MSME Registration Assistance',
    departmentSlug: 'business-launch',
    departmentName: 'Business Launch',
    tagline: 'Unlock government MSME subsidies, schemes, and priority credit benefits.',
    description:
      'Procedural support to register your enterprise on the Udyam portal to access MSME benefits, collateral-free credit schemes, and subsidy programs.',
    whoIsItFor: [
      'Micro, small, and medium businesses in manufacturing or service sectors',
      'Entrepreneurs seeking priority sector bank lending and interest rebates',
      'Enterprises wanting protection against delayed payments under MSMED Act',
    ],
    problemSolved:
      'Simplifies registration classification to ensure your enterprise obtains official recognized MSME status.',
    inclusions: [
      'NIC code selection based on operational activities',
      'Udyam registration portal filing assistance',
      'Digital Udyam Certificate download and verification',
      'Summary of eligible state and central MSME schemes',
    ],
    requirements: [
      'Aadhaar number of proprietor/partner/director (mobile-linked for OTP)',
      'PAN card of business or proprietor',
      'Basic investment and turnover details',
    ],
    deliveryProcess: [
      { step: 1, title: 'Information Verification', description: 'Review Aadhaar OTP linkage and enterprise activity scope.' },
      { step: 2, title: 'NIC Classification', description: 'Select precise 5-digit National Industry Classification codes.' },
      { step: 3, title: 'Instant Processing', description: 'Portal completion and certificate dispatch upon issuance.' },
    ],
    priceDisplay: 'Starting from ₹799',
    startingPrice: 799,
    isStartingPriceEstimate: true,
    exclusions: ['Bank loan sanctioning guarantees', 'Subsidized tender bidding preparation'],
    iconName: 'Award',
  },
  {
    id: 'bl-6',
    slug: 'shop-and-establishment-licence-assistance',
    name: 'Shop & Establishment Licence Assistance',
    departmentSlug: 'business-launch',
    departmentName: 'Business Launch',
    tagline: 'State commercial establishment licence coordination for physical shops & offices.',
    description:
      'Coordination and guidance for obtaining your local municipal commercial licence (Gumasta / Shop Act) according to state-specific labour regulations.',
    whoIsItFor: [
      'Retail storefronts, trade establishments, and commercial offices',
      'Founders opening a dedicated current bank account requiring local registration proof',
      'Workplaces employing commercial staff',
    ],
    problemSolved:
      'Navigates diverse state municipal regulations and ensures compliance with mandatory local commercial registration laws.',
    inclusions: [
      'State-specific municipal requirement assessment',
      'Document formatting and local authority application assistance',
      'Tracking and procedural coordination until issuance',
    ],
    requirements: [
      'Proof of commercial address (Lease agreement, utility bill)',
      'Proprietor/Partner/Director KYC documents',
      'Employee count and establishment photograph showing signage',
    ],
    deliveryProcess: [
      { step: 1, title: 'State Rule Audit', description: 'Identify your municipal corporation portal and required forms.' },
      { step: 2, title: 'Documentation & Filing', description: 'Prepare application dossier and submit to the local inspectorate.' },
      { step: 3, title: 'Licence Handover', description: 'Receive your approved establishment certificate.' },
    ],
    priceDisplay: 'Starting from ₹1,499',
    startingPrice: 1499,
    isStartingPriceEstimate: true,
    exclusions: ['Local municipal statutory fees and physical inspection levies', 'Trade licence or fire NOC'],
    iconName: 'Store',
  },

  // ==========================================
  // DEPARTMENT 2: Branding & Design (6 Services)
  // ==========================================
  {
    id: 'bd-1',
    slug: 'business-name-suggestions',
    name: 'Business Name Suggestions',
    departmentSlug: 'branding-design',
    departmentName: 'Branding & Design',
    tagline: 'Catchy, memorable, and legally clearable brand names.',
    description:
      'Strategic brand naming methodology that delivers distinctive, pronunciation-friendly names with available web domains and trademark availability screening.',
    whoIsItFor: [
      'Founders stuck on picking a strong, professional company name',
      'Startups seeking names that stand out from competitors',
      'Businesses requiring dot-com or dot-in domain availability',
    ],
    problemSolved:
      'Prevents selecting generic names that are impossible to trademark, lack available web domains, or get easily forgotten.',
    inclusions: [
      '10 to 15 creative name concepts across multiple naming styles',
      'Preliminary domain availability check (.com and .in)',
      'Preliminary Class-level Trademark (IP India) availability check',
      'Brand rationale and linguistic connotation notes',
    ],
    requirements: [
      'Core business focus and target customer persona',
      'Desired brand tone (e.g., modern, authoritative, playful, tech-forward)',
      'Any preferred prefixes, keywords, or language roots',
    ],
    deliveryProcess: [
      { step: 1, title: 'Brand Brief', description: 'Understand your market positioning and brand personality aspirations.' },
      { step: 2, title: 'Ideation & Screening', description: 'Brainstorming and filtering across domain and trademark registers.' },
      { step: 3, title: 'Presentation Deck', description: 'Receive curated name dossiers with availability status.' },
    ],
    priceDisplay: 'Starting from ₹999',
    startingPrice: 999,
    isStartingPriceEstimate: true,
    exclusions: ['Legal trademark registration filing', 'Domain purchasing costs'],
    popular: true,
    iconName: 'Sparkles',
  },
  {
    id: 'bd-2',
    slug: 'logo-design',
    name: 'Logo Design',
    departmentSlug: 'branding-design',
    departmentName: 'Branding & Design',
    tagline: 'A distinctive, professional mark crafted for print and screens.',
    description:
      'Custom logo design crafted by professional graphic designers, engineered to represent your brand values cleanly across digital and physical media.',
    whoIsItFor: [
      'New startups needing an authentic, polished brand mark',
      'Existing businesses modernizing outdated visual branding',
      'Brands preparing to launch products on retail shelves or marketplaces',
    ],
    problemSolved:
      'Replaces amateur or generic clip-art logos with high-resolution, vector-based visual assets that build instant customer trust.',
    inclusions: [
      '3 distinct initial visual concepts to choose from',
      'Up to 3 rounds of design refinements on the chosen concept',
      'Full vector source files (AI, EPS, SVG, PDF)',
      'High-resolution PNGs (transparent background) & JPEGs',
      'Black & white and monochrome variations',
    ],
    requirements: [
      'Approved business name and tagline',
      'Design preferences or examples of logos you admire',
      'Preferred colour palette or styling guidelines',
    ],
    deliveryProcess: [
      { step: 1, title: 'Design Brief', description: 'Share your visual vision, preferred aesthetic, and brand attributes.' },
      { step: 2, title: 'Concept Creation', description: 'Our design studio crafts 3 unique creative directions.' },
      { step: 3, title: 'Refinement & Master Files', description: 'Iterate on your favourite mark and receive production-ready files.' },
    ],
    priceDisplay: 'Starting from ₹1,999',
    startingPrice: 1999,
    isStartingPriceEstimate: true,
    exclusions: ['Full brand guideline manual (available in Brand Identity)', 'Physical stationery printing'],
    popular: true,
    iconName: 'PenTool',
  },
  {
    id: 'bd-3',
    slug: 'brand-identity-design',
    name: 'Brand Identity Design',
    departmentSlug: 'branding-design',
    departmentName: 'Branding & Design',
    tagline: 'A complete visual system: typography, colours, and brand guidelines.',
    description:
      'End-to-end visual identity toolkit that establishes coherent typography, secondary color systems, brand patterns, and explicit brand usage guidelines.',
    whoIsItFor: [
      'Growing businesses aiming for uniform brand consistency across channels',
      'Companies employing external agencies or in-house marketing teams',
      'Founders creating a high-trust, premium brand presence',
    ],
    problemSolved:
      'Eliminates inconsistent fonts, conflicting colors, and disjointed brand impressions across customer touchpoints.',
    inclusions: [
      'Primary, secondary, and submark logo lockups',
      'Color palette specifications (HEX, RGB, CMYK, Pantone)',
      'Typography hierarchy (primary and secondary brand fonts)',
      'Brand pattern and iconography styling rules',
      'Comprehensive Brand Guidelines PDF manual',
    ],
    requirements: [
      'Business vision and mission statements',
      'Primary logo (or bundled with our Logo Design service)',
      'Target demographic and channel priorities',
    ],
    deliveryProcess: [
      { step: 1, title: 'Visual Strategy', description: 'Define the aesthetic emotional tone and customer touchpoints.' },
      { step: 2, title: 'System Development', description: 'Build the full typography, colour, and pattern framework.' },
      { step: 3, title: 'Guidelines Manual', description: 'Deliver a comprehensive brand manual for team and vendor use.' },
    ],
    priceDisplay: 'Starting from ₹4,999',
    startingPrice: 4999,
    isStartingPriceEstimate: true,
    exclusions: ['Website development', 'Interior office branding fabrication'],
    iconName: 'Layout',
  },
  {
    id: 'bd-4',
    slug: 'business-card-design',
    name: 'Business Card Design',
    departmentSlug: 'branding-design',
    departmentName: 'Branding & Design',
    tagline: 'Sleek, print-ready visiting cards that leave a lasting impression.',
    description:
      'Professional print-ready business cards featuring your logo, contact coordinates, QR code digital vCard integration, and precise print bleed specs.',
    whoIsItFor: [
      'Entrepreneurs and executives attending networking events and expos',
      'Sales representatives and business development teams',
      'Retail shop owners and service providers',
    ],
    problemSolved:
      'Avoids pixelated, poorly aligned DIY print cards that harm professional credibility.',
    inclusions: [
      'Front and back layout design concepts (2 options)',
      'Standard print-bleed and CMYK color profile setup (300 DPI)',
      'Digital QR code linking to your phone contact or website',
      'Editable vector source files and ready-to-print PDF',
    ],
    requirements: [
      'Logo vector file (SVG/AI/PNG)',
      'Contact coordinates (Name, designation, phone, email, address, website)',
    ],
    deliveryProcess: [
      { step: 1, title: 'Layout Setup', description: 'Choose orientation (horizontal/vertical) and card dimensions.' },
      { step: 2, title: 'Information Design', description: 'Typeset contact hierarchy and generate custom QR code.' },
      { step: 3, title: 'Print Deliverables', description: 'Receive high-res printer-ready files with crop and bleed marks.' },
    ],
    priceDisplay: 'Starting from ₹799',
    startingPrice: 799,
    isStartingPriceEstimate: true,
    exclusions: ['Physical printing and paper costs', 'Courier delivery charges'],
    iconName: 'CreditCard',
  },
  {
    id: 'bd-5',
    slug: 'product-packaging-design',
    name: 'Product Packaging Design',
    departmentSlug: 'branding-design',
    departmentName: 'Branding & Design',
    tagline: 'Retail-ready packaging, box dielines, and product labels that sell.',
    description:
      'Eye-catching packaging, box dielines, pouches, and product label designs that comply with statutory labelling standards and capture buyer attention.',
    whoIsItFor: [
      'D2C brands and consumer goods manufacturers',
      'E-commerce sellers shipping packaged goods',
      'Food, cosmetic, apparel, or electronics creators',
    ],
    problemSolved:
      'Transforms drab generic packaging into retail-grade presentation that justifies premium pricing and prevents transit label errors.',
    inclusions: [
      'Custom packaging dieline design or pouch/label artwork',
      'Statutory compliance element placement (FSSAI, barcode, MRP box)',
      'Print-ready vector PDF with accurate cut and crease lines',
      '3D digital mockup for website and marketplace presentation',
    ],
    requirements: [
      'Exact dieline or container dimensions from your packaging vendor',
      'Statutory text requirements (ingredients, warnings, net weight, MRP)',
      'Brand logo and style assets',
    ],
    deliveryProcess: [
      { step: 1, title: 'Dieline Review', description: 'Review printer specifications, material constraints, and dimensions.' },
      { step: 2, title: 'Artwork Design', description: 'Design front, back, and side panels with statutory markings.' },
      { step: 3, title: 'Print Prep & 3D Render', description: 'Generate production-ready dielines and 3D product visuals.' },
    ],
    priceDisplay: 'Starting from ₹3,499',
    startingPrice: 3499,
    isStartingPriceEstimate: true,
    exclusions: ['Packaging material manufacturing', 'Barcode purchase/assignment fees'],
    iconName: 'Package',
  },
  {
    id: 'bd-6',
    slug: 'product-images-and-promotional-creatives',
    name: 'Product Images & Promotional Creatives',
    departmentSlug: 'branding-design',
    departmentName: 'Branding & Design',
    tagline: 'High-converting infographics, lifestyle mockups, and promo graphics.',
    description:
      'High-resolution visual assets including white-background product cutouts, feature callout infographics, and promotional social banners.',
    whoIsItFor: [
      'Amazon, Flipkart, and Meesho sellers needing listing photo stacks',
      'E-commerce store owners wanting crisp hero product photography mockups',
      'Brands running promotional festive sales campaigns',
    ],
    problemSolved:
      'Overcomes poor conversion rates caused by blurry photos, cluttered backgrounds, and lack of visual feature explanations.',
    inclusions: [
      'Clean background removal & shadow enhancement',
      'Feature callout infographics highlighting key product benefits',
      'Dimension and specification diagrams',
      'Promotional discount/offer social banner sizes (1:1 and 9:16)',
    ],
    requirements: [
      'Raw product photographs taken from multiple angles',
      'Key selling points and product dimensions to emphasize',
      'Target platform requirements (Amazon 2000x2000px, Instagram, etc.)',
    ],
    deliveryProcess: [
      { step: 1, title: 'Photo Ingestion', description: 'Receive raw mobile or camera photos and isolate product boundaries.' },
      { step: 2, title: 'Creative Enhancement', description: 'Add realistic shadows, callouts, benefit badges, and icons.' },
      { step: 3, title: 'Asset Delivery', description: 'Download marketplace-compliant JPGs and promo banners.' },
    ],
    priceDisplay: 'Starting from ₹1,499',
    startingPrice: 1499,
    isStartingPriceEstimate: true,
    exclusions: ['Physical on-location studio photography with live models'],
    iconName: 'Image',
  },

  // ==========================================
  // DEPARTMENT 3: Website & Technology (6 Services)
  // ==========================================
  {
    id: 'wt-1',
    slug: 'domain-registration-assistance',
    name: 'Domain Registration Assistance',
    departmentSlug: 'website-technology',
    departmentName: 'Website & Technology',
    tagline: 'Secure your brand name on .com, .in, or industry-specific TLDs.',
    description:
      'Guidance and configuration to search, acquire, and correctly configure your domain name with DNS records, privacy protection, and SSL certificates.',
    whoIsItFor: [
      'Founders purchasing their first web address',
      'Businesses requiring reliable DNS setup for email and web hosting',
      'Brands safeguarding their trademark with country-code domains (.in)',
    ],
    problemSolved:
      'Prevents loss of domain ownership, exorbitant reseller markups, and broken DNS records that disrupt email delivery.',
    inclusions: [
      'Domain availability search across reputable registrars',
      'Registrar account setup in your ownership name',
      'DNS records configuration (A, CNAME, MX, TXT, SPF, DKIM)',
      'Assistance enabling WHOIS privacy protection',
    ],
    requirements: [
      'Preferred domain names',
      'Contact email and phone number for ICANN registrar verification',
    ],
    deliveryProcess: [
      { step: 1, title: 'Domain Verification', description: 'Identify best available registrar price and extension.' },
      { step: 2, title: 'Account Registration', description: 'Setup registrar profile registered directly in your name.' },
      { step: 3, title: 'DNS Configuration', description: 'Connect domain records to your website and business email host.' },
    ],
    priceDisplay: 'Starting from ₹499',
    startingPrice: 499,
    isStartingPriceEstimate: true,
    exclusions: ['Annual domain registrar subscription fee payable to registrar'],
    iconName: 'Globe',
  },
  {
    id: 'wt-2',
    slug: 'business-email-setup',
    name: 'Business Email Setup',
    departmentSlug: 'website-technology',
    departmentName: 'Website & Technology',
    tagline: 'Professional @yourcompany.com mailboxes with spam-proof DNS security.',
    description:
      'Configuration of professional company mailboxes (Google Workspace, Microsoft 365, or Zoho Mail) with authenticated SPF, DKIM, and DMARC protocols.',
    whoIsItFor: [
      'Companies wanting to move away from generic @gmail.com addresses',
      'Businesses experiencing customer emails landing in spam folders',
      'Organizations adding mailboxes for multiple staff members',
    ],
    problemSolved:
      'Builds instant corporate credibility and prevents email delivery failures by authenticating your sending domain.',
    inclusions: [
      'Email provider setup (Google Workspace, Zoho Mail, or Microsoft 365)',
      'Creation of primary user inboxes & shared aliases (info@, sales@)',
      'Strict SPF, DKIM, and DMARC DNS authentication for spam prevention',
      'Configuration guide for mobile and desktop mail apps',
    ],
    requirements: [
      'Access to your domain registrar DNS management console',
      'List of required mailbox names and user details',
    ],
    deliveryProcess: [
      { step: 1, title: 'Provider Selection', description: 'Select the optimal email provider matching your budget.' },
      { step: 2, title: 'DNS Authentication', description: 'Verify domain ownership and install cryptographic DKIM/SPF keys.' },
      { step: 3, title: 'Inbox Testing', description: 'Send delivery test emails and verify spam score ratings.' },
    ],
    priceDisplay: 'Starting from ₹999',
    startingPrice: 999,
    isStartingPriceEstimate: true,
    exclusions: ['Recurring monthly/annual seat subscription paid to email provider'],
    popular: true,
    iconName: 'Mail',
  },
  {
    id: 'wt-3',
    slug: 'business-website-development',
    name: 'Business Website Development',
    departmentSlug: 'website-technology',
    departmentName: 'Website & Technology',
    tagline: 'Fast, responsive, lead-generating website built for modern businesses.',
    description:
      'Custom, high-speed corporate website built with modern responsive code, clear service showcases, SEO metadata, and inquiry capture forms.',
    whoIsItFor: [
      'Service firms, consultants, clinics, and B2B enterprises',
      'Businesses needing a credible digital presence to close high-ticket clients',
      'Companies wanting mobile-responsive, sub-second page load speeds',
    ],
    problemSolved:
      'Replaces slow, broken, or outdated websites with modern, lightning-fast digital storefronts that convert visitors into paying leads.',
    inclusions: [
      'Up to 5 custom-designed responsive pages (Home, About, Services, Contact, etc.)',
      'Lead capture form with instant email alerts',
      'Mobile-first responsive design across phones, tablets, and desktops',
      'On-page SEO optimization, meta tags, and Google Search Console sitemap',
      'Free SSL security certificate integration',
    ],
    requirements: [
      'Company logo and brand identity guidelines',
      'Overview of services, target clientele, and company background',
      'Domain and hosting access (or coordinated with our team)',
    ],
    deliveryProcess: [
      { step: 1, title: 'Wireframe & Architecture', description: 'Structure page layouts and lead conversion funnels.' },
      { step: 2, title: 'Design & Build', description: 'Craft responsive UI, typography, and functional contact forms.' },
      { step: 3, title: 'SEO, Speed Audit & Launch', description: 'Performance optimization, DNS pointing, and live deployment.' },
    ],
    priceDisplay: 'Starting from ₹7,999',
    startingPrice: 7999,
    isStartingPriceEstimate: true,
    exclusions: ['Third-party hosting/server fees', 'Custom back-office web application logic'],
    popular: true,
    iconName: 'Monitor',
  },
  {
    id: 'wt-4',
    slug: 'ecommerce-website-development',
    name: 'E-commerce Website Development',
    departmentSlug: 'website-technology',
    departmentName: 'Website & Technology',
    tagline: 'Your independent online store with payment gateway and courier integration.',
    description:
      'Build your own branded e-commerce storefront with shopping cart, secure payment gateway, automated order management, and shipping courier sync.',
    whoIsItFor: [
      'Retail brands wanting to sell directly to consumers (D2C) with zero platform commissions',
      'Marketplace sellers diversifying into their own independent web channel',
      'Wholesalers and manufacturers launching online ordering',
    ],
    problemSolved:
      'Eliminates dependency on third-party marketplace commissions and allows building direct customer relationships and repeat sales.',
    inclusions: [
      'Complete online store setup with product categories and search filters',
      'Product catalogue upload (up to 25 initial products)',
      'Secure payment gateway integration (Razorpay, Cashfree, PhonePe, UPI)',
      'Automated shipping courier integration (Shiprocket / NimbusPost)',
      'Automated customer order confirmation via SMS/Email',
    ],
    requirements: [
      'Product catalogue photos, prices, descriptions, and stock quantities',
      'Business bank account and KYC documents for payment gateway approval',
      'Approved shipping pickup location and courier account',
    ],
    deliveryProcess: [
      { step: 1, title: 'Store Architecture', description: 'Plan catalogue taxonomy, checkout flows, and tax rates.' },
      { step: 2, title: 'Store Setup & Gateway', description: 'Configure product pages, cart, and payment API integrations.' },
      { step: 3, title: 'Test Order & Go Live', description: 'Execute end-to-end sandbox and live transactions before launch.' },
    ],
    priceDisplay: 'Starting from ₹14,999',
    startingPrice: 14999,
    isStartingPriceEstimate: true,
    exclusions: ['Payment gateway per-transaction processing charges', 'Product inventory storage and fulfillment'],
    iconName: 'ShoppingBag',
  },
  {
    id: 'wt-5',
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    departmentSlug: 'website-technology',
    departmentName: 'Website & Technology',
    tagline: 'Cross-platform iOS and Android mobile apps engineered for speed.',
    description:
      'Native-feel mobile apps built with React Native / Flutter, offering smooth user experiences, push notifications, and seamless API connectivity.',
    whoIsItFor: [
      'Startups with an app-first business model',
      'E-commerce brands seeking direct push-notification customer retention',
      'On-demand delivery, service booking, or community platforms',
    ],
    problemSolved:
      'Enables businesses to occupy permanent real estate on customers’ smartphone screens with real-time push messaging.',
    inclusions: [
      'Cross-platform codebase supporting both Android and iOS',
      'Clean UI/UX design with smooth mobile navigation patterns',
      'Push notifications setup and user authentication',
      'Assistance with Google Play Store & Apple App Store submission preparation',
    ],
    requirements: [
      'Detailed feature list and functional requirements specification',
      'Backend API specifications (or built with our custom software service)',
      'Apple Developer Program & Google Play Console developer accounts',
    ],
    deliveryProcess: [
      { step: 1, title: 'Scope & Wireframing', description: 'Map out screen flows, user authentication, and data contracts.' },
      { step: 2, title: 'App Development', description: 'Sprint-based frontend build and backend API integration.' },
      { step: 3, title: 'Testing & App Store Release', description: 'Device testing, build generation, and store compliance assistance.' },
    ],
    priceDisplay: 'Custom Quotation',
    isStartingPriceEstimate: false,
    exclusions: ['Apple and Google annual developer account fees', 'Third-party SMS OTP gateway costs'],
    iconName: 'Smartphone',
  },
  {
    id: 'wt-6',
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    departmentSlug: 'website-technology',
    departmentName: 'Website & Technology',
    tagline: 'Tailored web applications, internal dashboards, and automated workflows.',
    description:
      'Bespoke software engineering for internal ERP dashboards, CRM automation, client portals, and workflow tools tailored to your operational model.',
    whoIsItFor: [
      'Businesses requiring specialized business logic not fulfilled by off-the-shelf SaaS',
      'Companies needing integration between disparate legacy databases and tools',
      'Entrepreneurs creating unique software-as-a-service (SaaS) MVPs',
    ],
    problemSolved:
      'Automates repetitive manual spreadsheets and disjointed tools into a unified, secure cloud application.',
    inclusions: [
      'Technical architecture planning and database schema design',
      'Role-based access control (RBAC) and secure authentication',
      'Custom API development and third-party webhook integrations',
      'Deployment to scalable cloud hosting (AWS, Vercel, or DigitalOcean)',
    ],
    requirements: [
      'Detailed operational workflows and business rules',
      'Data models, user roles, and reporting requirements',
    ],
    deliveryProcess: [
      { step: 1, title: 'System Architecture', description: 'Define database schema, API contracts, and user privilege matrices.' },
      { step: 2, title: 'Iterative Sprints', description: 'Build features in modular milestones with regular demo reviews.' },
      { step: 3, title: 'UAT & Deployment', description: 'User acceptance testing, data migration, and production rollout.' },
    ],
    priceDisplay: 'Custom Quotation',
    isStartingPriceEstimate: false,
    exclusions: ['Cloud infrastructure monthly server hosting costs', 'Ongoing enterprise SLA support (available as plan)'],
    iconName: 'Code',
  },

  // ==========================================
  // DEPARTMENT 4: Marketplace Selling (6 Services)
  // ==========================================
  {
    id: 'ms-1',
    slug: 'meesho-seller-account-setup-assistance',
    name: 'Meesho Seller Account Setup Assistance',
    departmentSlug: 'marketplace-selling',
    departmentName: 'Marketplace Selling',
    tagline: 'Start selling to tier-2 and tier-3 consumers across India with 0% commission.',
    description:
      'Step-by-step account onboarding and verification support to launch your product line as a certified seller on the Meesho supplier panel.',
    whoIsItFor: [
      'Manufacturers, wholesalers, and retail distributors in fashion, home, and utility goods',
      'First-time online sellers seeking high sales volume with low commission overhead',
      'Businesses targeting value-conscious Indian consumers',
    ],
    problemSolved:
      'Navigates supplier registration requirements, bank verification, and pickup hub allocation without operational stalls.',
    inclusions: [
      'Meesho supplier portal account registration',
      'GSTIN and bank account verification coordination',
      'Warehouse pickup address configuration',
      'Orientation on Meesho order dispatch and packaging standards',
    ],
    requirements: [
      'Active GSTIN and business bank account details',
      'Pickup address with pin code serviceable by Meesho logistics',
      'Initial product details and pricing',
    ],
    deliveryProcess: [
      { step: 1, title: 'Account Creation', description: 'Initiate seller registration with verified GST and phone credentials.' },
      { step: 2, title: 'Bank & Hub Validation', description: 'Penny-drop bank verification and logistics hub confirmation.' },
      { step: 3, title: 'Seller Activation', description: 'Account readiness validation for catalogue upload.' },
    ],
    priceDisplay: 'Starting from ₹1,499',
    startingPrice: 1499,
    isStartingPriceEstimate: true,
    exclusions: ['Product sample costs', 'Customer return handling or courier claims'],
    popular: true,
    iconName: 'ShoppingBag',
  },
  {
    id: 'ms-2',
    slug: 'amazon-seller-account-setup-assistance',
    name: 'Amazon Seller Account Setup Assistance',
    departmentSlug: 'marketplace-selling',
    departmentName: 'Marketplace Selling',
    tagline: 'Launch on India’s leading marketplace with complete Seller Central onboarding.',
    description:
      'Assistance setting up your Amazon Seller Central account, tax settings, shipping templates (Easy Ship / Self Ship), and brand registry readiness.',
    whoIsItFor: [
      'Brand owners and retailers entering the Amazon India ecosystem',
      'Merchants looking to access millions of Amazon Prime customers',
      'Exporters exploring global selling via Amazon',
    ],
    problemSolved:
      'Prevents immediate account suspension during verification, incorrect tax configurations, or shipping template miscalculations.',
    inclusions: [
      'Amazon Seller Central profile creation and KYC verification',
      'Tax configuration (GST, TCS, and invoicing settings)',
      'Shipping templates setup (Easy Ship / Self Ship zones)',
      'Introduction to Amazon Brand Registry requirements',
    ],
    requirements: [
      'Valid GSTIN, PAN, and active current bank account',
      'Pickup warehouse address with utility bill verification',
      'Credit/debit card for account validation',
    ],
    deliveryProcess: [
      { step: 1, title: 'Account Registration', description: 'Submit legal identity documents to Amazon Seller Central.' },
      { step: 2, title: 'Shipping & Tax Settings', description: 'Configure shipping zones, dispatch lead times, and GST tax codes.' },
      { step: 3, title: 'Account Verification', description: 'Coordinate Amazon video verification and final approval.' },
    ],
    priceDisplay: 'Starting from ₹1,999',
    startingPrice: 1999,
    isStartingPriceEstimate: true,
    exclusions: ['Amazon referral fees and FBA storage fees', 'Amazon sponsored advertising spend'],
    popular: true,
    iconName: 'ShoppingBag',
  },
  {
    id: 'ms-3',
    slug: 'flipkart-seller-account-setup-assistance',
    name: 'Flipkart Seller Account Setup Assistance',
    departmentSlug: 'marketplace-selling',
    departmentName: 'Marketplace Selling',
    tagline: 'Onboard smoothly to Flipkart marketplace with verified seller status.',
    description:
      'Complete onboarding assistance for Flipkart Seller Hub, configuring pick-up locations, bank settlement details, and category approval requirements.',
    whoIsItFor: [
      'Brands and sellers in electronics, fashion, beauty, and home goods',
      'Existing retailers scaling into pan-India marketplace distribution',
      'Suppliers seeking dedicated onboarding coordination',
    ],
    problemSolved:
      'Streamlines strict category gating and trademark brand authorization requirements that frequently delay Flipkart approval.',
    inclusions: [
      'Flipkart Seller Hub registration and KYC submission',
      'Bank mandate verification and electronic signature setup',
      'Warehouse address validation for Flipkart logistics (Ekart)',
      'Category approval & brand brand authorization guidance',
    ],
    requirements: [
      'Active GSTIN and cancelled bank cheque matching entity name',
      'Valid email address and phone number for OTP authentications',
      'Pickup location address details',
    ],
    deliveryProcess: [
      { step: 1, title: 'Registration Initiation', description: 'Enter business particulars and upload KYC identity proofs.' },
      { step: 2, title: 'Bank & Location Verification', description: 'Complete penny-drop verification and pin code serviceability check.' },
      { step: 3, title: 'Category Readiness', description: 'Submit category clearance requests to unlock product listing.' },
    ],
    priceDisplay: 'Starting from ₹1,999',
    startingPrice: 1999,
    isStartingPriceEstimate: true,
    exclusions: ['Flipkart marketplace commissions and fixed closing fees', 'Category gating test laboratory reports'],
    iconName: 'ShoppingBag',
  },
  {
    id: 'ms-4',
    slug: 'product-listing-and-catalogue-creation',
    name: 'Product Listing & Catalogue Creation',
    departmentSlug: 'marketplace-selling',
    departmentName: 'Marketplace Selling',
    tagline: 'SEO-rich titles, bullet points, and optimized catalogue feeds.',
    description:
      'Professional creation and bulk upload of marketplace catalogue feeds with search-optimized titles, persuasive bullet points, and accurate attribute tags.',
    whoIsItFor: [
      'Marketplace sellers with multiple SKUs needing bulk catalogue upload',
      'Brands with poor search visibility on Amazon, Flipkart, or Meesho',
      'Sellers facing catalogue upload error codes (e.g. 8572, 5461)',
    ],
    problemSolved:
      'Fixes flat catalogue flat-file upload rejections and boosts organic marketplace search rank using customer search term indexing.',
    inclusions: [
      'Keyword-optimized product titles based on marketplace search volume',
      'Compelling benefit-driven bullet points (5 key features)',
      'Backend search terms and attribute population (size, color, material, care)',
      'Single and variation parent-child listing setup (up to 10 SKUs)',
    ],
    requirements: [
      'Product images (compliant with marketplace background guidelines)',
      'Barcode/EAN/UPC numbers (or GTIN exemption coordination)',
      'Key product dimensions, materials, and specification details',
    ],
    deliveryProcess: [
      { step: 1, title: 'Keyword Mining', description: 'Extract highest-converting search keywords for your specific product category.' },
      { step: 2, title: 'Listing Copywriting', description: 'Write compelling titles, bullet points, and backend search terms.' },
      { step: 3, title: 'Catalogue Upload', description: 'Upload flat files and verify indexing on live marketplace storefronts.' },
    ],
    priceDisplay: 'Starting from ₹2,499',
    startingPrice: 2499,
    isStartingPriceEstimate: true,
    exclusions: ['GS1 official barcode purchase fees', 'Physical product photography'],
    popular: true,
    iconName: 'ListChecks',
  },
  {
    id: 'ms-5',
    slug: 'product-pricing-and-competitor-research',
    name: 'Product Pricing & Competitor Research',
    departmentSlug: 'marketplace-selling',
    departmentName: 'Marketplace Selling',
    tagline: 'Calculate net margins accurately after marketplace fees and returns.',
    description:
      'Deep competitive pricing analysis and marketplace margin modeling to ensure your products stay competitive while delivering profitable net margins.',
    whoIsItFor: [
      'Sellers struggling with unexpected negative payouts after marketplace deductions',
      'Brands entering categories with intense price competition',
      'Merchants wanting to establish profitable promotional discount thresholds',
    ],
    problemSolved:
      'Protects sellers from hidden marketplace fee leakages (closing fees, referral cuts, weight charges, and return reverse logistics costs).',
    inclusions: [
      'Top 10 category competitor price point benchmark',
      'Marketplace fee breakdown simulator (Referral, Closing, Shipping, GST)',
      'Estimated Return to Origin (RTO) margin impact modeling',
      'Recommended MRP, Selling Price, and Deal Price matrix',
    ],
    requirements: [
      'Product landing cost (cost of goods + packaging)',
      'Product dimensions and packed weight',
      'Target marketplace channels',
    ],
    deliveryProcess: [
      { step: 1, title: 'Competitor Scraping', description: 'Analyze bestselling competitors in your category and their price trends.' },
      { step: 2, title: 'Cost-Fee Modeling', description: 'Calculate exact platform deductions and return risk buffers.' },
      { step: 3, title: 'Pricing Matrix Delivery', description: 'Deliver a structured margin calculator sheet for your catalogue.' },
    ],
    priceDisplay: 'Starting from ₹1,499',
    startingPrice: 1499,
    isStartingPriceEstimate: true,
    exclusions: ['Automated algorithmic repricing software subscriptions'],
    iconName: 'BarChart',
  },
  {
    id: 'ms-6',
    slug: 'inventory-and-order-management-assistance',
    name: 'Inventory & Order Management Assistance',
    departmentSlug: 'marketplace-selling',
    departmentName: 'Marketplace Selling',
    tagline: 'Prevent stockouts and streamline daily order dispatch workflows.',
    description:
      'Guidance and setup of standardized operational workflows to manage multi-channel marketplace inventory, prevent out-of-stock penalties, and handle daily dispatches.',
    whoIsItFor: [
      'Sellers handling orders across multiple portals simultaneously',
      'Businesses facing late shipment rate or cancellation penalties',
      'Growing warehouses needing barcode-assisted picking and packing',
    ],
    problemSolved:
      'Prevents double-selling inventory and late dispatch penalties that cause marketplace seller account suspensions.',
    inclusions: [
      'Workflow standard operating procedures (SOPs) for daily order picking and packing',
      'Multi-channel inventory tracking spreadsheet or software recommendation',
      'Return handling and damaged goods inspection checklist',
      'Courier tracking and reconciliation process guidance',
    ],
    requirements: [
      'Current order volumes and warehouse dispatch capabilities',
      'List of active selling channels and product SKU count',
    ],
    deliveryProcess: [
      { step: 1, title: 'Audit Operations', description: 'Review current dispatch timelines and cancellation bottlenecks.' },
      { step: 2, title: 'Workflow Design', description: 'Establish order processing routines and inventory reorder triggers.' },
      { step: 3, title: 'Team Handover', description: 'Walk through order checklists and dispute filing procedures.' },
    ],
    priceDisplay: 'Starting from ₹2,999',
    startingPrice: 2999,
    isStartingPriceEstimate: true,
    exclusions: ['Third-party ERP/WMS multi-channel software subscription fees', 'Physical warehouse staff'],
    iconName: 'Boxes',
  },

  // ==========================================
  // DEPARTMENT 5: Marketing & Growth (6 Services)
  // ==========================================
  {
    id: 'mg-1',
    slug: 'social-media-account-setup',
    name: 'Social Media Account Setup',
    departmentSlug: 'marketing-growth',
    departmentName: 'Marketing & Growth',
    tagline: 'Professional presence across Instagram, Facebook, LinkedIn, & YouTube.',
    description:
      'Creation and cohesive visual configuration of your official business social profiles with optimized bios, tracking links, and custom banner assets.',
    whoIsItFor: [
      'New startups establishing their first social media footprint',
      'Businesses transitioning personal social handles into professional creator accounts',
      'Brands needing cohesive branding across all social touchpoints',
    ],
    problemSolved:
      'Eliminates mismatched handles, broken links, amateur bios, and low-resolution profile graphics.',
    inclusions: [
      'Setup/optimization of up to 4 platforms (Instagram, Facebook Page, LinkedIn, YouTube/X)',
      'Professional bio copywriting with targeted industry keywords',
      'Custom branded profile pictures and header/banner graphics',
      'Link-in-bio tree setup directing visitors to website and WhatsApp',
    ],
    requirements: [
      'Brand logo and approved company color scheme',
      'Contact phone number, official email, and website address',
      'Brief description of services and key offerings',
    ],
    deliveryProcess: [
      { step: 1, title: 'Handle Audit', description: 'Check and secure consistent handles across platforms.' },
      { step: 2, title: 'Visuals & Bios', description: 'Design header banners and compose clear, keyword-rich bios.' },
      { step: 3, title: 'Verification & Handoff', description: 'Configure action buttons and deliver master credentials.' },
    ],
    priceDisplay: 'Starting from ₹1,499',
    startingPrice: 1499,
    isStartingPriceEstimate: true,
    exclusions: ['Ongoing weekly content creation (available under Management)', 'Platform blue-tick verification subscriptions'],
    iconName: 'Share2',
  },
  {
    id: 'mg-2',
    slug: 'social-media-management',
    name: 'Social Media Management',
    departmentSlug: 'marketing-growth',
    departmentName: 'Marketing & Growth',
    tagline: 'Consistent, engaging monthly posts, stories, and audience community nurturing.',
    description:
      'Full monthly management of your business social channels, delivering a structured content calendar, graphic designs, captions, and hashtag strategies.',
    whoIsItFor: [
      'Busy business founders who lack the daily time to manage social media',
      'Companies wanting consistent, high-quality digital brand authority',
      'Brands aiming to nurture organic customer engagement and inquiries',
    ],
    problemSolved:
      'Solves the “ghost town” problem where social profiles sit inactive for months, eroding customer trust.',
    inclusions: [
      'Monthly content calendar planning (12 to 16 branded posts/reels)',
      'Custom graphic designs and engaging video edits',
      'Persuasive captions and researched high-intent hashtag sets',
      'Scheduled automated publishing and monthly growth performance report',
    ],
    requirements: [
      'Brand style assets and past media',
      'Monthly promotions, discounts, or service announcements',
      'Social media account access/delegated access',
    ],
    deliveryProcess: [
      { step: 1, title: 'Monthly Strategy', description: 'Plan the monthly theme, festival promotions, and content buckets.' },
      { step: 2, title: 'Creative Production', description: 'Design post visuals, reels, and craft captions for approval.' },
      { step: 3, title: 'Publishing & Analytics', description: 'Schedule approved posts and review monthly engagement analytics.' },
    ],
    priceDisplay: 'Starting from ₹5,999/mo',
    startingPrice: 5999,
    isStartingPriceEstimate: true,
    exclusions: ['Paid influencer sponsorship fees', 'Paid ad boost budgets'],
    popular: true,
    iconName: 'Users',
  },
  {
    id: 'mg-3',
    slug: 'social-media-content-creation',
    name: 'Social Media Content Creation',
    departmentSlug: 'marketing-growth',
    departmentName: 'Marketing & Growth',
    tagline: 'High-impact short-form video reels, carousels, and educational graphics.',
    description:
      'Production of high-performing visual content assets designed to stop the scroll, including viral short-form video reels, educational carousels, and infographics.',
    whoIsItFor: [
      'Brands with an in-house community manager who need high-grade creative assets',
      'Founders wanting viral short-form video content without learning complex video editing',
      'Creators requiring professional graphic design for multi-slide carousels',
    ],
    problemSolved:
      'Fixes low engagement caused by generic static stock imagery that users scroll past instantly.',
    inclusions: [
      'Pack of 10 custom social content creatives (mix of carousels and reels)',
      'Motion graphic transitions, background music sync, and dynamic text overlays',
      'Hook-driven copy concepts engineered for audience retention',
      'Source files and optimized video export formats (1080x1920 MP4)',
    ],
    requirements: [
      'Raw footage, product clips, or key topic ideas you want covered',
      'Brand logo and font choices',
    ],
    deliveryProcess: [
      { step: 1, title: 'Hook & Scriptwriting', description: 'Develop viral hooks and educational carousel outlines.' },
      { step: 2, title: 'Editing & Animation', description: 'Cut footage, add dynamic subtitles, sound effects, and color grading.' },
      { step: 3, title: 'Batch Delivery', description: 'Deliver production-ready MP4 reels and carousel image slides.' },
    ],
    priceDisplay: 'Starting from ₹3,999',
    startingPrice: 3999,
    isStartingPriceEstimate: true,
    exclusions: ['Physical on-site videographer filming', 'Actor / model hiring fees'],
    iconName: 'Video',
  },
  {
    id: 'mg-4',
    slug: 'search-engine-optimisation-seo',
    name: 'Search Engine Optimisation (SEO)',
    departmentSlug: 'marketing-growth',
    departmentName: 'Marketing & Growth',
    tagline: 'Rank higher on Google search results and attract free organic buyer traffic.',
    description:
      'Comprehensive on-page and technical SEO strategies that improve your Google search rankings, drive high-intent organic visitors, and build long-term domain authority.',
    whoIsItFor: [
      'Businesses wanting a sustainable flow of inbound leads without paying for every click',
      'Local service providers wanting to rank at the top of Google Maps (Local SEO)',
      'E-commerce websites seeking organic category search traffic',
    ],
    problemSolved:
      'Removes complete dependency on paid ads by capturing customers actively searching for your services on Google.',
    inclusions: [
      'In-depth keyword research for commercial high-intent search terms',
      'Technical SEO audit (crawl errors, page speed, mobile usability, schema markup)',
      'On-page optimization (Title tags, meta descriptions, H1/H2 hierarchy, internal links)',
      'Google Business Profile setup and local citation audit for local search visibility',
    ],
    requirements: [
      'Website CMS/Codebase access (WordPress, Next.js, Shopify, etc.)',
      'Google Search Console and Google Analytics access (or setup coordinated)',
      'Target service areas and priority product/service offerings',
    ],
    deliveryProcess: [
      { step: 1, title: 'Technical Audit', description: 'Uncover site indexing roadblocks, broken links, and speed bottlenecks.' },
      { step: 2, title: 'Keyword Mapping', description: 'Align target high-volume search phrases to specific landing pages.' },
      { step: 3, title: 'Implementation & Monitoring', description: 'Execute metadata updates, schema code, and track ranking shifts.' },
    ],
    priceDisplay: 'Starting from ₹4,999/mo',
    startingPrice: 4999,
    isStartingPriceEstimate: true,
    exclusions: ['Guaranteed #1 Google ranking promises', 'Paid sponsored advertorials'],
    popular: true,
    iconName: 'Search',
  },
  {
    id: 'mg-5',
    slug: 'digital-advertising-management',
    name: 'Digital Advertising Management',
    departmentSlug: 'marketing-growth',
    departmentName: 'Marketing & Growth',
    tagline: 'Targeted Google Ads and Meta (Facebook/Instagram) advertising for immediate sales.',
    description:
      'Strategic setup, audience targeting, and continuous optimization of paid ad campaigns on Meta and Google Ads to maximize return on ad spend (ROAS).',
    whoIsItFor: [
      'Businesses needing fast customer inquiries and sales within days, not months',
      'E-commerce brands scaling product catalog sales through retargeting',
      'Companies launching new products or seasonal limited-time offers',
    ],
    problemSolved:
      'Stops wasting marketing budget on unoptimized ads that generate clicks without paying customer conversions.',
    inclusions: [
      'Ad campaign structure setup on Meta Ads Manager or Google Ads',
      'Conversion tracking pixel setup (Meta Pixel, Google Tag Manager)',
      'Custom audience targeting (demographics, interests, lookalike, retargeting)',
      'Ad creative copywriting and split testing (A/B testing ad hooks)',
      'Weekly bid management, negative keyword optimization, and performance reporting',
    ],
    requirements: [
      'Active Meta Business Manager or Google Ads account',
      'Allocated media ad spend budget (paid directly to advertising platforms)',
      'Target cost-per-lead or cost-per-acquisition goals',
    ],
    deliveryProcess: [
      { step: 1, title: 'Pixel & Funnel Setup', description: 'Install conversion tracking tags and configure custom audience events.' },
      { step: 2, title: 'Campaign Launch', description: 'Deploy audience-segmented ad sets with targeted visual creatives.' },
      { step: 3, title: 'Optimization & Scaling', description: 'Prune underperforming ad variations and scale profitable campaigns.' },
    ],
    priceDisplay: 'Starting from ₹4,999/mo',
    startingPrice: 4999,
    isStartingPriceEstimate: true,
    exclusions: ['Direct media ad spend budget paid to Meta/Google', 'Third-party attribution software fees'],
    iconName: 'Target',
  },
  {
    id: 'mg-6',
    slug: 'lead-generation-and-marketing-strategy',
    name: 'Lead Generation & Marketing Strategy',
    departmentSlug: 'marketing-growth',
    departmentName: 'Marketing & Growth',
    tagline: 'A holistic, multi-channel customer acquisition blueprint.',
    description:
      'Complete end-to-end go-to-market strategy that maps your customer acquisition funnel, lead capture landing pages, CRM nurturing, and sales conversion rates.',
    whoIsItFor: [
      'Founders uncertain about which marketing channels will deliver the highest ROI',
      'B2B firms and high-ticket service providers needing qualified customer appointments',
      'Companies seeking to reduce their blended customer acquisition cost (CAC)',
    ],
    problemSolved:
      'Eliminates disjointed, random marketing tactics by creating a unified, repeatable customer acquisition system.',
    inclusions: [
      'Customer persona definition and customer journey mapping',
      'Funnel architecture (lead magnet, landing page, email nurture sequence)',
      'Recommended marketing channel mix (Organic, Paid, Partnerships, Outbound)',
      '90-day actionable marketing execution roadmap with clear KPIs',
    ],
    requirements: [
      'Historical sales data, average order value (AOV), and customer lifetime value',
      'Current marketing channels tested and past results',
      'Revenue targets for next 6 to 12 months',
    ],
    deliveryProcess: [
      { step: 1, title: 'Funnel Audit', description: 'Analyze your historical conversion metrics and customer drop-off points.' },
      { step: 2, title: 'Strategy Blueprint', description: 'Formulate your messaging proposition, channel priorities, and unit economics.' },
      { step: 3, title: 'Executive Presentation', description: 'Walk through your 90-day execution playbook with milestone checkpoints.' },
    ],
    priceDisplay: 'Starting from ₹9,999',
    startingPrice: 9999,
    isStartingPriceEstimate: true,
    exclusions: ['Execution of individual creative deliverables outside the roadmap', 'Guaranteed revenue numbers'],
    iconName: 'Compass',
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getServicesByDepartment(departmentSlug: string): ServiceItem[] {
  return SERVICES.filter((service) => service.departmentSlug === departmentSlug);
}

export function getPopularServices(): ServiceItem[] {
  return SERVICES.filter((service) => service.popular);
}

