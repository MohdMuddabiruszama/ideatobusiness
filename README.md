# IDEATOBUSINESS

> **Your Idea. Our Support. Your Business.**  
> One platform to help people start, build, and grow a business.

## 1. Project Overview

**IDEATOBUSINESS** is a service-led digital platform designed to help aspiring entrepreneurs, new business owners, and existing small businesses access essential business-startup and growth services from one place.

The public website is the first deliverable. It must clearly explain what the company does, who it helps, which services are available, how the process works, and how a visitor can request support.

The initial website is not a fully open marketplace where independent providers publish and sell services. IDEATOBUSINESS will coordinate and deliver services directly or through appropriately qualified partners. More advanced customer and partner portals can be added after the public website and service-delivery process are validated.

### Main value proposition

Help customers move from a business idea to a launched and growing business through a coordinated set of services, guidance, and specialist support.

### Mission

Make the process of starting and growing a business simpler, more understandable, accessible, and convenient by bringing essential services together.

### Vision

Become a trusted platform that helps people turn business ideas into sustainable businesses.

### Primary customer groups

1. **Idea-stage founders** — people who have an idea and need help validating it and planning the next steps.
2. **New business owners** — people who need help with business setup, branding, a website, or online selling.
3. **Existing small businesses** — businesses that want to improve their digital presence, marketing, operations, or sales channels.

## 2. Project Goals

The public website must:

- Explain the IDEATOBUSINESS value proposition within the first screen.
- Help visitors discover services by department and individual service.
- Explain the steps from enquiry to service delivery.
- Present packages and pricing transparently, including what is and is not included.
- Generate qualified enquiries and consultation requests.
- Capture and organise leads so the team can follow up.
- Provide clear contact, FAQ, privacy, terms, refund, and disclaimer information.
- Be responsive, accessible, fast, secure, and search-engine friendly.
- Be structured so that customer accounts, online payments, order tracking, and partner workflows can be added later without rebuilding the website.

## 3. Initial Scope and Out of Scope

### In scope for the public website MVP

- Responsive marketing website.
- Home page and service discovery pages.
- Service detail content/pages.
- How It Works page.
- Pricing and package presentation.
- About, Contact, FAQ, and Resources pages.
- Get Started / enquiry form.
- Form validation, spam protection, and server-side submission handling.
- Enquiry confirmation page and notification emails.
- Basic lead management for the internal team (at minimum through a protected admin view or a secure database/email workflow; do not expose lead data publicly).
- Basic SEO metadata, sitemap, robots configuration, analytics consent where applicable, and performance checks.
- Legal and policy pages with review placeholders until approved text is supplied.

### Not part of the first public-site release unless explicitly approved

- A self-service multi-tenant SaaS dashboard.
- A public directory or open marketplace of third-party providers.
- Automated legal, tax, or government registration decisions.
- Guaranteed GST, licence, registration, marketplace, sales, or advertising approvals/results.
- Full accounting, inventory, CRM, ERP, or order-management software.
- Automated filing or submission to government portals without an approved authorised workflow.
- Mobile applications.

Implement the MVP first. Keep future functionality modular, but do not build speculative features before they are required.

## 4. Service Departments and Initial Catalogue

The website initially presents five departments and 30 services. Use these names consistently in navigation, cards, filters, service detail pages, and enquiry forms.

### Department 1 — Business Launch

1. Business Idea Validation
2. Business Plan Creation
3. Business Registration Assistance
4. GST Registration Assistance
5. Udyam/MSME Registration Assistance
6. Shop & Establishment Licence Assistance

### Department 2 — Branding & Design

1. Business Name Suggestions
2. Logo Design
3. Brand Identity Design
4. Business Card Design
5. Product Packaging Design
6. Product Images & Promotional Creatives

### Department 3 — Website & Technology

1. Domain Registration Assistance
2. Business Email Setup
3. Business Website Development
4. E-commerce Website Development
5. Mobile App Development
6. Custom Software Development

### Department 4 — Marketplace Selling

1. Meesho Seller Account Setup Assistance
2. Amazon Seller Account Setup Assistance
3. Flipkart Seller Account Setup Assistance
4. Product Listing & Catalogue Creation
5. Product Pricing & Competitor Research
6. Inventory & Order Management Assistance

