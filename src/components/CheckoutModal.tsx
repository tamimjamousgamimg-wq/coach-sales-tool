import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Download, ArrowRight, ShieldCheck, FileText, Check, FileSpreadsheet } from 'lucide-react';
import { PRODUCT_DETAILS } from '../data/productData.ts';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenViewer: () => void;
  onOpenSheet: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onOpenViewer,
  onOpenSheet
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 700);
  };

  const handleDownloadPDF = () => {
    const content = `# DM TO DEPOSIT — THE 48-HOUR SCRIPT KIT & SYSTEM
Complete 22-Page Field Manual for Online Coaches
Licensed to: ${name || 'Alex'} (${email || 'alex@gmail.com'})

=======================================================
THE 8-STEP SYSTEM (TRIGGER TO DEPOSIT)
=======================================================

STEP 1: TRIGGER
- Catch inbound organic interest without an aggressive pitch.
- SCRIPT: "Saw your vote on my story about fat-loss plateaus. Curious — are you currently stuck around the 15-minute cardio plateau or is nutrition the stubborn part right now?"

STEP 2: QUALIFIER
- Uncover their real bottleneck and commitment to change.
- SCRIPT: "Got it. How long have you been battling that plateau, and have you tried structured progressive overload before or mainly guessing in the gym?"

STEP 3: VALUE BRIDGE
- Deliver micro-clarity in 2 sentences. Never give 2-hour free coaching.
- SCRIPT: "That makes total sense. Usually when calories are already low but scale weight stalls, your cortisol and NEAT are working against you. You don't need less food — you need a metabolic reset week."

STEP 4: ASK
- Low-friction permission check before sending any link.
- SCRIPT: "I actually have a 15-minute roadmap I use with my private clients to map out the exact calorie refeed and lift split. Would it help if I walked you through it over a quick call?"

STEP 5: BOOKING
- Direct booking link with two specific anchor slots.
- SCRIPT: "Awesome. Here is my direct booking link: [calendar link]. Grab whatever slot fits your schedule, or if Thursday 2pm / Friday 10am works best, let me know and I'll pencil you in."

STEP 6: NO-SHOW SAVE
- 4-Hour pre-call check to ensure 90%+ attendance.
- SCRIPT: "Hey [Name], looking forward to reviewing your training split today at 3pm! Quick check — have you got Zoom ready on your phone/laptop?"

STEP 7: CALL FRAME (60 SECONDS)
- Establish authority and eliminate sales tension in minute one.
- SCRIPT: "Great having you here! The plan for our 20 minutes is super simple: 1) Dive into what's stalling your workouts, 2) Map out the 90-day fix, and 3) If it feels like a slam-dunk fit, I'll explain how we can partner up. Sound good?"

STEP 8: FOLLOW-UP (IF NEEDED)
- Respectful 24h & 72h re-engagement without desperation.
- SCRIPT: "No pressure at all, [Name] — saw you were busy this week. Should I hold that roadmap spot for next Tuesday or let someone on the waitlist grab it?"

=======================================================
DECISION RULES
=======================================================
1. Never answer "How much is it?" in Message 1 or 2. Reframe with the 2-Tier Bracket rule.
2. If prospect stops responding after booking link, wait 24 hours before sending Step 8 follow-up.
3. If prospect is clearly unqualified, signpost free content politely and save your calendar spots.
`;

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'DM-to-Deposit-22-Page-Script-Kit.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white border border-[#ECEAE1] shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-[#8F94A0] hover:text-[#0D1B2A] hover:bg-[#FAF9F5] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#BA8338] mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>Instant Digital Access</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#0D1B2A]">
                DM to Deposit Script Kit
              </h3>
              <p className="text-xs text-[#5E6A7A] mt-1">
                22-page script kit, decision rules, and Day 1 interactive tracking sheet.
              </p>
            </div>

            {/* Inclusions summary */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#ECEAE1] mb-6 space-y-2 text-xs text-[#5E6A7A]">
              <div className="flex items-center justify-between font-semibold text-[#0D1B2A] pb-2 border-b border-[#ECEAE1]">
                <span>Total Amount</span>
                <span className="text-xl font-serif text-[#0D1B2A] font-bold">$14.99</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Check className="w-3.5 h-3.5 text-[#BA8338] shrink-0" />
                <span>Complete 22-Page Script Kit (Instant PDF & Text Download)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#BA8338] shrink-0" />
                <span>Day 1 Interactive Tracking Sheet (Web + CSV Export)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#BA8338] shrink-0" />
                <span>Full $250/mo Coaching DM Conversation Walkthrough</span>
              </div>
            </div>

            {/* Fast Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0D1B2A] uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F5] border border-[#ECEAE1] text-[#0D1B2A] placeholder:text-[#8F94A0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#BA8338]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0D1B2A] uppercase tracking-wider mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF9F5] border border-[#ECEAE1] text-[#0D1B2A] placeholder:text-[#8F94A0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#BA8338]"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-all shadow-md active:scale-[0.99] cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  <span>Preparing Your Kit...</span>
                ) : (
                  <>
                    <span>Complete Purchase — $14.99</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#8F94A0] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BA8338]" />
                <span>Instant PDF & Interactive Sheet Access</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-[#FAF9F5] border border-[#BA8338]/30 flex items-center justify-center mx-auto mb-4 text-[#BA8338]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#BA8338] block mb-1">
              Access Granted
            </span>
            <h3 className="text-2xl font-bold font-serif text-[#0D1B2A] mb-2">
              Welcome to DM to Deposit
            </h3>
            <p className="text-xs text-[#5E6A7A] max-w-sm mx-auto mb-6">
              Receipt and download links confirmed for <strong className="text-[#0D1B2A]">{email || 'alex@gmail.com'}</strong>.
            </p>

            <div className="flex flex-col gap-2.5 max-w-xs mx-auto mb-6">
              <button
                onClick={handleDownloadPDF}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download 22-Page Kit (PDF / Markdown)</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenSheet();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0D1B2A] bg-[#FAF9F5] hover:bg-[#F2F0E8] border border-[#ECEAE1] rounded-lg transition-all cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#BA8338]" />
                <span>Open Day 1 Interactive Sheet</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenViewer();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2 text-xs text-[#5E6A7A] hover:text-[#0D1B2A] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Read Full Manual in Browser</span>
              </button>
            </div>

            <p className="text-[11px] text-[#8F94A0]">
              You have permanent lifetime access to all future revisions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
