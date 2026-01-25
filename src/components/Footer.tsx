import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12">
      <div className="container mx-auto px-4">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Sparkles className="h-6 w-6 text-lime-400" />
            <div className="text-lg font-bold text-white tracking-wide">
              S.P.A.R.K
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-zinc-400 text-sm">
              © 2025 S.P.A.R.K. Smart Path And Right Key. Empowering students with smart choices.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-zinc-700 text-center">
          <p className="text-zinc-500 text-sm">
            Helping Class 10, 11 & 12 students make smarter career decisions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
