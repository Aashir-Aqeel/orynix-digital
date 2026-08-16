import React from 'react';
import { motion } from 'motion/react';
import { whyOrynixData } from '../data/industriesData';
import { 
  Target, 
  Code2, 
  Zap, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export const WhyOrynix: React.FC = () => {
  const getIconWrapper = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-xs"><Target className="w-6 h-6" /></div>;
      case 'Code2':
        return <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 shadow-xs"><Code2 className="w-6 h-6" /></div>;
      case 'Zap':
        return <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-xs"><Zap className="w-6 h-6" /></div>;
      case 'MessageSquare':
        return <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs"><MessageSquare className="w-6 h-6" /></div>;
      case 'Sparkles':
        return <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-xs"><Sparkles className="w-6 h-6" /></div>;
      case 'ShieldCheck':
        return <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs"><ShieldCheck className="w-6 h-6" /></div>;
      default:
        return <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-xs"><Sparkles className="w-6 h-6" /></div>;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 relative">
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
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>The ORYNIX Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Businesses Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              ORYNIX
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We operate as your dedicated technical partner, delivering reliable, high-converting digital solutions tailored specifically to the Pakistani commercial landscape.
          </p>
        </motion.div>

        {/* 6 Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {whyOrynixData.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="transition-transform group-hover:scale-110 duration-200">
                    {getIconWrapper(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#3B82F6]">
                <span>Tailored for business impact</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
