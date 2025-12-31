"use client";

export default function StepThreeBudget({ data, setData, next, back }) {
  const inputClass =
    "w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#214B57] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20";

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#85929D] font-dm-sans mb-2">
          Step 3
        </p>
        <h2 className="text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Budget & timeline
        </h2>
        <p className="text-[#85929D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Set a target budget range and preferred delivery window.
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-5 mb-6">
        <label className="block text-sm font-medium text-[#214B57] mb-3">
          Budget Range (PKR)
        </label>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-[#85929D] font-dm-sans mb-2">Lower Range</label>
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
            <label className="block text-xs text-[#85929D] font-dm-sans mb-2">Upper Range</label>
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
          <p className="text-[#214B57] mt-4 font-semibold text-sm">
            Budget Range: PKR {data.minBudget ? new Intl.NumberFormat("en-PK").format(Number(data.minBudget)) : "—"} 
            {data.minBudget && data.maxBudget ? " - " : ""}
            {data.maxBudget ? new Intl.NumberFormat("en-PK").format(Number(data.maxBudget)) : ""}
        </p>
        )}
      </div>

      <select
        className={inputClass}
        onChange={(e) => setData({ ...data, timeline: e.target.value })}
        value={data.timeline}
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
          View estimate →
        </button>
      </div>
    </div>
  );
}
