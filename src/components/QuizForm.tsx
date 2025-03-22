import { useState } from 'react';
import { questions } from '../data/questions';

type Category = Exclude<keyof typeof questions, 'initial'>;

interface QuizFormProps {
  onComplete: (answers: Record<string, string>, category: Category) => void;
}

function QuizForm({ onComplete }: QuizFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [mainCategory, setMainCategory] = useState<Category | null>(null);
  const [progress, setProgress] = useState(0);

  const handleAnswer = (answer: string) => {
    if (currentQuestion === 0) {
      setMainCategory(answer as Category);
    }

    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion === 0) {
      setCurrentQuestion(1);
      setProgress(0);
      return;
    }

    if (mainCategory) {
      const categoryQuestions = questions[mainCategory];
      const totalQuestions = categoryQuestions.length;

      if (currentQuestion < totalQuestions) {
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < totalQuestions) {
          setCurrentQuestion(nextQuestion);
          setProgress((nextQuestion * 100) / totalQuestions);
        } else {
          onComplete(newAnswers, mainCategory);
        }
      }
    }
  };

  const currentQuestionData =
    currentQuestion === 0
      ? questions.initial
      : mainCategory
      ? questions[mainCategory][currentQuestion - 1]
      : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-6">
          <img
            src="https://tinyurl.com/4sjsdbj8"
            alt="Cardoso Capital"
            className="h-16"
          />
        </div>

        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center mt-2 text-sm text-gray-600">
            {Math.round(progress)}%
          </p>
        </div>

        {currentQuestionData && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center mb-6">
              {currentQuestionData.question}
            </h2>

            {currentQuestionData.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-3 text-left border rounded-lg hover:bg-green-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizForm;

