import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqData {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqData[] = [
  {
    id: 1,
    question: "Will these scripts actually sound natural, or will I come across as automated and pushy?",
    answer: "The scripts are written to sound like you — not a template. They give you the right words, but it's up to you to say them in your own voice."
  },
  {
    id: 2,
    question: "What if prospects ask about price, object, go quiet, or miss the call?",
    answer: "The kit includes decision rules and ready-to-use responses for common objections, plus a no-show save and follow-up system to keep conversations moving."
  },
  {
    id: 3,
    question: "Do I really need a whole system for my DMs?",
    answer: "No. You can start with just the scripts. But the full system gives you a clear process, saves time, and helps you book more calls consistently."
  }
];

export const FaqSection: React.FC = () => {
  // All answers visible by default as requested by user
  const [openIds, setOpenIds] = useState<number[]>([1, 2, 3]);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-serif text-[#0D1B2A] mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-10 h-[2.5px] bg-[#BA8338] mx-auto rounded-full" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#ECEAE1] transition-all duration-200 overflow-hidden shadow-xs hover:border-[#BA8338]/30"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4 cursor-pointer focus-visible:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Amber Number Circle */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#BA8338] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0">
                      {faq.id}
                    </div>

                    {/* Question text */}
                    <h3 className="text-base sm:text-lg font-bold text-[#0D1B2A] font-serif leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle chevron */}
                  <div
                    className={`w-7 h-7 flex items-center justify-center text-[#5E6A7A] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#BA8338]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Answer body (visible by default) */}
                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 ml-0 sm:ml-15 text-[#5E6A7A] text-sm sm:text-base leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
