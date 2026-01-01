
export type Step = 'landing' | 'select' | 'generating' | 'result';

export interface Keyword {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

export interface GreetingResult {
  message: string;
  keywords: string[];
}
