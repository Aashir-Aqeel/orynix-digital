import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, Shield, Layers } from 'lucide-react';
import { HeroDashboardMockup } from './HeroDashboardMockup';

interface HeroProps {
  onStartProject?: () => void;
  onViewWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white border-b border-slate-200">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300/30 via-cyan-200/25 to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-purple-300/25 via-indigo-200/20 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-50/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 text-center lg:text-left space-y-6"
          >
            
            {/* Top Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100 shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Premier Digital Agency • Pakistan</span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Websites That Build Trust.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
                Automations
              </span>{' '}
              That Save Time.
            </motion.h1>

            {/* Supporting Copy (em dash removed) */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              <strong className="text-slate-900 font-semibold">ORYNIX</strong> helps businesses build professional digital experiences and automate repetitive work so you can focus on growth and operations.
            </motion.p>

            {/* Two Primary CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                type="button"
                onClick={() => onStartProject ? onStartProject() : scrollTo('contact')}
                id="hero-start-project-btn"
                className="w-full sm:w-auto bg-[#0F172A] hover:bg-[#1E293B] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onViewWork ? onViewWork() : scrollTo('portfolio')}
                id="hero-view-work-btn"
                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-slate-300"
              >
                <span>View Our Work</span>
              </button>
            </motion.div>

            {/* Focus Metrics / Pillars Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">Expertise</span>
                <span className="text-sm font-semibold text-slate-700">Web Development</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">Reach</span>
                <span className="text-sm font-semibold text-slate-700">WhatsApp Automation</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">Power</span>
                <span className="text-sm font-semibold text-slate-700">Business AI &amp; CRM</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Interactive Ecosystem Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 lg:pl-4"
          >
            <HeroDashboardMockup />
          </motion.div>

        </div>
      </div>

    </section>
  );
};
