import React, { useState } from 'react';
import { motion } from 'motion/react';
import { automationWorkflows } from '../data/automationData';
import { InteractiveChatSimulator } from './InteractiveChatSimulator';
import { 
  Zap, 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  Stethoscope, 
  Utensils, 
  FileSpreadsheet,
  MousePointerClick,
  CheckCircle2,
  Clock,
  Send,
  Building,
  UserPlus
} from 'lucide-react';

interface AutomationSectionProps {
  onInquireAutomation?: (workflowTitle: string) => void;
}

export const AutomationSection: React.FC<AutomationSectionProps> = ({ onInquireAutomation }) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'live-demo'>('cards');

  const getWorkflowIcon = (id: string) => {
    switch (id) {
      case 'whatsapp-lead':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
            <Zap className="w-5 h-5" />
          </div>
        );
      case 'clinic-appointment':
        return (
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
            <Stethoscope className="w-5 h-5" />
          </div>
        );
      case 'restaurant-enquiry':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
            <Utensils className="w-5 h-5" />
          </div>
        );
      case 'customer-followup':
        return (
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
            <Zap className="w-5 h-5" />
          </div>
        );
    }
  };

  const handleDiscussWorkflow = (title: string) => {
    const text = encodeURIComponent(`Hi ORYNIX, I am interested in implementing the ${title} for my business.`);
    window.open(`https://wa.me/923102133355?text=${text}`, '_blank');
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
            <Zap className="w-3.5 h-3.5" />
            <span>Workflow Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Automation Solutions We Can{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              Build
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Examples of automated workflows ORYNIX can create for growing businesses.
          </p>

          {/* Toggle between Workflow Architecture and Interactive Live Demo */}
          <div className="pt-3 flex items-center justify-center">
            <div className="bg-white p-1.5 rounded-full flex items-center gap-1 border border-slate-200 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab('cards')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'cards'
                    ? 'bg-[#0F172A] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Workflow Blueprints (4 Systems)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('live-demo')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'live-demo'
                    ? 'bg-[#0F172A] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Test Live WhatsApp Demo</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* View Mode 1: Detailed 4 Automated Workflow Cards */}
        {activeTab === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationWorkflows.map((workflow, idx) => (
              <motion.div
                key={workflow.id}
                id={`workflow-card-${workflow.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-white p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-blue-300"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="transition-transform group-hover:scale-110 duration-200">
                      {getWorkflowIcon(workflow.id)}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {workflow.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {workflow.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {workflow.description}
                  </p>

                  {/* Visual Step-by-Step Flow Pipeline */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      End-to-End Automated Pipeline:
                    </p>
                    {workflow.steps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border transition-all text-xs flex items-start gap-3 ${
                          step.highlight
                            ? 'bg-blue-50/80 border-blue-200 text-blue-950 font-medium'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 ${
                          step.highlight ? 'bg-[#3B82F6] text-white' : 'bg-slate-300 text-slate-700'
                        }`}>
                          {sIdx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{step.title}</div>
                          <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleDiscussWorkflow(workflow.title)}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0F172A] hover:bg-[#1E293B] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        )}

        {/* View Mode 2: Interactive Chat Sandbox Simulator */}
        {activeTab === 'live-demo' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <InteractiveChatSimulator />
          </motion.div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            All workflows can be customized for your exact software tools, including Google Sheets, Notion, Meta Ads, Email, and Custom Databases.
          </p>
        </div>

      </div>
    </section>
  );
};
