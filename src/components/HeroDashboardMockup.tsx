import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  MessageSquare, 
  CheckCircle2, 
  Calendar, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Bot,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export const HeroDashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'chat' | 'lead'>('flow');
  const [stepIndex, setStepIndex] = useState(0);

  // Auto-cycle through the live automation lifecycle
  useEffect(() => {
    const timer = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % 4);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const flowSteps = [
    { title: 'Visitor Arrives', desc: 'Browses Treatment Catalog', tag: 'Web Traffic', time: '10:42 AM' },
    { title: 'Enquiry Initiated', desc: 'Clicks One-Tap WhatsApp', tag: 'WhatsApp Link', time: '10:43 AM' },
    { title: 'Bot Qualifies & Slots', desc: 'Scaling & Polishing Chosen', tag: 'Automated AI Flow', time: '10:43 AM' },
    { title: 'Confirmed & Synced', desc: 'Doctor & Patient Notified', tag: 'CRM & Calendar', time: '10:44 AM' }
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Background ambient gradient glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-cyan-400/20 to-purple-600/20 rounded-3xl blur-2xl -z-10 opacity-70"></div>

      {/* Main Glassmorphic Container */}
      <div className="relative rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300">
        
        {/* Top Browser / App Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <span className="ml-2 text-xs font-medium text-slate-500 hidden sm:inline-flex items-center gap-1.5 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
              orynix-ecosystem-live.pk
            </span>
          </div>

          {/* Quick tab switcher */}
          <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-lg text-xs font-medium">
            <button
              onClick={() => setActiveTab('flow')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'flow' 
                  ? 'bg-white text-blue-700 shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Unified System
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'chat' 
                  ? 'bg-white text-blue-700 shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Live WhatsApp
            </button>
            <button
              onClick={() => setActiveTab('lead')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'lead' 
                  ? 'bg-white text-blue-700 shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lead Pipeline
            </button>
          </div>
        </div>

        {/* Dynamic Card Content */}
        <div className="p-4 sm:p-5">
          
          {/* TAB 1: Unified Flow (Website + Automation working together) */}
          {activeTab === 'flow' && (
            <div className="space-y-4">
              {/* Split view: Mini Website Mockup + Live WhatsApp Bubble */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Left Mini Card: Professional Business Website */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-blue-100/80 shadow-xs">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span>Dental Care Karachi</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Online
                    </span>
                  </div>

                  {/* Visual mockup of hero banner inside site */}
                  <div className="bg-white rounded-lg p-2.5 border border-slate-200/80 shadow-2xs space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-900 leading-tight">
                      Specialized Dental Implants & Smile Care
                    </div>
                    <div className="text-[9px] text-slate-500 leading-snug">
                      Clifton Block 5 • Verified Specialists
                    </div>
                    <div className="pt-1 flex items-center justify-between">
                      <span className="text-[9px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                        Fast 0.8s Load
                      </span>
                      <div className="flex items-center gap-1 text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <MessageSquare className="w-2.5 h-2.5" />
                        Book WhatsApp
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] text-slate-600 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>One-click lead bridge directly to WhatsApp</span>
                  </div>
                </div>

                {/* Right Mini Card: WhatsApp Live Action */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-50/60 to-teal-50/40 border border-emerald-200/70 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                        💬
                      </div>
                      <span>WhatsApp Automation</span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full">
                      Instant &lt; 2s
                    </span>
                  </div>

                  {/* Simulated chat snippet */}
                  <div className="space-y-1.5 text-[10px]">
                    <div className="bg-white p-2 rounded-lg rounded-tl-none border border-emerald-100 shadow-2xs">
                      <p className="font-semibold text-slate-800 text-[10px]">
                        Welcome to Clinic Care! 👋
                      </p>
                      <p className="text-slate-600 text-[9px] mt-0.5">
                        Please choose preferred slot:
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        <span className="bg-emerald-100 text-emerald-900 font-bold px-1.5 py-0.5 rounded text-[8.5px]">
                          ✓ Today 5:00 PM
                        </span>
                        <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[8.5px]">
                          Tomorrow 11:00 AM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Automation Step Pipeline */}
              <div className="bg-slate-900 text-white rounded-xl p-3.5 shadow-md">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Real-Time Workflow Progress</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Step {stepIndex + 1} of 4</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {flowSteps.map((step, idx) => {
                    const isCurrent = stepIndex === idx;
                    const isPassed = stepIndex > idx;
                    return (
                      <div 
                        key={step.title}
                        className={`p-2 rounded-lg transition-all border ${
                          isCurrent 
                            ? 'bg-blue-600/30 border-cyan-400/80 shadow-sm' 
                            : isPassed 
                              ? 'bg-slate-800/80 border-slate-700 text-slate-300' 
                              : 'bg-slate-950/40 border-slate-800/60 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[9px] font-bold uppercase tracking-wider ${
                            isCurrent ? 'text-cyan-300' : 'text-slate-400'
                          }`}>
                            0{idx + 1}
                          </span>
                          {isPassed ? (
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          ) : isCurrent ? (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                          ) : (
                            <Clock className="w-2.5 h-2.5 text-slate-500" />
                          )}
                        </div>
                        <div className="text-[11px] font-semibold text-white leading-tight">
                          {step.title}
                        </div>
                        <div className="text-[9px] text-slate-400 truncate mt-0.5">
                          {step.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status footer bar: Appointment Confirmed */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-blue-50/70 border border-blue-100 rounded-lg text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Appointment Confirmed: </span>
                    <span className="text-slate-600">Patient Tariq M. • Today 5:00 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-blue-600" />
                    Doctor Alert Sent
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Live WhatsApp Simulator */}
          {activeTab === 'chat' && (
            <div className="bg-[#EFEAE2] p-3 rounded-xl border border-slate-300 shadow-inner space-y-2.5">
              {/* WhatsApp chat header */}
              <div className="bg-[#075E54] text-white p-2.5 rounded-lg flex items-center justify-between text-xs shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    🦷
                  </div>
                  <div>
                    <div className="font-bold text-white leading-tight">Essa Dental & Aesthetics</div>
                    <div className="text-[10px] text-emerald-200">Official Automated Business Account</div>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-700/80 px-2 py-0.5 rounded text-white font-medium">
                  Verified ORYNIX Bot
                </span>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-2 text-xs py-1">
                {/* Incoming customer message */}
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] text-slate-800 p-2.5 rounded-lg rounded-tr-none shadow-2xs max-w-[80%]">
                    <p className="text-xs">Assalam o Alaikum, I need consultation for braces and teeth alignment for next week.</p>
                    <div className="text-[9px] text-slate-500 text-right mt-1">10:42 AM ✓✓</div>
                  </div>
                </div>

                {/* Instant Bot response */}
                <div className="flex justify-start">
                  <div className="bg-white text-slate-800 p-2.5 rounded-lg rounded-tl-none shadow-2xs max-w-[85%] border border-slate-200/80">
                    <div className="flex items-center gap-1 text-[10px] text-blue-600 font-bold mb-1">
                      <Bot className="w-3 h-3" />
                      <span>Instant Smart Response (0.4s)</span>
                    </div>
                    <p className="text-xs">Walaikum Assalam! 👋 Welcome to Essa Dental. Our specialist orthodontists are available Mon-Sat.</p>
                    <p className="text-xs mt-1 font-semibold text-slate-900">Please select your preferred clinic timing:</p>
                    
                    <div className="mt-2 space-y-1">
                      <button className="w-full text-left bg-blue-50 hover:bg-blue-100 text-blue-700 p-1.5 rounded text-[11px] font-medium border border-blue-200 transition-colors">
                        📍 Morning Slot: 11:00 AM - 2:00 PM
                      </button>
                      <button className="w-full text-left bg-blue-50 hover:bg-blue-100 text-blue-700 p-1.5 rounded text-[11px] font-medium border border-blue-200 transition-colors">
                        🌙 Evening Slot: 5:00 PM - 9:00 PM
                      </button>
                      <button className="w-full text-left bg-slate-50 hover:bg-slate-100 text-slate-700 p-1.5 rounded text-[11px] font-medium border border-slate-200 transition-colors">
                        💰 View Braces Cost Estimates
                      </button>
                    </div>
                    <div className="text-[9px] text-slate-400 text-right mt-1.5">10:42 AM</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Lead Pipeline Sync */}
          {activeTab === 'lead' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  Live Business Inbound Sync (Google Sheets & CRM)
                </span>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  4 Qualified Leads Today
                </span>
              </div>

              {/* Mini Table */}
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 text-[10px] uppercase font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-2">Customer</th>
                      <th className="p-2">Service</th>
                      <th className="p-2">Channel</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Follow-up</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11px]">
                    <tr className="bg-white hover:bg-blue-50/40">
                      <td className="p-2 font-semibold text-slate-900">Dr. Hamza K.</td>
                      <td className="p-2 text-slate-600">Clinic Website</td>
                      <td className="p-2 text-emerald-600 font-medium">WhatsApp Direct</td>
                      <td className="p-2"><span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded">Booked</span></td>
                      <td className="p-2 text-slate-500">Auto 24h SMS</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-50/40">
                      <td className="p-2 font-semibold text-slate-900">Farhan Builders</td>
                      <td className="p-2 text-slate-600">Real Estate Lead</td>
                      <td className="p-2 text-blue-600 font-medium">Landing Page</td>
                      <td className="p-2"><span className="bg-blue-100 text-blue-800 text-[9px] font-bold px-1.5 py-0.5 rounded">Qualified</span></td>
                      <td className="p-2 text-slate-500">WhatsApp Alert</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-50/40">
                      <td className="p-2 font-semibold text-slate-900">The Cafe Hub</td>
                      <td className="p-2 text-slate-600">Menu & Booking</td>
                      <td className="p-2 text-emerald-600 font-medium">Instagram &gt; WA</td>
                      <td className="p-2"><span className="bg-purple-100 text-purple-800 text-[9px] font-bold px-1.5 py-0.5 rounded">Active</span></td>
                      <td className="p-2 text-slate-500">Auto Directions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-[10px] text-slate-600 flex items-center justify-between">
                <span>⚡ All leads sync automatically with zero manual data entry</span>
                <span className="font-semibold text-blue-600">Google Sheets • CRM • WhatsApp</span>
              </div>
            </div>
          )}

        </div>

        {/* Bottom micro-strip showing brand colors */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600"></div>
      </div>
    </div>
  );
};
