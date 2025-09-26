import React, { useState } from 'react';
import { Brain, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Page } from '../App';

interface AptitudeTestProps {
  onNavigate: (page: Page) => void;
}

const AptitudeTest: React.FC<AptitudeTestProps> = ({ onNavigate }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "You prefer to solve problems by:",
      options: [
        "Using logical analysis and step-by-step reasoning",
        "Discussing with others and brainstorming",
        "Experimenting and trying different approaches",
        "Researching and gathering information first"
      ],
      category: ['analytical', 'social', 'practical', 'research']
    },
    {
      question: "In group projects, you usually:",
      options: [
        "Take the leadership role and organize tasks",
        "Focus on creative ideas and innovation",
        "Handle data analysis and technical details",
        "Ensure everyone communicates effectively"
      ],
      category: ['leadership', 'creative', 'analytical', 'communication']
    },
    {
      question: "You feel most energized when:",
      options: [
        "Working with numbers and data",
        "Helping people solve their problems",
        "Creating something new or artistic",
        "Learning about how things work"
      ],
      category: ['analytical', 'social', 'creative', 'research']
    },
    {
      question: "Your ideal work environment would be:",
      options: [
        "A structured office with clear procedures",
        "A collaborative space with team interaction",
        "A flexible environment allowing creativity",
        "A quiet space for focused thinking"
      ],
      category: ['organized', 'social', 'creative', 'analytical']
    },
    {
      question: "When learning something new, you prefer:",
      options: [
        "Hands-on practice and real examples",
        "Visual diagrams and infographics",
        "Reading detailed explanations",
        "Group discussions and explanations"
      ],
      category: ['practical', 'visual', 'research', 'social']
    },
    {
      question: "You're most proud of achievements that involve:",
      options: [
        "Solving complex technical problems",
        "Making a positive impact on others",
        "Creating something beautiful or innovative",
        "Organizing successful events or projects"
      ],
      category: ['analytical', 'social', 'creative', 'leadership']
    }
  ];

  const handleAnswerSelect = (answerIndex: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
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

  const calculateResults = () => {
    const categories = {
      analytical: 0,
      social: 0,
      creative: 0,
      research: 0,
      leadership: 0,
      communication: 0,
      practical: 0,
      visual: 0,
      organized: 0
    };

    answers.forEach((answer, index) => {
      if (answer) {
        const category = questions[index].category[parseInt(answer)];
        categories[category as keyof typeof categories]++;
      }
    });

    const topCategories = Object.entries(categories)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);

    return topCategories;
  };

  const getRecommendations = (topCategories: [string, number][]) => {
    const recommendations = {
      analytical: {
        strength: "Analytical Thinking",
        streams: ["Computer Science", "Engineering", "Mathematics", "Data Science"],
        description: "You excel at logical reasoning and problem-solving through systematic analysis."
      },
      social: {
        strength: "Social & Communication Skills",
        streams: ["Psychology", "Social Work", "Commerce", "Management"],
        description: "You have strong interpersonal skills and enjoy helping others."
      },
      creative: {
        strength: "Creative & Innovative Thinking",
        streams: ["Design", "Arts", "Media", "Architecture"],
        description: "You have a natural ability to think outside the box and create unique solutions."
      },
      research: {
        strength: "Research & Investigation",
        streams: ["Sciences", "Research", "Medicine", "Academia"],
        description: "You enjoy discovering new information and understanding complex topics deeply."
      },
      leadership: {
        strength: "Leadership & Organization",
        streams: ["Management", "Business", "Public Administration", "Entrepreneurship"],
        description: "You have natural leadership qualities and can organize teams effectively."
      },
      communication: {
        strength: "Communication & Language",
        streams: ["Journalism", "Literature", "Public Relations", "Teaching"],
        description: "You excel at expressing ideas clearly and connecting with diverse audiences."
      },
      practical: {
        strength: "Practical Problem-Solving",
        streams: ["Engineering", "Medicine", "Technical Trades", "Applied Sciences"],
        description: "You prefer hands-on approaches and real-world applications."
      }
    };

    const primaryCategory = topCategories[0][0] as keyof typeof recommendations;
    return recommendations[primaryCategory] || recommendations.analytical;
  };

  if (showResults) {
    const topCategories = calculateResults();
    const recommendation = getRecommendations(topCategories);

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-8">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-green-600 mb-4">Test Complete!</h1>
              <p className="text-gray-600">Here are your personalized results</p>
            </div>

            {/* Main Result */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">
                  Your Primary Strength
                </h2>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {recommendation.strength}
                </h3>
                <p className="text-gray-600 text-lg">
                  {recommendation.description}
                </p>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Recommended Streams & Courses:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendation.streams.map((stream, index) => (
                    <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <span className="font-medium text-blue-600">{stream}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Your Top Strengths</h3>
              <div className="space-y-4">
                {topCategories.map(([category, score], index) => (
                  <div key={category} className="flex items-center justify-between">
                    <span className="font-medium text-gray-700 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            index === 0 ? 'bg-blue-600' :
                            index === 1 ? 'bg-green-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${(score / questions.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 w-8">
                        {Math.round((score / questions.length) * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('recommendations')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Career Recommendations
              </button>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResults(false);
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Retake Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Aptitude Test</h1>
            <p className="text-gray-600">
              Discover your strengths and get personalized career recommendations
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm text-gray-600">
                {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                    answers[currentQuestion] === index.toString()
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={index}
                    checked={answers[currentQuestion] === index.toString()}
                    onChange={() => handleAnswerSelect(index.toString())}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    answers[currentQuestion] === index.toString()
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion] === index.toString() && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                currentQuestion === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </button>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!answers[currentQuestion]}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  !answers[currentQuestion]
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Submit Test
                <CheckCircle className="h-4 w-4 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  !answers[currentQuestion]
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeTest;