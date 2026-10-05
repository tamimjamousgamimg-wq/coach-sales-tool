import React from 'react';
import { Lock, ArrowRight, Download, ShieldCheck, Smartphone } from 'lucide-react';
import { PRODUCT_DETAILS } from '../data/productData.ts';

interface BuySectionProps {
  whopUrl: string;
}

export const BuySection: React.FC<BuySectionProps> = ({ whopUrl }) => {
  return (
    <section id="pricing" className="py-14 sm:py-20 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* The Buy Card (exactly matching the user layout) */}
        <div className="rounded-2xl bg-white border border-[#ECEAE1] p-8 sm:p-10 shadow-xs hover:border-[#BA8338]/30 transition-all">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="md:col-span-6 flex flex-col items-start">
              {/* Lock Eyebrow */}
              <div className="flex items-center gap-2 mb-2 text-xs font-bold tracking-wider text-[#8F94A0] uppercase">
                <Lock className="w-3.5 h-3.5 text-[#BA8338]" />
                <span>Get the DM to Deposit Script Kit</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-bold font-serif text-[#0D1B2A] tracking-tight">
                  {PRODUCT_DETAILS.priceFormatted}
                </span>
              </div>

              {/* Meta */}
              <p className="text-xs text-[#5E6A7A]">
                One-time payment <span className="text-[#BA8338]">·</span> Instant download
              </p>
            </div>

            {/* Right Column: CTA & Features (Direct link to Whop in new tab) */}
            <div className="md:col-span-6 flex flex-col items-stretch sm:items-end gap-3.5">
              <a
                href={whopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-all duration-150 shadow-sm active:scale-[0.99] cursor-pointer"
              >
                <span>Get Instant Access</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Features microcopy row with exact icons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3.5 gap-y-1 text-[11px] text-[#5E6A7A]">
                <div className="flex items-center gap-1.5">
                  <Download className="w-3 h-3 text-[#5E6A7A]" />
                  <span>Instant Download</span>
                </div>
                <span className="text-[#D8D5CC]">|</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-[#5E6A7A]" />
                  <span>Secure Checkout</span>
                </div>
                <span className="text-[#D8D5CC]">|</span>
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-3 h-3 text-[#5E6A7A]" />
                  <span>Works on Any Device</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
