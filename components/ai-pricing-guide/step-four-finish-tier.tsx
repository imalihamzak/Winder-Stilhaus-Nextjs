"use client";

import { PricingStepProps } from "./types";

export default function StepFourFinishTier({ data, setData, next, back }: PricingStepProps) {
  const inputClass =
    "w-full p-3 rounded-xl bg-white border border-[#4A4A4A] text-[#1D1D1D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60";

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 4
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Finish tier
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          What level of finish quality are you looking for?
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <label htmlFor="finish-tier" className="block text-sm font-semibold text-[#1D1D1D] mb-3 font-dm-sans">
            Finish tier <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id="finish-tier"
            className={inputClass}
            onChange={(e) => setData({ ...data, finishTier: e.target.value })}
            value={data.finishTier || ""}
            required
            aria-required="true"
            aria-describedby="finish-help"
          >
            <option value="">Choose finish level</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="luxury">Luxury</option>
          </select>
          <span id="finish-help" className="sr-only">Select the desired finish quality level</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={back}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-6 py-2 rounded-md border border-[#4A4A4A] bg-white text-[#1D1D1D] font-normal font-dm-sans
            shadow-[0_12px_30px_rgba(0,0,0,0.05)]
            hover:bg-[#FFFFFF] transition
          "
        >
          ← Back
        </button>
        <button
          onClick={next}
          disabled={!data.finishTier}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#183941] transition-all duration-150
            focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2
            active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57]
            disabled:bg-[#4A4A4A] disabled:text-[#7F8C8D] disabled:cursor-not-allowed
          "
          style={{ backgroundColor: '#214B57' }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

