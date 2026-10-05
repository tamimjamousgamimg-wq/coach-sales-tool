import React, { useState } from 'react';
import { X, BookOpen, Check, Copy, Download, ExternalLink, MessageCircle, FileSpreadsheet } from 'lucide-react';
import { EIGHT_STEPS } from '../data/productData.ts';

interface DigitalKitViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalKitViewerModal: React.FC<DigitalKitViewerModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'scripts' | 'decision_rules' | 'tracking_sheet' | 'call_frame' | 'case_study'>('scripts');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyScript = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl bg-white border border-[#EAE7DF] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-[#EAE7DF] flex items-center justify-between bg-[#FAF9F5]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1E2530] text-[#C58B38] flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif text-[#1E2530]">
                DM to Deposit: The 22-Page Script Kit
              </h3>
              <p className="text-[11px] text-[#5A6270]">
                Full digital workbook edition for online coaches
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#8F94A0] hover:text-[#1E2530] hover:bg-[#EAE7DF]/60 transition-colors cursor-pointer"
            aria-label="Close kit viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-4 py-2 bg-[#F6F4EE] border-b border-[#EAE7DF] overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('scripts')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'scripts'
                ? 'bg-white text-[#1E2530] shadow-xs font-semibold'
                : 'text-[#5A6270] hover:text-[#1E2530]'
            }`}
          >
            1. The 8-Step Scripts
          </button>
          <button
            onClick={() => setActiveTab('decision_rules')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'decision_rules'
                ? 'bg-white text-[#1E2530] shadow-xs font-semibold'
                : 'text-[#5A6270] hover:text-[#1E2530]'
            }`}
          >
            2. Decision Rules & Logic
          </button>
          <button
            onClick={() => setActiveTab('tracking_sheet')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'tracking_sheet'
                ? 'bg-white text-[#1E2530] shadow-xs font-semibold'
                : 'text-[#5A6270] hover:text-[#1E2530]'
            }`}
          >
            3. Tracking Sheet Template
          </button>
          <button
            onClick={() => setActiveTab('call_frame')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'call_frame'
                ? 'bg-white text-[#1E2530] shadow-xs font-semibold'
                : 'text-[#5A6270] hover:text-[#1E2530]'
            }`}
          >
            4. Step 7: Call Frame (60s)
          </button>
          <button
            onClick={() => setActiveTab('case_study')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'case_study'
                ? 'bg-white text-[#1E2530] shadow-xs font-semibold'
                : 'text-[#5A6270] hover:text-[#1E2530]'
            }`}
          >
            5. $250/mo Worked Example
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#FCFCFA]">
          {activeTab === 'scripts' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="mb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C58B38] block mb-1">
                  Section 1 · Field Scripts
                </span>
                <h4 className="text-2xl font-bold font-serif text-[#1E2530]">
                  The 8-Step Conversational Sequence
                </h4>
                <p className="text-xs text-[#5A6270] mt-1">
                  Copy and adapt these exact lines when chatting with prospects on Instagram.
                </p>
              </div>

              {EIGHT_STEPS.map((step, idx) => (
                <div
                  key={step.number}
                  className="p-5 rounded-xl bg-white border border-[#EAE7DF] shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#C58B38] text-white text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                      <h5 className="text-base font-bold text-[#1E2530] font-serif">
                        {step.title}
                      </h5>
                      <span className="text-xs text-[#8F94A0] hidden sm:inline">
                        — {step.tagline}
                      </span>
                    </div>

                    <button
                      onClick={() => copyScript(step.exampleScript, idx)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-[#5A6270] hover:text-[#1E2530] bg-[#FAF9F5] hover:bg-[#F2F0E8] rounded border border-[#EAE7DF] transition-colors cursor-pointer"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-[#5A6270] mb-3 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF]/70 text-xs text-[#1E2530] font-mono leading-relaxed">
                    {step.exampleScript}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'decision_rules' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="mb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C58B38] block mb-1">
                  Section 2 · Conversational Logic
                </span>
                <h4 className="text-2xl font-bold font-serif text-[#1E2530]">
                  The 3 Core Decision Rules
                </h4>
                <p className="text-xs text-[#5A6270] mt-1">
                  Know exactly when to progress, pause, or exit without burning social capital.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#EAE7DF] shadow-xs space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF9F5] border border-[#EAE7DF] text-xs font-bold text-[#C58B38]">
                  Rule 1: The Upfront Price Deflection
                </span>
                <h5 className="text-base font-bold text-[#1E2530]">
                  "What if they ask 'How much is it?' in the first 2 messages?"
                </h5>
                <p className="text-xs text-[#5A6270] leading-relaxed">
                  Never blurt out the package price without context. It anchors them on cost rather than problem resolution.
                </p>
                <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] text-xs text-[#1E2530]">
                  <strong className="block text-[#C58B38] mb-1">The Response:</strong>
                  "Packages range between $150 and $400/month depending on whether you need custom 1-on-1 lifting programming, daily nutrition checks, or just workout audits. So I don't quote you the wrong tier, what's your current #1 goal right now?"
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#EAE7DF] shadow-xs space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF9F5] border border-[#EAE7DF] text-xs font-bold text-[#C58B38]">
                  Rule 2: The 48-Hour Re-Activation Window
                </span>
                <h5 className="text-base font-bold text-[#1E2530]">
                  "What if they stop replying right after I drop the calendar link?"
                </h5>
                <p className="text-xs text-[#5A6270] leading-relaxed">
                  Do not double-message within 6 hours. People are at work, at dinner, or with their kids.
                </p>
                <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] text-xs text-[#1E2530]">
                  <strong className="block text-[#C58B38] mb-1">The 24h Bump Script:</strong>
                  "Hey [Name], no stress if you're swamped today. Just pinging so this doesn't get buried. Still want to map out that 15-minute fat-loss plan this week?"
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#EAE7DF] shadow-xs space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF9F5] border border-[#EAE7DF] text-xs font-bold text-[#C58B38]">
                  Rule 3: The Unqualified Graceful Exit
                </span>
                <h5 className="text-base font-bold text-[#1E2530]">
                  "What if they admit they have zero budget or are looking for free handouts?"
                </h5>
                <p className="text-xs text-[#5A6270] leading-relaxed">
                  Do not waste your limited coaching slots on low-intent calls. Signpost free content gracefully.
                </p>
                <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF] text-xs text-[#1E2530]">
                  <strong className="block text-[#C58B38] mb-1">The Exit Script:</strong>
                  "Got it, [Name]. Private 1-on-1 coaching might be a bit premature right now, but check out my pinned reel on calculating maintenance calories — that will get your momentum rolling today!"
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tracking_sheet' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="mb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C58B38] block mb-1">
                  Section 3 · Pipeline Management
                </span>
                <h4 className="text-2xl font-bold font-serif text-[#1E2530]">
                  The Instagram DM Tracking Sheet
                </h4>
                <p className="text-xs text-[#5A6270] mt-1">
                  Never lose a lead in the bottomless Instagram message inbox.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#EAE7DF] bg-white shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF9F5] text-[#1E2530] font-semibold border-b border-[#EAE7DF]">
                    <tr>
                      <th className="p-3">Handle / Name</th>
                      <th className="p-3">Trigger Type</th>
                      <th className="p-3">Current Stage</th>
                      <th className="p-3">Next Action Date</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2F0E8] text-[#5A6270]">
                    <tr>
                      <td className="p-3 font-medium text-[#1E2530]">@marcus_lifts</td>
                      <td className="p-3">Story Poll: Fat Loss</td>
                      <td className="p-3">Stage 4: Ask Sent</td>
                      <td className="p-3 font-mono">Today, 4:00 PM</td>
                      <td className="p-3"><span className="text-[#C58B38] font-bold">Active</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-[#1E2530]">@sarah_triathlete</td>
                      <td className="p-3">Reel Comment: Macros</td>
                      <td className="p-3">Stage 5: Booking Link</td>
                      <td className="p-3 font-mono">Tomorrow, 10:00 AM</td>
                      <td className="p-3"><span className="text-amber-600 font-bold">Awaiting Link</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-[#1E2530]">@jordan_fit99</td>
                      <td className="p-3">Inbound DM: Coaching</td>
                      <td className="p-3">Stage 6: Zoom Confirmed</td>
                      <td className="p-3 font-mono">Oct 6, 2:30 PM</td>
                      <td className="p-3"><span className="text-emerald-600 font-bold">Booked & Confirmed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="w-5 h-5 text-[#C58B38]" />
                  <span className="text-xs text-[#1E2530] font-medium">
                    Google Sheets & Notion CSV formats included in kit download
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'call_frame' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="mb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C58B38] block mb-1">
                  Section 4 · Step 7 Call Framing
                </span>
                <h4 className="text-2xl font-bold font-serif text-[#1E2530]">
                  The 60-Second Call Framing Script
                </h4>
                <p className="text-xs text-[#5A6270] mt-1">
                  How to start the call with calm authority so you never freeze up.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#EAE7DF] shadow-xs space-y-4">
                <h5 className="text-base font-bold text-[#1E2530] font-serif">
                  The 3-Part Opening Script:
                </h5>
                <blockquote className="p-4 rounded-lg bg-[#FAF9F5] border-l-4 border-[#C58B38] text-sm text-[#1E2530] leading-relaxed italic font-sans">
                  "Hey [Name], great to connect face-to-face! Thanks for jumping on.<br /><br />
                  The game plan for our 20 minutes is super simple:<br />
                  <strong>First</strong>, I want to unpack that nutrition and training plateau you mentioned in our DMs and find the exact bottleneck.<br />
                  <strong>Second</strong>, we'll outline a 90-day action plan you can run with.<br />
                  <strong>Third</strong>, if by the end of the call you want my personal support running the plan, I can share what my 1-on-1 coaching program looks like. And if not, you take the roadmap and implement it yourself. Fair enough?"
                </blockquote>

                <div className="pt-2 text-xs text-[#5A6270] space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C58B38]" />
                    <span>Eliminates the "Is this a sleazy sales trap?" tension immediately.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C58B38]" />
                    <span>Gives the prospect complete permission to listen without defensive walls.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'case_study' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="mb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C58B38] block mb-1">
                  Section 5 · Real Worked Example
                </span>
                <h4 className="text-2xl font-bold font-serif text-[#1E2530]">
                  The $250/Month Coaching Walkthrough
                </h4>
                <p className="text-xs text-[#5A6270] mt-1">
                  Full transcript of a 48-hour DM thread from story reaction to deposit.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-lg bg-white border border-[#EAE7DF]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8F94A0] block mb-1">
                    Day 1 — 2:15 PM · Prospect votes on Story
                  </span>
                  <p className="text-[#1E2530]">
                    <strong>Coach:</strong> "Saw you voted 'yes' on my shoulder pain story! Are you feeling that pinch during flat benching or overhead presses?"
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8F94A0] block mb-1">
                    Day 1 — 2:40 PM · Prospect
                  </span>
                  <p className="text-[#1E2530]">
                    <strong>Prospect:</strong> "Flat benching mostly! Anything over 185 lbs gives my front delt a nasty ache."
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-[#EAE7DF]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8F94A0] block mb-1">
                    Day 1 — 3:00 PM · Coach Value Bridge
                  </span>
                  <p className="text-[#1E2530]">
                    <strong>Coach:</strong> "Classic internal rotation impingement. Usually means your lats aren't engaged to create a stable shelf, so your anterior delt takes all the shearing force. Quick question: are you cueing 'breaking the bar' before the descent?"
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#EAE7DF]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8F94A0] block mb-1">
                    Day 1 — 3:15 PM · Prospect
                  </span>
                  <p className="text-[#1E2530]">
                    <strong>Prospect:</strong> "Never even heard of that cue honestly. I just try to squeeze my chest."
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-[#C58B38]/40 shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C58B38] block mb-1">
                    Day 1 — 3:30 PM · The Permission Ask
                  </span>
                  <p className="text-[#1E2530]">
                    <strong>Coach:</strong> "I have a 10-minute shoulder-safe bench checklist I give my 1-on-1 clients. Would it help if we jumped on a quick 15-minute call and I screened your setup video?"
                  </p>
                  <p className="text-emerald-700 font-semibold mt-2">
                    → Result: Booked next day 11:00 AM, attended, signed on $250/mo package.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#EAE7DF] bg-[#FAF9F5] flex items-center justify-between">
          <span className="text-xs text-[#8F94A0]">
            DM to Deposit © 2026. Licensed for solo coaching use.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#1E2530] bg-white border border-[#EAE7DF] rounded-md hover:bg-[#FAF9F5] transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
