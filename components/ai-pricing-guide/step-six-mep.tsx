"use client";

import { PricingStepProps } from "./types";

export default function StepSixMEP({ data, setData, next, back }: PricingStepProps) {
  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 6
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          MEP intensity
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          What level of mechanical, electrical, and plumbing work is required?
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <fieldset>
            <legend className="block text-sm font-semibold text-[#1D1D1D] mb-3">
              MEP intensity <span className="text-red-500" aria-label="required">*</span>
            </legend>
            <div className="space-y-3" role="radiogroup" aria-labelledby="mep-label">
              <label className="flex items-center justify-between gap-4 rounded-2xl border border-[#4A4A4A] bg-white p-4 cursor-pointer hover:border-[#214B57]/30 transition">
                <div>
                  <p className="font-semibold text-[#1D1D1D]">Light</p>
                  <p className="text-sm text-[#7F8C8D]">
                    Minimal electrical, plumbing, or heating work required
                  </p>
                </div>
                <input
                  type="radio"
                  name="mep"
                  value="light"
                  checked={data.mepIntensity === "light"}
                  onChange={(e) => setData({ ...data, mepIntensity: e.target.value })}
                  className="accent-[#214B57] w-5 h-5"
                  aria-label="Light MEP intensity"
                />
              </label>

              <label className="flex items-center justify-between gap-4 rounded-2xl border border-[#4A4A4A] bg-white p-4 cursor-pointer hover:border-[#214B57]/30 transition">
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
                  aria-label="Medium MEP intensity"
                />
              </label>

              <label className="flex items-center justify-between gap-4 rounded-2xl border border-[#4A4A4A] bg-white p-4 cursor-pointer hover:border-[#214B57]/30 transition">
                <div>
                  <p className="font-semibold text-[#1D1D1D]">Heavy</p>
                  <p className="text-sm text-[#7F8C8D]">
                    Complex MEP work, rewiring, new heating systems, or extensive plumbing
                  </p>
                </div>
                <input
                  type="radio"
                  name="mep"
                  value="heavy"
                  checked={data.mepIntensity === "heavy"}
                  onChange={(e) => setData({ ...data, mepIntensity: e.target.value })}
                  className="accent-[#214B57] w-5 h-5"
                  aria-label="Heavy MEP intensity"
                />
              </label>
            </div>
          </fieldset>
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
          disabled={!data.mepIntensity}
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

