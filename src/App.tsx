import { useState } from 'react';
import QuizForm from './components/QuizForm';
import ProblemAnalysis from './components/ProblemAnalysis';
import Results from './components/Results';
import InitialForm from './components/InitialForm';

// Primeiro, criamos um tipo com os valores aceitos
type CategoryType = "Finanças Empresariais" | "Finanças Pessoais" | "Consultoria de Investimento" | "Outros";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  // Aqui já dizemos que mainCategory só pode ter um dos 4 valores OU ficar vazio no início
  const [mainCategory, setMainCategory] = useState<CategoryType | ''>('');

  const handleInitialSubmit = (_name: string, _email: string) => {
    setCurrentPage(1);
  };

  // Mudamos a tipagem para garantir que category seja um dos 4 valores
  const handleQuizComplete = (answers: Record<string, string>, category: CategoryType) => {
    setQuizAnswers(answers);
    setMainCategory(category);
    setCurrentPage(2);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {currentPage === 0 && (
        <InitialForm onSubmit={handleInitialSubmit} />
      )}

      {currentPage === 1 && (
        <QuizForm onComplete={handleQuizComplete} />
      )}

      {currentPage === 2 && (
        <ProblemAnalysis
          category={mainCategory as CategoryType} // Aqui garantimos que quando for usado, estará certo
          answers={quizAnswers}
          onNext={() => setCurrentPage(3)}
        />
      )}

      {currentPage === 3 && (
        <Results />
      )}
    </div>
  );
}

export default App;
