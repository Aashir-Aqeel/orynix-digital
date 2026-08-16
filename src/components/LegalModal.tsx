import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-slate-900">Effective Date: 2026</p>
              <p>
                At <strong>ORYNIX Digital Solutions</strong>, headquartered in Karachi, Pakistan, we respect your privacy and are committed to protecting any personal data you share with us through our website or direct WhatsApp communication.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">1. Information We Collect</h4>
              <p>
                When you request a consultation or message our team, we collect your name, business name, phone number, email address, and project specifications. This information is used strictly to prepare proposals, evaluate technical requirements, and communicate directly with you.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">2. Data Usage & Security</h4>
              <p>
                We do not sell, rent, or distribute your business information to third parties. All lead details and communication records are treated as strictly confidential commercial information.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">3. WhatsApp Communication</h4>
              <p>
                By messaging ORYNIX on WhatsApp, you consent to receive direct project updates and technical consultations from our team. You can opt out at any time by requesting to discontinue messages.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">4. Contact Us</h4>
              <p>
                If you have any questions regarding this Privacy Policy, contact us at <strong>orynixdigitalsolutions@gmail.com</strong> or via WhatsApp at <strong>+92 310 2133355</strong>.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-900">Effective Date: 2026</p>
              <p>
                Welcome to <strong>ORYNIX</strong>. By using our website and engaging our digital engineering and automation services, you agree to the following terms:
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">1. Scope of Digital Services</h4>
              <p>
                ORYNIX provides professional website development, WhatsApp workflow automation, business process integration, and digital consulting for businesses in Pakistan and abroad. All project deliverables and timelines are outlined in dedicated project agreements prior to kickoff.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">2. Intellectual Property & Ownership</h4>
              <p>
                Upon full payment of agreed project invoices, the client retains full ownership of all custom website code, domain assets, and business data configured for their organization.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">3. Third-Party Integrations</h4>
              <p>
                Automations utilizing third-party services (such as Meta WhatsApp Business API, Google Sheets, or hosting providers) are subject to the uptime and terms of those external providers.
              </p>
              <h4 className="font-bold text-slate-900 text-sm pt-2">4. Governing Jurisdiction</h4>
              <p>
                These terms are governed in accordance with the applicable laws of the Islamic Republic of Pakistan.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-900 transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
