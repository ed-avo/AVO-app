
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './views/Dashboard';
import { ModuleContent } from './views/ModuleContent';
import { Simulation } from './views/Simulation';
import { QuizCentral } from './views/QuizCentral';
import { ViewState, LearningModule } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [activeModule, setActiveModule] = useState<LearningModule | null>(null);

  const handleSelectModule = (module: LearningModule) => {
    setActiveModule(module);
    setCurrentView(ViewState.MODULE);
  };

  const handleBackToDashboard = () => {
    setActiveModule(null);
    setCurrentView(ViewState.DASHBOARD);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard onSelectModule={handleSelectModule} />;
      case ViewState.MODULE:
        if (!activeModule) return <Dashboard onSelectModule={handleSelectModule} />;
        return <ModuleContent module={activeModule} onBack={handleBackToDashboard} />;
      case ViewState.SIMULATION:
        return <Simulation />;
      case ViewState.QUIZ_CENTRAL:
        return <QuizCentral />;
      default:
        return <Dashboard onSelectModule={handleSelectModule} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

export default App;
