
import React, { useState, useMemo } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { MODULES } from '../constants';
import { QuizQuestion } from '../types';
import { ChevronRight, ChevronLeft, BrainCircuit, CheckCircle, XCircle, Trophy, BookOpen, ArrowRight, Info } from 'lucide-react';

export const QuizCentral: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [results, setResults] = useState<{ [moduleId: string]: { correct: number, total: number } }>({});

  // Haal alle beschikbare vragen op uit de modules
  const allPoolQuestions = useMemo(() => {
    const questions: QuizQuestion[] = [];
    MODULES.forEach(module => {
      if (module.quiz) {
        module.quiz.forEach(q => {
          questions.push({ ...q, moduleId: module.id });
        });
      }
    });
    return questions;
  }, []);

  const handleStart = () => {
    // Selecteer 20 vragen (of alles als er minder zijn) en shuffle ze
    const shuffled = [...allPoolQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 20);
    
    setActiveQuestions(selected);
    setStarted(true);
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setFinished(false);
    
    // Initialiseer resultaten teller
    const initialResults: any = {};
    MODULES.forEach(m => initialResults[m.id] = { correct: 0, total: 0 });
    setResults(initialResults);
  };

  const handleAnswer = (idx: number) => {
    if (submitted) return;
    setSelectedAnswer(idx);
    setSubmitted(true);
    
    const currentQ = activeQuestions[currentQuestionIdx];
    const isCorrect = idx === currentQ.correctIndex;
    
    if (currentQ.moduleId) {
      setResults(prev => ({
        ...prev,
        [currentQ.moduleId!]: {
          correct: prev[currentQ.moduleId!].correct + (isCorrect ? 1 : 0),
          total: prev[currentQ.moduleId!].total + 1
        }
      }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < activeQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  };

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-center mb-2">
          <div className="bg-[#CE3924]/10 p-6 rounded-full shadow-inner ring-8 ring-[#CE3924]/5">
            <BrainCircuit size={48} className="text-[#CE3924]" />
          </div>
        </div>
        <h1 className="text-4xl font-black text-[#5D2E1E] uppercase tracking-tight">De Grote Kennis Test</h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto">
          Test je parate kennis over alle facetten van het Agressievrij onderwijs veiligheidsprotocol. Van de collectieve norm, het herkennen van agressie tot het melden en registreren van incidenten.
        </p>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 text-left max-w-md mx-auto">
          <Info className="text-[#CE3924] shrink-0" />
          <p className="text-xs text-slate-500 font-medium">Na afloop krijg je een gepersonaliseerd studieadvies op basis van je antwoorden in 20 willekeurige vragen.</p>
        </div>
        <Button size="lg" onClick={handleStart} className="px-12 h-16 text-lg rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all">
          Start de Test <ChevronRight className="ml-2" />
        </Button>
      </div>
    );
  }

  if (finished) {
    const totalCorrect = Object.values(results).reduce((acc, curr) => acc + curr.correct, 0);
    const totalQuestions = Object.values(results).reduce((acc, curr) => acc + curr.total, 0);
    const percentage = Math.round((totalCorrect / totalQuestions) * 100);

    // Bepaal welke modules herhaald moeten worden
    const adviceModules = MODULES.filter(m => {
      const res = results[m.id];
      if (!res || res.total === 0) return false;
      return (res.correct / res.total) < 0.7; // Minder dan 70% goed = advies om te herhalen
    });

    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
        <div className="text-center space-y-4">
          <Trophy size={64} className="mx-auto text-amber-500" />
          <h2 className="text-4xl font-black text-[#5D2E1E] uppercase tracking-tighter">Test Voltooid!</h2>
          <div className="text-6xl font-black text-[#CE3924] tracking-tighter">{percentage}%</div>
          <p className="text-slate-500 font-medium italic">Je hebt {totalCorrect} van de {totalQuestions} vragen goed beantwoord.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 border-t-8 border-t-[#5D2E1E] shadow-xl">
            <h3 className="text-xl font-black text-[#5D2E1E] uppercase mb-4 flex items-center gap-2">
              <CheckCircle className="text-emerald-500" /> Jouw Score
            </h3>
            <div className="space-y-4">
              {MODULES.map(m => {
                const res = results[m.id];
                if (!res || res.total === 0) return null;
                const perc = Math.round((res.correct / res.total) * 100);
                return (
                  <div key={m.id} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold uppercase text-slate-500">
                      <span>{m.title.split('. ')[1]}</span>
                      <span>{perc}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${perc >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                        style={{ width: `${perc}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-8 border-t-8 border-t-[#CE3924] shadow-xl">
            <h3 className="text-xl font-black text-[#5D2E1E] uppercase mb-4 flex items-center gap-2">
              <BookOpen className="text-[#CE3924]" /> Studieadvies
            </h3>
            {adviceModules.length > 0 ? (
              <div className="space-y-4">
                <p className="text-sm text-slate-600 font-medium">Op basis van je antwoorden raden we aan om de volgende modules nogmaals door te nemen:</p>
                <div className="space-y-2">
                  {adviceModules.map(m => (
                    <div key={m.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between group">
                      <span className="text-xs font-black text-[#5D2E1E] uppercase truncate mr-2">{m.title}</span>
                      <ChevronRight size={16} className="text-[#CE3924] opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-center py-6">
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl font-bold text-sm">
                  Uitstekend! Je hebt een zeer goed begrip van het volledige protocol.
                </div>
                <p className="text-xs text-slate-500">Blijf je kennis op peil houden door regelmatig een simulatie te doen.</p>
              </div>
            )}
          </Card>
        </div>

        <div className="flex justify-center pt-8">
          <Button size="lg" onClick={() => setStarted(false)} variant="outline">
            Terug naar Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const question = activeQuestions[currentQuestionIdx];
  if (!question) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="flex justify-between items-center">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#CE3924] bg-[#CE3924]/5 px-4 py-2 rounded-full border border-[#CE3924]/10">
          Vraag {currentQuestionIdx + 1} van {activeQuestions.length}
        </div>
        <button onClick={() => setStarted(false)} className="text-[10px] font-bold text-slate-400 uppercase hover:text-[#CE3924] transition-colors">
          Stoppen
        </button>
      </div>

      <Card className="border-t-[12px] border-t-[#5D2E1E] shadow-2xl px-10 py-12">
        <h3 className="text-2xl font-black text-[#5D2E1E] mb-10 leading-tight text-center">
          {question.question}
        </h3>

        <div className="space-y-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              disabled={submitted}
              onClick={() => handleAnswer(idx)}
              className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 relative overflow-hidden group ${
                submitted
                  ? idx === question.correctIndex
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-md scale-[1.02] z-10'
                    : idx === selectedAnswer
                      ? 'bg-red-50 border-[#CE3924] text-[#CE3924]'
                      : 'bg-white border-slate-100 opacity-40 grayscale'
                  : 'bg-white border-slate-100 hover:border-[#CE3924] hover:bg-slate-50 shadow-sm'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs mr-4 transition-colors ${
                  submitted && idx === question.correctIndex ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-[#CE3924] group-hover:text-white'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="font-bold flex-1">{option}</span>
                {submitted && idx === question.correctIndex && (
                  <CheckCircle className="text-emerald-500 ml-2 animate-in zoom-in" />
                )}
                {submitted && idx === selectedAnswer && idx !== question.correctIndex && (
                  <XCircle className="text-[#CE3924] ml-2 animate-in shake" />
                )}
              </div>
            </button>
          ))}
        </div>

        {submitted && (
          <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 flex items-start gap-4">
              <Info className="text-[#5D2E1E] shrink-0 mt-1" />
              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Toelichting</span>
                <p className="text-sm text-slate-600 font-medium italic">{question.explanation}</p>
              </div>
            </div>
            <Button fullWidth size="lg" onClick={handleNext} className="h-16 text-lg rounded-2xl shadow-xl">
              {currentQuestionIdx === activeQuestions.length - 1 ? 'Bekijk Resultaten' : 'Volgende Vraag'}
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};
