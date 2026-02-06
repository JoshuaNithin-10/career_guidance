import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import Groq from "groq-sdk";
import type { Page } from '../App';
const API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";
const groq = new Groq({ 
  apiKey: API_KEY, 
  dangerouslyAllowBrowser: true 
});

interface ChatBotProps {
  onNavigate: (page: Page) => void;
}

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  isError?: boolean;
};

const ChatBot: React.FC<ChatBotProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hi! I'm the S.P.A.R.K AI. I'm connected securely! Ask me anything.", 
      sender: 'bot' 
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    
    if (!API_KEY) {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "⚠️ System Error: API Key missing. Please check your .env file.", 
        sender: 'bot',
        isError: true 
      }]);
      return;
    }

    
    const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const lowerInput = userMessage.text.toLowerCase();

    
    if (lowerInput.includes('take me to') || lowerInput.includes('navigate') || lowerInput.includes('go to')) {
       if (lowerInput.includes('exam')) { onNavigate('exams'); addBotMessage("Navigated to Exam Updates."); setIsLoading(false); return; }
       if (lowerInput.includes('aptitude') || lowerInput.includes('test')) { onNavigate('aptitude-test'); addBotMessage("Navigated to Aptitude Test."); setIsLoading(false); return; }
       if (lowerInput.includes('career') || lowerInput.includes('form')) { onNavigate('career-form'); addBotMessage("Navigated to Career Form."); setIsLoading(false); return; }
    }

   
    try {
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant for a student career website named S.P.A.R.K. Answer concisely." },
          { role: "user", content: userMessage.text }
        ],
        model: "llama-3.3-70b-versatile", 
      });

      const responseText = completion.choices[0]?.message?.content || "No response.";
      addBotMessage(responseText);

    } catch (error: any) {
      console.error("Groq Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: `⚠️ Error: ${error.message}`, 
        sender: 'bot',
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now(), text: text, sender: 'bot' }]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-lime-500 hover:bg-lime-600 text-black p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-zinc-200 overflow-hidden z-50 flex flex-col h-[500px]">
          <div className="bg-zinc-900 p-4 flex items-center gap-3">
            <div className="bg-lime-500 p-2 rounded-full">
              <Bot className="h-5 w-5 text-black" />
            </div>
            <div>
              <h3 className="text-white font-bold">S.P.A.R.K AI</h3>
              <p className="text-lime-400 text-xs">Powered by Groq</p>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-zinc-50 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.sender === 'user' ? 'bg-lime-500 text-black rounded-tr-none' : msg.isError ? 'bg-red-100 text-red-800' : 'bg-white border border-zinc-200 text-zinc-800 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-zinc-400 text-xs ml-4">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-zinc-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 border border-zinc-300 rounded-full focus:outline-none focus:border-lime-500 text-sm"
            />
            <button onClick={handleSend} className="bg-zinc-900 text-white p-2 rounded-full hover:bg-zinc-800">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;