### Department 5 — Marketing & Growth

1. Social Media Account Setup
2. Social Media Management
3. Social Media Content Creation
4. Search Engine Optimisation (SEO)
5. Digital Advertising Management
6. Lead Generation & Marketing Strategy

### Service content requirements

Every service detail page or service detail section should include:

- Service name and department.
- A plain-language explanation.
- Who the service is for.
- The problem it helps address.
- What is included.
- What information/documents the customer may need to provide (only when confirmed).
- The delivery process and expected milestones (do not invent guaranteed timelines).
- Price or a clear “Request a Quote” label.
- Exclusions, third-party charges, and dependencies.
- A clear enquiry CTA.

For registration, GST, tax, legal, licence, and other regulated/compliance-related services, clearly describe the offering as **assistance or coordination** unless IDEATOBUSINESS has verified authority and qualified professionals to provide the regulated service directly. Requirements and outcomes can vary by location, business type, and government rules. Never promise approval or imply that IDEATOBUSINESS is a government department.

## 5. Brand and Design Direction

### Brand personality

- Professional
- Trustworthy
- Helpful
- Modern
- Innovative
- Accessible to first-time entrepreneurs
- Premium without feeling complicated or intimidating

### Suggested visual direction

- Primary colour family: deep/emerald green.
- Supporting accent: warm orange.
- Neutral colours: white, off-white, charcoal, and muted grey.
- Use the approved logo and exact brand colour values once supplied. Do not invent final brand hex values if the owner has not approved them.
- Use clean typography, strong hierarchy, generous spacing, consistent rounded cards, restrained shadows, and clear CTA buttons.
- Use relevant, authentic business imagery and consistent iconography. Avoid generic clutter and excessive gradients.
- Maintain strong colour contrast and visible keyboard focus states.

### Suggested brand copy

**Primary tagline:** Your Idea. Our Support. Your Business.  
**Supporting line:** One platform to start, build and grow your business.

Do not use exaggerated claims such as “guaranteed success”, “100% approval”, or “instant business registration”.

## 6. Website Sitemap and Navigation

### Main navigation

- Home
- Services
- Sell Online
- How It Works
- Pricing
- Resources
- About
- Contact
- **Get Started** (primary CTA)

### Required routes

| Route | Purpose |
|---|---|
| `/` | Home page; communicate value proposition and guide visitors to services or Get Started |
| `/services` | Browse all departments and services; search/filter services |
| `/services/[slug]` | Detailed explanation of an individual service |
| `/sell-online` | Explain marketplace selling support and relevant services |
| `/how-it-works` | Show enquiry, consultation, quotation, confirmation, and delivery steps |
| `/pricing` | Show packages, individual service pricing approach, inclusions, and exclusions |
| `/resources` | Educational articles, checklists, and guides; can start with a curated set of useful resources |
| `/about` | Company overview, mission, vision, and approach |
| `/contact` | Contact channels and enquiry form |
| `/get-started` | Main lead/enquiry intake form |
| `/faq` | Common questions and clear answers |
| `/privacy-policy` | Privacy policy; publish only after legal review |
| `/terms` | Terms and conditions; publish only after legal review |
| `/refund-policy` | Refund/cancellation rules; publish only after approval |
| `/disclaimer` | Scope, third-party dependencies, and no-guarantee disclosures |
| `/thank-you` | Enquiry submission confirmation |

Use a consistent header, footer, breadcrumbs where useful, and page metadata. Do not create dead links or placeholder buttons that look functional.

## 7. Core User Journeys

### Journey A — Visitor exploring a service

1. Visitor opens the website.
2. Visitor understands the platform and selects a service department.
3. Visitor browses or searches the service catalogue.
4. Visitor opens a service detail page.
5. Visitor selects “Get Started” or “Request a Quote”.
6. Visitor submits the enquiry.
7. Visitor sees a confirmation page and receives a confirmation message/email.
8. Team reviews the lead and contacts the visitor.

### Journey B — Visitor choosing a package

1. Visitor opens Pricing.
2. Visitor compares package scope and suitability.
3. Visitor checks exclusions and additional costs.
4. Visitor submits a package enquiry.
5. Team confirms requirements, final quote, and next steps.

### Journey C — Visitor asking for consultation

