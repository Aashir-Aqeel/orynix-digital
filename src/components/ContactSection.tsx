import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock
} from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    service: preselectedService || 'Website + Automation',
    budget: 'PKR 30,000 - 60,000',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'Website Development',
    'WhatsApp Automation',
    'Business Automation',
    'AI / Chat Solution',
    'Website + Automation',
    'Other'
  ];

  const budgetOptions = [
    'Under PKR 30,000',
    'PKR 30,000 - 60,000',
    'PKR 60,000 - 100,000',
    'PKR 100,000+',
    'Not Sure Yet'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleOpenWhatsAppFromForm = () => {
    const message = `Hi ORYNIX, I submitted a consultation request:
• Name: ${formData.fullName || 'Client'}
• Business: ${formData.businessName || 'Business'}
• Service: ${formData.service}
• Budget: ${formData.budget}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Project Notes: ${formData.details || 'Let\'s connect to discuss.'}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923102133355?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Business Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
              Your Business
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Fill out the consultation form below or message us directly on WhatsApp for an immediate response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="rounded-2xl p-7 bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Direct WhatsApp Desk</h3>
                  <p className="text-xs text-emerald-600 font-bold">Fastest response channel for Pakistani businesses</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Have a quick question or want an instant quote? Message our technical team directly on WhatsApp.
              </p>

              <a
                href="https://wa.me/923102133355?text=Hi%20ORYNIX%2C%20I%20would%20like%20to%20discuss%20a%20website%20or%20automation%20project."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-direct-whatsapp-link"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message +92 310 2133355</span>
              </a>
            </div>

            {/* Direct Info Cards */}
            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Official Contact Information
              </h4>

              <div className="space-y-3.5 text-sm">
                <a 
                  href="mailto:orynixdigitalsolutions@gmail.com" 
                  className="flex items-center gap-3 text-slate-700 hover:text-[#3B82F6] transition-colors group p-2 rounded-xl hover:bg-slate-50"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400">Email Address</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#3B82F6]">
                      orynixdigitalsolutions@gmail.com
                    </div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/923102133355" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 hover:text-emerald-600 transition-colors group p-2 rounded-xl hover:bg-slate-50"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400">Phone &amp; WhatsApp</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-600">
                      +92 310 2133355
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-2 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      Karachi, Pakistan
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Working Hours: Mon - Sat (9:00 AM - 8:00 PM PKT)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-7 sm:p-9 bg-white border border-slate-200 shadow-sm relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Your consultation request for <strong>{formData.service}</strong> has been received. Our technical team in Karachi will review your details and contact you shortly.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleOpenWhatsAppFromForm}
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Summary to WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-slate-900">
                      Request Free Project Consultation
                    </h3>
                    <p className="text-xs text-slate-500">
                      No upfront charges • Direct technical assessment for your business
                    </p>
                  </div>

                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Salman Khan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Clifton Dental Care"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0310 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="doctor@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* What do you need? & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        What do you need?
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Budget Range (PKR)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Project Details &amp; Objectives
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us briefly about your business goals, current website (if any), or the WhatsApp workflow you want automated..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-button"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-white text-sm bg-[#0F172A] hover:bg-[#1E293B] shadow-md shadow-slate-900/10 transition-all transform active:scale-99 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending consultation details...</span>
                      ) : (
                        <>
                          <span>Request Free Consultation</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact details are strictly confidential and never shared.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
