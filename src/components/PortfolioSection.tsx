import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioProjects } from '../data/portfolioData';
import { 
  ExternalLink, 
  Globe, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight, 
  Lock,
  Layers
} from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Dental / Healthcare', 'Restaurant / Hospitality'];

  const filteredProjects = selectedCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.industry.includes(selectedCategory));

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
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
            <Globe className="w-3.5 h-3.5" />
            <span>Proven Digital Implementations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Websites We Have{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              Built
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A selection of websites created for businesses across healthcare, hospitality, and local services in Pakistan.
          </p>

          {/* Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0F172A] text-white shadow-sm scale-105'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat === 'All' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isLarge = index === 0 && selectedCategory === 'All';
              const displayUrl = project.url.replace('https://', '').replace('/', '');

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  key={project.id}
                  id={`portfolio-card-${project.id}`}
                  className={`rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Top Browser Frame Mockup */}
                  <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>

                    <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md text-[10px] text-slate-500 font-mono border border-slate-200 max-w-[220px] sm:max-w-xs truncate">
                      <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{displayUrl}</span>
                    </div>

                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      Live
                    </span>
                  </div>

                  {/* Visual Preview Container */}
                  <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] p-6 text-white min-h-[190px] flex flex-col justify-between overflow-hidden">
                    
                    {/* Subtle decorative glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

                    <div className="flex items-start justify-between gap-2 relative z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/60">
                        {project.industry}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {project.statsLabel}
                      </span>
                    </div>

                    {/* Mockup Content Overlay */}
                    <div className="relative z-10 my-4 space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Browser bottom mock bar */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-700/60">
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Mobile Responsive
                      </span>
                      <span className="text-slate-300 group-hover:text-white flex items-center gap-1 font-semibold transition-colors">
                        <span>Explore Live Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Card Details & Features */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Key Highlights:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View Website Button */}
                    <div className="pt-3 border-t border-slate-100">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-center gap-2 group/btn active:scale-95"
                      >
                        <span>View Website</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Credibility reminder bottom notice */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Every website created by ORYNIX is custom engineered with lightweight code, rapid mobile load times, and direct WhatsApp lead bridges.
        </div>

      </div>
    </section>
  );
};
