import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CtaSectionProps {
  onStartProject?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartProject }) => {
  const scrollToContact = () => {
    if (onStartProject) {
      onStartProject();
      return;
    }
    const el = document.getElementById('contact');
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
    <section className="py-16 lg:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-[#0F172A] p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden border border-slate-800"
        >
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-cyan-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Discuss Your Growth Strategy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Upgrade How Your Business Works?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you need a professional website, smarter WhatsApp communication or automated business workflows, let's discuss what ORYNIX can build for you.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/923102133355?text=Hi%20ORYNIX%2C%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white text-base bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-95 shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={scrollToContact}
                id="cta-start-project-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white text-base bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-white/40 active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Assurance footer */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                No commitment free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Fast turnaround proposals
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Karachi-based technical team
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
