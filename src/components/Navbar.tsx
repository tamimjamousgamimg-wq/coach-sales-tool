import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onBuyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBuyClick }) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#EAE7DF] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-base font-bold tracking-wider text-[#1E2530] uppercase"
        >
          <span className="text-[#C58B38] font-serif text-lg tracking-normal">DM</span>
          <span className="text-xs text-[#8F94A0] tracking-widest">TO</span>
          <span className="tracking-wide">DEPOSIT</span>
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5A6270]">
          <a href="#system" className="hover:text-[#1E2530] transition-colors">
            The 8-Step System
          </a>
          <a href="#whats-inside" className="hover:text-[#1E2530] transition-colors">
            What's Inside
          </a>
          <a href="#faq" className="hover:text-[#1E2530] transition-colors">
            FAQ
          </a>
          <a href="#pricing" className="hover:text-[#1E2530] transition-colors">
            Pricing
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBuyClick}
            className="group flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#C58B38] hover:bg-[#A97227] rounded-md transition-all shadow-sm active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <span>Get the Kit — $14.99</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
