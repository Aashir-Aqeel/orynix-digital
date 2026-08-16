import React from 'react';
import { motion } from 'motion/react';
import { processSteps } from '../data/industriesData';
import { 
  Sparkles, 
  Search, 
  Compass, 
  Palette, 
  Code, 
  Rocket, 
  HeadphonesIcon,
  Check
} from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const stepIcons = [Search, Compass, Palette, Code, Rocket, HeadphonesIcon];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Idea to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              Launch
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent 6-stage development method that guarantees rapid turnaround, zero guesswork, and rock-solid deployment.
          </p>
        </motion.div>

        {/* Timeline on Desktop (Grid) & Mobile (Vertical) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            return (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-blue-300"
              >
                <div>
                  {/* Step Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#3B82F6] flex items-center justify-center font-bold text-sm border border-blue-100 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-mono font-extrabold text-slate-400 group-hover:text-[#3B82F6] transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Phase {step.step}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Assurance */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 max-w-2xl mx-auto text-center text-xs text-slate-600 shadow-sm">
          💡 <strong>Average turnaround:</strong> 7 to 14 business days from kickoff to full live launch with WhatsApp integration.
        </div>

      </div>
    </section>
  );
};
