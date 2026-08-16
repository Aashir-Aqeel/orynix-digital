import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Bot, 
  Check, 
  CheckCheck, 
  RotateCcw, 
  Sparkles,
  Phone,
  Video,
  MoreVertical,
  ShieldAlert
} from 'lucide-react';
import { simulatorScenarios, ChatSimulatorScenario } from '../data/automationData';

export const InteractiveChatSimulator: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('clinic');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'user', text: 'Hi, I need an appointment for dental scaling & checkup', time: '11:00 AM' },
    { 
      sender: 'bot', 
      text: 'Hello! 👋 Welcome to Essa Dental & Aesthetics. We are delighted to assist you. What day would you like to visit?', 
      time: '11:00 AM' 
    }
  ]);
  const [customInput, setCustomInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const activeScenario = simulatorScenarios.find(s => s.id === activeScenarioId) || simulatorScenarios[0];

  const handleSelectScenario = (scenario: ChatSimulatorScenario) => {
    setActiveScenarioId(scenario.id);
    const initialUserMsg = scenario.messages[0];
    const initialBotMsg = scenario.messages[1];
    setChatHistory([
      { sender: 'user', text: initialUserMsg.text, time: '11:00 AM' },
      { sender: 'bot', text: initialBotMsg.text, time: '11:00 AM' }
    ]);
  };

  const handleOptionClick = (optionText: string) => {
    // Add user selection
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatHistory(prev => [...prev, { sender: 'user', text: optionText, time: now }]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      if (optionText.includes('Book') || optionText.includes('Reserve') || optionText.includes('Immediate')) {
        botResponse = '✨ Excellent! We have recorded your priority slot request. A doctor / manager alert has been dispatched, and we will send your confirmation ticket on WhatsApp right away. Anything else we can help with?';
      } else if (optionText.includes('Price') || optionText.includes('Menu')) {
        botResponse = '📋 Here is the verified digital rate list! Our transparent pricing starts from PKR 3,500 for scaling & checkup. Would you like to reserve a doctor slot today?';
      } else if (optionText.includes('Location') || optionText.includes('Pin')) {
        botResponse = '📍 We are located at Main Boulevard, Clifton Block 5, Karachi. Timings: Mon-Sat 11:00 AM to 9:00 PM. Here is the Google Maps link for easy navigation!';
      } else {
        botResponse = 'Thank you for the update! Our team has updated your preferences into our automated customer queue and will connect shortly.';
      }

      setChatHistory(prev => [...prev, { sender: 'bot', text: botResponse, time: now }]);
      setIsTyping(false);
    }, 900);
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const userText = customInput;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatHistory(prev => [...prev, { sender: 'user', text: userText, time: now }]);
    setCustomInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = `Thank you for your message! 🙏 Our ORYNIX automated workflow has logged this enquiry for ${activeScenario.title}. An instant notification has been triggered to the business administrator.`;
      setChatHistory(prev => [...prev, { sender: 'bot', text: botResponse, time: now }]);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    handleSelectScenario(activeScenario);
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-4 sm:p-7 border border-slate-800 shadow-2xl text-white">
      
      {/* Simulator top control bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h4 className="text-base font-bold text-white">Interactive WhatsApp Demo Sandbox</h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Test how automated customer conversations feel for Pakistani patients, diners &amp; leads
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          {simulatorScenarios.map((scenario) => (
            <button
              key={scenario.id}
              type="button"
              onClick={() => handleSelectScenario(scenario)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeScenarioId === scenario.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="mr-1.5">{scenario.avatar}</span>
              <span>{scenario.id === 'clinic' ? 'Clinic' : scenario.id === 'restaurant' ? 'Restaurant' : 'Lead Gen'}</span>
            </button>
          ))}
          <button
            type="button"
            onClick={handleReset}
            title="Reset Simulator"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* WhatsApp Window Phone Mockup */}
      <div className="max-w-xl mx-auto rounded-2xl overflow-hidden border border-slate-700 bg-[#0B141A] shadow-xl">
        
        {/* WhatsApp Top Bar */}
        <div className="bg-[#202C33] p-3 flex items-center justify-between border-b border-slate-700/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center text-base font-bold shadow-xs">
              {activeScenario.avatar}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                <span>{activeScenario.title}</span>
                <span className="text-[9px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.2 rounded border border-emerald-500/30">
                  Bot
                </span>
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Active ORYNIX Engine • Karachi</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-300 text-xs">
            <span className="hidden sm:inline-block text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded">
              Demo Simulation
            </span>
          </div>
        </div>

        {/* WhatsApp Message Body */}
        <div className="p-4 space-y-3 min-h-[260px] max-h-[360px] overflow-y-auto bg-[#0B141A] bg-opacity-95 text-xs">
          
          {/* Top Encrypted notice */}
          <div className="text-center">
            <span className="bg-[#182229] text-amber-300/80 text-[10px] px-3 py-1 rounded-lg inline-block border border-amber-500/10">
              🔒 Fast 24/7 Automated Business Channel by ORYNIX
            </span>
          </div>

          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-3 rounded-xl max-w-[85%] text-xs leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-[#005C4B] text-white rounded-tr-none'
                    : 'bg-[#202C33] text-slate-100 rounded-tl-none border border-slate-700/50'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="flex items-center gap-1 text-[10px] text-cyan-300 font-bold mb-1">
                    <Bot className="w-3 h-3" />
                    <span>Instant Workflow Bot</span>
                  </div>
                )}
                <p>{msg.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
                  <span>{msg.time}</span>
                  {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-cyan-400" />}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#202C33] text-slate-300 px-3 py-2 rounded-xl rounded-tl-none text-[11px] flex items-center gap-1.5 border border-slate-700/50">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                <span className="ml-1 text-slate-400">Automating reply...</span>
              </div>
            </div>
          )}

          {/* Preset Interactive Buttons */}
          {activeScenario.messages[1]?.options && (
            <div className="pt-2">
              <p className="text-[10px] text-slate-400 mb-1.5 font-semibold">
                Click a quick response to simulate patient/customer choice:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeScenario.messages[1].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    type="button"
                    onClick={() => handleOptionClick(opt)}
                    className="bg-[#182229] hover:bg-emerald-950 text-emerald-300 hover:text-emerald-200 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors text-left"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Input Field */}
        <form onSubmit={handleSendCustomMessage} className="p-2.5 bg-[#202C33] border-t border-slate-700/60 flex items-center gap-2">
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Type a test message (e.g. What are your timings?)..."
            className="flex-1 bg-[#2A3942] text-white text-xs px-3.5 py-2.5 rounded-lg border border-slate-600 focus:outline-none focus:border-cyan-400 placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="p-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
            title="Send test message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
};
