import React, { useState } from 'react';
import { Brain, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Page } from '../App';

interface AptitudeTestProps {
  onNavigate: (page: Page) => void;
}

type AptitudeQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  category: 'logical' | 'numerical' | 'verbal' | 'analytical';
};

const AptitudeTest: React.FC<AptitudeTestProps> = ({ onNavigate }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  /* ================= PERFECT APTITUDE QUESTIONS ================= */
  const questions: AptitudeQuestion[] = [
    {
      question: "All doctors are educated. Some educated people are rich. Which is true?",
      options: [
        "All doctors are rich",
        "Some doctors may be rich",
        "All rich people are doctors",
        "No doctor is rich"
      ],
      correctIndex: 1,
      category: "logical"
    },
    {
      question: "Statement: Some cats are dogs. All dogs are animals. Conclusion?",
      options: [
        "Some cats are animals",
        "All cats are animals",
        "No cat is an animal",
        "None"
      ],
      correctIndex: 0,
      category: "logical"
    },
    {
      question: "If 5 workers complete a task in 10 days, how many days will 10 workers take?",
      options: ["2", "5", "10", "20"],
      correctIndex: 1,
      category: "numerical"
    },
    {
      question: "A number increased by 20% becomes 120. What is the original number?",
      options: ["96", "100", "80", "90"],
      correctIndex: 2,
      category: "numerical"
    },
    {
      question: "Choose the correct synonym for 'IMPLICIT'",
      options: ["Clear", "Hidden", "Open", "Loud"],
      correctIndex: 1,
      category: "verbal"
    },
    {
      question: "Choose the correctly spelled word:",
      options: ["Definately", "Definitely", "Definetely", "Definatly"],
      correctIndex: 1,
      category: "verbal"
    },
    {
      question: "Find the next number: 1, 4, 9, 16, ?",
      options: ["20", "24", "25", "30"],
      correctIndex: 2,
      category: "analytical"
    },
    {
      question: "Circle : Sphere :: Square : ?",
      options: ["Cube", "Rectangle", "Triangle", "Pyramid"],
      correctIndex: 0,
      category: "analytical"
    }
  ];

  /* ================= HANDLERS ================= */
  const handleAnswerSelect = (index: string) => {
    const updated = [...answers];
    updated[currentQuestion] = index;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  /* ================= SCORING LOGIC ================= */
  const calculateScores = () => {
    const scores = {
      logical: 0,
      numerical: 0,
      verbal: 0,
      analytical: 0
    };

    answers.forEach((ans, i) => {
      if (ans !== undefined) {
        const selected = parseInt(ans);
        if (selected === questions[i].correctIndex) {
          scores[questions[i].category]++;
        }
      }
    });

    return scores;
  };

  const getTopCategory = (scores: Record<string, number>) => {
    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  };

  /* ================= CAREER MAPPING ================= */
  const aptitudeCareerMap = {
    logical: {
      title: "Logical Reasoning",
      streams: ["Software Engineer", "Lawyer", "Cyber Security Analyst"],
      description:
        "You excel in reasoning, deductions, and structured thinking."
    },
    numerical: {
      title: "Numerical Aptitude",
      streams: ["Engineering", "Data Analyst", "Finance Manager"],
      description:
        "You have strong quantitative and numerical problem-solving ability."
    },
    verbal: {
      title: "Verbal Ability",
      streams: ["Law", "Journalism", "Management"],
      description:
        "You understand language, meaning, and communication very well."
    },
    analytical: {
      title: "Analytical Thinking",
      streams: ["Research", "Product Manager", "Strategy Analyst"],
      description:
        "You can analyze patterns, systems, and abstract problems effectively."
    }
  };

  /* ================= RESULTS VIEW ================= */
  if (showResults) {
    const scores = calculateScores();
    const top = getTopCategory(scores) as keyof typeof aptitudeCareerMap;
    const result = aptitudeCareerMap[top];

    const totalCorrect = Object.values(scores).reduce((a, b) => a + b, 0);

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <CheckCircle className="h-14 w-14 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-600 mb-2">
              Test Completed
            </h1>
            <p className="text-gray-600 mb-6">
              You answered {totalCorrect} out of {questions.length} correctly
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              {result.title}
            </h2>
            <p className="text-gray-600 mb-6">{result.description}</p>

            <h3 className="font-semibold text-lg mb-3">
              Recommended Career Streams
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {result.streams.map((s) => (
                <div
                  key={s}
                  className="bg-blue-50 border border-blue-200 p-3 rounded"
                >
                  {s}
                </div>
              ))}
            </div>

            {/* ====== ALL QUESTIONS + ANSWERS ====== */}
            <div className="text-left mt-6">
              <h3 className="text-xl font-bold mb-3">Review Answers</h3>

              {questions.map((q, idx) => (
                <div key={idx} className="mb-4 p-4 border rounded-lg">
                  <p className="font-semibold">{q.question}</p>

                  <p className="text-gray-600">
                    Your answer:{" "}
                    <span
                      className={
                        parseInt(answers[idx]) === q.correctIndex
                          ? "text-green-600 font-medium"
                          : "text-red-600 font-medium"
                      }
                    >
                      {q.options[parseInt(answers[idx])]}
                    </span>
                  </p>

                  <p className="text-gray-600">
                    Correct answer:{" "}
                    <span className="font-medium">
                      {q.options[q.correctIndex]}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => onNavigate('recommendations')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                View Careers
              </button>
              <button
                onClick={() => {
                  setAnswers([]);
                  setCurrentQuestion(0);
                  setShowResults(false);
                }}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg"
              >
                Retake Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ================= QUESTION VIEW ================= */
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-6">
          <Brain className="h-12 w-12 text-blue-600 mx-auto mb-3" />
          <h1 className="text-3xl font-bold text-blue-600">Aptitude Test</h1>
          <p className="text-gray-600">
            Objective test based on real aptitude skills
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((opt, i) => (
              <label
                key={i}
                className={`block p-4 border rounded cursor-pointer ${
                  answers[currentQuestion] === i.toString()
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  className="sr-only"
                  checked={answers[currentQuestion] === i.toString()}
                  onChange={() => handleAnswerSelect(i.toString())}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-gray-600 text-white px-5 py-2 rounded disabled:opacity-40"
          >
            <ArrowLeft className="inline h-4 w-4 mr-1" />
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!answers[currentQuestion]}
              className="bg-green-600 text-white px-5 py-2 rounded"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="bg-blue-600 text-white px-5 py-2 rounded"
            >
              Next
              <ArrowRight className="inline h-4 w-4 ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AptitudeTest;
