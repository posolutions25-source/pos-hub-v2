
import React from 'react';

interface BusinessToolsPageProps {
  onBack: () => void;
}

const BusinessToolsPage: React.FC<BusinessToolsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Lunacal Logo Section */}
        <div className="mb-10">
          <a href="https://shorturl.at/7qZSG" target="_blank" rel="noopener noreferrer" className="block transform transition-transform hover:scale-105 active:scale-95">
            <div className="grid grid-cols-2 grid-rows-2 gap-[6px] justify-center mx-auto w-[86px] h-[86px]">
              <div className="bg-[#ff4fa8] rounded-[6px]"></div>
              <div className="bg-[#ff4fa8] rounded-[6px] flex items-center justify-center text-2xl text-white font-bold">✔</div>
              <div className="bg-[#ff4fa8] rounded-[6px]"></div>
              <div className="bg-[#ff4fa8] rounded-[6px]"></div>
            </div>
            <h1 className="text-3xl font-bold mt-4 tracking-tight">Lunacal.ai</h1>
          </a>
          <span className="inline-block mt-3 px-3 py-1 bg-white/10 text-[#8fff00] text-xs font-bold uppercase tracking-widest rounded-full border border-[#8fff00]/30">
            NEW TOOL ADDED
          </span>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-xl text-gray-200 leading-relaxed">
            Lunacal.ai is a new scheduling platform now available through POS Business Tools.
          </p>
          <p className="text-gray-400 italic">
            ✨ More business-helping tools are on the way — stay tuned.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 pt-4">
          <a 
            href="https://shorturl.at/7qZSG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#8fff00] text-black font-bold py-4 px-8 rounded-xl text-lg transition-all hover:bg-[#a0ff33] active:scale-95 shadow-lg shadow-[#8fff00]/20"
          >
            Visit Lunacal.ai
          </a>
          
          <button 
            onClick={onBack}
            className="w-full bg-white/5 text-gray-300 font-semibold py-3 px-8 rounded-xl transition-all hover:bg-white/10 hover:text-white"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back to POS Hub
          </button>
        </div>

      </div>
      
      <footer className="mt-20 opacity-40 text-sm">
        © 2026 Point On Solutions. POS Business Tools Division.
      </footer>
    </div>
  );
};

export default BusinessToolsPage;
