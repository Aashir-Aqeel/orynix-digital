import React from 'react';
import { Logo } from './Logo';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  ArrowUp,
  Globe,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Web development and business automation solutions for modern businesses.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Karachi Headquartered • Serving Pakistan</span>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  WhatsApp Automation
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Business Automation
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => scrollToSection(e, 'portfolio')}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => scrollToSection(e, 'process')}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Karachi, Pakistan</span>
              </div>
              <a 
                href="https://wa.me/923102133355" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+92 310 2133355</span>
              </a>
              <a 
                href="mailto:info@orynixdigital.com" 
                className="flex items-center gap-2.5 hover:text-[#3B82F6] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>info@orynixdigital.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 <strong className="text-white">ORYNIX Digitals</strong>. Karachi, Pakistan.</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">info@orynixdigital.com</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#3B82F6] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
