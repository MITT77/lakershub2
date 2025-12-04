import React from 'react';

export const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-lakers-purple text-white shadow-lg z-50 border-b-4 border-lakers-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="font-bold text-2xl tracking-tighter text-lakers-gold">LAKERS</span>
          </div>
          <nav className="flex space-x-4 sm:space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-100 hover:text-lakers-gold px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('jogadores')}
              className="text-gray-100 hover:text-lakers-gold px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors"
            >
              Jogadores
            </button>
            <button
              onClick={() => scrollToSection('estatisticas')}
              className="text-gray-100 hover:text-lakers-gold px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors"
            >
              Estatísticas
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
