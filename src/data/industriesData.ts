import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'healthcare',
    title: 'Clinics & Healthcare',
    description: 'Websites, appointment enquiries, treatments showcase and automated patient communication.',
    iconName: 'HeartPulse',
    useCases: [
      'Doctor profiles & treatment catalogs',
      'Automated slot booking via WhatsApp',
      '24h appointment reminders to stop no-shows',
      'Emergency contact pathways'
    ]
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Cafes',
    description: 'Digital menus, table reservations, location pins, and instant WhatsApp customer support.',
    iconName: 'UtensilsCrossed',
    useCases: [
      'Interactive mobile food & beverage menu',
      'Instant table reservation requests',
      'Automatic branch timing & map pins',
      'Special promotion broadcasts'
    ]
  },
  {
    id: 'consultants',
    title: 'Consultants & Coaches',
    description: 'Lead generation, consultation booking, qualification questionnaires, and automated follow-ups.',
    iconName: 'Briefcase',
    useCases: [
      'Authority-building service landing pages',
      'Paid / free discovery session scheduling',
      'Automated client onboarding forms',
      'Follow-up sequences for warm leads'
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Builders',
    description: 'Property enquiries, project brochures, lead qualification, and instant agent WhatsApp notifications.',
    iconName: 'Building2',
    useCases: [
      'Project showcase & floor plan galleries',
      'Instant property brochure download via WhatsApp',
      'Budget & location filter qualification',
      'Real-time WhatsApp alerts to sales agents'
    ]
  },
  {
    id: 'local-businesses',
    title: 'Local Businesses & Services',
    description: 'Professional web presence and automated customer communication for everyday Pakistani businesses.',
    iconName: 'Store',
    useCases: [
      'Google Maps SEO & local visibility',
      'Instant quote requests on WhatsApp',
      'Service pricing & FAQ answering',
      'Customer review collection workflows'
    ]
  },
  {
    id: 'startups',
    title: 'Startups & SMEs',
    description: 'High-conversion landing pages, MVP user interfaces, and automated multi-channel lead pipelines.',
    iconName: 'Rocket',
    useCases: [
      'Modern SaaS / product landing pages',
      'Early access & waitlist capture',
      'CRM & Google Sheets workflow sync',
      'Automated customer onboarding journeys'
    ]
  }
];

export interface WhyOrynixItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const whyOrynixData: WhyOrynixItem[] = [
  {
    number: '01',
    title: 'Built Around Your Business',
    description: 'We understand your day-to-day operations and customer journey before recommending technology.',
    iconName: 'Target'
  },
  {
    number: '02',
    title: 'Modern Development',
    description: 'Fast, responsive and professionally designed digital experiences with zero bloated templates.',
    iconName: 'Code2'
  },
  {
    number: '03',
    title: 'Automation First',
    description: 'We proactively look for repetitive manual steps and paperwork that technology can simplify.',
    iconName: 'Zap'
  },
  {
    number: '04',
    title: 'WhatsApp Focused',
    description: 'Solutions specifically engineered for the primary communication channel Pakistani customers use every day.',
    iconName: 'MessageSquare'
  },
  {
    number: '05',
    title: 'Clear Communication',
    description: 'Straightforward project communication and transparent updates without unnecessary technical jargon.',
    iconName: 'Sparkles'
  },
  {
    number: '06',
    title: 'Long-Term Thinking',
    description: 'Cleanly structured systems that scale reliably as your customer base and transaction volume expand.',
    iconName: 'ShieldCheck'
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We understand your business model, customer touchpoints, and core commercial goals.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We map out the ideal website architecture, lead flow, and automation touchpoints.'
  },
  {
    step: '03',
    title: 'Design',
    description: 'We craft a modern, clean customer experience strictly aligned with your brand identity.'
  },
  {
    step: '04',
    title: 'Development',
    description: 'The website and automation pipes are built, integrated with WhatsApp & tools, and rigorously tested.'
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Your complete digital system goes live after thorough quality assurance and final approval.'
  },
  {
    step: '06',
    title: 'Support',
    description: 'We remain available for ongoing optimizations, workflow improvements, and feature expansion.'
  }
];
