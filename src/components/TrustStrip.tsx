import React from 'react';
import { motion } from 'motion/react';
import { 
  HeartPulse, 
  UtensilsCrossed, 
  Briefcase, 
  Rocket, 
  ShoppingBag, 
  Store 
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const industries = [
    { name: 'Healthcare & Clinics', icon: HeartPulse, color: 'text-rose-600 bg-rose-50 border-rose-100' },
    { name: 'Restaurants & Cafes', icon: UtensilsCrossed, color: 'text-amber-600 bg-amber-50 border-amber-100' },
    { name: 'Professional Services', icon: Briefcase, color: 'text-blue-600 bg-blue-50 border-blue-100' },
    { name: 'Startups & SMEs', icon: Rocket, color: 'text-purple-600 bg-purple-50 border-purple-100' },
    { name: 'Retail & Commercial', icon: ShoppingBag, color: 'text-cyan-600 bg-cyan-50 border-cyan-100' },
    { name: 'Local Businesses', icon: Store, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Label on left */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shrink-0 text-center md:text-left"
          >
            <p className="text-xs uppercase font-bold tracking-wider text-blue-700">
              Targeted Expertise
            </p>
            <h2 className="text-sm sm:text-base font-bold text-[#0B1E48]">
              Digital solutions built for modern Pakistani businesses
            </h2>
          </motion.div>

          {/* Industry chips */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
            {industries.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all text-xs font-semibold text-slate-700 cursor-default"
                >
                  <div className={`p-1 rounded-md ${item.color} border`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{item.name}</span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
