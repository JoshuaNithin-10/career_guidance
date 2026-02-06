import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'career-form' as Page, label: 'Career Form' },
    { id: 'recommendations' as Page, label: 'Recommendations' },
    { id: 'aptitude-test' as Page, label: 'Aptitude Test' },
    { id: 'exams' as Page, label: 'Exams' },
    { id: 'contact' as Page, label: 'Contact' },
  ];

  return (
    <nav className="bg-zinc-900 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

       
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <Sparkles className="h-8 w-8 text-lime-400 group-hover:rotate-12 transition-transform" />

            <div className="leading-tight">
              <div className="text-xl font-bold text-white tracking-wide">
                S.P.A.R.K
              </div>
              <div className="text-xs text-zinc-400 group-hover:text-lime-400 transition-colors">
                Powered by Athenix
              </div>
            </div>
          </div>

        
          <div className="hidden md:flex space-x-8 relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative px-2 py-1 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}

                
                {currentPage === item.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 right-0 -bottom-2 h-[3px] bg-lime-400 rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-200 hover:text-lime-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

      
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-zinc-700"
            >
              <div className="flex flex-col py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="relative px-4 py-2 text-left text-zinc-300 hover:bg-zinc-800 rounded-md"
                  >
                  
                    {currentPage === item.id && (
                      <motion.span
                        layoutId="mobile-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-lime-400 rounded-r"
                      />
                    )}
                    <span className="ml-3 font-semibold">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
