import React, { useState } from 'react';
import { X, ArrowRight, Check, MessageSquare, BookOpen, Download } from 'lucide-react';
import { EIGHT_STEPS } from '../data/productData.ts';

interface SystemPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  whopUrl: string;
  initialStepIndex?: number;
}

export const SystemPreviewModal: React.FC<SystemPreviewModalProps> = ({
  isOpen,
  onClose,
  whopUrl,
  initialStepIndex = 0
}) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(initialStepIndex);

  if (!isOpen) return null;

  const currentStep = EIGHT_STEPS[selectedStepIndex] || EIGHT_STEPS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white border border-[#EAE7DF] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#EAE7DF] flex items-center justify-between bg-[#FAF9F5]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C58B38] text-white flex items-center justify-center font-serif font-bold text-base">
              8
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-[#1E2530]">
                The 8-Step DM-to-Deposit Architecture
              </h3>
              <p className="text-xs text-[#5A6270]">
                Interactive walkthrough of the 48-hour client journey
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#8F94A0] hover:text-[#1E2530] hover:bg-[#EAE7DF]/60 transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Sidebar step navigator + Step detail */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* Step Selector List */}
          <div className="md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-[#EAE7DF] bg-[#FDFDFB] space-y-1.5 overflow-y-auto max-h-[220px] md:max-h-none">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F94A0] px-2 block mb-2">
              The 8 Steps
            </span>
            {EIGHT_STEPS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#C58B38] text-white font-semibold shadow-xs'
                      : 'text-[#5A6270] hover:bg-[#FAF9F5] hover:text-[#1E2530]'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                      isSelected
                        ? 'bg-white text-[#C58B38]'
                        : 'bg-[#FAF9F5] border border-[#EAE7DF] text-[#5A6270]'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className="truncate">
                    <span className="block truncate">{step.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Current Step Showcase */}
          <div className="md:col-span-8 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF9F5] border border-[#EAE7DF] text-[#C58B38] text-xs font-bold uppercase tracking-wider">
                  Step {currentStep.number} of 8
                </span>
                <span className="text-xs text-[#8F94A0]">48-Hour Path</span>
              </div>

              <h4 className="text-2xl font-bold font-serif text-[#1E2530] mb-1">
                {currentStep.title}
              </h4>
              <p className="text-xs text-[#C58B38] font-semibold mb-4">
                {currentStep.tagline}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#1E2530] mb-1">
                    Purpose & Mechanics:
                  </h5>
                  <p className="text-sm text-[#5A6270] leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>

                {/* Example Script in Kit */}
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1E2530] mb-2 uppercase tracking-wide">
                    <MessageSquare className="w-3.5 h-3.5 text-[#C58B38]" />
                    <span>Plug-and-Play Script:</span>
                  </div>
                  <blockquote className="text-sm italic text-[#1E2530] border-l-2 border-[#C58B38] pl-3 py-0.5 font-sans leading-relaxed">
                    {currentStep.exampleScript}
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Bottom Bar inside Modal */}
            <div className="pt-6 border-t border-[#EAE7DF] flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
              <div className="flex items-center gap-2">
                {selectedStepIndex > 0 && (
                  <button
                    onClick={() => setSelectedStepIndex((prev) => prev - 1)}
                    className="px-3 py-1.5 text-xs text-[#5A6270] hover:text-[#1E2530] rounded-md border border-[#EAE7DF] bg-[#FAF9F5] cursor-pointer"
                  >
                    ← Previous Step
                  </button>
                )}
                {selectedStepIndex < EIGHT_STEPS.length - 1 && (
                  <button
                    onClick={() => setSelectedStepIndex((prev) => prev + 1)}
                    className="px-3 py-1.5 text-xs text-[#1E2530] font-medium rounded-md border border-[#EAE7DF] bg-[#FAF9F5] hover:bg-white cursor-pointer"
                  >
                    Next Step →
                  </button>
                )}
              </div>

              <a
                href={whopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-all shadow-xs cursor-pointer"
              >
                <span>Get Full 22-Page Kit — $14.99</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