1. Visitor opens Contact or Get Started.
2. Visitor selects consultation/enquiry as the request type.
3. Visitor provides contact details and a short description.
4. Team receives the lead and schedules contact through the approved process.

## 8. Functional Requirements

### 8.1 Service discovery

- Display the five departments clearly.
- Display all 30 initial services.
- Support search by service name and relevant keywords.
- Support filtering by department.
- Provide service detail pages or equivalent dedicated, linkable detail sections.
- Provide clear CTA links from each service to the enquiry form.
- Use stable slugs for service URLs.

### 8.2 Pricing and packages

The following are **working proposal prices only**, not final approved commercial prices. Keep prices in a central data/configuration source so the owner can update them without editing multiple components.

| Proposed package | Indicative price | Positioning |
|---|---:|---|
| Idea Starter | ₹999 | Early-stage idea and planning support |
| Business Launch | ₹4,999 | Starter business setup coordination bundle |
| Digital Business | ₹9,999 | Digital presence and online foundation bundle |
| Business Growth | ₹19,999+ | Broader growth support; final scope quoted |

Possible monthly service plans discussed:

| Proposed plan | Indicative monthly price |
|---|---:|
| Basic | ₹499/month |
| Growth | ₹999/month |
| Premium | ₹1,999/month |
| Enterprise | Custom quote |

Before displaying these prices publicly, confirm costs, margins, delivery capacity, taxes, and exact inclusions. Clearly separate IDEATOBUSINESS service fees from government charges, professional fees, domain/hosting costs, marketplace costs, advertising spend, courier fees, and other third-party expenses. Do not imply that every service is included in every package.

### 8.3 Get Started / enquiry form

Recommended initial fields:

- Full name (required)
- Email address (required)
- Mobile number with country code (required; validate format without assuming all customers are in India)
- Business stage: Idea / New business / Existing business
- Interested department (required)
- Interested service (optional or dependent on department)
- Package (optional)
- Business name (optional)
- City and country (optional unless needed for the selected service)
- Brief requirement/message (required, sensible character limit)
- Preferred contact method (optional)
- Consent to be contacted and acknowledgement of the privacy notice (required where applicable)

Form behaviour:

- Validate on both client and server.
- Show clear field-level error messages.
- Prevent duplicate submissions where practical.
- Add rate limiting and spam protection.
- Do not put secrets or privileged API keys in browser code.
- Save the enquiry safely and return a clear success/error state.
- Never silently discard a failed submission.
- Do not collect unnecessary identity documents or sensitive personal information through the public form.

### 8.4 Lead management

The internal team must be able to identify and follow up on each enquiry. The MVP may use a protected admin area or a secure operational workflow, but customer enquiry records must never be public.

Recommended lead fields:

- Lead ID
- Created date/time
- Customer name
- Email and phone
- Business stage
- Department/service/package requested
- Customer message
- Source page / campaign source where available
- Consent record and privacy notice version where applicable
- Status: New / Contacted / Qualified / Quoted / Converted / Not Converted / Closed
- Assigned team member (optional)
- Internal notes (not visible to customers)
- Last updated date/time

Protect admin routes with authentication and role checks. Do not create a public admin account or hardcode production credentials.

### 8.5 Notifications

- Send an acknowledgement to the customer after a successful enquiry, where email delivery is configured.
- Notify the internal team of a new lead.
- Store email delivery status or log failures safely.
- Keep provider credentials in environment variables.
- Avoid putting confidential lead details into unsecured notification channels.

### 8.6 Contact and WhatsApp

- Add only verified phone numbers, email addresses, office addresses, and social links supplied by the owner.
- WhatsApp CTA must use a verified business number and a correctly encoded message.
- Never invent business contact details.
- Provide a fallback contact form if WhatsApp is unavailable.

### 8.7 Analytics

- Add privacy-conscious analytics only after selecting the provider and reviewing applicable consent requirements.
- Track important events: service view, package view, Get Started CTA, form start, form submission success, and contact click.
- Do not send form message contents or sensitive personal data to analytics.

## 9. Recommended Technical Stack

Use this stack for the first implementation unless the existing repository already contains an approved stack. Inspect the repository before changing or replacing anything.

