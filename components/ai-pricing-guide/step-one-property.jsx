"use client";

export default function StepOneProperty({ data, setData, next }) {
  const inputClass =
    "w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#214B57] placeholder:text-[#85929D] font-dm-sans focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20";
  const labelClass = "text-sm font-semibold text-[#214B57]";

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#85929D] font-dm-sans mb-2">
          Step 1
        </p>
        <h2 className="text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Property information
        </h2>
        <p className="text-[#85929D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Tell us about your space so we can size the estimate accurately.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
        <div className="flex flex-col gap-2">
          <label className={labelClass + " font-dm-sans"}>Property type</label>
          <select
            className={inputClass}
            onChange={(e) => setData({ ...data, propertyType: e.target.value })}
            value={data.propertyType}
          >
            <option value="">Choose one</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Office</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass + " font-dm-sans"}>Total area (sq.ft)</label>
          <input
            type="number"
            placeholder="e.g., 1800"
            className={inputClass}
            onChange={(e) => setData({ ...data, area: e.target.value })}
            value={data.area}
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className={labelClass + " font-dm-sans"}>Number of rooms</label>
          <input
            type="number"
            placeholder="e.g., 3"
            className={inputClass}
            onChange={(e) => setData({ ...data, rooms: e.target.value })}
            value={data.rooms}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={next}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center gap-2
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
