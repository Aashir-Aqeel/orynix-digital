import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['home', 'services', 'solutions', 'portfolio', 'process', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-announcement banner */}
      <div className="bg-[#0A1E5C] text-white text-[12px] py-1.5 px-4 hidden sm:block border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Digital Solutions Built for Modern Pakistani Businesses</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="https://wa.me/923102133355" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +92 310 2133355</span>
            </a>
            <span className="text-slate-600">•</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3.5' 
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="group focus:outline-none flex items-center gap-2"
              id="navbar-logo"
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#3B82F6] font-bold'
                        : 'text-slate-600 hover:text-[#3B82F6]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right side CTA: Let's Talk on WhatsApp */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/923102133355"
                target="_blank"
                rel="noopener noreferrer"
                id="navbar-whatsapp-btn"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-95 shadow-md shadow-blue-200 transition-all active:scale-98"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="https://wa.me/923102133355"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-white rounded-md bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="https://wa.me/923102133355"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-white bg-[#0A1E5C] hover:bg-blue-900 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Let's Talk on WhatsApp</span>
            </a>
            <div className="text-center text-xs text-slate-500 mt-1">
              Karachi, Pakistan • +92 310 2133355
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
