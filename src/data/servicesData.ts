import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    tagline: 'Modern, high-converting digital storefronts',
    description: 'Fast, responsive and professional websites designed to turn visitors into customers. Built with modern architecture, rapid load times, and seamless mobile responsiveness.',
    iconName: 'Globe',
    badge: 'Core Service',
    features: [
      'Business & Corporate Websites',
      'Clinic & Healthcare Websites',
      'Restaurant & Cafe Websites',
      'High-Converting Landing Pages',
      'Portfolio & Service Websites',
      'Mobile-First Responsive Design',
      'SEO-ready Clean Structure',
      'Direct WhatsApp Integration'
    ],
    ctaText: 'Build My Website',
    ctaAction: 'web-development'
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    tagline: '24/7 automated messaging & lead qualification',
    description: 'Turn WhatsApp into a smarter customer communication channel with automated workflows tailored to your business. Never keep a potential customer waiting again.',
    iconName: 'MessageSquareShare',
    badge: 'High Impact',
    popular: true,
    features: [
      'Automated Customer Enquiries',
      'Smart Lead Qualification',
      'Instant Customer Follow-ups',
      'Appointment Booking Workflows',
      'Interactive FAQ Automation',
      'Real-time Owner Lead Alerts',
      'Customer Status Updates'
    ],
    ctaText: 'Automate My WhatsApp',
    ctaAction: 'whatsapp-automation'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    tagline: 'Eliminate manual spreadsheet & form work',
    description: 'Reduce repetitive manual work by connecting your forms, spreadsheets, email, CRM and communication tools into one unified automated pipeline.',
    iconName: 'Cpu',
    badge: 'Operational Efficiency',
    features: [
      'Centralized Lead Management',
      'Google Sheets Two-Way Automation',
      'Automated Email Sequences',
      'Intelligent Form Data Capture',
      'Scheduled Follow-up Reminders',
      'Team & Internal Notifications',
      'Custom Workflow Automations'
    ],
    ctaText: 'Automate My Business',
    ctaAction: 'business-automation'
  },
  {
    id: 'ai-chat-solutions',
    title: 'AI & Chat Solutions',
    tagline: 'Smart assistants trained on your business data',
    description: 'Use intelligent conversational experiences to help customers get instant answers and assist internal teams in handling repetitive customer enquiries.',
    iconName: 'Bot',
    badge: 'Next-Gen',
    features: [
      'Website AI Chat Assistants',
      'Intelligent Business FAQ Systems',
      'Customer Support Query Routing',
      'Automated Lead Qualification',
      'Business Knowledge Assistants',
      'Multi-Language & Urdu Support Flow'
    ],
    ctaText: 'Explore AI Solutions',
    ctaAction: 'ai-chat-solutions'
  }
];
