"use client";

import { PricingStepProps } from "./types";

export default function StepThreePropertyEra({ data, setData, next, back }: PricingStepProps) {
  const inputClass =
    "w-full p-3 rounded-xl bg-white border border-[#4A4A4A] text-[#1D1D1D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60";

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 3
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Property era
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          When was your property built? This helps us assess risk and contingency factors.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <label htmlFor="property-era" className="block text-sm font-semibold text-[#1D1D1D] mb-3 font-dm-sans">
            Property era <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id="property-era"
            className={inputClass}
            onChange={(e) => setData({ ...data, propertyEra: e.target.value })}
            value={data.propertyEra || ""}
            required
            aria-required="true"
            aria-describedby="property-era-help"
          >
            <option value="">Choose property era</option>
            <option value="pre-1945">Pre-1945</option>
            <option value="1945-1999">1945–1999</option>
            <option value="2000+">2000+</option>
          </select>
          <p id="property-era-help" className="text-xs text-[#7F8C8D] font-dm-sans mt-2">
            Used to assess risk and contingency factors
          </p>
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
            hover:bg-[#F9FAFB] transition
          "
        >
          ← Back
        </button>
        <button
          onClick={next}
          disabled={!data.propertyEra}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#003A66] transition-all duration-150
            focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2
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

