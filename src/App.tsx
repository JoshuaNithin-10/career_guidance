// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CareerForm from './pages/CareerForm';
import Recommendations from './pages/Recommendations';
import AptitudeTest from './pages/AptitudeTest';
import ExamUpdates from './pages/ExamUpdates';
// IMPORT THE CHATBOT HERE
import ChatBot from './components/ChatBot';

export type Page = 'home' | 'career-form' | 'recommendations' | 'aptitude-test' | 'exams' | 'contact';

export interface FormData {
  name: string;
  class: string;
  stream: string;
  interests: string;
  state: string;
  district: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    class: '',
    stream: '',
    interests: '',
    state: '',
    district: ''
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'career-form': return <CareerForm formData={formData} setFormData={setFormData} onNavigate={setCurrentPage} />;
      case 'recommendations': return <Recommendations formData={formData} onNavigate={setCurrentPage} />;
      case 'aptitude-test': return <AptitudeTest onNavigate={setCurrentPage} />;
      case 'exams': return <ExamUpdates onNavigate={setCurrentPage} />;
      case 'contact':
        return (
          <div className="min-h-screen py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold text-green-700 mb-4">Contact Us</h1>
              <div className="bg-white p-8 rounded-lg shadow-lg inline-block text-left">
                <p className="mb-2">📧 contact@sparkcareer.com</p>
                <p>📞 +91 9381234532</p>
              </div>
            </div>
          </div>
        );
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>{renderPage()}</main>

      {/* ADD CHATBOT HERE */}
      <ChatBot onNavigate={setCurrentPage} />
      
      <Footer />
    </div>
  );
}

export default App;