
export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  MODULE = 'MODULE',
  SIMULATION = 'SIMULATION',
  QUIZ_CENTRAL = 'QUIZ_CENTRAL',
}

export interface ModuleStep {
  title: string;
  content: string;
  visualType?: 'abcd_model' | 'reporting_chain' | 'incident_flow' | 'incident_interactive' | 'begrenzen_wizard' | 'herstelgesprekken' | 'agedrag_advies' | 'opvolging_d' | 'sancties_d' | 'roles_responsibilities' | 'cultural_sensitivity' | 'trompenaars_model' | 'cultural_steps';
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: ModuleStep[];
  quiz?: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  moduleId?: string; // Optioneel om te koppelen aan een specifieke module
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type BehaviorType = 'A' | 'B' | 'C' | 'D' | 'any';

export interface SimulationConfig {
  difficulty: 'beginner' | 'advanced';
  topic: 'general' | 'bullying' | 'aggression_parent' | 'cyber' | 'cultural';
  behaviorType: BehaviorType;
  persona: 'leerling' | 'ouder' | 'willekeurig';
  medium: 'fysiek' | 'online';
}
