import React, { useState } from 'react';
import { ArrowUp, Shield, Users, AlertTriangle, Siren, MessageSquare, Flame, User, Building, UserX, Zap, CheckCircle2, ChevronRight, Info, Calendar, Search, Settings2, HelpCircle, Clock, MapPin, Smartphone, ChevronLeft, HandMetal, AlertCircle, RefreshCw, HeartHandshake, ClipboardCheck, UserPlus, Mail, Gavel, FileText, Target, Lightbulb, Quote, Scale, ShieldAlert, Briefcase, GraduationCap, Star, Globe, Languages, Eye, Heart, BookOpen, Compass } from 'lucide-react';
import { Button } from './Button';
import { BehaviorType } from '../types';

export const TrompenaarsVisual: React.FC = () => {
  const dimensions = [
    { title: 'Universeel vs. Particulier', desc: 'Regels vs. Relaties. Worden regels altijd toegepast of hangt het van de persoon/situatie af?' },
    { title: 'Individu vs. Groep', desc: 'Staat het belang van het individu voorop of dat van de familie/gemeenschap?' },
    { title: 'Neutraal vs. Affectief', desc: 'Worden emoties binnengehouden of juist getoond als teken van betrokkenheid?' },
    { title: 'Specifiek vs. Diffuus', desc: 'Zijn werk en privé strikt gescheiden of loopt alles in elkaar over?' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-[#5D2E1E]/5 p-6 rounded-2xl border-l-4 border-[#5D2E1E] text-slate-700 text-sm leading-relaxed">
        <h4 className="font-bold text-[#5D2E1E] mb-2 uppercase tracking-wide">Het Model van Trompenaars</h4>
        <p>Fons Trompenaars beschrijft hoe cultuur onze manier van werken en communiceren beïnvloedt. In conflictsituaties zien we dit vaak terug in hoe men omgaat met regels en emoties.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dimensions.map((d, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col group hover:border-[#CE3924]/30 transition-colors text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-slate-50 text-[#CE3924] rounded-lg group-hover:bg-[#CE3924] group-hover:text-white transition-colors">
                <Compass size={18} />
              </div>
              <h5 className="font-black text-xs text-[#5D2E1E] uppercase">{d.title}</h5>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-start gap-4">
        <Lightbulb className="text-amber-500 shrink-0" />
        <p className="text-xs text-amber-900 font-medium text-left">
          <strong>Waarom dit belangrijk is:</strong> Iemand uit een 'Affectieve' cultuur kan luidruchtig overkomen (A-gedrag), terwijl dit voor hen simpelweg oprechtheid betekent. Zonder deze bril zie je agressie waar slechts emotie is.
        </p>
      </div>
    </div>
  );
};

export const CulturalSensitivityVisual: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="space-y-4">
        <h4 className="text-sm font-black text-[#5D2E1E] uppercase tracking-widest flex items-center gap-2">
          <Eye size={18} className="text-[#CE3924]" /> Invloed op interpretatie
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg inline-block">
              <Languages size={20} />
            </div>
            <h5 className="font-bold text-xs text-[#5D2E1E] uppercase">Communicatiestijlen</h5>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Directe communicatie kan als assertief óf als confronterend worden ervaren, afhankelijk van de cultuur.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg inline-block">
              <Users size={20} />
            </div>
            <h5 className="font-bold text-xs text-[#5D2E1E] uppercase">Non-verbaal</h5>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Oogcontact en fysieke nabijheid hebben per cultuur een andere betekenis van respect of intimidatie.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg inline-block">
              <Heart size={20} />
            </div>
            <h5 className="font-bold text-xs text-[#5D2E1E] uppercase">Groepsdynamiek</h5>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Gedrag kan voortkomen uit de behoefte om familie-eer te verdedigen, wat wij als agressie kunnen zien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#5D2E1E]/5 p-6 rounded-2xl space-y-4 border-l-4 border-[#5D2E1E] text-left">
        <h4 className="text-sm font-black text-[#5D2E1E] uppercase tracking-widest">Waarom sensitiviteit cruciaal is</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <h5 className="font-bold text-xs text-[#5D2E1E]">Vermijden van misinterpretatie</h5>
            <p className="text-[10px] text-slate-600">Zonder inzicht in culturele achtergrond kunnen gedragingen verkeerd worden beoordeeld als opzettelijke agressie.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-xs text-[#5D2E1E]">Respectvolle interventies</h5>
            <p className="text-[10px] text-slate-600">Een aanpak die geen rekening houdt met culturele waarden kan onnodige weerstand oproepen en herstel belemmeren.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const CulturalStepsVisual: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="bg-slate-50 p-6 rounded-2xl space-y-6">
        <h4 className="text-sm font-black text-[#5D2E1E] uppercase tracking-widest text-center">Concrete stappen voor de school</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Bewustzijn & Training", text: "Training voor personeel in het herkennen en duiden van culturele verschillen bij incidenten." },
            { title: "Open dialoog", text: "Vraag expliciet naar culturele waarden die relevant kunnen zijn voor het incident." },
            { title: "Aangepaste plannen", text: "Pas herstelplannen aan op specifieke waarden of overtuigingen van de familie." },
            { title: "Mediators", text: "Zet cultuurspecifieke vertrouwenspersonen in om bruggen te slaan tussen school en thuis." }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 text-left">
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#CE3924] text-white flex items-center justify-center font-bold text-[10px]">
                {idx + 1}
              </div>
              <div>
                <h5 className="font-bold text-[11px] text-[#5D2E1E] uppercase">{step.title}</h5>
                <p className="text-[10px] text-slate-600 leading-tight">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#5D2E1E] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Lightbulb size={60} />
        </div>
        <div className="relative z-10 space-y-3">
          <h5 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
            <Lightbulb className="text-amber-400" size={16} /> Praktijkvoorbeeld: Noord-Afrikaanse context
          </h5>
          <p className="text-xs leading-relaxed opacity-90">
            Een leerling of ouder kan fysiek assertief worden uit 'eergevoel' na een belediging. In plaats van enkel te straffen, kan de school conflictbeheersing aanbieden en met de ouders in gesprek gaan over hoe eergevoel binnen hun cultuur werkt. Zo combineer je begrenzing met begrip.
          </p>
        </div>
      </div>
    </div>
  );
};

export const RolesResponsibilitiesVisual: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'unicoz' | 'extern'>('unicoz');

  const unicozRoles = [
    {
      title: 'College van Bestuur (CvB)',
      icon: <Building className="w-6 h-6" />,
      responsibilities: [
        'Eindverantwoordelijk voor naleving en toezicht op het protocol.',
        'Vaststelling en aanpassing van beleid op basis van evaluaties.',
        'Faciliteren van middelen (budget, trainingen, regisseur).',
        'Escalatie naar externe instanties (politie, gemeente) bij ernstige incidenten.'
      ]
    },
    {
      title: 'Veiligheidsregisseur (Bovenschools)',
      icon: <Shield className="w-6 h-6" />,
      responsibilities: [
        'Beleid & Strategie: Ontwikkelen en evalueren van groepsbrede protocollen.',
        'Risicoanalyse: Trends identificeren en preventief adviseren.',
        'Crisismanagement: Coördinatie bij complexe of grensoverschrijdende incidenten.',
        'Training: Organiseren van centrale workshops en VR-modules.',
        'Rapportage: Beheer incidentenregistratiesysteem en rapportage aan CvB.'
      ]
    },
    {
      title: 'Veiligheidscoördinatoren (Op school)',
      icon: <ShieldAlert className="w-6 h-6" />,
      responsibilities: [
        'Implementatie: Protocollen operationeel toepassen binnen de eigen school.',
        'Incidentafhandeling: Eerste aanspreekpunt, gesprekken voeren met betrokkenen.',
        'Monitoring: Dagelijks toezicht en beheer van het lokale registratiesysteem.',
        'Ondersteuning: Team adviseren over de-escalatie en procedures.'
      ]
    },
    {
      title: 'Schoolleiding (Directie)',
      icon: <Briefcase className="w-6 h-6" />,
      responsibilities: [
        'Lokaal verantwoordelijk voor implementatie en opvolging.',
        'Zorgen dat alle medewerkers getraind en geïnformeerd zijn.',
        'Opstellen van lokale regels (addenda) in samenwerking met de regisseur.',
        'Eindverantwoordelijk voor sancties en contact met ouders bij ernstige zaken.'
      ]
    },
    {
      title: 'Leerkrachten / Docenten',
      icon: <User className="w-6 h-6" />,
      responsibilities: [
        'Eerste lijn: Observeren en signaleren van gedrag in de klas of op school.',
        'Registreren: Elk incident rapporteren via de juiste digitale kanalen.',
        'Herstel: Gesprekken voeren met leerlingen om tot oplossingen te komen.',
        'Zelfbescherming: Eigen ervaringen van agressie direct melden bij de directie.'
      ]
    },
    {
      title: 'OOP (Conciërge, Admin, Assistenten)',
      icon: <Users className="w-6 h-6" />,
      responsibilities: [
        'Signaleren van ongewenst gedrag op het plein, in de gangen of aula.',
        'Melden van incidenten via het meldsysteem (zowel waargenomen als zelf ervaren).'
      ]
    }
  ];

  const externRoles = [
    {
      title: 'Ouders / Verzorgers',
      icon: <Users className="w-6 h-6" />,
      content: 'Partners in een veilig schoolklimaat.',
      points: [
        'Commitment: Ondersluiten van omgangsvormen en respectvol communiceren.',
        'Consistentie: Thuis dezelfde gedragsnormen hanteren als op school.',
        'Betrokkenheid: Medeverantwoordelijk voelen voor gedragsontwikkeling.',
        'Actieplan: Samen met de school een plan opstellen bij incidenten.'
      ]
    },
    {
      title: 'Leerlingen',
      icon: <GraduationCap className="w-6 h-6" />,
      content: 'Actieve bouwers aan een positieve sfeer.',
      points: [
        'Verantwoordelijkheid: Eigen gedrag reguleren en de norm respecteren.',
        'Rolmodel: Elkaar aanspreken op ongewenst gedrag.',
        'Inspraak: Meedenken over veiligheid via de leerlingenraad.'
      ]
    }
  ];

  return (
    <div className="my-10 space-y-8">
      <div className="bg-slate-50 border-l-4 border-[#CE3924] p-6 rounded-r-2xl italic text-slate-700 text-sm leading-relaxed text-left">
        <p>Een veilige schoolomgeving is alleen mogelijk wanneer iedereen – de school, leerlingen en ouders/verzorgers – zijn of haar verantwoordelijkheid neemt. Door samen te werken vormen zij een gemeenschap die respect en veiligheid vooropstelt.</p>
      </div>

      <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-2">
        <button 
          onClick={() => setActiveCategory('unicoz')}
          className={`flex-1 py-4 px-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 ${activeCategory === 'unicoz' ? 'bg-[#5D2E1E] text-white shadow-lg' : 'text-[#5D2E1E]/60 hover:bg-slate-200'}`}
        >
          <Building size={18} /> Binnen Unicoz
        </button>
        <button 
          onClick={() => setActiveCategory('extern')}
          className={`flex-1 py-4 px-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 ${activeCategory === 'extern' ? 'bg-[#5D2E1E] text-white shadow-lg' : 'text-[#5D2E1E]/60 hover:bg-slate-200'}`}
        >
          <Users size={18} /> Ouders & Leerlingen
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeCategory === 'unicoz' ? (
          unicozRoles.map((role, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col hover:border-[#CE3924]/30 transition-colors text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#CE3924]/10 rounded-xl text-[#CE3924]">
                  {role.icon}
                </div>
                <h4 className="font-black text-[#5D2E1E] text-base uppercase tracking-tight">{role.title}</h4>
              </div>
              <ul className="space-y-3 flex-1">
                {role.responsibilities.map((res, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 font-medium leading-relaxed">{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          externRoles.map((role, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col hover:border-[#CE3924]/30 transition-colors text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#CE3924]/10 rounded-xl text-[#CE3924]">
                  {role.icon}
                </div>
                <h4 className="font-black text-[#5D2E1E] text-base uppercase tracking-tight">{role.title}</h4>
              </div>
              <p className="text-sm font-bold text-slate-700 mb-4">{role.content}</p>
              <ul className="space-y-3 flex-1">
                {role.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[#D4A76A] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const ABCDModelVisual: React.FC = () => {
  const columns = [
    {
      id: 'A',
      title: 'A gedrag',
      subtitle: 'Frustratie',
      target: 'Zichzelf',
      icon: <User className="w-6 h-6" />,
      content: 'Zeuren, begrip vragen, om een uitzondering vragen enz.',
      color: '#F9E061',
      textColor: 'text-slate-900',
    },
    {
      id: 'B',
      title: 'B gedrag',
      subtitle: 'Systeem',
      target: 'De organisatie (jullie)',
      icon: <Building className="w-6 h-6" />,
      content: 'Kritiek op de regels, op de organisatie, op het beleid (jullie)',
      color: '#F9BC54',
      textColor: 'text-slate-900',
    },
    {
      id: 'C',
      title: 'C gedrag',
      subtitle: 'Persoonlijk',
      target: 'De medewerker (jij)',
      icon: <UserX className="w-6 h-6" />,
      content: 'Schelden, treiteren, vernederen, schreeuwen, beledigen, vals beschuldigen = agressie.',
      footer: 'Begrenzen en melden!',
      color: '#F98C4E',
      textColor: 'text-white',
    },
    {
      id: 'D',
      title: 'D gedrag',
      subtitle: 'Fysiek / Dreigend',
      target: 'Fysiek (jij)',
      icon: <Zap className="w-6 h-6" />,
      content: 'Fysiek geweld, dreigen met geweld (verbaal of schriftelijk) of intimidatie = agressie.',
      footer: 'Contact direct verbreken en melden!!',
      color: '#F93E3E',
      textColor: 'text-white',
    }
  ];

  return (
    <div className="my-10 w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {columns.map((col, idx) => (
          <React.Fragment key={col.id}>
            <div className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-slate-200 transition-all hover:shadow-md bg-white">
              <div className="p-4 text-center flex flex-col items-center space-y-2" style={{ backgroundColor: col.color }}>
                <div className={`p-2 rounded-full bg-white/30 ${col.textColor}`}>
                  {col.icon}
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs font-black uppercase tracking-widest ${col.textColor}`}>{col.title}</span>
                  <span className={`text-[10px] font-bold opacity-80 uppercase ${col.textColor}`}>{col.subtitle}</span>
                </div>
              </div>
              <div className="bg-[#A3D8EB] py-2 px-3 text-center border-y border-white/50">
                <span className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">
                  Focus: {col.target}
                </span>
              </div>
              <div className="bg-slate-50 p-5 flex-1 flex flex-col justify-between text-sm leading-relaxed text-slate-700 text-left">
                <p className="mb-4">{col.content}</p>
                {col.footer && (
                  <div className="pt-4 mt-auto border-t border-slate-200 italic font-bold text-slate-900 text-xs">
                    {col.footer}
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const ReportingChainVisual: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-bold text-center text-[#5D2E1E] mb-8 uppercase tracking-wider">Meldingsstructuur</h3>
      <div className="relative flex flex-col items-center space-y-6">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -z-10 transform -translate-x-1/2"></div>
        <div className="bg-[#5D2E1E] text-white p-4 rounded-lg w-64 text-center shadow-md border-b-4 border-[#CE3924]">
          <span className="font-bold block uppercase text-sm">Bestuur (CvB)</span>
        </div>
        <ArrowUp className="text-[#CE3924]" />
        <div className="bg-[#5D2E1E]/90 text-white p-4 rounded-lg w-64 text-center shadow-md border-b-4 border-[#706634]">
          <span className="font-bold block uppercase text-sm">Veiligheidsregisseur</span>
        </div>
        <ArrowUp className="text-[#CE3924]" />
        <div className="bg-[#CE3924] text-white p-4 rounded-lg w-64 text-center shadow-md border-b-4 border-[#5D2E1E]/50">
          <span className="font-bold block uppercase text-sm">Schooldirectie</span>
        </div>
        <ArrowUp className="text-[#CE3924]" />
        <div className="flex gap-4 w-full justify-center flex-wrap">
          <div className="bg-[#706634] text-white p-3 rounded-lg min-w-[14rem] text-center shadow-sm">
            <span className="font-bold block text-xs uppercase whitespace-nowrap">Veiligheidscoördinator</span>
          </div>
          <div className="bg-[#D4A76A] text-white p-3 rounded-lg min-w-[10rem] text-center shadow-sm">
            <span className="font-bold block text-xs uppercase">Docent / OOP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InteractiveIncidentFlow: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedBehavior, setSelectedBehavior] = useState<string | null>(null);
  const [frequency, setFrequency] = useState<'sporadisch' | 'herhaaldelijk' | null>(null);
  const [multiplePeopleComplaining, setMultiplePeopleComplaining] = useState<boolean | null>(null);

  const reset = () => {
    setStep(1);
    setSelectedBehavior(null);
    setFrequency(null);
    setMultiplePeopleComplaining(null);
  };

  const behaviors = [
    { id: 'A', color: '#F9E061', label: 'A-gedrag', desc: 'Emotie/Frustratie' },
    { id: 'B', color: '#F9BC54', label: 'B-gedrag', desc: 'Systeem' },
    { id: 'C', color: '#F98C4E', label: 'C-gedrag', desc: 'Persoonlijk' },
    { id: 'D', color: '#F93E3E', label: 'D-gedrag', desc: 'Fysiek/Dreiging' },
  ];

  return (
    <div className="my-8 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden flex flex-col min-h-[500px]">
      <div className="bg-[#5D2E1E] p-4 text-white flex items-center justify-between">
        <h4 className="font-black uppercase text-xs tracking-widest flex items-center">
          <Siren className="w-4 h-4 mr-2 text-[#CE3924]" />
          Incidenten Stappenplan
        </h4>
        {step > 1 && (
          <button onClick={reset} className="text-[10px] font-bold uppercase opacity-70 hover:opacity-100 transition-opacity">
            Opnieuw starten
          </button>
        )}
      </div>

      <div className="p-8 flex-1 flex flex-col items-center justify-center">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-lg">
            <h5 className="text-xl font-black text-[#5D2E1E] mb-6 text-center">Welk type gedrag heb je ervaren?</h5>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {behaviors.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    setSelectedBehavior(b.id);
                    setStep(2);
                  }}
                  className="flex flex-col items-center p-6 rounded-xl border-2 border-slate-100 hover:border-[#CE3924] transition-all group bg-slate-50 hover:bg-white hover:shadow-md"
                >
                  <div 
                    className="w-12 h-12 rounded-full mb-3 flex items-center justify-center font-black text-xl shadow-sm group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: b.color, color: (b.id === 'C' || b.id === 'D') ? 'white' : 'black' }}
                  >
                    {b.id}
                  </div>
                  <span className="font-black text-xs uppercase text-[#5D2E1E]">{b.label}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">{b.desc}</span>
                </button>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl flex items-start">
              <Info className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800 font-medium leading-relaxed">
                Jouw ervaring als professional is leidend. Hoe heb jij het veiligheidsgevoel ervaren?
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center w-full max-w-lg">
            <h5 className="text-2xl font-black text-[#5D2E1E] uppercase tracking-tight mb-8">Eerste Actie: Melden</h5>
            <div className="flex flex-col items-center space-y-6">
              {(selectedBehavior === 'A' || selectedBehavior === 'B') ? (
                <div className="p-6 rounded-2xl bg-[#CE3924]/5 border-2 border-[#CE3924] w-full">
                  <Users className="w-12 h-12 text-[#CE3924] mx-auto mb-4" />
                  <p className="text-lg font-bold text-[#5D2E1E]">Bespreek dit gedrag met je collega's en/of directie.</p>
                  <p className="text-sm text-slate-500 mt-2">Gedeelde smart is halve smart. Zoek steun.</p>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-[#CE3924] text-white w-full shadow-xl">
                  <AlertTriangle className="w-12 h-12 text-white mx-auto mb-4" />
                  <p className="text-xl font-black uppercase leading-tight">Meld direct bij de directie en collega's.</p>
                  <p className="text-xs opacity-80 mt-3 font-bold uppercase tracking-widest">Veiligheid is nu prioriteit.</p>
                </div>
              )}
              <Button onClick={() => setStep(3)} className="shadow-lg group">
                Volgende stap in protocol
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center w-full max-w-lg">
            <h5 className="text-2xl font-black text-[#5D2E1E] uppercase mb-8">Vervolgstap Organisatie</h5>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              {selectedBehavior === 'A' || selectedBehavior === 'B' ? (
                <div className="space-y-6">
                  <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-[#706634] text-left">
                    <p className="font-black text-[#5D2E1E] text-xs uppercase mb-1">Onderzoek naar Patroon</p>
                    <p className="text-sm text-slate-600 font-medium">Bespreek met collega's of dit gedrag vaker voorkomt bij deze persoon.</p>
                  </div>
                  <Button onClick={() => setStep(4)} variant="primary" fullWidth>Check uitvoeren <ChevronRight className="ml-2 w-4 h-4" /></Button>
                </div>
              ) : (
                <div className="space-y-4 text-left">
                  <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-red-500">
                    <p className="font-black text-[#5D2E1E] text-xs uppercase">Officiële Registratie</p>
                    <p className="text-sm text-slate-600 mt-1">Incident wordt geregistreerd in het systeem.</p>
                  </div>
                  <Button variant="primary" onClick={() => setStep(selectedBehavior === 'D' ? 7 : 6)} fullWidth>Bekijk vervolgstappen <ChevronRight className="ml-2 w-4 h-4" /></Button>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center w-full max-w-lg">
            <h5 className="text-2xl font-black text-[#5D2E1E] uppercase mb-8">Frequentie check</h5>
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => { setFrequency('sporadisch'); setStep(selectedBehavior === 'B' ? 5 : 6); }}
                className="flex items-center justify-between p-5 bg-white border-2 border-slate-100 rounded-xl hover:border-[#CE3924] transition-all group shadow-sm text-left"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4 group-hover:bg-[#CE3924]/10 transition-colors">
                    <Info className="w-5 h-5 text-slate-400 group-hover:text-[#CE3924]" />
                  </div>
                  <span className="font-black text-xs uppercase text-[#5D2E1E]">Sporadisch</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#CE3924]" />
              </button>
              <button 
                onClick={() => { setFrequency('herhaaldelijk'); setStep(selectedBehavior === 'B' ? 5 : 6); }}
                className="flex items-center justify-between p-5 bg-white border-2 border-slate-100 rounded-xl hover:border-[#CE3924] transition-all group shadow-sm text-left"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4 group-hover:bg-[#CE3924]/10 transition-colors">
                    <RefreshCw className="w-5 h-5 text-slate-400 group-hover:text-[#CE3924]" />
                  </div>
                  <span className="font-black text-xs uppercase text-[#5D2E1E]">Herhaaldelijk</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#CE3924]" />
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center w-full max-w-lg">
            <h5 className="text-2xl font-black text-[#5D2E1E] uppercase mb-8">Collectief Signaal?</h5>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-left">
              <p className="text-xs font-black text-[#5D2E1E] uppercase tracking-widest mb-4">Klagen meerdere mensen over dezelfde regel?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => { setMultiplePeopleComplaining(true); setStep(6); }}
                  className="flex-1 py-4 bg-[#5D2E1E] text-white rounded-xl font-bold uppercase text-[10px] hover:bg-[#CE3924] transition-colors"
                >
                  Ja, meerderen klagen
                </button>
                <button 
                  onClick={() => { setMultiplePeopleComplaining(false); setStep(6); }}
                  className="flex-1 py-4 bg-slate-200 text-slate-600 rounded-xl font-bold uppercase text-[10px] hover:bg-slate-300 transition-colors"
                >
                  Nee, alleen deze persoon
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center w-full max-w-lg">
            <h5 className="text-2xl font-black text-[#5D2E1E] uppercase mb-6">Eindconclusie & Actie</h5>
            <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-xl text-left">
              {frequency === 'herhaaldelijk' && (selectedBehavior === 'A' || (selectedBehavior === 'B' && !multiplePeopleComplaining)) ? (
                <div className="space-y-4">
                  <div className="inline-block p-3 rounded-full bg-[#CE3924]/10 mb-2">
                    <Calendar className="w-8 h-8 text-[#CE3924]" />
                  </div>
                  <h6 className="text-lg font-black text-[#CE3924] uppercase">Inplannen fysieke afspraak</h6>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Plan een gesprek in om de zorgen serieus te bespreken en de norm te herhalen.
                  </p>
                </div>
              ) : selectedBehavior === 'B' && multiplePeopleComplaining ? (
                <div className="space-y-4">
                  <div className="inline-block p-3 rounded-full bg-[#CE3924]/10 mb-2">
                    <Settings2 className="w-8 h-8 text-[#CE3924]" />
                  </div>
                  <h6 className="text-lg font-black text-[#CE3924] uppercase">Beleidscheck</h6>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    De regels moeten worden besproken op werkbaarheid. Klopt onze norm hier nog?
                  </p>
                </div>
              ) : (selectedBehavior === 'C' || selectedBehavior === 'D') ? (
                <div className="space-y-4">
                  <h6 className="text-lg font-black text-[#CE3924] uppercase">Doorzetting Melding</h6>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    De melding wordt door de veiligheidsregisseur opgepakt.
                  </p>
                  <Button variant="primary" fullWidth onClick={() => setStep(7)}>Tijdlijn inzien</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-2" />
                  <h6 className="text-lg font-black text-emerald-600 uppercase">Geen verdere actie</h6>
                  <p className="text-sm text-slate-600 font-medium">Sporadisch gedrag. Luister en stel open vragen. Blijf alert.</p>
                </div>
              )}
            </div>
            <Button variant="outline" className="mt-8" onClick={reset}>Terug naar begin</Button>
          </div>
        )}

        {step === 7 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center w-full max-w-lg">
            <h5 className="text-2xl font-black text-[#5D2E1E] uppercase mb-8">Vervolg: Veiligheidsregisseur</h5>
            <div className="space-y-4 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 relative">
                <span className="absolute top-0 right-0 p-2 bg-red-50 text-red-600 rounded-bl-lg font-black text-[9px] uppercase">Binnen 24 uur</span>
                <p className="text-sm text-slate-700 font-bold leading-relaxed pt-2">Contact met slachtoffer: Bespreken vervolgstappen richting agressor.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500 relative">
                <span className="absolute top-0 right-0 p-2 bg-emerald-50 text-emerald-600 rounded-bl-lg font-black text-[9px] uppercase">Binnen 48 uur</span>
                <p className="text-sm text-slate-700 font-bold leading-relaxed pt-2">Contact met agressor: Sancties en maatregelen mededelen.</p>
              </div>
            </div>
            <Button variant="outline" className="mt-8" onClick={reset}>Kies ander scenario</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export const BegrenzenWizard: React.FC<{onBehaviorChange?: (behavior: BehaviorType) => void}> = ({ onBehaviorChange }) => {
  const [step, setStep] = useState<'BEHAVIOR' | 'MEDIUM' | 'PERSONA' | 'RESULT'>('BEHAVIOR');
  const [config, setConfig] = useState<{ behavior: BehaviorType, medium: 'fysiek' | 'online', persona: 'ouder' | 'leerling' }>({
    behavior: 'A',
    medium: 'fysiek',
    persona: 'ouder'
  });

  const behaviorButtons = [
    { id: 'A' as BehaviorType, label: 'A-Gedrag', sub: 'Emotie', color: 'bg-[#F9E061]', icon: MessageSquare },
    { id: 'B' as BehaviorType, label: 'B-Gedrag', sub: 'Systeem', color: 'bg-[#F9BC54]', icon: Building },
    { id: 'C' as BehaviorType, label: 'C-Gedrag', sub: 'Persoonlijk', color: 'bg-[#F98C4E]', icon: UserX },
    { id: 'D' as BehaviorType, label: 'D-Gedrag', sub: 'Fysiek/Dreiging', color: 'bg-[#F93E3E]', icon: Zap },
  ];

  const getAdvice = (config: any) => {
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
          'Reageer kort door de ontvangst van het bericht te bevestigen.',
          'Blijf rustig en professioneel.',
          'Verwijs naar afspraken over online communicatie.',
          'Nodig uit voor een gesprek.'
        ] : [
          'Luister actief.',
          'Vat de kern samen.',
          'Vraag wat de ander nodig heeft.',
          'Blijf professioneel.',
          'Maak indien nodig een vervolgafspraak.'
        ]
      },
      'B': {
        title: 'Begrenzen van Systeemkritiek',
        desc: 'De kritiek is gericht op de regels of organisatie. Neem dit niet persoonlijk.',
        steps: [
          'Erken de onvrede.',
          'Stel open vragen.',
          'Leg kort de regel uit.',
          'Verwijs naar de klachten procedure.',
          'Nodig uit voor gesprek bij herhaling.'
        ]
      },
      'C': {
        title: 'Persoonlijk Begrenzen',
        desc: 'De grens is overschreden. De aanval is persoonlijk. Stop het proces.',
        steps: [
          'Benoem het gedrag direct.',
          'Stel de grens.',
          'Noem de consequentie.',
          'Geef een keuze.',
          'Beëindig bij weigering het gesprek.'
        ]
      },
      'D': {
        title: 'Direct Stoppen & Veiligheid',
        desc: 'Er is sprake van fysieke dreiging of geweld. Veiligheid is prioriteit #1.',
        steps: [
          'Verlaat de situatie.',
          'Schakel hulp in.',
          'Ga niet in discussie.',
          'Meld direct bij de veiligheidsregisseur.'
        ]
      }
    };

    return baseAdvice[behavior as keyof typeof baseAdvice];
  };

  return (
    <div className="w-full space-y-6">
      {step === 'BEHAVIOR' && (
        <div className="p-8 border-2 border-slate-100 rounded-3xl bg-white shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <label className="block text-xs font-black text-[#5D2E1E] uppercase tracking-[0.2em] mb-8 text-center bg-slate-50 py-2 rounded-full">Stap 1: Welk gedrag zie je?</label>
          <div className="grid grid-cols-2 gap-4">
            {behaviorButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => { 
                  setConfig({...config, behavior: btn.id}); 
                  setStep('MEDIUM'); 
                  if (onBehaviorChange) onBehaviorChange(btn.id);
                }}
                className="flex flex-col items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#CE3924] hover:bg-slate-50 transition-all group bg-white shadow-sm"
              >
                <div className={`p-4 rounded-xl mb-3 ${btn.color} ${btn.id === 'C' || btn.id === 'D' ? 'text-white' : 'text-slate-800'} group-hover:scale-110 transition-transform`}>
                  <btn.icon size={28} />
                </div>
                <span className="font-black text-sm uppercase text-[#5D2E1E]">{btn.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'MEDIUM' && (
        <div className="p-8 border-2 border-slate-100 rounded-3xl bg-white shadow-sm animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="flex items-center mb-8 bg-slate-50 rounded-full pr-8">
            <button onClick={() => setStep('BEHAVIOR')} className="p-3 hover:bg-slate-200 rounded-full text-[#5D2E1E] mr-4 transition-colors"><ChevronLeft size={20} /></button>
            <label className="flex-1 text-xs font-black text-[#5D2E1E] uppercase tracking-[0.2em] text-center py-2">Stap 2: Hoe wordt dit geuit?</label>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <button onClick={() => { setConfig({...config, medium: 'fysiek'}); setStep('PERSONA'); }} className="flex items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#5D2E1E] transition-all bg-white text-left">
              <MapPin size={24} className="mr-4 text-slate-400" />
              <span className="font-bold">Fysiek / Verbaal</span>
            </button>
            <button onClick={() => { setConfig({...config, medium: 'online'}); setStep('PERSONA'); }} className="flex items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#5D2E1E] transition-all bg-white text-left">
              <Smartphone size={24} className="mr-4 text-slate-400" />
              <span className="font-bold">Online / Digitaal</span>
            </button>
          </div>
        </div>
      )}

      {step === 'PERSONA' && (
        <div className="p-8 border-2 border-slate-100 rounded-3xl bg-white shadow-sm animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="flex items-center mb-8 bg-slate-50 rounded-full pr-8">
            <button onClick={() => setStep('MEDIUM')} className="p-3 hover:bg-slate-200 rounded-full text-[#5D2E1E] mr-4 transition-colors"><ChevronLeft size={20} /></button>
            <label className="flex-1 text-xs font-black text-[#5D2E1E] uppercase tracking-[0.2em] text-center py-2">Stap 3: Wie vertoont dit gedrag?</label>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <button onClick={() => { setConfig({...config, persona: 'ouder'}); setStep('RESULT'); }} className="flex items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#5D2E1E] transition-all bg-white text-left">
              <Users size={24} className="mr-4 text-slate-400" />
              <span className="font-bold">Ouder / Verzorger</span>
            </button>
            <button onClick={() => { setConfig({...config, persona: 'leerling'}); setStep('RESULT'); }} className="flex items-center p-6 rounded-2xl border-2 border-slate-100 hover:border-[#5D2E1E] transition-all bg-white text-left">
              <User size={24} className="mr-4 text-slate-400" />
              <span className="font-bold">Leerling</span>
            </button>
          </div>
        </div>
      )}

      {step === 'RESULT' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-lg text-left">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-[#5D2E1E] uppercase">{getAdvice(config).title}</h2>
              <Button variant="outline" size="sm" onClick={() => setStep('BEHAVIOR')}>Opnieuw</Button>
            </div>
            <p className="text-slate-600 font-bold mb-8 italic">"{getAdvice(config).desc}"</p>
            <div className="space-y-4">
              {getAdvice(config).steps.map((s: string, i: number) => (
                <div key={i} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-[#CE3924] text-white flex items-center justify-center font-black text-[10px] shrink-0 mr-4 mt-0.5">{i+1}</div>
                  <p className="text-sm text-slate-700 font-medium">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const HerstelgesprekkenVisual: React.FC = () => {
  return (
    <div className="my-8 space-y-6 text-left">
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
        <h4 className="text-lg font-black text-emerald-900 uppercase flex items-center gap-2">
          <HeartHandshake /> Doel van Herstel
        </h4>
        <p className="text-emerald-800 font-medium mt-2">De werkrelatie normaliseren en impact bespreekbaar maken na C- of D-gedrag.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: 'Voorbereiding', text: 'Sta stil bij eigen emoties.', icon: Target },
          { title: 'Opening', text: 'Benoem het doel: relatieherstel.', icon: MessageSquare },
          { title: 'Impact', text: 'Vertel wat het gedrag met je deed.', icon: AlertTriangle },
          { title: 'Afspraken', text: 'Concrete afspraken voor de toekomst.', icon: ClipboardCheck },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="p-2 bg-slate-50 rounded-lg text-emerald-600"><item.icon size={18} /></div>
            <div>
              <h5 className="font-black text-slate-800 text-xs uppercase mb-1">{item.title}</h5>
              <p className="text-[11px] text-slate-600 font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AgedragAdviesVisual: React.FC = () => {
  return (
    <div className="my-8 space-y-6 text-left">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
        <h4 className="text-lg font-black text-amber-900 uppercase flex items-center gap-2">
          <Lightbulb /> De-escaleren (A/B)
        </h4>
        <p className="text-amber-800 font-medium mt-2">Blijf rustig en luister. A-gedrag is emotie, geen aanval.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
          <h5 className="font-bold text-xs uppercase mb-2">1. Luister Actief</h5>
          <p className="text-[11px] text-slate-600">Laat de ander uitpraten.</p>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
          <h5 className="font-bold text-xs uppercase mb-2">2. Vat Samen</h5>
          <p className="text-[11px] text-slate-600">Toon dat je het begrijpt.</p>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
          <h5 className="font-bold text-xs uppercase mb-2">3. Stel Vragen</h5>
          <p className="text-[11px] text-slate-600">Zoek naar de kern van de onmacht.</p>
        </div>
      </div>
    </div>
  );
};

export const OpvolgingDVisual: React.FC = () => {
  return (
    <div className="my-8 space-y-8 text-left">
      <div className="relative border-l-2 border-red-100 ml-4 pl-8 space-y-8">
        {[
          { time: 'Direct', title: 'Veiligheid', text: 'Verlaat de situatie, waarschuw collega\'s.', icon: Zap },
          { time: 'T+2u', title: 'Registreren', text: 'Vul het incidentenformulier in.', icon: Siren },
          { time: 'T+24u', title: 'Nazorg', text: 'Regisseur belt slachtoffer.', icon: HeartHandshake },
          { time: 'T+48u', title: 'Maatregel', text: 'Agressor hoort sanctie.', icon: Gavel },
        ].map((step, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[41px] top-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-xs shadow-md"><step.icon size={14} /></div>
            <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">{step.time}</span>
            <h4 className="font-black text-[#5D2E1E] uppercase">{step.title}</h4>
            <p className="text-xs text-slate-600 font-medium">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SanctiesDVisual: React.FC = () => {
  return (
    <div className="my-8 text-left">
      <div className="bg-red-600 text-white p-6 rounded-2xl shadow-xl">
        <h4 className="text-lg font-black uppercase mb-4 flex items-center gap-2"><Scale /> Sancties D-Gedrag</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <h5 className="font-bold text-xs mb-2">Voor de Agressor</h5>
            <ul className="text-xs space-y-1 opacity-90">
              <li>• Gebouwsontzegging</li>
              <li>• Aangifte politie</li>
              <li>• Verwijdering</li>
            </ul>
          </div>
          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <h5 className="font-bold text-xs mb-2">Voor het Slachtoffer</h5>
            <ul className="text-xs space-y-1 opacity-90">
              <li>• Professionele nazorg</li>
              <li>• Monitoring welzijn</li>
              <li>• Ondersteuning aangifte</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};