import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#FAF9F5] border-t border-[#EAE7DF] text-xs text-[#8F94A0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Wordmark */}
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-[#1E2530] text-sm tracking-wide">
            DM TO DEPOSIT
          </span>
          <span>·</span>
          <span>Script Kit for Online Coaches</span>
        </div>

        {/* Navigation mirror */}
        <div className="flex items-center gap-6 text-[#5A6270]">
          <a href="#system" className="hover:text-[#1E2530] transition-colors">
            System
          </a>
          <a href="#whats-inside" className="hover:text-[#1E2530] transition-colors">
            What's Inside
          </a>
          <a href="#faq" className="hover:text-[#1E2530] transition-colors">
            FAQ
          </a>
          <a href="#pricing" className="hover:text-[#1E2530] transition-colors">
            $14.99 Offer
          </a>
        </div>

        {/* Quiet copyright */}
        <p className="text-[11px] text-[#8F94A0]">
          © {new Date().getFullYear()} DM to Deposit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
