import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Sparkles className="h-6 w-6 text-blue-400" />
            <div className="text-lg font-bold">S.P.A.R.K</div>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm">
              © 2025 S.P.A.R.K. Smart Path And Right Key. Empowering Students with Smart Choices.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Helping Class 10, 11 & 12 students make smarter career choices
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;