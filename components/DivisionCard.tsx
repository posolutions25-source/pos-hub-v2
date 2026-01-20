
import React from 'react';
import { Division } from '../types';

interface DivisionCardProps {
  division: Division;
  onNavigate: (id: string) => void;
}

const DivisionCard: React.FC<DivisionCardProps> = ({ division, onNavigate }) => {
  const isComingSoon = division.status === 'coming-soon';

  const handleClick = (e: React.MouseEvent) => {
    if (isComingSoon) {
      e.preventDefault();
      alert('Coming Soon!');
      return;
    }
    onNavigate(division.id);
  };

  return (
    <section 
      className="bg-[#1a1a1a] rounded-xl p-8 mb-6 mx-auto max-w-2xl border-l-8 transition-transform hover:scale-[1.01] active:scale-[0.99]"
      style={{ borderLeftColor: division.color }}
    >
      <div className="flex items-center gap-4 mb-4">
        <i className={`fa-solid ${division.icon} text-2xl`} style={{ color: division.color }}></i>
        <h2 className="text-2xl font-bold tracking-tight">{division.title}</h2>
      </div>
      
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        {division.description}
      </p>

      <button
        onClick={handleClick}
        className="inline-block px-8 py-3 rounded-lg font-bold text-black transition-all hover:opacity-90"
        style={{ backgroundColor: division.color }}
      >
        {isComingSoon ? 'Coming Soon' : 'View Division'}
      </button>
    </section>
  );
};

export default DivisionCard;
