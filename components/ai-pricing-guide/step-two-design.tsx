"use client";

import { PricingStepProps } from "./types";

export default function StepTwoDesign({ data, setData, next, back }: PricingStepProps) {
  const inputClass =
    "w-full p-3 rounded-xl bg-white border border-[#4A4A4A] text-[#1D1D1D] focus:outline-none focus:ring-2 focus:ring-[#214B57] focus:border-[#214B57]";

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 2
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Design preferences
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Select your finish level and optional upgrades.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <select
          className={inputClass}
          onChange={(e) => setData({ ...data, level: e.target.value })}
          value={data.level || ""}
        >
          <option value="">Select finish level</option>
          <option>Standard</option>
          <option>Premium</option>
          <option>Luxury</option>
        </select>

        <label className="flex items-center justify-between gap-4 rounded-2xl border border-[#4A4A4A] bg-white p-4 cursor-pointer">
          <div>
            <p className="font-semibold text-[#1D1D1D]">Custom Furniture</p>
            <p className="text-sm text-[#7F8C8D]">
              Built-ins, wardrobes, or bespoke pieces.
            </p>
          </div>
          <input
            type="checkbox"
            className="accent-[#214B57] w-5 h-5"
            onChange={(e) =>
              setData({ ...data, customFurniture: e.target.checked })
            }
            checked={data.customFurniture || false}
          />
        </label>

        <label className="flex items-center justify-between gap-4 rounded-2xl border border-[#4A4A4A] bg-white p-4 cursor-pointer">
          <div>
            <p className="font-semibold text-[#1D1D1D]">Smart Lighting</p>
            <p className="text-sm text-[#7F8C8D]">
              Smart switches, scenes, and automation.
            </p>
          </div>
          <input
            type="checkbox"
            className="accent-[#214B57] w-5 h-5"
            onChange={(e) =>
              setData({ ...data, smartLighting: e.target.checked })
            }
            checked={data.smartLighting || false}
          />
        </label>
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
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#1a3d47] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2 active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57] disabled:bg-[#4A4A4A] disabled:text-[#7F8C8D] disabled:cursor-not-allowed
          "
          style={{ backgroundColor: '#214B57' }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

