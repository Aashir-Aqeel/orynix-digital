import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { ProblemSolution } from './components/ProblemSolution';
import { EcosystemFlow } from './components/EcosystemFlow';
import { PortfolioSection } from './components/PortfolioSection';
import { AutomationSection } from './components/AutomationSection';
import { WhyOrynix } from './components/WhyOrynix';
import { ProcessTimeline } from './components/ProcessTimeline';
import { IndustriesSection } from './components/IndustriesSection';
import { AboutSection } from './components/AboutSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ThankYouPage } from './components/ThankYouPage';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('Website + Automation');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Navigation between pages is a full document load, so the path is read once.
  const isThankYou = window.location.pathname.replace(/\/+$/, '') === '/thank-you';

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const el = document.getElementById('contact');
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

  const scrollToContact = () => {
    const el = document.getElementById('contact');
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

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
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
    <div className="min-h-screen bg-[#FBFDFF] text-[#0A1931] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {isThankYou ? (
        <ThankYouPage />
        ) : (
        <>
        {/* 1. Hero Section */}
        <Hero 
          onStartProject={scrollToContact}
          onViewWork={scrollToPortfolio}
        />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Problem -> Solution Section */}
        <ProblemSolution />

        {/* 5. Website + Automation Ecosystem */}
        <EcosystemFlow />

        {/* 6. Portfolio Section */}
        <PortfolioSection />

        {/* 7. Automation Solutions We Can Build + Live Simulator */}
        <AutomationSection onInquireAutomation={handleSelectService} />

        {/* 8. Why Businesses Choose ORYNIX */}
        <WhyOrynix />

        {/* 9. Development Process */}
        <ProcessTimeline />

        {/* 10. Industries Section */}
        <IndustriesSection onIndustrySelect={handleSelectService} />

        {/* 11. About ORYNIX */}
        <AboutSection />

        {/* 12. High-Impact CTA Section */}
        <CtaSection onStartProject={scrollToContact} />

        {/* 13. Contact & Consultation Section */}
        <ContactSection preselectedService={preselectedService} />
        </>
        )}
      </main>

      {/* 14. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 15. Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Legal Modal (Privacy Policy / Terms of Service) */}
      <LegalModal 
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