| Layer | Recommended choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | React framework with routing and server capabilities |
| Language | TypeScript | Use strict typing |
| Styling | Tailwind CSS | Use reusable design tokens and consistent components |
| UI | Accessible custom components | Keep components reusable; avoid unnecessary UI libraries |
| Database | PostgreSQL | Suitable for enquiries and future platform data |
| Database access | Prisma ORM | Use migrations and typed access if Prisma is selected |
| Validation | Zod or equivalent | Share schemas where practical; always validate on server |
| Email | Resend or another approved provider | Provider is a decision; do not add credentials to source |
| Hosting | Vercel or approved compatible host | Confirm deployment requirements before launch |
| Source control | Git + GitHub | Use feature branches and meaningful commits |
| Payments | Razorpay or Cashfree (later phase) | Do not integrate until pricing, refunds, compliance, and order flow are approved |

The owner has experience with React, Vite, Node.js, Express, and PostgreSQL. If the existing repository uses a different stack, explain the trade-offs and preserve working code unless a migration is explicitly approved.

## 10. Suggested Repository Structure

Adapt this structure to the actual framework and existing repository. Do not overwrite or reorganise an existing working project without first inspecting it.

```text
ideatobusiness/
├── public/
│   ├── images/
│   ├── icons/
│   └── logos/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx
│   │   │   ├── services/
│   │   │   ├── sell-online/
│   │   │   ├── how-it-works/
│   │   │   ├── pricing/
│   │   │   ├── resources/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── get-started/
│   │   ├── api/
│   │   │   └── enquiries/
│   │   ├── faq/
│   │   ├── privacy-policy/
│   │   ├── terms/
│   │   ├── refund-policy/
│   │   ├── disclaimer/
│   │   ├── thank-you/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── services/
│   │   ├── pricing/
│   │   ├── forms/
│   │   └── ui/
│   ├── data/
│   │   ├── services.ts
│   │   └── packages.ts
│   ├── lib/
│   │   ├── db/
│   │   ├── validation/
│   │   ├── email/
│   │   └── security/
│   └── types/
├── prisma/
│   └── schema.prisma
├── .env.example
├── .gitignore
├── README.md
├── package.json
└── tsconfig.json
```

This is a suggested layout, not a requirement to create every folder immediately. Keep the implementation simple and add folders when they are needed.

## 11. Data Model — MVP Enquiries

If PostgreSQL is used, start with the minimum data model needed for enquiries. Keep it extensible, but avoid building a complex CRM too early.

### Enquiry

Suggested fields:

- `id` — unique identifier (UUID or equivalent)
- `fullName`
- `email`
- `phone`
- `businessStage`
- `departmentSlug`
- `serviceSlug` (nullable)
- `packageSlug` (nullable)
- `businessName` (nullable)
- `city` (nullable)
- `country` (nullable)
- `message`
- `preferredContactMethod` (nullable)
- `consentAccepted`
- `privacyNoticeVersion` (nullable)
- `sourcePath` (nullable)
- `status`
- `assignedTo` (nullable; only if authentication/roles are implemented)
- `internalNotes` (nullable; access-controlled)
- `createdAt`
- `updatedAt`

Use appropriate indexes for common admin queries (for example created date, status, and email). Apply retention and deletion rules consistent with the approved privacy policy. Never store passwords, payment-card details, or unnecessary identity documents in the enquiry table.

## 12. Security, Privacy, Accessibility, and Quality

- Keep environment secrets out of Git and all client-side bundles.
- Provide `.env.example` with placeholder names only.
- Validate and sanitise untrusted input on the server.
- Use parameterised database access / ORM protections.
- Add rate limiting and spam protection to public endpoints.
- Use secure authentication and role-based authorisation for any admin functionality.
- Use HTTPS in production.
- Avoid exposing database errors, stack traces, or internal configuration to visitors.
- Set secure headers and review cookie/consent requirements before launch.
- Collect only information needed to respond to enquiries.
- Publish privacy, terms, refund, and disclaimer text only after appropriate review.
- Use semantic HTML, keyboard navigation, labels, visible focus states, alt text, and sufficient contrast.
- Optimise images, fonts, and scripts; avoid unnecessary client-side JavaScript.
- Test common mobile, tablet, and desktop viewport sizes.
- Add meaningful loading, empty, success, and error states.

## 13. SEO and Content Requirements

