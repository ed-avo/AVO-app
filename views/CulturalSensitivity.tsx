
import React from 'react';
import { Card } from '../components/Card';
import { Globe, Languages, Eye, Users, Heart, CheckCircle2, Lightbulb, BookOpen } from 'lucide-react';

export const CulturalSensitivity: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <header className="text-center space-y-4">
        <div className="inline-block p-3 bg-[#CE3924]/10 rounded-full mb-2">
          <Globe className="w-10 h-10 text-[#CE3924]" />
        </div>
        <h1 className="text-4xl font-extrabold text-[#5D2E1E] tracking-tight">Cultuur sensitieve Aandachtspunten</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Verschillende culturele achtergronden kunnen een aanzienlijke invloed hebben op hoe grensoverschrijdend gedrag en agressie worden geïnterpreteerd.
        </p>
      </header>

      <Card className="p-8 border-l-8 border-[#5D2E1E] bg-white shadow-lg">
        <p className="text-slate-700 leading-relaxed italic">
          "Wat in de ene cultuur als onschuldig of acceptabel wordt gezien, kan in een andere cultuur als agressief of respectloos worden ervaren. Om een veilige en inclusieve schoolomgeving te waarborgen, is het van groot belang dat scholen bij de aanpak van incidenten rekening houden met deze culturele verschillen en sensitiviteit tonen."
        </p>
      </Card>

      <section className="space-y-6">
        <h2 className="text-2xl font-black text-[#5D2E1E] uppercase tracking-tight flex items-center gap-3">
          <Eye className="text-[#CE3924]" /> Invloed van cultuur op interpretatie
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl inline-block">
              <Languages size={24} />
            </div>
            <h3 className="font-bold text-[#5D2E1E]">Communicatiestijlen</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Directe communicatie kan in sommige culturen als assertief worden gezien, terwijl anderen dit als confronterend of agressief ervaren.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl inline-block">
              <Users size={24} />
            </div>
            <h3 className="font-bold text-[#5D2E1E]">Non-verbale uitingen</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Langdurig oogcontact of fysieke nabijheid kan variëren van respectvol en betrokken tot intimiderend of agressief.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl inline-block">
              <Heart size={24} />
            </div>
            <h3 className="font-bold text-[#5D2E1E]">Groepsdynamiek</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Gedrag kan voortkomen uit de behoefte om de eer van de familie te verdedigen, wat binnen de school als agressie kan worden opgevat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 p-8 md:p-12 rounded-[2rem] space-y-8">
        <h2 className="text-2xl font-black text-[#5D2E1E] uppercase tracking-tight text-center">
          Belang van culturele sensitiviteit
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "Vermijden van misinterpretatie", 
              text: "Zonder inzicht in culturele context kunnen gedragingen (zoals het verheffen van een stem) onterecht leiden tot sancties of escalaties." 
            },
            { 
              title: "Bevorderen van inclusiviteit", 
              text: "Wanneer scholen rekening houden met verschillen, voelen alle leerlingen en ouders zich gehoord en begrepen." 
            },
            { 
              title: "Respectvolle interventies", 
              text: "Interventies die geen rekening houden met culturele waarden kunnen weerstand oproepen en het herstelproces belemmeren." 
            },
            { 
              title: "Betere schoolcultuur", 
              text: "Een omgeving waarin diversiteit wordt gewaardeerd versterkt de samenwerking tussen alle achtergronden." 
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-[#CE3924] text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[#5D2E1E]">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-black text-[#5D2E1E] uppercase tracking-tight flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500" /> Concrete stappen voor de praktijk
        </h2>
        <div className="space-y-4">
          {[
            { title: "Bewustzijn en training", text: "Training voor personeel in het herkennen van culturele verschillen bij de beoordeling van incidenten." },
            { title: "Open communicatie", text: "Vraag expliciet naar relevante culturele waarden en normen tijdens gesprekken over incidenten." },
            { title: "Aangepaste begeleiding", text: "Maak sancties en herstelplannen relevanter door ze af te stemmen op specifieke waarden of overtuigingen." },
            { title: "Cultuurspecifieke bemiddeling", text: "Zet vertrouwenspersonen of mediators in die culturele nuances kunnen vertalen naar de schoolcontext." },
            { title: "Begrip voor groepsdruk", text: "Erken de invloed van familie-eer of andere groepsfactoren op het gedrag van leerlingen." }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm hover:border-[#CE3924]/30 transition-colors">
              <div className="p-3 bg-slate-50 rounded-xl text-slate-400">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#5D2E1E] text-sm uppercase tracking-wide">{step.title}</h4>
                <p className="text-sm text-slate-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#5D2E1E] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Lightbulb size={120} />
        </div>
        <div className="relative z-10 space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
            <Lightbulb className="text-amber-400" /> Voorbeeld uit de praktijk
          </h2>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="leading-relaxed font-medium">
              Stel dat een leerling/ouder met een Noord-Afrikaanse achtergrond fysiek wordt nadat hij zich beledigd voelt. In sommige culturen is fysieke assertiviteit een manier om familie-eer te beschermen. Hoewel geweld nooit getolereerd wordt, helpt deze uitleg om de context te begrijpen. De school kan naast sancties kiezen voor conflictbeheersingstraining en een gesprek over hoe eergevoel binnen hun cultuur werkt.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center space-y-4">
        <h3 className="text-xl font-bold text-emerald-900">Conclusie</h3>
        <p className="text-emerald-800 leading-relaxed max-w-2xl mx-auto">
          Culturele sensitiviteit is essentieel voor een veilige, inclusieve omgeving. Het voorkomt misinterpretaties en zorgt voor respectvolle interventies waarin zowel slachtoffer als dader zich begrepen voelen.
        </p>
      </footer>
    </div>
  );
};
