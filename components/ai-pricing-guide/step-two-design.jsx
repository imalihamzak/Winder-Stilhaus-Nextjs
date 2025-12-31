"use client";

export default function StepTwoDesign({ data, setData, next, back }) {
  const inputClass =
    "w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#214B57] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20";

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#85929D] font-dm-sans mb-2">
          Step 2
        </p>
        <h2 className="text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Design preferences
        </h2>
        <p className="text-[#85929D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Select your finish level and optional upgrades.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <select
          className={inputClass}
          onChange={(e) => setData({ ...data, level: e.target.value })}
          value={data.level}
        >
          <option value="">Select finish level</option>
          <option>Standard</option>
          <option>Premium</option>
          <option>Luxury</option>
        </select>

        <label className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-4 cursor-pointer">
          <div>
            <p className="font-semibold text-[#214B57]">Custom Furniture</p>
            <p className="text-sm text-[#85929D]">
              Built-ins, wardrobes, or bespoke pieces.
            </p>
          </div>
          <input
            type="checkbox"
            className="accent-[#214B57] w-5 h-5"
            onChange={(e) =>
              setData({ ...data, customFurniture: e.target.checked })
            }
            checked={data.customFurniture}
          />
        </label>

        <label className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-4 cursor-pointer">
          <div>
            <p className="font-semibold text-[#214B57]">Smart Lighting</p>
            <p className="text-sm text-[#85929D]">
              Smart switches, scenes, and automation.
            </p>
          </div>
          <input
            type="checkbox"
            className="accent-[#214B57] w-5 h-5"
            onChange={(e) =>
              setData({ ...data, smartLighting: e.target.checked })
            }
            checked={data.smartLighting}
          />
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={back}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-6 py-2 rounded-md border border-black/10 bg-white/80 text-[#214B57] font-normal font-dm-sans
            shadow-[0_12px_30px_rgba(26,29,41,0.04)]
            hover:bg-white transition
          "
        >
          ← Back
        </button>
        <button
          onClick={next}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22] disabled:bg-[#CED3D7] disabled:text-[#85929D] disabled:cursor-not-allowed
          "
          style={{ backgroundColor: '#F04E22' }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
