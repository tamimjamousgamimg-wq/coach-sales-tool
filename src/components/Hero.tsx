import React from 'react';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';
import { ProductMockup3D } from './ProductMockup3D.tsx';

interface HeroProps {
  whopUrl: string;
  onPreviewClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ whopUrl, onPreviewClick }) => {
  return (
    <section className="pt-12 pb-16 md:pt-18 md:pb-22 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Primary CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow with small amber line above (matching image) */}
            <div className="flex flex-col items-start mb-5">
              <span className="w-7 h-[2px] bg-[#BA8338] mb-2 rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#0D1B2A] uppercase">
                DM to Deposit
              </span>
            </div>

            {/* Confident Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-[#0D1B2A] font-serif leading-[1.12] mb-6 text-balance">
              Turn Instagram DMs into Booked Sales Calls.
            </h1>

            {/* One-Line Offer with Hook */}
            <p className="text-base sm:text-lg text-[#5E6A7A] leading-relaxed max-w-lg mb-8 font-normal">
              <strong className="text-[#0D1B2A] font-semibold">Stop closing packages in the DMs.</strong> A 48-hour script kit for solo online coaches who get DMs but don't have a process yet — with scripts, decision rules, and a tracking system.
            </p>

            {/* CTA Button Block (Direct redirect to Whop in new tab) */}
            <div className="flex flex-col items-start gap-3.5">
              <a
                href={whopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-all duration-150 shadow-sm active:scale-[0.99] cursor-pointer"
              >
                <span>Get the 48-Hour Script Kit ($14.99)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Microcopy with dot separator */}
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-[#8F94A0] uppercase">
                <span>Instant Download</span>
                <span className="text-[#BA8338]">·</span>
                <span>48-Hour Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Product Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <ProductMockup3D onExplore={onPreviewClick} />
          </div>
        </div>

        {/* Two Feature Callouts (exactly matching the user image: clean floating with divider) */}
        <div className="mt-16 sm:mt-22 pt-10 border-t border-[#ECEAE1] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Callout */}
          <div className="flex items-start gap-4 md:pr-8 md:border-r border-[#ECEAE1]">
            <div className="text-[#BA8338] shrink-0 mt-0.5">
              {/* Document folded outline icon */}
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="8" y1="13" x2="16" y2="13"></line>
                <line x1="8" y1="17" x2="14" y2="17"></line>
              </svg>
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-bold tracking-wider text-[#0D1B2A] uppercase mb-1.5">
                Proven System. Real Results.
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6A7A] leading-relaxed">
                Includes a full worked example with a DM thread from start to booked call — including a $250/month coaching example.
              </p>
            </div>
          </div>

          {/* Right Callout */}
          <div className="flex items-start gap-4">
            <div className="text-[#BA8338] shrink-0 mt-0.5">
              {/* Shield checkmark outline icon */}
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-bold tracking-wider text-[#0D1B2A] uppercase mb-1.5">
                Built for Coaches
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6A7A] leading-relaxed">
                An 8-step system covering triggers, qualification, pricing, booking, no-shows, call structure, follow-up, timing, decision-making, tracking, and ethical use guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
