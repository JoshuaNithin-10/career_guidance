import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m here to help with your career questions. Click on any FAQ below:' }
  ]);

  const faqs = [
    { question: 'What course should I choose for AI?', answer: 'For AI careers, consider B.Tech Computer Science, B.Sc Data Science, or B.Tech AI & ML. These provide strong foundations in programming, mathematics, and machine learning.' },
    { question: 'Which scholarships are available in Tamil Nadu?', answer: 'Popular scholarships in Tamil Nadu include: Dr. A.P.J. Abdul Kalam Scholarship, Tamil Nadu Merit Scholarship, and various government schemes for SC/ST students.' },
    { question: 'What are the best engineering colleges?', answer: 'Top engineering colleges include IITs, NITs, Anna University, VIT, SRM, and various state universities. Consider NIRF rankings and placement records.' },
    { question: 'How to prepare for entrance exams?', answer: 'Start early, create a study schedule, practice previous years\' papers, take mock tests regularly, and focus on conceptual understanding rather than rote learning.' }
  ];

  const handleFaqClick = (faq: typeof faqs[0]) => {
    setMessages(prev => [
      ...prev,
      { type: 'user', text: faq.question },
      { type: 'bot', text: faq.answer }
    ]);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Career Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Buttons */}
          <div className="p-4 border-t border-gray-200 space-y-2 max-h-40 overflow-y-auto">
            <div className="text-xs text-gray-500 mb-2">Frequently Asked Questions:</div>
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => handleFaqClick(faq)}
                className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded transition-colors"
              >
                {faq.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;