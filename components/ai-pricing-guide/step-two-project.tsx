"use client";

import { PricingStepProps } from "./types";

export default function StepTwoProject({ data, setData, next, back }: PricingStepProps) {
  const inputClass =
    "w-full p-3 rounded-xl bg-white border border-[#4A4A4A] text-[#1D1D1D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60";

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 2
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Project type
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          What are you renovating?
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <label htmlFor="project-type" className="block text-sm font-semibold text-[#1D1D1D] mb-3 font-dm-sans">
            Project type <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id="project-type"
            className={inputClass}
            onChange={(e) => setData({ ...data, project: e.target.value })}
            value={data.project || ""}
            required
            aria-required="true"
            aria-describedby="project-help"
          >
            <option value="">Choose project type</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="interior-package">Interior Package</option>
          </select>
          <span id="project-help" className="sr-only">Select the type of renovation project</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={back}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-6 py-2 rounded-md
            border border-[#4A4A4A] bg-white text-[#1D1D1D] font-normal font-dm-sans
            shadow-[0_12px_30px_rgba(0,0,0,0.05)]
            hover:bg-[#FFFFFF] transition
          "
        >
          ← Back
        </button>
        <button
          onClick={next}
          disabled={!data.project}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-8 py-2 rounded-md
            text-white font-normal font-dm-sans
            hover:bg-[#183941] transition-all duration-150
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