- Give every public page a unique title and meta description.
- Use one clear page-level H1 and logical H2/H3 hierarchy.
- Use descriptive URLs and canonical URLs where appropriate.
- Generate sitemap and robots files.
- Add Open Graph/social sharing metadata.
- Use descriptive image alt text.
- Link related service pages and helpful resources internally.
- Write original, useful content; do not keyword-stuff or claim unverified rankings/results.
- Add structured data only when the page content genuinely supports it.
- Confirm the actual legal business name, service area, contact information, and address before adding LocalBusiness details.

## 14. Development Roadmap

Build and verify one phase at a time. Do not skip testing to move faster.

### Phase 1 — Business and website foundation

1.1 Define target customer groups.  
1.2 Finalise service departments and the initial service catalogue.  
1.3 Finalise brand positioning and messaging.  
1.4 Confirm the service delivery and revenue model.  
1.5 Finalise sitemap and navigation.  
1.6 Document functional requirements and acceptance criteria.

### Phase 2 — Brand, domain, and business readiness

- Confirm the final logo, approved colour values, typography, and brand assets.
- Check domain availability and configure DNS after domain ownership is confirmed.
- Obtain appropriate review of the proposed business name/trademark before major public investment.
- Confirm the legal business identity, contact details, service terms, privacy requirements, and operational service-delivery process.
- Confirm which services are delivered directly and which require qualified partners.

### Phase 3 — UX and visual design

- Create low-fidelity wireframes for all key pages.
- Design responsive desktop, tablet, and mobile layouts.
- Define buttons, cards, form fields, navigation, spacing, typography, and icon rules.
- Review the complete visitor journey before implementation.

### Phase 4 — Development environment

- Inspect the existing repository and available tools.
- Configure the approved framework, TypeScript, styling, linting, and formatting.
- Set up environment-variable handling and `.env.example`.
- Configure Git and a working development command.

### Phase 5 — Public website frontend

- Build shared header, navigation, footer, buttons, cards, and layout components.
- Build the home page.
- Build the services catalogue, service detail pages, and Sell Online page.
- Build How It Works, Pricing, Resources, About, Contact, FAQ, and policy routes.
- Build responsive navigation and all required UI states.

### Phase 6 — Enquiry backend and lead workflow

- Create the database schema and migrations.
- Implement server-side enquiry validation and submission.
- Add spam prevention and rate limiting.
- Save enquiries securely.
- Add customer and internal notification emails.
- Add protected lead management if included in the approved MVP.

### Phase 7 — SEO, analytics, and content

- Add metadata, sitemap, robots, social sharing metadata, and structured data where appropriate.
- Add approved analytics and event tracking.
- Add final service content, FAQs, contact details, and policy text.

### Phase 8 — Testing and security review

- Test every route and navigation link.
- Test forms for valid, invalid, duplicate, and failed submissions.
- Test email and database failure handling.
- Test responsive layouts and keyboard navigation.
- Review accessibility, security, performance, and SEO.
- Fix critical and high-priority issues before release.

### Phase 9 — Deployment and launch

- Configure production environment variables.
- Connect the production database and run reviewed migrations.
- Deploy to the approved host.
- Connect the verified domain and HTTPS.
- Test live forms, email delivery, analytics, and policies.
- Create backups and document rollback/recovery steps.

### Phase 10 — Post-launch improvement

- Review enquiry volume and conversion quality.
- Collect customer feedback.
- Improve weak pages and form completion.
- Add payment/order workflows only after service scope, pricing, refund rules, and fulfilment are operationally ready.
- Consider customer accounts, partner portal, subscriptions, and automation based on validated demand.

## 15. Definition of Done for the Public Website MVP

The MVP is not complete until:

- Every required public route loads without errors.
- Navigation, footer links, service links, and CTAs work.
- All five departments and 30 services are represented accurately.
- Service content explains scope and limitations.
- Pricing shows approved prices or clearly requests a quote; draft prices are not published accidentally.
- The enquiry form works on mobile and desktop.
- Server-side validation and spam protection are active.
- Enquiries are stored securely and can be followed up.
- Confirmation and internal notifications work, or any unavailable integration is clearly documented.
- No secrets or private customer data are exposed.
- Legal and policy pages contain approved content before public launch.
- SEO metadata, sitemap, robots, and social sharing metadata are configured.
- Accessibility, responsive, performance, and basic security checks have been completed.
- Production deployment and domain configuration are verified.

