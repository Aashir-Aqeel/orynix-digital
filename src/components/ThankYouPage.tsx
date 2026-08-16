import React, { useEffect } from 'react';
import {
  CheckCircle2,
  MessageSquare,
  ArrowLeft,
  Mail,
  Phone,
  Sparkles
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/923102133355?text=Hi%20ORYNIX%2C%20I%20just%20submitted%20a%20project%20enquiry%20through%20your%20website.';

const nextSteps = [
  'We review your enquiry',
  'We assess your requirements',
  'We contact you to discuss the project',
  'We recommend the most suitable solution'
];

export const ThankYouPage: React.FC = () => {
  // Conversion confirmation page: keep it out of the index (this page only).
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    const previousTitle = document.title;
    document.title = 'Thank You | ORYNIX';

    return () => {
      meta.remove();
      document.title = previousTitle;
    };
  }, []);

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      {/* Subtle ORYNIX gradient ambience */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] max-w-full h-72 bg-gradient-to-r from-[#3B82F6]/10 via-[#06B6D4]/10 to-[#8B5CF6]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-2xl p-7 sm:p-10 lg:p-12 bg-white border border-slate-200 shadow-sm text-center space-y-6 animate-rise">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight break-words">
              Thank You for Contacting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">
                ORYNIX
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Your enquiry has been received successfully. We'll review your requirements and get back to you shortly.
            </p>

            <p className="text-sm text-slate-500">
              Need a faster response? Chat with us directly on WhatsApp.
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="thank-you-whatsapp-cta"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="/"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </a>
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-8 rounded-2xl p-7 sm:p-8 bg-white border border-slate-200 shadow-sm space-y-5 animate-rise">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What happens next?</span>
          </div>

          <ol className="space-y-3.5">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-left">
                <span className="w-7 h-7 shrink-0 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 pt-1">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="mailto:info@orynixdigital.com"
              className="flex items-center gap-3 p-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-[#3B82F6] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-slate-400">Email</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#3B82F6] break-all">
                  info@orynixdigital.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/923102133355"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-emerald-600 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-slate-400">WhatsApp</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-600">
                  +92 310 2133355
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
