
import { ChevronDown } from 'lucide-react';
import { scenarios } from '../data/scenarios';

type CategoryType = keyof typeof scenarios;

interface ProblemAnalysisProps {
  category: CategoryType;
  answers: Record<string, string>;
  onNext: () => void;
}

function ProblemAnalysis({ category, onNext }: ProblemAnalysisProps) {
  const scenario = scenarios[category];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md fundo-gradient rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-6">
          <img 
            src="https://tinyurl.com/4sjsdbj8" 
            alt="Cardoso Capital"
            className="h-16"
          />
        </div>

        <h2 className="text-2xl font-libre text-center mb-6">
          Com Base Em Suas Respostas
        </h2>

        <div className="space-y-6">
          <div className="animate-bounce flex justify-center mb-4">
            <ChevronDown size={32} className="text-green-600" />
          </div>

          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="font-libre text-red-800 mb-2">PROBLEMA:</h3>
            <p className="text-red-700">{scenario?.problem}</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-libre text-blue-800 mb-2">POSSÍVEIS CONSEQUÊNCIAS:</h3>
            <p className="text-blue-700">{scenario?.consequence}</p>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={onNext}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Ver Soluções
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemAnalysis;
