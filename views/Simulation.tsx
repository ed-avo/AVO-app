import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ChatMessage, SimulationConfig, BehaviorType } from '../types';
import { startSimulation, continueSimulation, evaluateResponse } from '../services/geminiService';
import { Send, User, Bot, RefreshCw, AlertTriangle, Zap, UserX, Building, MessageSquare, Users, ChevronRight, ChevronLeft, MapPin, Briefcase, Smartphone, Monitor } from 'lucide-react';

type SimulationStep = 'CHOOSE_BEHAVIOR' | 'CHOOSE_PERSONA' | 'CHOOSE_MEDIUM';

export const Simulation: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<SimulationStep>('CHOOSE_BEHAVIOR');
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [config, setConfig] = useState<SimulationConfig>({
    difficulty: 'advanced',
    topic: 'general',
    behaviorType: 'any',
    persona: 'willekeurig',
    medium: 'fysiek'
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, feedback, loading]);

  const handleStart = async () => {
    setLoading(true);
    setStarted(true);
    setMessages([]);
    setFeedback(null);
    const openingText = await startSimulation(config);
    setMessages([{ role: 'model', text: openingText, timestamp: new Date() }]);
    setLoading(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setLoading(true);
    setFeedback(null);
    const apiHistory = newHistory.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));
    const responseText = await continueSimulation(apiHistory);
    const feedbackText = await evaluateResponse(userMsg.text, newHistory.map(m => `${m.role}: ${m.text}`).join('\n'));
    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    setFeedback(feedbackText);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setStarted(false);
    setCurrentStep('CHOOSE_BEHAVIOR');
    setMessages([]);
    setFeedback(null);
  };

  const parseMessageText = (text: string) => {
    const contextMatch = text.match(/^\[(.*?)\]/);
    if (contextMatch) {
      const context = contextMatch[1];
      const messageWithoutContext = text.replace(/^\[.*?\]/, '').trim();
      const locationPart = context.split('Jouw rol:')[0].replace('Locatie:', '').replace('Locatie/Medium:', '').trim();
      const rolePart = context.split('Jouw rol:')[1]?.trim() || 'Medewerker';
      
      return (
        <div className="space-y-4">
          <div className="bg-slate-100 border-l-4 border-slate-400 p-3 rounded-r-lg text-[11px] font-bold text-slate-600 flex flex-wrap gap-4 uppercase tracking-wider">
             <div className="flex items-center">
               {config.medium === 'online' ? <Smartphone size={14} className="mr-1.5" /> : <MapPin size={14} className="mr-1.5" />} 
               {locationPart}
             </div>
             <div className="flex items-center"><Briefcase size={14} className="mr-1.5" /> {rolePart}</div>
          </div>
          <div className="font-medium text-[#5D2E1E] leading-relaxed">
            {messageWithoutContext}
          </div>
        </div>
      );
    }
    return <div className="font-medium">{text}</div>;
  };

  const behaviorButtons: { type: BehaviorType, label: string, color: string, icon: any }[] = [
    { type: 'A', label: 'A: Frustratie', color: 'bg-[#F9E061]', icon: MessageSquare },
    { type: 'B', label: 'B: Systeem', color: 'bg-[#F9BC54]', icon: Building },
    { type: 'C', label: 'C: Persoonlijk', color: 'bg-[#F98C4E]', icon: UserX },
    { type: 'D', label: 'D: Dreigend', color: 'bg-[#F93E3E]', icon: Zap },
    { type: 'any', label: 'Willekeurig', color: 'bg-slate-200', icon: RefreshCw },
  ];

  const personaButtons = [
    { id: 'leerling', label: 'Leerling', icon: User, description: 'Gedrag van een leerling.' },
    { id: 'ouder', label: 'Ouder / Verzorger', icon: Users, description: 'Gesprekken over hun kind in relatie tot het schoolbeleid.' },
    { id: 'willekeurig', label: 'Maakt niet uit', icon: RefreshCw, description: 'De AI kiest.' }
  ];

  const mediumButtons = [
    { id: 'fysiek', label: 'Fysiek op school', icon: MapPin, description: 'Oog in oog in de klas, gang of plein.' },
    { id: 'online', label: 'Online / Digitaal', icon: Smartphone, description: 'Via WhatsApp, e-mail of social media.' }
  ];

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-10 border-t-[12px] border-t-[#CE3924] shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="bg-[#CE3924]/10 p-5 rounded-full ring-8 ring-[#CE3924]/5">
              <Bot className="w-12 h-12 text-[#CE3924]" />
            </div>
          </div>
          <h2 className="text-3xl font-black text-[#5D2E1E] text-center mb-2 uppercase tracking-tight">Oefenen</h2>
          <p className="text-slate-500 text-center mb-10 text-sm font-medium">Train praktijksituaties met jouw persoonlijke AI coach</p>

          <div className="space-y-10">
            {currentStep === 'CHOOSE_BEHAVIOR' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center mb-8 bg-slate-50 rounded-full pr-8">
                   <label className="flex-1 text-xs font-black text-[#5D2E1E] uppercase tracking-[0.2em] text-center py-2">Stap 1: Kies het type gedrag</label>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {behaviorButtons.map((btn) => {
                    const Icon = btn.icon;
                    return (
                      <button
                        key={btn.type}
                        onClick={() => {
                          setConfig({...config, behaviorType: btn.type});
                          setCurrentStep('CHOOSE_PERSONA');
                        }}
                        className="flex flex-col items-center p-5 rounded-2xl border-2 border-slate-100 hover:border-[#CE3924] hover:bg-[#CE3924]/5 transition-all group shadow-sm bg-white"
                      >
                        <div className={`p-4 rounded-xl mb-3 ${btn.color} ${btn.type === 'C' || btn.type === 'D' ? 'text-white' : 'text-slate-800'} shadow-sm group-hover:scale-110 transition-transform`}>
                          <Icon size={24} />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-tight text-[#5D2E1E]">{btn.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 'CHOOSE_PERSONA' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center mb-8 bg-slate-50 rounded-full pr-8">
                   <button onClick={() => setCurrentStep('CHOOSE_BEHAVIOR')} className="p-3 hover:bg-slate-200 rounded-full text-[#5D2E1E] mr-4 transition-colors"><ChevronLeft size={20} /></button>
                   <label className="flex-1 text-xs font-black text-[#5D2E1E] uppercase tracking-[0.2em] text-center py-2">Stap 2: Kies de persoon</label>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {personaButtons.map((persona) => {
                    const Icon = persona.icon;
                    return (
                      <button
                        key={persona.id}
                        onClick={() => { setConfig({...config, persona: persona.id as any}); setCurrentStep('CHOOSE_MEDIUM'); }}
                        className="w-full flex items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#CE3924] hover:bg-[#CE3924]/5 transition-all text-left bg-white"
                      >
                        <div className="p-4 rounded-xl mr-6 bg-slate-100 text-slate-500"><Icon size={24} /></div>
                        <div>
                          <span className="block font-black text-[#5D2E1E] uppercase tracking-tight text-sm mb-0.5">{persona.label}</span>
                          <span className="text-xs text-slate-500 font-medium">{persona.description}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 'CHOOSE_MEDIUM' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center mb-8 bg-slate-50 rounded-full pr-8">
                   <button onClick={() => setCurrentStep('CHOOSE_PERSONA')} className="p-3 hover:bg-slate-200 rounded-full text-[#5D2E1E] mr-4 transition-colors"><ChevronLeft size={20} /></button>
                   <label className="flex-1 text-xs font-black text-[#5D2E1E] uppercase tracking-[0.2em] text-center py-2">Stap 3: Kies de vorm</label>
                </div>
                <div className="space-y-4">
                  {mediumButtons.map((m) => {
                    const Icon = m.icon;
                    const isSelected = config.medium === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setConfig({...config, medium: m.id as any})}
                        className={`w-full flex items-center p-6 rounded-2xl border-2 transition-all text-left ${
                          isSelected ? 'border-[#CE3924] bg-[#CE3924]/5 shadow-md ring-4 ring-[#CE3924]/5' : 'border-slate-100 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className={`p-4 rounded-xl mr-6 ${isSelected ? 'bg-[#CE3924] text-white' : 'bg-slate-100 text-slate-500'}`}><Icon size={24} /></div>
                        <div>
                          <span className="block font-black text-[#5D2E1E] uppercase tracking-tight text-sm mb-0.5">{m.label}</span>
                          <span className="text-xs text-slate-500 font-medium">{m.description}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-12 pt-8 border-t border-slate-100">
                   <Button onClick={handleStart} fullWidth size="lg" className="h-16 text-lg rounded-2xl shadow-lg">Start Simulatie <ChevronRight className="ml-2 w-6 h-6" /></Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-black text-[#5D2E1E] flex items-center uppercase tracking-tight">
            <Bot className="mr-3 text-[#CE3924]" /> Live Simulatie
          </h2>
          <div className="flex space-x-2">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
              config.behaviorType === 'A' ? 'bg-[#F9E061]' :
              config.behaviorType === 'B' ? 'bg-[#F9BC54]' :
              config.behaviorType === 'C' ? 'bg-[#F98C4E] text-white' : 
              config.behaviorType === 'D' ? 'bg-[#F93E3E] text-white' : 'bg-slate-200'
            }`}>
              Type {config.behaviorType}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-700">
               {config.medium === 'online' ? 'Online' : 'Fysiek'}
            </span>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={handleReset}>
          <RefreshCw className="w-4 h-4 mr-2 inline" /> Kies ander scenario
        </Button>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mx-3 shadow-md ${msg.role === 'user' ? 'bg-[#5D2E1E]' : 'bg-[#CE3924]'}`}>
                  {msg.role === 'user' ? <User className="w-6 h-6 text-white" /> : <Bot className="w-6 h-6 text-white" />}
                </div>
                <div className={`p-5 rounded-2xl shadow-sm ${
                  msg.role === 'user' ? 'bg-[#5D2E1E] text-white rounded-tr-none text-base font-medium' : 'bg-white text-[#5D2E1E] rounded-tl-none border border-slate-100'
                }`}>
                  {msg.role === 'model' ? parseMessageText(msg.text) : msg.text}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
               <div className="ml-16 bg-white px-6 py-3 rounded-2xl border border-slate-100 text-[#5D2E1E]/50 text-[10px] font-black tracking-[0.2em] animate-pulse uppercase">AI Coach reageert...</div>
            </div>
          )}
          {feedback && !loading && (
             <div className="flex flex-col items-center space-y-6 my-6 animate-fade-in">
                 <div className="bg-[#5D2E1E] border-l-[10px] border-[#CE3924] rounded-2xl p-6 max-w-2xl text-white flex items-start shadow-2xl relative overflow-hidden">
                     <AlertTriangle className="w-7 h-7 text-[#CE3924] mr-5 flex-shrink-0 mt-0.5" />
                     <div className="relative z-10">
                         <span className="font-black block mb-2 uppercase tracking-[0.2em] text-[10px] text-[#CE3924]">Feedback op jouw actie</span>
                         <p className="text-sm font-medium leading-relaxed italic">"{feedback}"</p>
                     </div>
                 </div>
                 <Button variant="outline" size="sm" onClick={handleReset} className="bg-white/80 backdrop-blur-sm">
                    <RefreshCw className="w-4 h-4 mr-2 inline" /> Kies ander scenario
                 </Button>
             </div>
          )}
        </div>

        <div className="p-6 bg-white border-t border-slate-100 shadow-inner">
          <div className="flex space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hoe reageer je?"
              className="flex-1 border-2 border-slate-100 rounded-xl px-6 py-4 focus:ring-4 focus:ring-[#CE3924]/10 focus:border-[#CE3924] outline-none text-[#5D2E1E] font-medium placeholder:text-slate-400 placeholder:text-sm"
              disabled={loading}
              autoFocus
            />
            <Button onClick={handleSend} disabled={loading || !input.trim()} className="rounded-xl px-8"><Send className="w-6 h-6" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
};