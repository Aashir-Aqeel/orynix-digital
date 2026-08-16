import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { 
  Building, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle, 
  Sparkles, 
  Shield, 
  Layers, 
  ArrowRight 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission, Vision, and Credentials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
              <Building className="w-3.5 h-3.5" />
              <span>About ORYNIX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Digital Solutions Designed{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
                Around Business
              </span>
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">ORYNIX</strong> is a digital solutions company focused on helping businesses establish a stronger online presence and reduce repetitive manual work.
              </p>
              <p>
                We combine modern web development with practical automation to create digital systems that are useful, maintainable, and aligned with real business operations.
              </p>
              <p>
                From professional websites to WhatsApp and workflow automation, our goal is simple: help businesses operate smarter and present themselves professionally online.
              </p>
            </div>

            {/* Core Values / Operational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <CheckCircle className="w-4 h-4 text-[#3B82F6]" />
                  <span>Business-Driven Engineering</span>
                </div>
                <p className="text-xs text-slate-600">
                  We build technology that solves operational bottlenecks, not code for the sake of code.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1 hover:border-emerald-300 transition-colors">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Direct WhatsApp Channel</span>
                </div>
                <p className="text-xs text-slate-600">
                  Fast support, direct founder communication, and frictionless collaboration.
                </p>
              </div>
            </div>

            {/* Quick Contact Micro-bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>+92 310 2133355</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Agency Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-[#0F172A] p-8 text-white shadow-xl overflow-hidden border border-slate-800">
              
              {/* Background ambient lighting */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <Logo variant="white" size="lg" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/80">
                    Est. Pakistan
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xl font-bold text-white leading-snug">
                    "Websites That Build Trust. Automations That Save Time."
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Headquartered in Karachi, delivering high-performance digital systems for Clinics, Restaurants, Consultants, Real Estate &amp; SMEs nationwide.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Target Focus</span>
                    <span className="font-bold text-white">Pakistani SMEs &amp; Clinics</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Core Deliverables</span>
                    <span className="font-bold text-white">Web &amp; WhatsApp Systems</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Response Time</span>
                    <span className="font-bold text-emerald-400">Under 2 Hours</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/923102133355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
