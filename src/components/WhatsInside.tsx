import React from 'react';

interface WhatsInsideProps {
  onOpenSheet?: () => void;
}

export const WhatsInside: React.FC<WhatsInsideProps> = ({ onOpenSheet }) => {
  return (
    <section id="whats-inside" className="py-20 md:py-24 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-serif text-[#0D1B2A] mb-3">
            What's Inside
          </h2>
          <div className="w-10 h-[2.5px] bg-[#BA8338] mx-auto rounded-full" />
        </div>

        {/* 4 Cards (exactly matching the user image: centered icon, title, text) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Ready-to-Use Scripts */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#ECEAE1] shadow-xs hover:border-[#BA8338]/30 transition-all duration-200">
            {/* Icon: Document with lines */}
            <div className="text-[#BA8338] mb-5">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#0D1B2A] font-serif mb-2">
              Ready-to-Use Scripts
            </h3>
            <p className="text-xs text-[#5E6A7A] leading-relaxed">
              Plug-and-play DMs for each step of the 8-part system.
            </p>
          </div>

          {/* Card 2: Decision Rules */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#ECEAE1] shadow-xs hover:border-[#BA8338]/30 transition-all duration-200">
            {/* Icon: Crosshair / Target */}
            <div className="text-[#BA8338] mb-5">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="22" y1="12" x2="18" y2="12"></line>
                <line x1="6" y1="12" x2="2" y2="12"></line>
                <line x1="12" y1="6" x2="12" y2="2"></line>
                <line x1="12" y1="22" x2="12" y2="18"></line>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#0D1B2A] font-serif mb-2">
              Decision Rules
            </h3>
            <p className="text-xs text-[#5E6A7A] leading-relaxed">
              Know what to say, when to say it, and when to move on.
            </p>
          </div>

          {/* Card 3: Tracking Sheet */}
          <div 
            onClick={onOpenSheet}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#ECEAE1] shadow-xs hover:border-[#BA8338]/30 transition-all duration-200 cursor-pointer group"
          >
            {/* Icon: Square checkbox with checkmark */}
            <div className="text-[#BA8338] mb-5 group-hover:scale-105 transition-transform">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" ry="3"></rect>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#0D1B2A] font-serif mb-2 group-hover:text-[#BA8338] transition-colors">
              Tracking Sheet
            </h3>
            <p className="text-xs text-[#5E6A7A] leading-relaxed">
              Keep your conversations organized and measure what's working.
            </p>
          </div>

          {/* Card 4: 22 Pages Total */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#ECEAE1] shadow-xs hover:border-[#BA8338]/30 transition-all duration-200">
            {/* Icon: Lightning bolt */}
            <div className="text-[#BA8338] mb-5">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#0D1B2A] font-serif mb-2">
              22 Pages Total
            </h3>
            <p className="text-xs text-[#5E6A7A] leading-relaxed">
              Clear, concise, and built for real-world coaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
