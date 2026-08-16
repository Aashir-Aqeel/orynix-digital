import React from 'react';
import { motion } from 'motion/react';
import { servicesData } from '../data/servicesData';
import { 
  Globe, 
  MessageSquareShare, 
  Cpu, 
  Bot, 
  Check, 
  ArrowRight, 
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIconContainer = (id: string, iconName: string) => {
    switch (id) {
      case 'website-development':
        return (
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
            <Globe className="w-6 h-6" />
          </div>
        );
      case 'whatsapp-automation':
        return (
          <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 shadow-xs">
            <MessageSquareShare className="w-6 h-6" />
          </div>
        );
      case 'business-automation':
        return (
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-xs">
            <Cpu className="w-6 h-6" />
          </div>
        );
      case 'ai-chat-solutions':
        return (
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shadow-xs">
            <Bot className="w-6 h-6" />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
            <Globe className="w-6 h-6" />
          </div>
        );
    }
  };

  const handleCtaClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleWhatsAppDirect = (serviceTitle: string) => {
    const text = encodeURIComponent(`Hi ORYNIX, I am interested in your ${serviceTitle} service for my business.`);
    window.open(`https://wa.me/923102133355?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-slate-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Digital Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything Your Business Needs to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              Go Digital
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From your first professional website to automated customer communication, ORYNIX builds digital systems designed around how your business actually works.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => {
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="transition-transform group-hover:scale-110 duration-200">
                      {getIconContainer(service.id, service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Key Capabilities:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleCtaClick(service.title)}
                    className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#0F172A] hover:bg-[#1E293B] text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleWhatsAppDirect(service.title)}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    title="Inquire on WhatsApp"
                  >
                    <span>WhatsApp Inquiry</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
