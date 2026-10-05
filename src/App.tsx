import React, { useState } from 'react';
import { Hero } from './components/Hero.tsx';
import { CreatorAuthorityCard } from './components/CreatorAuthorityCard.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { WhatsInside } from './components/WhatsInside.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { BuySection } from './components/BuySection.tsx';
import { FreeSampleSection } from './components/FreeSampleSection.tsx';
import { SystemPreviewModal } from './components/SystemPreviewModal.tsx';
import { CheatSheetModal } from './components/CheatSheetModal.tsx';
import { DigitalKitViewerModal } from './components/DigitalKitViewerModal.tsx';
import { InteractiveTrackerSheet } from './components/InteractiveTrackerSheet.tsx';
import { DEFAULT_WHOP_URL } from './data/productData.ts';
import { FileSpreadsheet, X, Download, Link2, Check, ExternalLink } from 'lucide-react';

export default function App() {
  const [whopUrl, setWhopUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dm_to_deposit_whop_url');
      if (saved && saved !== 'https://whop.com' && saved.includes('whop.com')) {
        return saved;
      }
    }
    return DEFAULT_WHOP_URL;
  });

  const [isWhopModalOpen, setIsWhopModalOpen] = useState(false);
  const [inputWhopUrl, setInputWhopUrl] = useState(whopUrl);
  const [isSavedSuccess, setIsSavedSuccess] = useState(false);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewInitialStep, setPreviewInitialStep] = useState(0);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [cheatSheetEmail, setCheatSheetEmail] = useState('');
  const [isDigitalKitOpen, setIsDigitalKitOpen] = useState(false);
  const [isSheetModalOpen, setIsSheetModalOpen] = useState(false);

  const handleOpenPreview = (stepIdx: number = 0) => {
    setPreviewInitialStep(stepIdx);
    setIsPreviewOpen(true);
  };

  const handleFreeSampleSuccess = (email: string) => {
    setCheatSheetEmail(email);
    setIsCheatSheetOpen(true);
  };

  const handleSaveWhopUrl = (e: React.FormEvent) => {
    e.preventDefault();
    let formatted = inputWhopUrl.trim();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }
    setWhopUrl(formatted);
    localStorage.setItem('dm_to_deposit_whop_url', formatted);
    setIsSavedSuccess(true);
    setTimeout(() => {
      setIsSavedSuccess(false);
      setIsWhopModalOpen(false);
    }, 1200);
  };

  const handleInstantPDFDownload = () => {
    const text = `# DM TO DEPOSIT — THE 48-HOUR SCRIPT KIT
An 8-Step System for Online Fitness Coaches (22 Pages)
------------------------------------------------------
STEP 1: TRIGGER
"Saw your vote on my story about fat-loss plateaus. Curious — are you currently stuck around the 15-minute cardio plateau or is nutrition the stubborn part right now?"

STEP 2: QUALIFIER
"Got it. How long have you been battling that plateau, and have you tried structured progressive overload before or mainly guessing in the gym?"

STEP 3: VALUE BRIDGE
"That makes total sense. Usually when calories are already low but scale weight stalls, your cortisol and NEAT are working against you. You don't need less food — you need a metabolic reset week."

STEP 4: ASK
"I actually have a 15-minute roadmap I use with my private clients to map out the exact calorie refeed and lift split. Would it help if I walked you through it over a quick call?"

STEP 5: BOOKING
"Awesome. Here is my direct booking link: [calendar link]. Grab whatever slot fits your schedule, or if Thursday 2pm / Friday 10am EST works best, let me know and I'll pencil you in."

STEP 6: NO-SHOW SAVE
"Hey [Name], looking forward to reviewing your training split today at 3pm! Quick check — have you got Zoom ready on your phone/laptop?"

STEP 7: CALL FRAME
"Great having you here! The plan for our 20 minutes is super simple: 1) Dive into what's stalling your workouts, 2) Map out the 90-day fix, and 3) If it feels like a slam-dunk fit, I'll explain how we can partner up. Sound good?"

STEP 8: FOLLOW-UP (IF NEEDED)
"No pressure at all, [Name] — saw you were busy this week. Should I hold that roadmap spot for next Tuesday or let someone on the waitlist grab it?"
`;
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'DM-to-Deposit-48Hour-Script-Kit.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#0D1B2A] flex flex-col selection:bg-[#BA8338]/20 selection:text-[#0D1B2A]">
      {/* Main Content Layout (Identical to reference mockup) */}
      <main className="flex-1">
        {/* 1. Headline + One-Line Offer + 3D Product Mockup + 2 Callouts */}
        <Hero 
          whopUrl={whopUrl}
          onPreviewClick={() => handleOpenPreview(0)} 
        />

        {/* Creator Authority Callout (Built From Real Experience) */}
        <CreatorAuthorityCard />

        {/* 2. Proof / Coach Reviews Section */}
        <ReviewsSection />

        {/* 3. What's Inside (4 Centered Feature Cards) */}
        <WhatsInside onOpenSheet={() => setIsSheetModalOpen(true)} />

        {/* 3. Frequently Asked Questions (All answers visible by default with toggle icons) */}
        <FaqSection />

        {/* 4. Buy Button ($14.99, One Price, One CTA directly redirecting to Whop) */}
        <BuySection whopUrl={whopUrl} />

        {/* 5. Free Sample Opt-In at Bottom */}
        <FreeSampleSection onSuccess={handleFreeSampleSuccess} />
      </main>

      {/* Discrete Footer with Whop Link Setting helper */}
      <footer className="py-8 bg-[#FAF9F5] border-t border-[#ECEAE1] text-xs text-[#8F94A0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span>DM to Deposit © 2026. All rights reserved.</span>
          
          <button
            onClick={() => {
              setInputWhopUrl(whopUrl);
              setIsWhopModalOpen(true);
            }}
            className="inline-flex items-center gap-1.5 text-[#5E6A7A] hover:text-[#0D1B2A] transition-colors cursor-pointer text-[11px]"
          >
            <Link2 className="w-3.5 h-3.5 text-[#BA8338]" />
            <span>Whop Redirect: <strong className="font-mono text-[#0D1B2A]">{whopUrl}</strong></span>
          </button>
        </div>
      </footer>

      {/* Whop Link Configuration Modal */}
      {isWhopModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div 
            className="relative w-full max-w-md rounded-2xl bg-white border border-[#ECEAE1] shadow-2xl p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsWhopModalOpen(false)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-[#8F94A0] hover:text-[#0D1B2A] hover:bg-[#FAF9F5] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#BA8338]">
              <Link2 className="w-4 h-4" />
              <span>Whop Checkout URL</span>
            </div>

            <h3 className="text-xl font-bold font-serif text-[#0D1B2A] mb-1">
              Connect Your Whop Page
            </h3>
            <p className="text-xs text-[#5E6A7A] mb-4">
              Paste your exact Whop product link or checkout URL below. All "Get the Kit" and "Get Instant Access" buttons will redirect straight here.
            </p>

            <form onSubmit={handleSaveWhopUrl} className="space-y-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="https://whop.com/checkout/plan_xxx or https://whop.com/your-store"
                  value={inputWhopUrl}
                  onChange={(e) => setInputWhopUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#FAF9F5] border border-[#ECEAE1] text-[#0D1B2A] font-mono focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#BA8338]"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-colors cursor-pointer"
                >
                  {isSavedSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Link Updated!</span>
                    </>
                  ) : (
                    <span>Save Whop URL</span>
                  )}
                </button>
                <a
                  href={inputWhopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 text-xs text-[#5E6A7A] hover:text-[#0D1B2A] bg-[#FAF9F5] rounded-lg border border-[#ECEAE1] cursor-pointer inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Test Link</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Interactive Sheet Modal (Instant Day 1 Sheet) */}
      {isSheetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white border border-[#ECEAE1] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#ECEAE1] flex items-center justify-between bg-[#FAF9F5]">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-[#BA8338]" />
                <span className="font-serif font-bold text-base text-[#0D1B2A]">
                  Day 1 Interactive Tracking Sheet
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleInstantPDFDownload}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Script Kit</span>
                </button>
                <button
                  onClick={() => setIsSheetModalOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#8F94A0] hover:text-[#0D1B2A] hover:bg-[#ECEAE1]/50 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto">
              <InteractiveTrackerSheet />
            </div>
          </div>
        </div>
      )}

      {/* 8-Step System Preview Modal (Direct Whop link on CTA) */}
      <SystemPreviewModal
        isOpen={isPreviewOpen}
        initialStepIndex={previewInitialStep}
        onClose={() => setIsPreviewOpen(false)}
        whopUrl={whopUrl}
      />

      {/* Free Sample Cheat Sheet Modal (Direct Whop link on CTA) */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        email={cheatSheetEmail}
        onClose={() => setIsCheatSheetOpen(false)}
        whopUrl={whopUrl}
      />

      {/* Full Digital Kit Reader Modal */}
      <DigitalKitViewerModal
        isOpen={isDigitalKitOpen}
        onClose={() => setIsDigitalKitOpen(false)}
      />
    </div>
  );
}
