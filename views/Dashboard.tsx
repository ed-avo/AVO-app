import React from 'react';
import { MODULES } from '../constants';
import { Card } from '../components/Card';
import { LearningModule } from '../types';
import * as Icons from 'lucide-react';

interface DashboardProps {
  onSelectModule: (module: LearningModule) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onSelectModule }) => {
  const renderIcon = (iconName: string) => {
    // @ts-ignore
    const Icon = Icons[iconName] || Icons.HelpCircle;
    return <div className="bg-[#CE3924]/10 p-3 rounded-xl inline-block mb-4">
      <Icon className="w-8 h-8 text-[#CE3924]" />
    </div>;
  };

  return (
    <div className="space-y-6">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5D2E1E] mb-6 tracking-tight">Niets Doen Is Geen Optie</h1>
        <div className="space-y-4 text-slate-600 text-lg max-w-3xl leading-relaxed">
          <p>
            Welkom bij de interactieve e-learning van Agressievrij onderwijs. Een veilige schoolomgeving is de basis voor goed onderwijs, en dat begint bij een duidelijke collectieve norm. Deze omgeving helpt je om stevig in je schoenen te staan wanneer grenzen worden overschreden.
          </p>
          <p>
            De e-learning bestaat uit drie hoofdonderdelen:
          </p>
          <ul className="list-disc ml-6 space-y-3">
            <li>
              <strong>Interactieve Modules:</strong> Leer meer over onze collectieve norm, verdiep je in de theorie van het ABCD-model, leer de escalatieladder kennen en ontdek hoe je gedrag begrenst en welke sancties kunnen worden opgelegd. Elke module wordt afgesloten met een korte check-up.
            </li>
            <li>
              <strong>Kennis Quiz:</strong> Test je parate kennis over het volledige protocol. De quiz selecteert elke keer 20 willekeurige vragen uit een uitgebreide database, zodat je keer op keer je scherpte kunt toetsen. Na afloop ontvang je direct een gepersonaliseerd studieadvies op basis van jouw resultaten.
            </li>
            <li>
              <strong>AI-Simulatie:</strong> Breng de theorie direct in de praktijk. In de simulatie-omgeving kun je verschillende scenario's oefenen met een AI-coach die reageert als een gefrustreerde ouder of een opstandige leerling. Je krijgt direct feedback op je aanpak.
            </li>
          </ul>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {MODULES.map((module) => (
          <Card 
            key={module.id} 
            hoverable 
            onClick={() => onSelectModule(module)}
            className="flex flex-col h-full group"
          >
            <div className="flex-1">
              {renderIcon(module.icon)}
              <h3 className="text-2xl font-bold text-[#5D2E1E] mb-3">{module.title}</h3>
              <p className="text-slate-600 leading-snug">{module.description}</p>
            </div>
            <div className="mt-8 flex items-center text-[#CE3924] font-bold text-sm uppercase tracking-widest">
              Start Module
              <Icons.ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-[#5D2E1E]/5 rounded-2xl p-8 border border-[#5D2E1E]/10 flex items-start space-x-6">
        <div className="bg-[#5D2E1E] p-3 rounded-xl text-white shrink-0 shadow-sm">
          <Icons.Info size={28} />
        </div>
        <div>
          <h4 className="text-xl font-bold text-[#5D2E1E] mb-2">Waarom deze training?</h4>
          <p className="text-slate-700 leading-relaxed">
            Veiligheid is geen keuze, maar een randvoorwaarde. Door deze e-learning te doorlopen leer je signaleren, begrenzen en handelen volgens de collectieve norm van Agressievrij onderwijs. Samen trekken we een duidelijke grens.
          </p>
        </div>
      </div>
    </div>
  );
};