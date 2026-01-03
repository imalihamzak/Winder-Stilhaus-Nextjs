"use client";

import { PricingStepProps } from "./types";

export default function StepThreeBudget({ data, setData, next, back }: PricingStepProps) {
  const inputClass =
    "w-full p-3 rounded-xl bg-white border border-[#4A4A4A] text-[#1D1D1D] focus:outline-none focus:ring-2 focus:ring-[#214B57] focus:border-[#214B57]";

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 3
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Budget & timeline
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Set a target budget range and preferred delivery window.
        </p>
      </div>

      <div className="rounded-2xl border border-[#4A4A4A] bg-white p-5 mb-6">
        <label className="block text-sm font-medium text-[#1D1D1D] mb-3">
          Budget Range (PKR)
        </label>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-[#7F8C8D] font-dm-sans mb-2">Lower Range</label>
            <input
              type="number"
              placeholder="e.g., 50000"
              className={inputClass}
              value={data.minBudget || ""}
              onChange={(e) => setData({ ...data, minBudget: e.target.value })}
              min="0"
              step="1000"
            />
        </div>

          <div>
            <label className="block text-xs text-[#7F8C8D] font-dm-sans mb-2">Upper Range</label>
        <input
              type="number"
              placeholder="e.g., 500000"
              className={inputClass}
              value={data.maxBudget || ""}
              onChange={(e) => setData({ ...data, maxBudget: e.target.value })}
              min="0"
              step="1000"
            />
          </div>
        </div>

        {(data.minBudget || data.maxBudget) && (
          <p className="text-[#1D1D1D] mt-4 font-semibold text-sm">
            Budget Range: PKR {data.minBudget ? new Intl.NumberFormat("en-PK").format(Number(data.minBudget)) : "—"} 
            {data.minBudget && data.maxBudget ? " - " : ""}
            {data.maxBudget ? new Intl.NumberFormat("en-PK").format(Number(data.maxBudget)) : ""}
        </p>
        )}
      </div>

      <select
        className={inputClass}
        onChange={(e) => setData({ ...data, timeline: e.target.value })}
        value={data.timeline || ""}
      >
        <option value="">Preferred timeline</option>
        <option>1–3 Months</option>
        <option>3–6 Months</option>
        <option>6+ Months</option>
      </select>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
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
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#1a3d47] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2 active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57] disabled:bg-[#4A4A4A] disabled:text-[#7F8C8D] disabled:cursor-not-allowed
          "
          style={{ backgroundColor: '#214B57' }}
        >
          View estimate →
        </button>
      </div>
    </div>
  );
}

