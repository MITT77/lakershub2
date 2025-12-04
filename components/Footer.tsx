import React from 'react';
import { Trophy, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-lakers-black text-white z-50 py-3 border-t-2 border-lakers-purple">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-lakers-gold" />
          <span className="text-sm font-semibold hidden sm:inline">Los Angeles Lakers Fan Page</span>
        </div>
        
        <div className="text-xs text-gray-400">
          © 2024 Design Simples <br/> Devs: Samuel Mitt & Lucas Gabriel
        
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-lakers-gold transition-colors"><Facebook size={18} /></a>
          <a href="#" className="hover:text-lakers-gold transition-colors"><Twitter size={18} /></a>
          <a href="#" className="hover:text-lakers-gold transition-colors"><Instagram size={18} /></a>
        </div>
      </div>
    </footer>
  );
};
