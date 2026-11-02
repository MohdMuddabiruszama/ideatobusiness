export interface StoryPhase {
  id: number;
  phaseNumber: string;
  shortName: string;
  title: string;
  description: string;
  additionalContent: string;
  deliverable: string;
  badge: string;
  folder: string;
  frameCount: number;
  posterFrame: string;
  frames: string[];
}

function generateFramePaths(folder: string, count: number = 99): string[] {
  const paths: string[] = [];
  for (let i = 1; i <= count; i++) {
    const num = String(i).padStart(3, '0');
    paths.push(`/animations/${folder}/ezgif-frame-${num}.jpg`);
  }
  return paths;
}

export const HOW_IT_WORKS_STORY_PHASES: StoryPhase[] = [
  {
    id: 1,
    phaseNumber: '01',
    shortName: 'Idea',
    title: 'Submit Your Business Idea',
    description: 'Tell us about your venture, concept, or specific service needs.',
    additionalContent:
      'Complete our intuitive Get Started form with your business stage, target services, and brief requirements. It takes less than 2 minutes.',
    deliverable: 'Initial business profile logged and assigned to specialist.',
    badge: 'STAGE 01 — CONCEPT INTAKE',
    folder: 'phase-01',
    frameCount: 99,
    posterFrame: '/animations/phase-01/ezgif-frame-001.jpg',
    frames: generateFramePaths('phase-01', 99),
  },
  {
    id: 2,
    phaseNumber: '02',
    shortName: 'Roadmap',
    title: 'Get a Business Roadmap',
    description: 'Receive a clear scope, regulatory roadmap, and transparent quote.',
    additionalContent:
      'Our team analyzes your requirements and crafts a tailored service roadmap detailing scope, deliverables, realistic timelines, and exact pricing.',
    deliverable: 'Customized scope breakdown and transparent price estimate.',
    badge: 'STAGE 02 — STRATEGY & SCOPE',
    folder: 'phase-02',
    frameCount: 99,
    posterFrame: '/animations/phase-02/ezgif-frame-001.jpg',
    frames: generateFramePaths('phase-02', 99),
  },
  {
    id: 3,
    phaseNumber: '03',
    shortName: 'Services',
    title: 'Select Services or Package',
    description: 'Choose the right services and package for your business.',
    additionalContent:
      'Choose the bundle that matches your current budget and growth phase, or combine standalone services with no locked-in long-term commitments.',
    deliverable: 'Agreed deliverable checklist with milestone targets.',
    badge: 'STAGE 03 — PACKAGE SELECTION',
    folder: 'phase-03',
    frameCount: 99,
    posterFrame: '/animations/phase-03/ezgif-frame-001.jpg',
    frames: generateFramePaths('phase-03', 99),
  },
  {
    id: 4,
    phaseNumber: '04',
    shortName: 'Order',
    title: 'Confirm Your Order',
    description: 'Approve the scope, deliverables, and secure payment schedule.',
    additionalContent:
      'Review and sign off on your deliverable checklist. Pay securely via UPI, NetBanking, or card through transparent milestone terms.',
    deliverable: 'Formal order confirmation and dedicated coordinator assignment.',
    badge: 'STAGE 04 — SECURE CHECKOUT',
    folder: 'phase-04',
    frameCount: 99,
    posterFrame: '/animations/phase-04/ezgif-frame-001.jpg',
    frames: generateFramePaths('phase-04', 99),
  },
  {
    id: 5,
    phaseNumber: '05',
    shortName: 'Delivery',
    title: 'Service Delivery & Revisions',
    description: 'Watch your business take shape with regular milestone previews.',
    additionalContent:
      'Our specialist teams execute your branding, website code, regulatory paperwork, or marketplace accounts with interactive milestone updates.',
    deliverable: 'Draft designs, staging websites, or portal filing acknowledgements.',
    badge: 'STAGE 05 — EXECUTION & PREVIEWS',
    folder: 'phase-05',
    frameCount: 99,
    posterFrame: '/animations/phase-05/ezgif-frame-001.jpg',
    frames: generateFramePaths('phase-05', 99),
  },
  {
    id: 6,
    phaseNumber: '06',
    shortName: 'Launch',
    title: 'Launch & Ongoing Support',
    description: 'Receive all master vector files, credentials, and growth guidance.',
    additionalContent:
      'Gain 100% ownership of your domains, vector artwork, certificates, and code, backed by ongoing technical maintenance and marketing support.',
    deliverable: 'Complete handover dossier and post-launch support activation.',
    badge: 'STAGE 06 — HANDOVER & GROWTH',
    folder: 'phase-06',
    frameCount: 99,
    posterFrame: '/animations/phase-06/ezgif-frame-001.jpg',
    frames: generateFramePaths('phase-06', 99),
  },
];

