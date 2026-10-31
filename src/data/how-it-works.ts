import { ProcessStep } from '@/types';

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Submit Your Business Idea',
    shortSummary: 'Tell us about your venture, concept, or specific service needs.',
    description:
      'Complete our intuitive Get Started form with your business stage, target services, and brief requirements. It takes less than 2 minutes.',
    deliverable: 'Initial business profile logged & assigned to specialist',
    iconName: 'FileEdit',
  },
  {
    step: 2,
    title: 'Get a Business Roadmap',
    shortSummary: 'Receive a clear scope, regulatory roadmap, and transparent quote.',
    description:
      'Our team analyzes your requirements and crafts a tailored service roadmap detailing scope, deliverables, realistic timelines, and exact pricing.',
    deliverable: 'Customized scope breakdown & transparent price estimate',
    iconName: 'Map',
  },
  {
    step: 3,
    title: 'Select Services or Package',
    shortSummary: 'Pick an all-in-one package or customize your standalone services.',
    description:
      'Choose the bundle that matches your current budget and growth phase, or combine standalone services with no locked-in long-term commitments.',
    deliverable: 'Agreed deliverable checklist with milestone targets',
    iconName: 'CheckSquare',
  },
  {
    step: 4,
    title: 'Confirm Your Order',
    shortSummary: 'Approve the scope, deliverables, and secure payment schedule.',
    description:
      'Review and sign off on your deliverable checklist. Pay securely via UPI, NetBanking, or card through transparent milestone terms.',
    deliverable: 'Formal order confirmation & dedicated coordinator assignment',
    iconName: 'ShieldCheck',
  },
  {
    step: 5,
    title: 'Service Delivery & Revisions',
    shortSummary: 'Watch your business take shape with regular milestone previews.',
    description:
      'Our specialist teams execute your branding, website code, regulatory paperwork, or marketplace accounts with interactive milestone updates.',
    deliverable: 'Draft designs, staging websites, or portal filing acknowledgements',
    iconName: 'Layers',
  },
  {
    step: 6,
    title: 'Launch & Ongoing Support',
    shortSummary: 'Receive all master vector files, credentials, and growth guidance.',
    description:
      'Gain 100% ownership of your domains, vector artwork, certificates, and code, backed by ongoing technical maintenance and marketing support.',
    deliverable: 'Complete handover dossier & post-launch support activation',
    iconName: 'Rocket',
  },
];

