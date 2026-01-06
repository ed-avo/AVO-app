import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { BehaviorType } from '../types';
import { HandMetal, MessageSquare, Building, UserX, Zap, RefreshCw, MapPin, Smartphone, User, Users, ChevronRight, ChevronLeft, Info, CheckCircle2, AlertCircle } from 'lucide-react';

type WizardStep = 'BEHAVIOR' | 'MEDIUM' | 'PERSONA' | 'RESULT';

interface BegrenzenConfig {
  behavior: BehaviorType;
  medium: 'fysiek' | 'online';
  persona: 'ouder' | 'leerling';
}

export const Begrenzen: React.FC = () => {
  const [step, setStep] = useState<WizardStep>('BEHAVIOR');
  const [config, setConfig] = useState<BegrenzenConfig>({
    behavior: 'A',
    medium: 'fysiek',
    persona: 'ouder'
  });

  const reset = () => {
    setStep('BEHAVIOR');
  };

  const getAdvice = (config: BegrenzenConfig) => {
    const { behavior, medium, persona } = config;
    const isStudent = persona === 'leerling';
    
    const baseAdvice = {
      'A': {
        title: 'Herkennen, Erkennen en Verkennen (H.E.V.)',
        desc: isStudent 
          ? 'De leerling is emotioneel. Toon begrip voor de emotie, maar blijf bij de feiten.'
          : 'De persoon is emotioneel. Toon begrip voor de emotie, maar blijf bij de feiten.',
        steps: medium === 'online' ? [
          'Reageer niet direct op het online bericht',
          'Reageer kort door de ontvangst van het bericht te bevestigen. ("Ik heb uw e-mail/ bericht etc gelezen/ in goede orde ontvangen...")',
          'Blijf rustig en professioneel, ga niet in de aanval of verdediging door online inhoudelijk te reageren',
          'Verwijs naar de afspraken over online communicatie',
          'Nodig indien gewenst de ouder/verzorger uit voor een persoonlijk gesprek'
        ] : [
          isStudent ? 'Luister actief en laat de leerling uitpraten.' : 'Luister actief en laat de persoon uitpraten.',
          isStudent ? 'Vat de kern van het probleem samen ("Ik hoor dat je je zorgen maakt over...").' : 'Vat de kern van het probleem samen ("Ik hoor dat u zich zorgen maakt over...").',
          isStudent ? 'Vraag wat de leerling nodig heeft om zich gehoord te voelen.' : 'Vraag wat de persoon nodig heeft om zich gehoord te voelen.',
          'Blijf rustig en professioneel, ga niet in de verdediging.',
          isStudent 
            ? 'Indien A gedrag vaker voorkomt, maak dan een afspraak met de leerling in het bijzijn van ouder(s)/verzorger(s) waarin de tijd is om over de zorgen van de leerling in gesprek te gaan.' 
            : 'Indien A gedrag vaker voorkomt, maak dan een afspraak met de ouder/verzorger waarin de tijd is om over de zorgen in gesprek te gaan.'
        ]
      },
      'B': {
        title: 'Herkennen, Erkennen en Verkennen (H.E.V.)',
        desc: 'De kritiek is gericht op de regels of organisatie. Neem dit niet persoonlijk.',
        steps: [
          'Erken de onvrede over de regel/het beleid.',
          'Stel open vragen om te begrijpen waar de kritiek op de regels vandaan komt.',
          'Leg kort uit waarom de regel er is (veiligheid, rust, structuur).',
          'Geef aan op welke manier men officieel een klacht kan indienen.',
          isStudent 
            ? 'Nodig de leerling uit voor een persoonlijk gesprek in het bijzijn van ouder(s)/verzorger(s) indien er vaker onvrede is over het schoolbeleid. In het gesprek is er tijd om dieper op de zorgen van de leerling in te gaan'
            : 'Nodig de ouder/verzorger uit voor een persoonlijk gesprek indien er vaker onvrede is over het schoolbeleid. In het gesprek is er tijd om dieper op de zorgen van de ouder in te gaan'
        ]
      },
      'C': {
        title: 'Direct Begrenzen',
        desc: 'De grens is overschreden. De aanval is persoonlijk. Stop het proces.',
        steps: isStudent ? [
          'Benoem het gedrag direct: "Ik hoor je zeggen dat ik... ben/ mij ... noemen/ mijn collega ... noemen."',
          'Stel de grens: "Zo gaan we hier niet met elkaar om. Ik ga hier ook melding van maken."',
          'De consequentie: "Ik stop nu dit gesprek als je doorgaat met dit gedrag/ mij te beschuldigen van... of als je stopt met dit gedrag kunnen we dit gesprek voortzetten op een constructieve manier."',
          'Geef een keuze: "Kies maar wat je wilt doen"',
          'Indien het gedrag niet stopt. Beëindig het gesprek en maak er melding van.'
        ] : [
          'Benoem het gedrag direct: "Ik merk dat u nu persoonlijk wordt / scheldt."',
          'Stel de grens: "Dat accepteer ik niet. Ik wil het gesprek voortzetten, maar alleen op een respectvolle manier."',
          'Geef een keuze: "Kunt u dat nu, of zullen we het gesprek op een later moment voortzetten?"',
          'Bij weigering: Beëindig het gesprek onmiddellijk.'
        ]
      },
      'D': {
        title: 'Direct Stoppen & Veiligheid',
        desc: 'Er is sprake van fysieke dreiging of geweld. Jouw veiligheid is prioriteit #1.',
        steps: [
          'Verlaat de situatie onmiddellijk. Zoek een veilige plek.',
          'Schakel direct hulp in van collega\'s of directie.',
          'Ga niet in discussie en probeer de situatie niet zelf op te lossen.',
          'Meld het incident direct bij de veiligheidsregisseur.'
        ]
      }
    };

    const personaSpecific = persona === 'leerling'
      ? "Bij een LEERLING: Vergeet niet dat jij de pedagogische regie hebt. Blijf de volwassene in de kamer and koppel de actie altijd terug aan de mentor of teamleider."
      : "Bij een OUDER: Ouders zijn emotioneel betrokken bij hun kind. Erken die betrokkenheid, maar stel duidelijke grenzen aan de wijze waarop zij deze uiten.";

    return {
      ...baseAdvice[behavior as keyof typeof baseAdvice],
      personaNote: personaSpecific
    };
  };

  const behaviorButtons = [
    { id: 'A' as BehaviorType, label: 'A-Gedrag', sub: 'Emotie', color: 'bg-[#F9E061]', icon: MessageSquare },
    { id: 'B' as BehaviorType, label: 'B-Gedrag', sub: 'Systeem', color: 'bg-[#F9BC54]', icon: Building },
    { id: 'C' as BehaviorType, label: 'C-Gedrag', sub: 'Persoonlijk', color: 'bg-[#F98C4E]', icon: UserX },
    { id: 'D' as BehaviorType, label: 'D-Gedrag', sub: 'Fysiek/Dreiging', color: 'bg-[#F93E3E]', icon: Zap },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-black text-[#5D2E1E] uppercase tracking-tight mb-2">Begrenzen & Handelen</h1>
        <p className="text-slate-600 font-medium">Krijg direct advies op basis van de situatie.</p>
      </header>

      {step === 'BEHAVIOR' && (
        <Card className="p-8 border-t-[12px] border-t-[#CE3924] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <label className="block text-xs font-black text-[#5D2E1E] uppercase tracking-[0.2em] mb-8 text-center bg-slate-50 py-2 rounded-full">Stap 1: Welk gedrag zie je?</label>
          <div className="grid grid-cols-2 gap-4">
            {behaviorButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => { setConfig({...config, behavior: btn.id}); setStep('MEDIUM'); }}
                className="flex flex-col items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#CE3924] hover:bg-slate-50 transition-all group bg-white shadow-sm"
              >
                <div className={`p-4 rounded-xl mb-3 ${btn.color} ${btn.id === 'C' || btn.id === 'D' ? 'text-white' : 'text-slate-800'} group-hover:scale-110 transition-transform`}>
                  <btn.icon size={28} />
                </div>
                <span className="font-black text-sm uppercase text-[#5D2E1E]">{btn.label}</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">{btn.sub}</span>
              </button>
            ))}
          </div>
        </Card>
      )}

      {step === 'MEDIUM' && (
        <Card className="p-8 border-t-[12px] border-t-[#5D2E1E] animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="flex items-center mb-8 bg-slate-50 rounded-full pr-8">
            <button onClick={() => setStep('BEHAVIOR')} className="p-3 hover:bg-slate-200 rounded-full text-[#5D2E1E] mr-4 transition-colors"><ChevronLeft size={20} /></button>
            <label className="flex-1 text-xs font-black text-[#5D2E1E] uppercase tracking-[0.2em] text-center py-2">Stap 2: Hoe wordt dit geuit?</label>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => { setConfig({...config, medium: 'fysiek'}); setStep('PERSONA'); }}
              className="flex items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#5D2E1E] hover:bg-slate-50 transition-all text-left bg-white"
            >
              <div className="p-4 rounded-xl mr-6 bg-slate-100 text-slate-500"><MapPin size={24} /></div>
              <div>
                <span className="block font-black text-[#5D2E1E] uppercase tracking-tight text-sm mb-0.5">Fysiek / Verbaal</span>
                <span className="text-xs text-slate-500 font-medium">In de klas, gang of aan de balie.</span>
              </div>
            </button>
            <button
              onClick={() => { setConfig({...config, medium: 'online'}); setStep('PERSONA'); }}
              className="flex items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#5D2E1E] hover:bg-slate-50 transition-all text-left bg-white"
            >
              <div className="p-4 rounded-xl mr-6 bg-slate-100 text-slate-500"><Smartphone size={24} /></div>
              <div>
                <span className="block font-black text-[#5D2E1E] uppercase tracking-tight text-sm mb-0.5">Online / Digitaal</span>
                <span className="text-xs text-slate-500 font-medium">Via e-mail, WhatsApp of social media.</span>
              </div>
            </button>
          </div>
        </Card>
      )}

      {step === 'PERSONA' && (
        <Card className="p-8 border-t-[12px] border-t-[#5D2E1E] animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="flex items-center mb-8 bg-slate-50 rounded-full pr-8">
            <button onClick={() => setStep('MEDIUM')} className="p-3 hover:bg-slate-200 rounded-full text-[#5D2E1E] mr-4 transition-colors"><ChevronLeft size={20} /></button>
            <label className="flex-1 text-xs font-black text-[#5D2E1E] uppercase tracking-[0.2em] text-center py-2">Stap 3: Wie vertoont dit gedrag?</label>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => { setConfig({...config, persona: 'ouder'}); setStep('RESULT'); }}
              className="flex items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#5D2E1E] hover:bg-slate-50 transition-all text-left bg-white"
            >
              <div className="p-4 rounded-xl mr-6 bg-slate-100 text-slate-500"><Users size={24} /></div>
              <div>
                <span className="block font-black text-[#5D2E1E] uppercase tracking-tight text-sm mb-0.5">Ouder / Verzorger</span>
                <span className="text-xs text-slate-500 font-medium">Gesprekken over hun kind in relatie tot het schoolbeleid.</span>
              </div>
            </button>
            <button
              onClick={() => { setConfig({...config, persona: 'leerling'}); setStep('RESULT'); }}
              className="flex items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#5D2E1E] hover:bg-slate-50 transition-all text-left bg-white"
            >
              <div className="p-4 rounded-xl mr-6 bg-slate-100 text-slate-500"><User size={24} /></div>
              <div>
                <span className="block font-black text-[#5D2E1E] uppercase tracking-tight text-sm mb-0.5">Leerling</span>
                <span className="text-xs text-slate-500 font-medium">Gedrag in de schoolse context.</span>
              </div>
            </button>
          </div>
        </Card>
      )}

      {step === 'RESULT' && (() => {
        const advice = getAdvice(config);
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#CE3924] to-[#5D2E1E]"></div>
              
              <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${config.behavior === 'A' ? 'bg-[#F9E061]' : config.behavior === 'B' ? 'bg-[#F9BC54]' : config.behavior === 'C' ? 'bg-[#F98C4E] text-white' : 'bg-[#F93E3E] text-white'}`}>
                       <HandMetal size={24} />
                    </div>
                    <h2 className="text-2xl font-black text-[#5D2E1E] uppercase tracking-tight">{advice.title}</h2>
                 </div>
                 <Button variant="outline" size="sm" onClick={reset}>Kies ander scenario</Button>
              </div>

              <p className="text-slate-600 font-bold mb-8 text-lg border-b border-slate-100 pb-4 italic">"{advice.desc}"</p>

              <div className="space-y-4 mb-10">
                <h3 className="text-xs font-black text-[#5D2E1E] uppercase tracking-widest mb-4">Aanbevolen acties:</h3>
                {advice.steps.map((s, i) => (
                  <div key={i} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-[#CE3924] text-white flex items-center justify-center font-black text-[10px] shrink-0 mr-4 mt-0.5">{i+1}</div>
                    <p className="text-sm text-slate-700 font-medium">{s}</p>
                  </div>
                ))}
              </div>

              <div>
                 <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                    <div className="flex items-center mb-2 text-emerald-800">
                       <Users size={16} className="mr-2" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Doelgroep Advies</span>
                    </div>
                    <p className="text-xs text-emerald-700 font-medium leading-relaxed">{advice.personaNote}</p>
                 </div>
              </div>

              <div className="mt-8 flex justify-center">
                 {/* Button removed as per user request */}
              </div>
            </div>

            <div className="bg-[#5D2E1E] text-white p-6 rounded-2xl flex items-start">
               <AlertCircle className="text-[#CE3924] mr-4 shrink-0 mt-1" />
               <div>
                  <span className="block font-black text-xs uppercase tracking-widest mb-1">Onthoud:</span>
                  <p className="text-sm font-medium opacity-90">Begrenzen is niet onvriendelijk, het is professioneel. Het beschermt zowel jou als de ander door duidelijkheid te bieden over wat acceptabel is.</p>
               </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};