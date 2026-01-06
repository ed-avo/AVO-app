
import React, { useState } from 'react';
import { LearningModule, BehaviorType } from '../types';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ChevronRight, ChevronLeft, CheckCircle, XCircle } from 'lucide-react';
import { ABCDModelVisual, ReportingChainVisual, InteractiveIncidentFlow, BegrenzenWizard, HerstelgesprekkenVisual, AgedragAdviesVisual, OpvolgingDVisual, SanctiesDVisual, RolesResponsibilitiesVisual, CulturalSensitivityVisual, TrompenaarsVisual, CulturalStepsVisual } from '../components/Visuals';

interface ModuleContentProps {
  module: LearningModule;
  onBack: () => void;
}

export const ModuleContent: React.FC<ModuleContentProps> = ({ module, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizMode, setQuizMode] = useState(false);
  
  const [currentQuizQuestionIndex, setCurrentQuizQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const [lastBehavior, setLastBehavior] = useState<BehaviorType>('any');

  const isLastStep = currentStep === module.steps.length - 1;
  const hasQuiz = module.quiz && module.quiz.length > 0;

  const handleNext = () => {
    if (isLastStep && hasQuiz) {
      setQuizMode(true);
      setCurrentStep(0); 
    } else if (isLastStep) {
      onBack(); 
    } else {
      let nextStep = currentStep + 1;
      
      if (module.id === 'maatregelen' && currentStep === 0) {
        if (lastBehavior === 'A' || lastBehavior === 'B') {
          nextStep = 3;
        } else if (lastBehavior === 'C') {
          nextStep = 4;
        } else if (lastBehavior === 'D') {
          nextStep = 1;
        }
      } else if (module.id === 'maatregelen' && currentStep === 2) {
        nextStep = 4;
      }
      
      setCurrentStep(nextStep);
      window.scrollTo(0,0);
    }
  };

  const handlePrev = () => {
    if (quizMode) {
      setQuizMode(false);
      resetQuiz();
    } else if (currentStep > 0) {
      let prevStep = currentStep - 1;
      
      if (module.id === 'maatregelen' && currentStep === 3) {
        prevStep = 0;
      } else if (module.id === 'maatregelen' && currentStep === 4) {
        if (lastBehavior === 'A' || lastBehavior === 'B') {
          prevStep = 3;
        } else if (lastBehavior === 'C') {
          prevStep = 0;
        } else if (lastBehavior === 'D') {
          prevStep = 2;
        }
      }

      setCurrentStep(prevStep);
    } else {
      onBack();
    }
  };

  const resetQuiz = () => {
    setCurrentQuizQuestionIndex(0);
    setSelectedAnswer(null);
    setQuizSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleQuizAnswer = (index: number) => {
    if (quizSubmitted) return;
    setSelectedAnswer(index);
    setQuizSubmitted(true);
    if (module.quiz && index === module.quiz[currentQuizQuestionIndex].correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (module.quiz && currentQuizQuestionIndex < module.quiz.length - 1) {
      setCurrentQuizQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setQuizSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const renderVisual = (type?: string) => {
    switch (type) {
      case 'abcd_model': return <ABCDModelVisual />;
      case 'reporting_chain': return <ReportingChainVisual />;
      case 'incident_interactive': return <InteractiveIncidentFlow />;
      case 'begrenzen_wizard': return <BegrenzenWizard onBehaviorChange={setLastBehavior} />;
      case 'herstelgesprekken': return <HerstelgesprekkenVisual />;
      case 'agedrag_advies': return <AgedragAdviesVisual />;
      case 'opvolging_d': return <OpvolgingDVisual />;
      case 'sancties_d': return <SanctiesDVisual />;
      case 'roles_responsibilities': return <RolesResponsibilitiesVisual />;
      case 'cultural_sensitivity': return <CulturalSensitivityVisual />;
      case 'trompenaars_model': return <TrompenaarsVisual />;
      case 'cultural_steps': return <CulturalStepsVisual />;
      default: return null;
    }
  };

  const parseInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-extrabold text-[#5D2E1E]">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderFormattedContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('**BC**')) {
        const cleanLine = trimmedLine.replace('**BC**', '');
        return (
          <div key={i} className="text-center font-bold text-xl md:text-2xl text-[#CE3924] my-6 leading-relaxed tracking-tight">
            {parseInline(cleanLine)}
          </div>
        );
      }

      if (trimmedLine.startsWith('- ')) {
        return (
          <div key={i} className="flex items-start mb-1 ml-6 group leading-snug">
            <span className="mr-3 text-[#CE3924] font-black text-lg leading-none mt-1 select-none">•</span>
            <div className="flex-1">
              {parseInline(trimmedLine.substring(2))}
            </div>
          </div>
        );
      }

      const numberedMatch = trimmedLine.match(/^(\d+\.)\s+(.*)/);
      if (numberedMatch) {
        return (
          <div key={i} className="flex items-start mb-1 ml-6 leading-snug">
            <span className="mr-3 text-[#CE3924] font-black text-sm w-7 shrink-0 mt-1 select-none">{numberedMatch[1]}</span>
            <div className="flex-1">
              {parseInline(numberedMatch[2])}
            </div>
          </div>
        );
      }

      if (trimmedLine.startsWith('👨‍🎓') || trimmedLine.startsWith('👪')) {
        return (
          <div key={i} className="mt-8 mb-4 font-black text-[#5D2E1E] text-lg flex items-center border-b border-slate-100 pb-2">
            {parseInline(line)}
          </div>
        );
      }

      return (
        <p key={i} className={`mb-2 leading-snug ${trimmedLine ? '' : 'h-2'}`}>
          {parseInline(line)}
        </p>
      );
    });
  };

  if (quizMode && module.quiz) {
    if (quizFinished) {
      const percentage = Math.round((score / module.quiz.length) * 100);
      return (
        <div className="max-w-xl mx-auto text-center space-y-6">
           <Card className="p-10 border-t-8 border-t-[#CE3924]">
             <div className="mb-6 flex justify-center">
                {percentage >= 70 
                  ? <CheckCircle className="w-20 h-20 text-emerald-500" />
                  : <XCircle className="w-20 h-20 text-[#CE3924]" />
                }
             </div>
             <h2 className="text-3xl font-bold text-[#5D2E1E] mb-2">Quiz Resultaat</h2>
             <p className="text-slate-600 text-lg mb-8">U behaalde {score} van de {module.quiz.length} vragen correct.</p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button variant="outline" onClick={() => { setQuizMode(false); resetQuiz(); setCurrentStep(0); }}>
                 Stof Herhalen
               </Button>
               <Button variant="primary" onClick={onBack}>
                 Afronden
               </Button>
             </div>
           </Card>
        </div>
      );
    }

    const question = module.quiz[currentQuizQuestionIndex];
    
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-2">
             <Button variant="outline" size="sm" onClick={() => setQuizMode(false)}>
                <ChevronLeft className="w-4 h-4 mr-1 inline" /> Stop Quiz
            </Button>
        </div>
        <Card className="border-t-[12px] border-t-[#5D2E1E]">
          <h3 className="text-xl font-bold text-[#5D2E1E] mb-8 leading-tight">{question.question}</h3>
          <div className="space-y-4 mb-8">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleQuizAnswer(idx)}
                disabled={quizSubmitted}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                  quizSubmitted 
                    ? idx === question.correctIndex 
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold'
                      : idx === selectedAnswer 
                        ? 'bg-red-50 border-[#CE3924] text-[#CE3924]'
                        : 'bg-slate-50 border-slate-100 opacity-60 text-slate-400'
                    : 'bg-white border-slate-100 hover:border-[#5D2E1E] hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="flex justify-end">
            {quizSubmitted && (
               <Button onClick={handleNextQuestion} variant="primary" size="lg">
                 {currentQuizQuestionIndex < module.quiz.length - 1 ? 'Volgende Vraag' : 'Bekijk Resultaat'} 
                 <ChevronRight className="w-4 h-4 ml-2 inline" />
               </Button>
            )}
          </div>
        </Card>
      </div>
    );
  }

  const step = module.steps[currentStep];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card className="border-t-[12px] border-t-[#5D2E1E] px-8 py-10">
        {step.title && <h2 className="text-3xl font-extrabold text-[#5D2E1E] mb-8 leading-tight tracking-tight text-center">{step.title}</h2>}
        <div className="prose prose-slate max-w-none text-slate-700 mb-10">
          {renderFormattedContent(step.content)}
        </div>
        {step.visualType && renderVisual(step.visualType)}
      </Card>
      <div className="flex justify-between pt-8 pb-12">
        <Button variant="outline" onClick={handlePrev}>
          <ChevronLeft className="w-4 h-4 mr-2 inline" /> Vorige
        </Button>
        <Button variant="primary" onClick={handleNext} size="lg">
          {isLastStep ? (hasQuiz ? 'Kennisquiz Starten' : 'Module Voltooien') : 'Volgende Stap'} 
          <ChevronRight className="ml-2 w-4 h-4 ml-2 inline" />
        </Button>
      </div>
    </div>
  );
};