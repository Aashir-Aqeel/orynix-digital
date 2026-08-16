import { AutomationWorkflow } from '../types';

export const automationWorkflows: AutomationWorkflow[] = [
  {
    id: 'whatsapp-lead',
    title: 'WhatsApp Lead Automation',
    category: 'Lead Generation',
    description: 'Automatically engage new leads from your ads or website within 3 seconds, collect important qualification details, and notify your sales team instantly.',
    steps: [
      {
        title: 'Lead Inflow',
        description: 'Prospect clicks ad, submits website form or messages directly',
        icon: 'MousePointerClick'
      },
      {
        title: 'Instant Capture',
        description: 'Contact data synced to database & WhatsApp triggered instantly',
        icon: 'Zap',
        highlight: true
      },
      {
        title: 'Smart Qualification',
        description: 'Automated greeting asks requirement, budget & timeline',
        icon: 'MessageSquareText'
      },
      {
        title: 'Owner Notification',
        description: 'Instant WhatsApp alert sent to business owner with lead summary',
        icon: 'BellRing',
        highlight: true
      },
      {
        title: 'Scheduled Follow-up',
        description: 'Automatic reminder sent if lead has not confirmed next step',
        icon: 'CalendarCheck2'
      }
    ]
  },
  {
    id: 'clinic-appointment',
    title: 'Clinic Appointment Automation',
    category: 'Healthcare & Clinics',
    description: 'Reduce receptionist phone load and missed consultations by guiding patients through doctor selection, slot booking, and automated 24h reminders.',
    steps: [
      {
        title: 'Patient Enquiry',
        description: 'Patient visits site or sends "Hi" on clinic WhatsApp',
        icon: 'User'
      },
      {
        title: 'Service & Doctor Selection',
        description: 'Interactive menu presents treatments (Dental, Scaling, Implants)',
        icon: 'Stethoscope'
      },
      {
        title: 'Slot Booking',
        description: 'Patient chooses preferred date & time from available clinic slots',
        icon: 'Calendar'
      },
      {
        title: 'Instant Confirmation',
        description: 'Booking confirmed on clinic calendar & WhatsApp receipt generated',
        icon: 'CheckCircle2',
        highlight: true
      },
      {
        title: '24h Pre-Appointment Reminder',
        description: 'Automated WhatsApp reminder sent to ensure zero no-shows',
        icon: 'Clock'
      }
    ]
  },
  {
    id: 'restaurant-enquiry',
    title: 'Restaurant Enquiry & Reservation',
    category: 'Hospitality & Dining',
    description: 'Handle high-volume repetitive customer questions about digital menus, location, timings, and table reservations without keeping guests waiting.',
    steps: [
      {
        title: 'Customer Message',
        description: 'Diner reaches out on WhatsApp or Instagram link',
        icon: 'MessageCircle'
      },
      {
        title: 'Instant Menu & Info Options',
        description: 'Interactive button menu: View Menu, Today\'s Specials, Location',
        icon: 'Utensils'
      },
      {
        title: 'Table Reservation Request',
        description: 'Diner specifies guest count, date, time & seating preference',
        icon: 'Users'
      },
      {
        title: 'Staff Alert & Sync',
        description: 'Manager receives alert with guest details & table confirmed',
        icon: 'CheckSquare',
        highlight: true
      },
      {
        title: 'Directions & Confirmation',
        description: 'Google Maps pin and reservation code sent to guest',
        icon: 'MapPin'
      }
    ]
  },
  {
    id: 'customer-followup',
    title: 'Customer Follow-up & CRM Sync',
    category: 'Sales Operations',
    description: 'Prevent valuable leads from going cold by automatically organizing prospects in Google Sheets / CRM and dispatching timely follow-up sequences.',
    steps: [
      {
        title: 'New Lead Ingestion',
        description: 'Customer contact captured from any digital source',
        icon: 'UserPlus'
      },
      {
        title: 'Google Sheet / CRM Sync',
        description: 'Record created with timestamps, source & initial enquiry',
        icon: 'FileSpreadsheet',
        highlight: true
      },
      {
        title: 'Follow-up Scheduler',
        description: 'Trigger delays set for 2 hours, 24 hours, or 3 days',
        icon: 'Timer'
      },
      {
        title: 'Multi-Channel Message',
        description: 'Personalized WhatsApp / Email follow-up sent automatically',
        icon: 'Send'
      },
      {
        title: 'Live Status Update',
        description: 'Spreadsheet status updated to "Contacted / Qualified / Closed"',
        icon: 'TrendingUp',
        highlight: true
      }
    ]
  }
];

export interface ChatSimulatorScenario {
  id: string;
  title: string;
  industry: string;
  avatar: string;
  messages: {
    sender: 'user' | 'bot' | 'system';
    text: string;
    options?: string[];
    delay?: number;
    badge?: string;
  }[];
}

export const simulatorScenarios: ChatSimulatorScenario[] = [
  {
    id: 'clinic',
    title: 'Clinic Appointment Workflow',
    industry: 'Healthcare (Essa / Crown & Care)',
    avatar: '👨‍⚕️',
    messages: [
      { sender: 'user', text: 'Hi, I need an appointment for dental checkup and scaling' },
      { 
        sender: 'bot', 
        text: 'Hello! Welcome to Essa Dental & Aesthetics. 👋 We would be delighted to assist you. Please select an option to proceed:',
        options: ['📅 Book Scaling & Checkup', '💰 Treatment Price List', '📍 Clinic Location & Timings']
      }
    ]
  },
  {
    id: 'restaurant',
    title: 'Restaurant Table Reservation',
    industry: 'Hospitality (The Dera Cafe)',
    avatar: '🍽️',
    messages: [
      { sender: 'user', text: 'Hi! Can I see your dinner menu and reserve a table for 4 people tonight?' },
      { 
        sender: 'bot', 
        text: 'Welcome to The Dera Restaurant & Cafe! 🍽️✨ Here is our complete digital menu and reservation desk. How can we serve you today?',
        options: ['📖 View Digital Menu (PDF)', '🪑 Reserve Table for Tonight', '📍 Get Karachi Branch Pin']
      }
    ]
  },
  {
    id: 'lead-gen',
    title: 'Real Estate / SME Lead Capture',
    industry: 'Business / Services',
    avatar: '🏢',
    messages: [
      { sender: 'user', text: 'Hi, I saw your post. I want information regarding 3-bed apartments in Gulshan / Clifton' },
      { 
        sender: 'bot', 
        text: 'Thank you for reaching out! 🏙️ We have 4 prime verified listings matching your preference. What is your ideal move-in timeline?',
        options: ['⚡ Immediate (Within 30 Days)', '📅 1-3 Months', '💼 Just Exploring Investment']
      }
    ]
  }
];