## 16. Instructions for Antigravity AI

Treat this README as the project brief and implementation source of truth. Follow these rules throughout development:

1. **Inspect before changing.** First inspect the existing files, framework, package manager, scripts, and folder structure. Do not overwrite a working project or initialise a second app inside it.
2. **Work phase by phase.** Implement only the current requested phase/step. Explain the intended change, make the change, run relevant checks, and report the outcome before moving on.
3. **Ask only when blocked.** Use sensible defaults for minor implementation details. Ask the owner when a decision affects business claims, final prices, legal text, real contact details, payment behaviour, production data, or a destructive change.
4. **Do not fabricate company facts.** Never invent a registered address, legal entity name, registration number, phone number, email address, partner, testimonial, client logo, certification, government affiliation, or customer result. Use clearly marked placeholders until verified details are supplied.
5. **Do not publish draft commercial details accidentally.** Prices in this README are proposals. Keep them configurable and do not treat them as final until explicitly approved.
6. **Be careful with compliance services.** Use “assistance”, “guidance”, or “coordination” wording unless direct professional authority is confirmed. Do not promise approvals or guaranteed outcomes.
7. **Build real functionality.** Do not leave inert buttons, fake form submissions, dead links, or success messages when the server has not accepted the request. Clearly mark intentionally deferred features.
8. **Protect customer data.** Validate on the server, keep secrets server-side, use access controls for admin data, and avoid logging unnecessary personal information.
9. **Keep the design consistent.** Follow the approved green/orange brand direction, use reusable components and design tokens, and make every page responsive.
10. **Prefer maintainable code.** Use TypeScript types, clear naming, small reusable components, central service/package data, and readable error handling.
11. **Run checks.** After each meaningful change, run available lint, type-check, build, and relevant tests. Fix errors introduced by the change.
12. **Summarise each task.** Report files changed, functionality completed, checks run, any blockers, and the exact next step. Do not claim a check passed unless it was actually run.
13. **Avoid unnecessary dependencies.** Before adding a package, explain why it is needed and prefer native framework capabilities where suitable.
14. **Preserve owner approval.** Do not deploy, change DNS, run destructive database commands, make paid purchases, enable payment collection, or publish legal/commercial claims without explicit approval.

### Suggested first instruction to Antigravity

```text
Read the complete README.md before making changes. First inspect the current repository and report:
1. The detected framework, language, package manager, and current project structure.
2. Which requirements in README.md are already implemented.
3. Which requirements are missing or incomplete.
4. Any conflicts between the existing repository and the README recommendations.
5. A small, ordered implementation plan for the current phase only.

Do not modify files yet. Do not install packages or replace the existing stack. Wait for my approval after the inspection report.
```

## 17. Decisions and Information Still to Confirm

The following are not confirmed facts and must be supplied or approved by the owner before production use:

- Final legal entity/business name and business registration details.
- Trademark clearance and final domain.
- Final logo files and exact colour codes.
- Official phone number, email address, WhatsApp number, office address, and social links.
- Exact service scope, delivery timelines, deliverables, exclusions, and responsible service partners.
- Final individual-service prices and package prices.
- Tax treatment, government fees, professional fees, and refund/cancellation rules.
- Payment gateway and merchant account readiness.
- Email provider and verified sender domain.
- Privacy policy, terms, refund policy, and disclaimer approved for the actual business model.
- Whether the first release includes a protected admin lead dashboard or uses a simpler secure lead workflow.
- Analytics provider and consent approach.

Until confirmed, use clearly labelled development placeholders and keep them out of public production content.

## 18. Project Working Principles

- Launch a trustworthy, useful public website before expanding into a large platform.
- Prioritise clarity, credibility, working enquiries, and service delivery over decorative complexity.
- Validate demand and operational capability before adding more services or automation.
- Make every commercial promise measurable and deliverable.
- Keep the customer informed about scope, price, dependencies, and next steps.
- Treat IDEATOBUSINESS as a real service business, not just a collection of website pages.

---

**Project:** IDEATOBUSINESS  
**Document:** Project README / Antigravity Implementation Brief  
**Status:** Initial project specification — owner decisions and final commercial/legal details are still required.
