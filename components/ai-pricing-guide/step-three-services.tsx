"use client";

import { PricingStepProps } from "./types";

export default function StepThreeServices({ data, setData, next, back }: PricingStepProps) {
  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 3
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Services & property details
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Tell us about services intensity and property era for accurate pricing.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <fieldset>
            <legend className="block text-sm font-semibold text-[#1D1D1D] mb-3">
              Services intensity (MEP) <span className="text-red-500" aria-label="required">*</span>
            </legend>
            <div className="space-y-3" role="radiogroup" aria-labelledby="mep-label">
              <label className="flex items-center justify-between gap-4 rounded-2xl border border-[#4A4A4A] bg-white p-4 cursor-pointer">
                <div>
                  <p className="font-semibold text-[#1D1D1D]">Medium</p>
                  <p className="text-sm text-[#7F8C8D]">
                    Standard electrical, plumbing, and heating work
                  </p>
                </div>
                <input
                  type="radio"
                  name="mep"
                  value="medium"
                  checked={data.mepIntensity === "medium" || !data.mepIntensity}
                  onChange={(e) => setData({ ...data, mepIntensity: e.target.value })}
                  className="accent-[#214B57] w-5 h-5"
                  aria-label="Medium services intensity"
                />
              </label>

              <label className="flex items-center justify-between gap-4 rounded-2xl border border-[#4A4A4A] bg-white p-4 cursor-pointer">
                <div>
                  <p className="font-semibold text-[#1D1D1D]">Advanced</p>
                  <p className="text-sm text-[#7F8C8D]">
                    Complex MEP work, rewiring, new heating systems, or extensive plumbing
                  </p>
                </div>
                <input
                  type="radio"
                  name="mep"
                  value="advanced"
                  checked={data.mepIntensity === "advanced"}
                  onChange={(e) => setData({ ...data, mepIntensity: e.target.value })}
                  className="accent-[#214B57] w-5 h-5"
                  aria-label="Advanced services intensity"
                />
              </label>
            </div>
          </fieldset>
        </div>

        <div>
          <label htmlFor="property-era" className="block text-sm font-semibold text-[#1D1D1D] mb-3">
            Property era <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id="property-era"
            className="w-full p-3 rounded-xl bg-white border border-[#4A4A4A] text-[#1D1D1D] focus:outline-none focus:ring-2 focus:ring-[#214B57] focus:border-[#214B57]"
            onChange={(e) => setData({ ...data, propertyEra: e.target.value })}
            value={data.propertyEra || ""}
            required
            aria-required="true"
            aria-describedby="property-era-help"
          >
            <option value="">Choose property era</option>
            <option value="period">Period</option>
            <option value="90s-00s">90s–00s</option>
            <option value="new-build">New build</option>
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

