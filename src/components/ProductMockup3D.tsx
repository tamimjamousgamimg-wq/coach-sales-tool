import React from 'react';
import { Instagram } from 'lucide-react';
import mockupImg from '../assets/images/dm_to_deposit_mockup_1791145322075.jpg';

interface ProductMockup3DProps {
  onExplore: () => void;
}

export const ProductMockup3D: React.FC<ProductMockup3DProps> = ({ onExplore }) => {
  return (
    <div 
      onClick={onExplore}
      className="relative w-full max-w-[520px] mx-auto py-6 cursor-pointer select-none group"
      title="Click to view full 8-step system breakdown"
    >
      {/* Background Soft Shadow */}
      <div className="relative h-[340px] sm:h-[400px] w-full flex items-center justify-center">

        {/* 3. Third Layer (Back Sheet): TRACKING SHEET */}
        <div 
          className="absolute right-2 sm:right-6 top-6 sm:top-8 w-[170px] sm:w-[210px] h-[260px] sm:h-[310px] bg-white rounded-lg shadow-lg border border-[#E5E2D9] p-3 sm:p-4 rotate-[10deg] transition-all duration-300 group-hover:rotate-[12deg] group-hover:translate-x-1 origin-bottom-left z-0"
        >
          <div className="border-b border-[#ECEAE1] pb-1.5 mb-2 text-center">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#0D1B2A] uppercase">
              Tracking Sheet
            </span>
          </div>
          {/* Tracking sheet grid */}
          <div className="border border-[#ECEAE1] rounded text-[8px] sm:text-[9px] text-[#5E6A7A] overflow-hidden">
            <div className="grid grid-cols-3 bg-[#FAF9F5] border-b border-[#ECEAE1] font-semibold text-[#0D1B2A] p-1 text-center">
              <span>LEAD</span>
              <span>Date</span>
              <span>Notes</span>
            </div>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="grid grid-cols-3 border-b border-[#F2F0E8] p-1 h-5 sm:h-6 text-[8px] items-center">
                <span className="truncate text-neutral-400 pl-0.5">@lead_{i}</span>
                <span className="text-center text-neutral-300">10/0{i}</span>
                <span className="text-neutral-300 truncate">Stage {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Second Layer (Middle Sheet): THE 8-STEP SYSTEM */}
        <div 
          className="absolute right-12 sm:right-22 top-3 sm:top-4 w-[180px] sm:w-[220px] h-[270px] sm:h-[325px] bg-white rounded-lg shadow-xl border border-[#E5E2D9] p-3 sm:p-4 rotate-[4deg] transition-all duration-300 group-hover:rotate-[5deg] origin-bottom-left z-10"
        >
          <div className="border-b border-[#ECEAE1] pb-1.5 mb-2 text-center">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#0D1B2A] uppercase">
              The 8-Step System
            </span>
          </div>

          {/* 8 Step List with Amber Circles */}
          <div className="space-y-1 sm:space-y-1.5 text-[8.5px] sm:text-[10px] text-[#0D1B2A]">
            {[
              { num: 1, title: 'Trigger' },
              { num: 2, title: 'Qualifier' },
              { num: 3, title: 'Value Bridge' },
              { num: 4, title: 'Ask' },
              { num: 5, title: 'Booking' },
              { num: 6, title: 'No-Show Save' },
              { num: 7, title: 'Call Frame' },
              { num: 8, title: 'Follow-Up (if needed)' }
            ].map((step) => (
              <div key={step.num} className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#BA8338] text-white flex items-center justify-center text-[7px] sm:text-[8px] font-bold shrink-0">
                  {step.num}
                </span>
                <span className="font-medium truncate">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 1. First Layer (Front Booklet): DM TO DEPOSIT SCRIPT KIT */}
        <div 
          className="absolute left-4 sm:left-10 top-0 w-[190px] sm:w-[235px] h-[285px] sm:h-[345px] bg-[#161D26] text-white rounded-lg shadow-2xl p-4 sm:p-5 flex flex-col justify-between -rotate-[3deg] transition-all duration-300 group-hover:-rotate-[1deg] group-hover:scale-[1.02] border-l-4 border-[#0F141A] z-20"
        >
          {/* Spine Highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/40 to-transparent rounded-l-lg pointer-events-none" />

          {/* Top Title */}
          <div className="text-center pt-2">
            <h4 className="font-serif text-base sm:text-lg tracking-wider font-bold text-white uppercase leading-tight">
              DM TO<br />DEPOSIT
            </h4>
            <span className="text-[8px] sm:text-[9.5px] tracking-[0.25em] text-[#C99753] uppercase font-semibold block mt-1.5">
              Script Kit
            </span>
          </div>

          {/* Center Instagram Icon */}
          <div className="flex justify-center my-auto py-2">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl border border-[#C99753]/60 flex items-center justify-center text-[#C99753]">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="text-center pb-1">
            <p className="text-[7.5px] sm:text-[9px] tracking-wider text-[#A2ABB8] uppercase font-medium">
              A Step-by-Step System for<br />Online Fitness Coaches
            </p>
            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-center">
              <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-[#C99753] uppercase">
                22 Pages Total
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Hint on hover */}
      <div className="text-center mt-1">
        <span className="text-[11px] text-[#8F94A0] group-hover:text-[#BA8338] transition-colors font-medium">
          Click mockup to inspect the 8-step framework →
        </span>
      </div>
    </div>
  );
};
