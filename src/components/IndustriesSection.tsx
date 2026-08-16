import React from 'react';
import { motion } from 'motion/react';
import { industriesData } from '../data/industriesData';
import { 
  HeartPulse, 
  UtensilsCrossed, 
  Briefcase, 
  Building2, 
  Store, 
  Rocket, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface IndustriesSectionProps {
  onIndustrySelect?: (industry: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onIndustrySelect }) => {
  const getIconWrapper = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shadow-xs mb-5"><HeartPulse className="w-6 h-6" /></div>;
      case 'UtensilsCrossed':
        return <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-xs mb-5"><UtensilsCrossed className="w-6 h-6" /></div>;
      case 'Briefcase':
        return <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-xs mb-5"><Briefcase className="w-6 h-6" /></div>;
      case 'Building2':
        return <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs mb-5"><Building2 className="w-6 h-6" /></div>;
      case 'Store':
        return <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs mb-5"><Store className="w-6 h-6" /></div>;
      case 'Rocket':
        return <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-xs mb-5"><Rocket className="w-6 h-6" /></div>;
      default:
        return <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-xs mb-5"><Briefcase className="w-6 h-6" /></div>;
    }
  };

  const handleDiscuss = (title: string) => {
    const text = encodeURIComponent(`Hi ORYNIX, I run a business in the ${title} sector and would like to discuss digital solutions.`);
    window.open(`https://wa.me/923102133355?text=${text}`, '_blank');
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Domain Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for Businesses{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              Like Yours
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every business model has distinct customer touchpoints. We configure websites and automation that solve the exact friction points in your industry.
          </p>
        </motion.div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-blue-300"
            >
              <div>
                <div className="transition-transform group-hover:scale-110 duration-200">
                  {getIconWrapper(ind.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {ind.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {ind.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Common Solutions:
                  </p>
                  {ind.useCases.map((useCase, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  type="button"
                  onClick={() => handleDiscuss(ind.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-[#3B82F6] border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
                >
                  <span>Solutions for {ind.title.split('&')[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
