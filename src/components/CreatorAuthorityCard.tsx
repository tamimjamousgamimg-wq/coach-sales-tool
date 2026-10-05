import React from 'react';
import { ShieldCheck } from 'lucide-react';
import founderImg from '../assets/images/coach_founder_portrait_1791196141165.jpg';

export const CreatorAuthorityCard: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Creator Authority Box matching uploaded reference image */}
        <div className="rounded-2xl bg-white border border-[#ECEAE1] p-6 sm:p-9 shadow-xs hover:border-[#BA8338]/30 transition-all">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            {/* Creator Avatar with soft warm circular ring */}
            <div className="shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-[#FAF6EE] border-2 border-[#E8D4B4] shadow-xs overflow-hidden">
                <img
                  src={founderImg}
                  alt="Coach & Creator of DM to Deposit"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1">
              {/* Eyebrow */}
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#C07028] uppercase block mb-2.5">
                BUILT FROM REAL EXPERIENCE
              </span>

              {/* Bold Primary Headline */}
              <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#0D1B2A] font-serif leading-snug mb-3 text-balance">
                I created this kit from the exact 8-step sequence I used to sign my first 25 coaching clients.
              </h3>

              {/* Body Text */}
              <p className="text-sm sm:text-[15px] text-[#5E6A7A] leading-relaxed mb-5">
                I spent months writing paragraphs of free workout advice and pricing in Instagram DMs, only to get ghosted. Once I stopped trying to close packages in the chat and switched to this simple 48-hour diagnostic flow, my calendar filled up. It's simple, non-salesy, and actually works.
              </p>

              {/* Bottom Test & Trust Verification */}
              <div className="flex items-center gap-2 text-xs font-medium text-[#5E6A7A] pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tested across 300+ real coach DMs with solo fitness, nutrition, and strength coaches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
