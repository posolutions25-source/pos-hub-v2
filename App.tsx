
import React, { useState } from 'react';
import { DIVISIONS } from './constants';
import { Page } from './types';
import DivisionCard from './components/DivisionCard';
import BusinessToolsPage from './components/BusinessToolsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('hub');

  const handleNavigate = (id: string) => {
    if (id === 'business-tools') {
      setCurrentPage('business-tools');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToHub = () => {
    setCurrentPage('hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'business-tools') {
    return <BusinessToolsPage onBack={handleBackToHub} />;
  }

  return (
    <div className="min-h-screen pb-12 px-4 flex flex-col items-center">
      <header className="py-12 text-center">
        {/* Placeholder Logo using Font Awesome for POS Umbrella */}
        <div className="mb-4 inline-flex items-center justify-center w-20 h-20 bg-white/5 rounded-full border border-white/10">
          <i className="fa-solid fa-umbrella text-4xl text-white"></i>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Point On Solutions <span className="text-white/60 font-light">Umbrella Hub</span>
        </h1>
      </header>

      <main className="w-full max-w-4xl">
        <div className="grid gap-6">
          {DIVISIONS.map((division) => (
            <DivisionCard 
              key={division.id} 
              division={division} 
              onNavigate={handleNavigate} 
            />
          ))}
        </div>
      </main>

      <footer className="mt-16 py-8 border-t border-white/5 w-full text-center opacity-50 text-sm">
        <p>© 2026 Point On Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
