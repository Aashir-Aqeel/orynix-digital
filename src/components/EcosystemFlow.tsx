import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Globe, 
  MessageSquare, 
  Database, 
  Bot, 
  Bell, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';

export const EcosystemFlow: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      id: 'visitor',
      title: '1. Visitor Discovers',
      shortTitle: 'Visitor',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      description: 'A prospective patient, diner, or client arrives from Google search, social media, or a local referral.',
      detail: 'Clean, fast loading ensures you never lose impatient mobile visitors on Pakistani mobile connections.'
    },
    {
      id: 'website',
      title: '2. Professional Website',
      shortTitle: 'Website',
      icon: Globe,
      color: 'bg-cyan-100 text-cyan-600',
      description: 'Your custom ORYNIX website presents your services, treatments, or menu with high visual credibility.',
      detail: 'Built with mobile-first speed, structured service menus, and frictionless call-to-action touchpoints.'
    },
    {
      id: 'enquiry',
      title: '3. Enquiry / WhatsApp',
      shortTitle: 'Form / WhatsApp',
      icon: MessageSquare,
      color: 'bg-indigo-100 text-indigo-600',
      description: 'The visitor clicks your direct WhatsApp button or fills out a consultation request.',
      detail: 'Direct deep-linking opens WhatsApp pre-populated with the exact service or treatment they explored.'
    },
    {
      id: 'captured',
      title: '4. Lead Captured',
      shortTitle: 'Lead Captured',
      icon: Database,
      color: 'bg-purple-100 text-purple-600',
      description: 'Contact information, timestamps, and service interest are recorded automatically in your database or Google Sheet.',
      detail: 'Zero manual copy-pasting required. Every lead is cataloged in real-time with zero risk of loss.'
    },
    {
      id: 'auto-response',
      title: '5. Automated Response',
      shortTitle: 'Auto Response',
      icon: Bot,
      color: 'bg-fuchsia-100 text-fuchsia-600',
      description: 'An intelligent WhatsApp bot greets the customer in < 3 seconds with answers, menus, or time slots.',
      detail: 'Provides answers to common FAQs, offers appointment selection, or collects necessary qualification details.'
    },
    {
      id: 'owner-notified',
      title: '6. Owner Notified',
      shortTitle: 'Owner Alert',
      icon: Bell,
      color: 'bg-amber-100 text-amber-600',
      description: 'A priority alert with the qualified customer details is sent straight to the business owner or doctor.',
      detail: 'Includes name, phone number, treatment/booking request, and preferred timing directly on your phone.'
    },
    {
      id: 'follow-up',
      title: '7. Automated Follow-up',
      shortTitle: 'Follow-up',
      icon: Clock,
      color: 'bg-teal-100 text-teal-600',
      description: 'Automated 24-hour appointment reminders or warm re-engagement messages are sent automatically.',
      detail: 'Ensures clinic patients do not miss appointments and restaurant diners receive driving directions.'
    },
    {
      id: 'converted',
      title: '8. Customer Converted',
      shortTitle: 'Converted!',
      icon: CheckCircle,
      color: 'bg-emerald-100 text-emerald-600',
      description: 'The enquiry successfully converts into a paying patient, seated table, or committed client.',
      detail: 'Delivering predictable revenue while eliminating hours of manual communication overhead.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
            <Layers className="w-3.5 h-3.5" />
            <span>The ORYNIX Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            More Than Just a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              Website
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A website without automation leaves money on the table. ORYNIX engineers an end-to-end digital pipeline that captures, qualifies, and converts every prospect seamlessly.
          </p>
        </motion.div>

        {/* Interactive Step Navigator on Desktop / Tablet */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStep === idx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setSelectedStep(idx)}
                className={`p-3 rounded-2xl text-left border transition-all duration-200 cursor-pointer relative group flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-white border-[#3B82F6] shadow-md ring-2 ring-blue-400/20 scale-[1.02]' 
                    : 'bg-white border-slate-200 shadow-sm hover:border-slate-300 hover:bg-slate-50/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-7 h-7 rounded-lg ${step.color} flex items-center justify-center font-bold transition-transform group-hover:scale-110`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <div className={`text-xs font-bold leading-snug ${
                    isSelected ? 'text-[#3B82F6]' : 'text-slate-800'
                  }`}>
                    {step.shortTitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight Card for the selected step */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    Step {selectedStep + 1} of 8
                  </span>
                  <span className="text-xs text-slate-400">• Click any step above to explore</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {steps[selectedStep].title}
                </h3>

                <p className="text-base text-slate-700 font-medium leading-relaxed">
                  {steps[selectedStep].description}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span><strong>How ORYNIX implements it:</strong> {steps[selectedStep].detail}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-center space-y-2">
                  <p className="text-xs font-bold text-slate-700">Experience Continuous Pipeline</p>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      ← Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                      className="px-3.5 py-2 rounded-xl bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1E293B] transition-colors cursor-pointer"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Visual Connectivity Pipeline Bar (em dash removed) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 p-5 rounded-2xl bg-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-slate-800"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center font-bold">
              ⚡
            </div>
            <div>
              <div className="text-sm font-bold text-white">Full-Stack Digital Infrastructure</div>
              <div className="text-xs text-slate-300">We do not simply hand over a static website file, we build your customer acquisition engine.</div>
            </div>
          </div>
          <a
            href="https://wa.me/923102133355?text=Hi%20ORYNIX%2C%20I%20want%20to%20know%20how%20you%20can%20connect%20my%20website%20with%20WhatsApp%20automation."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-95 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Discuss Your Pipeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
