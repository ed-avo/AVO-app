
import React from 'react';
import { ViewState } from '../types';
import { Shield, BookOpen, MessageSquare, Menu, X, BrainCircuit } from 'lucide-react';
import { APP_TITLE } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const NavItem = ({ view, label, icon: Icon }: { view: ViewState, label: string, icon: any }) => (
    <button
      onClick={() => {
        setView(view);
        setIsMobileMenuOpen(false);
      }}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full transition-colors text-left ${
        currentView === view 
          ? 'bg-[#CE3924]/10 text-[#CE3924] font-semibold' 
          : 'text-[#5D2E1E]/70 hover:bg-slate-50 hover:text-[#5D2E1E]'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center space-x-2 font-bold text-[#5D2E1E]">
          <Shield className="text-[#CE3924]" />
          <span>{APP_TITLE}</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 transition-transform duration-200 ease-in-out
        w-64 bg-white border-r border-slate-200 flex flex-col z-10
      `}>
        <div className="p-6 border-b border-slate-100 hidden md:flex items-center space-x-2 font-bold text-[#5D2E1E] text-lg">
          <Shield className="text-[#CE3924]" />
          <span>{APP_TITLE}</span>
        </div>

        <div className="p-4 space-y-2 flex-1">
          <NavItem view={ViewState.DASHBOARD} label="De Modules" icon={BookOpen} />
          <NavItem view={ViewState.QUIZ_CENTRAL} label="Kennis Quiz" icon={BrainCircuit} />
          <NavItem view={ViewState.SIMULATION} label="Simulatie" icon={MessageSquare} />
        </div>

        <div className="p-6 border-t border-slate-100">
            <div className="flex items-center space-x-2 mb-2">
                <div className="flex -space-x-1">
                    <div className="w-2 h-4 bg-[#D4A76A] rounded-t-sm"></div>
                    <div className="w-2 h-6 bg-[#706634] rounded-t-sm"></div>
                    <div className="w-2 h-6 bg-[#5D2E1E] rounded-t-sm"></div>
                    <div className="w-2 h-5 bg-[#CE3924] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-bold text-[#5D2E1E] uppercase leading-tight">Agressievrij<br/>onderwijs</span>
            </div>
          <p className="text-[9px] text-[#CE3924] font-bold tracking-wider">NIETS DOEN IS GEEN OPTIE.</p>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen flex flex-col">
        <div className="flex-1 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {children}
            </div>
        </div>
        
        {/* Persistent Footer with Quote */}
        <footer className="w-full bg-white border-t border-slate-200 py-8 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <div className="flex items-center mb-4 space-x-3">
                     <div className="flex items-end space-x-1 mb-1">
                        <div className="w-3 h-8 bg-[#D4A76A] rounded-t-sm shadow-sm"></div>
                        <div className="w-3 h-12 bg-[#706634] rounded-t-sm shadow-sm"></div>
                        <div className="w-3 h-12 bg-[#5D2E1E] rounded-t-sm shadow-sm"></div>
                        <div className="w-3 h-10 bg-[#CE3924] rounded-t-sm shadow-sm"></div>
                    </div>
                    <span className="text-xl font-bold text-[#5D2E1E] tracking-tight">Agressievrij onderwijs</span>
                </div>
                <p className="text-[#CE3924] font-black text-2xl tracking-[0.1em] border-t-2 border-[#CE3924] pt-2 px-4">
                    NIETS DOEN IS GEEN OPTIE.
                </p>
            </div>
        </footer>
      </main>
    </div>
  );
};
