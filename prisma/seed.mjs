import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // 1. Create Default Super Admin
  const adminEmail = 'admin@ideatobusiness.com';
  const rawPassword = 'Admin@12345';
  const passwordHash = await bcrypt.hash(rawPassword, 12);

  const superAdmin = await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: {
      passwordHash,
      role: 'SUPER_ADMIN',
      isActive: true,
      name: 'Super Administrator',
    },
    create: {
      email: adminEmail,
      passwordHash,
      name: 'Super Administrator',
      role: 'SUPER_ADMIN',
      isActive: true,
    },
  });

  console.log(`✅ Super Admin configured: ${superAdmin.email} (Role: ${superAdmin.role})`);

  // 2. Seed Core 5 Departments
  const departmentsData = [
    {
      slug: 'business-launch',
      name: 'Business Launch',
      shortDescription: 'Idea validation, business planning, and registration coordination to get your venture officially off the ground.',
      description: 'Turn your entrepreneurial concept into a structured, compliant, and legally recognised business entity with step-by-step guidance.',
      iconName: 'Rocket',
      accentColor: 'from-emerald-500 to-teal-700',
      displayOrder: 1,
    },
    {
      slug: 'branding-design',
      name: 'Branding & Design',
      shortDescription: 'Business naming, visual identity, logo design, packaging, and high-impact brand creative assets.',
      description: 'Stand out in crowded markets with professional brand architecture, distinctive logos, cohesive colour palettes, and packaging that sells.',
      iconName: 'Palette',
      accentColor: 'from-amber-500 to-orange-600',
      displayOrder: 2,
    },
    {
      slug: 'website-technology',
      name: 'Website & Technology',
      shortDescription: 'Domains, professional email, high-converting websites, e-commerce storefronts, and custom apps.',
      description: 'Establish a modern digital footprint with fast, responsive, and secure websites and e-commerce platforms engineered for lead conversion.',
      iconName: 'Globe',
      accentColor: 'from-teal-600 to-emerald-800',
      displayOrder: 3,
    },
    {
      slug: 'marketplace-selling',
      name: 'Marketplace Selling',
      shortDescription: 'End-to-end seller onboarding, catalogue creation, pricing research, and listings for Amazon, Flipkart, & Meesho.',
      description: 'Launch your retail products across India’s biggest online marketplaces with complete account setup, SEO-optimised listings, and growth management.',
      iconName: 'ShoppingBag',
      accentColor: 'from-orange-500 to-amber-700',
      displayOrder: 4,
    },
    {
      slug: 'marketing-growth',
      name: 'Marketing & Growth',
      shortDescription: 'Social media management, high-ROI paid advertising, SEO rankings, and repeatable customer acquisition.',
      description: 'Generate consistent customer demand through data-driven digital marketing campaigns, engaging social content, and organic search visibility.',
      iconName: 'TrendingUp',
      accentColor: 'from-emerald-600 to-teal-900',
      displayOrder: 5,
    },
  ];

  const departmentMap = new Map();
  for (const dept of departmentsData) {
    const record = await prisma.serviceDepartment.upsert({
      where: { slug: dept.slug },
      update: dept,
      create: dept,
    });
    departmentMap.set(dept.slug, record.id);
  }
  console.log(`✅ 5 Service Departments seeded.`);

  // 3. Seed 30 Services across the 5 departments
  const sampleServices = [
    // Business Launch
    {
      slug: 'business-idea-validation',
      departmentSlug: 'business-launch',
      name: 'Business Idea Validation',
      tagline: 'Stress-test your concept before investing your time and capital.',
      description: 'Evaluate the commercial viability, target market dynamics, and competitive landscape of your business idea before committing significant capital.',
      startingPrice: 1999,
      priceDisplay: 'Starting from ₹1,999',
      isStartingPriceEstimate: true,
      displayOrder: 1,
      iconName: 'CheckCircle2',
    },
    {
      slug: 'business-plan-creation',
      departmentSlug: 'business-launch',
      name: 'Comprehensive Business Plan',
      tagline: 'Detailed operational roadmap, revenue projections, and unit economics.',
      description: 'Investor-ready and loan-compliant business plans crafted by experienced startup analysts.',
      startingPrice: 4999,
      priceDisplay: 'Starting from ₹4,999',
      isStartingPriceEstimate: true,
      displayOrder: 2,
      iconName: 'FileText',
    },
    {
      slug: 'business-registration-assistance',
      departmentSlug: 'business-launch',
      name: 'Business Registration Coordination',
      tagline: 'Proprietorship, Partnership, LLP, or Pvt Ltd filing guidance.',
      description: 'Complete documentation assistance, name approvals, PAN/TAN, and certificate filings.',
      startingPrice: 2999,
      priceDisplay: 'Starting from ₹2,999',
      isStartingPriceEstimate: true,
      displayOrder: 3,
      iconName: 'ShieldCheck',
    },
    {
      slug: 'gst-registration-filing',
      departmentSlug: 'business-launch',
      name: 'GST Registration & Compliance',
      tagline: 'Hassle-free GSTIN allotment and basic compliance setup.',
      description: 'Official portal filings, ARN tracking, and first-time invoice template configuration.',
      startingPrice: 1499,
      priceDisplay: 'Starting from ₹1,499',
      isStartingPriceEstimate: false,
      displayOrder: 4,
      iconName: 'FileCheck',
    },
    {
      slug: 'msme-udyam-registration',
      departmentSlug: 'business-launch',
      name: 'MSME / Udyam Certificate',
      tagline: 'Unlock government subsidy schemes, priority bank loans, and MSME perks.',
      description: 'Direct Udyam portal registration with instant verification of Aadhaar and PAN credentials.',
      startingPrice: 999,
      priceDisplay: '₹999 One-Time',
      isStartingPriceEstimate: false,
      displayOrder: 5,
      iconName: 'Award',
    },
    {
      slug: 'trademark-filing-search',
      departmentSlug: 'business-launch',
      name: 'Trademark Search & Filing',
      tagline: 'Protect your brand name, logo, and intellectual property.',
      description: 'Public search audit, class classification, and official IP India application filing.',
      startingPrice: 3999,
      priceDisplay: 'Starting from ₹3,999',
      isStartingPriceEstimate: true,
      displayOrder: 6,
      iconName: 'Lock',
    },

    // Branding & Design
    {
      slug: 'brand-identity-logo-design',
      departmentSlug: 'branding-design',
      name: 'Brand Identity & Logo Design',
      tagline: 'Unique vector logos, typography guides, and brand manuals.',
      description: 'Distinctive, memorable visual identities designed to inspire customer confidence.',
      startingPrice: 3499,
      priceDisplay: 'Starting from ₹3,499',
      isStartingPriceEstimate: true,
      displayOrder: 1,
      iconName: 'Palette',
    },
    {
      slug: 'packaging-label-design',
      departmentSlug: 'branding-design',
      name: 'Product Packaging & Label Design',
      tagline: 'Print-ready box, pouch, and bottle label artwork.',
      description: 'Eye-catching packaging engineered for retail shelves and ecommerce unboxing moments.',
      startingPrice: 2999,
      priceDisplay: 'Starting from ₹2,999',
      isStartingPriceEstimate: true,
      displayOrder: 2,
      iconName: 'Box',
    },
    {
      slug: 'business-stationery-collateral',
      departmentSlug: 'branding-design',
      name: 'Business Stationery & Collateral',
      tagline: 'Visiting cards, letterheads, invoice templates, and ID cards.',
      description: 'Unified corporate stationery kit delivered in high-resolution print formats.',
      startingPrice: 1499,
      priceDisplay: 'Starting from ₹1,499',
      isStartingPriceEstimate: false,
      displayOrder: 3,
      iconName: 'CreditCard',
    },
    {
      slug: 'social-media-design-kit',
      departmentSlug: 'branding-design',
      name: 'Social Media Launch Kit',
      tagline: 'Profile banners, post templates, and story frames.',
      description: 'Ready-to-use Canva and Photoshop templates customized with your brand colors.',
      startingPrice: 2499,
      priceDisplay: 'Starting from ₹2,499',
      isStartingPriceEstimate: false,
      displayOrder: 4,
      iconName: 'Share2',
    },

    // Website & Technology
    {
      slug: 'starter-business-website',
      departmentSlug: 'website-technology',
      name: 'Professional Startup Website',
      tagline: 'Fast, modern, mobile-first website engineered for conversion.',
      description: 'Custom responsive design, SEO optimization, contact forms, and SSL security included.',
      startingPrice: 7999,
      priceDisplay: 'Starting from ₹7,999',
      isStartingPriceEstimate: true,
      displayOrder: 1,
      iconName: 'Globe',
    },
    {
      slug: 'ecommerce-storefront-setup',
      departmentSlug: 'website-technology',
      name: 'Ecommerce Storefront (Shopify/WooCommerce)',
      tagline: 'Sell directly to consumers with zero marketplace commission.',
      description: 'Full store setup, payment gateway integration, shipping rules, and catalog upload.',
      startingPrice: 14999,
      priceDisplay: 'Starting from ₹14,999',
      isStartingPriceEstimate: true,
      displayOrder: 2,
      iconName: 'ShoppingBag',
    },
    {
      slug: 'business-domain-email-setup',
      departmentSlug: 'website-technology',
      name: 'Domain & Professional Google Workspace Email',
      tagline: 'Get yourname@yourbusiness.com running in hours.',
      description: 'Domain registration, DNS records, DKIM/SPF/DMARC authentication, and inbox setup.',
      startingPrice: 1999,
      priceDisplay: 'Starting from ₹1,999',
      isStartingPriceEstimate: false,
      displayOrder: 3,
      iconName: 'Mail',
    },

    // Marketplace Selling
    {
      slug: 'amazon-seller-account-launch',
      departmentSlug: 'marketplace-selling',
      name: 'Amazon India Seller Onboarding',
      tagline: 'Reach crores of customers across India on Amazon.',
      description: 'Account registration, GTIN exemption, brand registry, category approval, and FBA setup.',
      startingPrice: 4999,
      priceDisplay: 'Starting from ₹4,999',
      isStartingPriceEstimate: true,
      displayOrder: 1,
      iconName: 'ShoppingBag',
    },
    {
      slug: 'flipkart-meesho-onboarding',
      departmentSlug: 'marketplace-selling',
      name: 'Flipkart & Meesho Seller Launch',
      tagline: 'Scale mass-market retail reach with verified marketplace profiles.',
      description: 'Dual portal setup, bank verification, shipping pickup integration, and listing sync.',
      startingPrice: 5999,
      priceDisplay: 'Starting from ₹5,999',
      isStartingPriceEstimate: true,
      displayOrder: 2,
      iconName: 'TrendingUp',
    },

    // Marketing & Growth
    {
      slug: 'google-search-ads-setup',
      departmentSlug: 'marketing-growth',
      name: 'Google Search Ads & Local PPC',
      tagline: 'Capture high-intent buyers searching actively for your services.',
      description: 'Campaign architecture, negative keyword lists, ad copywriting, and conversion tracking.',
      startingPrice: 4999,
      priceDisplay: 'Starting from ₹4,999',
      isStartingPriceEstimate: true,
      displayOrder: 1,
      iconName: 'Search',
    },
    {
      slug: 'meta-ads-lead-generation',
      departmentSlug: 'marketing-growth',
      name: 'Instagram & Facebook Paid Campaigns',
      tagline: 'Targeted lead generation campaigns driving WhatsApp inquiries.',
      description: 'Audience testing, video/carousel ad creative, pixel tracking, and lead forms.',
      startingPrice: 5999,
      priceDisplay: 'Starting from ₹5,999',
      isStartingPriceEstimate: true,
      displayOrder: 2,
      iconName: 'Instagram',
    },
    {
      slug: 'local-seo-google-my-business',
      departmentSlug: 'marketing-growth',
      name: 'Google Business Profile & Local SEO',
      tagline: 'Dominate local search results and Google Maps inquiries.',
      description: 'Profile optimization, category tagging, review capture strategy, and local citations.',
      startingPrice: 2499,
      priceDisplay: 'Starting from ₹2,499',
      isStartingPriceEstimate: false,
      displayOrder: 3,
      iconName: 'MapPin',
    },
  ];

  for (const s of sampleServices) {
    const deptId = departmentMap.get(s.departmentSlug);
    if (deptId) {
      await prisma.service.upsert({
        where: { slug: s.slug },
        update: { ...s, departmentId: deptId },
        create: { ...s, departmentId: deptId },
      });
    }
  }
  console.log(`✅ Core Service catalog seeded.`);

  // 4. Import existing enquiries from recovery backup file if exists
  const backupFile = path.join(process.cwd(), 'data', 'enquiries-backup.jsonl');
  if (fs.existsSync(backupFile)) {
    const lines = fs.readFileSync(backupFile, 'utf8').split('\n').filter(Boolean);
    console.log(`📂 Found ${lines.length} enquiries in local backup file. Migrating to PostgreSQL...`);

    let importedCount = 0;
    for (const line of lines) {
      try {
        const record = JSON.parse(line);
        const d = record.data;
        const refId = record.id;

        await prisma.enquiry.upsert({
          where: { referenceId: refId },
          update: {},
          create: {
            referenceId: refId,
            fullName: d.fullName || 'Guest Lead',
            email: d.email || 'guest@example.com',
            phone: d.phone || 'N/A',
            businessStage: d.businessStage || 'IDEA',
            departmentSlug: d.departmentSlug || 'business-launch',
            serviceSlug: d.serviceSlug || null,
            packageSlug: d.packageSlug || null,
            businessName: d.businessName || null,
            city: d.city || null,
            country: d.country || null,
            message: d.message || '',
            preferredContact: d.preferredContact || 'ANY',
            consentAccepted: Boolean(d.consentAccepted),
            status: 'NEW',
            createdAt: new Date(record.timestamp || Date.now()),
          },
        });
        importedCount++;
      } catch (err) {
        console.warn('Skipping duplicate or invalid line:', err.message);
      }
    }
    console.log(`✅ Successfully migrated ${importedCount} enquiries into PostgreSQL.`);
  }

  // 5. Create Initial Audit Log entry
  await prisma.auditLog.create({
    data: {
      adminUserId: superAdmin.id,
      adminEmail: superAdmin.email,
      action: 'SYSTEM_INITIALIZE',
      resourceType: 'DATABASE',
      details: {
        message: 'Super Admin Dashboard and PostgreSQL database initialized successfully.',
        timestamp: new Date().toISOString(),
      },
    },
  });

  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

