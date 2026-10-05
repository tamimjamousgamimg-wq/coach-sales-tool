import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  handle: string;
  role: string;
  quote: string;
  highlight: string;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Marcus T.',
    handle: '@marcus_hypertrophy',
    role: 'Online Hypertrophy Coach',
    quote: "I used to write 5-paragraph essays in the DMs explaining my programming and pricing upfront, and people would just leave me on read. Used Step 3 & 4 on a story poll voter yesterday—she booked a call 20 minutes later and signed up for my $350/mo package.",
    highlight: 'Turned a story vote into a $350/mo client in 24 hours'
  },
  {
    id: '2',
    name: 'Elena R.',
    handle: '@elena_fitlift',
    role: 'Female Strength & Fat Loss',
    quote: "Step 7 (The 60-Second Call Frame) alone is worth 10x the $15. I used to freeze up and feel super awkward transitioning from small talk into coaching. Having the exact opening words made the entire call feel natural and consultative.",
    highlight: 'Zero awkward sales tension on calls'
  },
  {
    id: '3',
    name: 'David K.',
    handle: '@davidk_physique',
    role: '1-on-1 Contest & Lifestyle Coach',
    quote: "The Decision Rules in Step 8 brought back 3 dead conversations this week that I had completely given up on. No sleazy pushiness—just a simple 24-hour permission bump. Two of them booked for this Thursday.",
    highlight: 'Revived 3 dead leads in the first week'
  }
];

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-[#FAF9F5] border-t border-[#ECEAE1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-[#BA8338] mb-2.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#BA8338] text-[#BA8338]" />
            ))}
            <span className="text-xs font-bold text-[#0D1B2A] ml-2">5.0 Star Rating</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0D1B2A] mb-2">
            Built for Real Online Fitness Coaches
          </h2>
          <p className="text-xs sm:text-sm text-[#5E6A7A]">
            Coaches using the 48-hour path to turn Instagram conversations into booked clients.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-white border border-[#ECEAE1] p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#BA8338]/40 transition-all duration-200"
            >
              <div>
                {/* Star rating row + Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1 text-[#BA8338]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#BA8338] text-[#BA8338]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Coach
                  </span>
                </div>

                {/* Highlight banner */}
                <p className="text-xs font-semibold text-[#BA8338] mb-3">
                  "{review.highlight}"
                </p>

                {/* Main Quote */}
                <p className="text-xs text-[#5E6A7A] leading-relaxed mb-6 font-normal">
                  "{review.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#ECEAE1] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#161D26] text-[#C99753] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="truncate">
                  <h4 className="text-xs font-bold text-[#0D1B2A]">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-[#8F94A0] truncate">
                    {review.role} · <span className="font-mono">{review.handle}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
