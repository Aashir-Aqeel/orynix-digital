import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Sparkles,
  Zap,
  Clock,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const painPoints = [
    { text: 'Customers message on WhatsApp or social media, but replies get delayed for hours or days', impact: 'Lost revenue to faster competitors' },
    { text: 'Valuable interested leads are forgotten on personal phones with zero tracking', impact: 'Zero pipeline visibility' },
    { text: 'Business has no professional website, causing patients & customers to question credibility', impact: 'Weak brand reputation' },
    { text: 'Enquiries & booking details are manually scribbled in notebooks or unorganized chats', impact: 'High risk of errors & double bookings' },
    { text: 'Staff repeatedly wastes hours typing out the exact same answers to basic questions', impact: 'Wasted payroll & slower operations' },
    { text: 'Follow-ups and appointment reminders depend entirely on someone remembering', impact: 'High no-show & churn rates' },
  ];

  const solutions = [
    { text: 'Professional, custom-designed website establishing immediate market authority', result: 'High patient & customer trust' },
    { text: 'WhatsApp-first automated customer journeys responding in under 3 seconds 24/7', result: 'Zero missed opportunities' },
    { text: 'Instant automated lead capture into structured Google Sheets or business CRM', result: '100% organized data' },
    { text: 'Centralized customer records with clean timestamps and requirement notes', result: 'Seamless staff handoffs' },
    { text: 'Intelligent interactive FAQ & treatment menus answering repetitive inquiries instantly', result: 'Freed up team time' },
    { text: 'Scheduled automated reminders & follow-ups sent to patients and clients on time', result: 'Minimal no-shows & higher conversion' },
    { text: 'Optimized business operations engineered to scale effortlessly across Pakistan', result: 'Predictable growth' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-bold border border-slate-700">
            <Zap className="w-3.5 h-3.5" />
            <span>The Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Still Running Your Business Manually?
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Most Pakistani businesses lose leads and waste hours every week simply because their customer workflows depend on manual memory and slow replies.
          </p>
        </motion.div>

        {/* Split Grid: Manual Chaos vs Automated Precision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Without ORYNIX */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-7 sm:p-9 bg-slate-950/80 border border-rose-900/40 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-rose-500/5 rounded-full blur-xl pointer-events-none"></div>
            
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-900/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm border border-rose-500/30">
                    ✕
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Without ORYNIX</h3>
                    <p className="text-xs text-rose-400 font-medium">Manual, Fragile &amp; Slow</p>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 font-semibold">
                  Costly Bottlenecks
                </span>
              </div>

              <div className="space-y-4">
                {painPoints.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-rose-800/60 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-200 font-medium leading-snug">
                          {item.text}
                        </p>
                        <p className="text-xs text-rose-400/80 font-mono mt-1">
                          ↳ Result: {item.impact}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Average response time: 2 to 8 hours</span>
              <span className="text-rose-400 font-semibold">High lead drop-off</span>
            </div>
          </motion.div>

          {/* Right Side: With ORYNIX */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-7 sm:p-9 bg-gradient-to-br from-blue-950/80 via-slate-900/90 to-indigo-950/80 border border-cyan-500/30 shadow-2xl shadow-blue-500/10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyan-500/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-sm border border-cyan-500/40">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">With ORYNIX</h3>
                    <p className="text-xs text-cyan-300 font-medium">Automated, Professional &amp; 24/7</p>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Growth System
                </span>
              </div>

              <div className="space-y-3.5">
                {solutions.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-3 rounded-xl bg-blue-900/30 border border-blue-700/40 hover:border-cyan-400/60 transition-all shadow-2xs"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-white font-medium leading-snug">
                          {item.text}
                        </p>
                        <p className="text-xs text-cyan-300/90 font-mono mt-0.5">
                          ✓ Benefit: {item.result}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-cyan-500/20 text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                Response time: &lt; 3 seconds
              </span>
              <span className="text-emerald-400 font-semibold">100% Leads Captured</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
