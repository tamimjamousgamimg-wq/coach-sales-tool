import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FreeSampleSectionProps {
  onSuccess: (email: string) => void;
}

export const FreeSampleSection: React.FC<FreeSampleSectionProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    setErrorMsg('');
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      onSuccess(email);
    }, 500);
  };

  return (
    <section className="pb-16 sm:pb-24 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-white border border-[#ECEAE1] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 flex items-start gap-4">
              <div className="text-[#BA8338] shrink-0 mt-0.5">
                {/* Envelope line art icon */}
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-[#0D1B2A] uppercase block mb-1">
                  Get a Free Sample
                </span>
                <p className="text-xs text-[#5E6A7A] leading-relaxed">
                  Join now and get the one-page cheat sheet covering the complete 8-step DM-to-call process.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6">
              {status === 'success' ? (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FAF9F5] border border-[#BA8338]/30 text-xs font-medium text-[#0D1B2A]">
                  <CheckCircle2 className="w-4 h-4 text-[#BA8338] shrink-0" />
                  <span>Cheat sheet sent! Click to view or download below.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      placeholder="Enter your email address"
                      aria-label="Enter your email address"
                      required
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white border border-[#ECEAE1] text-[#0D1B2A] placeholder:text-[#8F94A0] focus:outline-none focus:ring-1 focus:ring-[#BA8338]"
                    />
                    {errorMsg && (
                      <span className="absolute -bottom-4.5 left-1 text-[10px] text-red-600 font-medium">
                        {errorMsg}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 text-xs font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap shadow-xs disabled:opacity-75"
                  >
                    <span>{status === 'loading' ? 'Sending...' : 'Send Me the Cheat Sheet'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
