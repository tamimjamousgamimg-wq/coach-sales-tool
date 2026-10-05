import React from 'react';
import { X, Download, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { EIGHT_STEPS } from '../data/productData.ts';

interface CheatSheetModalProps {
  isOpen: boolean;
  email: string;
  onClose: () => void;
  whopUrl: string;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({
  isOpen,
  email,
  onClose,
  whopUrl
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const text = `DM TO DEPOSIT: THE 1-PAGE 8-STEP DM-TO-CALL CHEAT SHEET
Sent to: ${email}
-----------------------------------------------------------
1. TRIGGER: Catch inbound curiosity. Never start with a pitch.
   Example: "Saw your vote on my story about fat-loss plateaus. Curious — are you stuck on cardio or nutrition right now?"

2. QUALIFIER: Filter for real intent.
   Example: "How long have you been battling that, and have you tried structured progressive overload before?"

3. VALUE BRIDGE: Deliver micro-clarity in 2 sentences.
   Example: "When calories stall despite clean eating, it's usually metabolic adaptation. You don't need less food — you need a refeed week."

4. ASK: Low-friction permission check.
   Example: "I have a 15-min roadmap I use with my private clients. Would it help if I walked you through it over a quick call?"

5. BOOKING: Time-anchored calendar link.
   Example: "Awesome. Grab a slot here: [Link] or let me know if Thursday 2pm / Friday 10am works best!"

6. NO-SHOW SAVE: 4-hour casual check-in.
   Example: "Hey [Name], looking forward to reviewing your training today at 3pm! Have you got Zoom ready on your phone/laptop?"

7. CALL FRAME: The 60-second opening agenda.
   Example: "Plan for today: 1) What's stalling you, 2) Map the 90-day fix, 3) If it's a slam-dunk fit, explore working together. Sound good?"

8. FOLLOW-UP: Re-engagement without desperation.
   Example: "No pressure at all, [Name] — should I hold that roadmap spot for next Tuesday or let someone on the waitlist grab it?"
`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'DM-to-Deposit-1-Page-Cheat-Sheet.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-white border border-[#EAE7DF] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#EAE7DF] flex items-center justify-between bg-[#FAF9F5]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FAF9F5] border border-[#C58B38]/40 flex items-center justify-center text-[#C58B38]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-[#1E2530]">
                Your Free 1-Page Cheat Sheet
              </h3>
              <p className="text-xs text-[#5A6270]">
                Covering the complete 8-step DM-to-call process
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#8F94A0] hover:text-[#1E2530] hover:bg-[#EAE7DF]/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-between text-xs text-[#5A6270]">
            <span>Cheat sheet registered for: <strong className="text-[#1E2530]">{email}</strong></span>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1E2530] hover:bg-black text-white font-medium rounded-md transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save Text/PDF</span>
            </button>
          </div>

          {/* Quick List */}
          <div className="space-y-3 pt-2">
            {EIGHT_STEPS.map((s) => (
              <div key={s.number} className="p-3 rounded-xl border border-[#F2F0E8] bg-white hover:border-[#C58B38]/30 transition-colors">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#C58B38] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {s.number}
                  </span>
                  <span className="text-sm font-bold text-[#1E2530] font-serif">{s.title}:</span>
                  <span className="text-xs text-[#5A6270]">{s.tagline}</span>
                </div>
                <p className="text-xs text-[#1E2530] pl-7 italic font-sans bg-[#FAF9F5] p-2 rounded border border-[#EAE7DF]/60">
                  {s.exampleScript}
                </p>
              </div>
            ))}
          </div>

          {/* Upgrade Banner */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-[#FAF9F5] to-[#F5EEDB] border border-[#C58B38]/30 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C58B38] block mb-0.5">
                Ready for the complete kit?
              </span>
              <p className="text-xs text-[#5A6270]">
                Get all 22 pages, decision rules, and tracking spreadsheet for just $14.99.
              </p>
            </div>
            <a
              href={whopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span>Get 22-Page Kit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
