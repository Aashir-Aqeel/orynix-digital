export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  ctaText: string;
  ctaAction: string;
  badge?: string;
  popular?: boolean;
}

export interface PortfolioProject {
  id: string;
  name: string;
  industry: string;
  url: string;
  description: string;
  features: string[];
  colorTheme: string;
  mockupType: 'clinic' | 'restaurant' | 'dental' | 'hospital';
  statsLabel?: string;
}

export interface AutomationWorkflow {
  id: string;
  title: string;
  category: string;
  description: string;
  steps: {
    title: string;
    description: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  useCases: string[];
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  details: string;
}
