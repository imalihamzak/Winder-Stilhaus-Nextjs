"use client";

export default function StepTwoProject({ data, setData, next, back }) {
  const inputClass =
    "w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#214B57] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20";

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#85929D] font-dm-sans mb-2">
          Step 2
        </p>
        <h2 className="text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Project type
        </h2>
        <p className="text-[#85929D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          What are you renovating?
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <label htmlFor="project-type" className="block text-sm font-semibold text-[#214B57] mb-3 font-dm-sans">
            Project <span className="text-red-500" aria-label="required">*</span>
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
            <option value="full-home">Full-home</option>
          </select>
          <span id="project-help" className="sr-only">Select the type of renovation project</span>
        </div>

        <div>
          <label htmlFor="finish-tier" className="block text-sm font-semibold text-[#214B57] mb-3 font-dm-sans">
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
            <option value="entry">Entry</option>
            <option value="mid">Mid</option>
            <option value="premium">Premium</option>
          </select>
          <span id="finish-help" className="sr-only">Select the desired finish quality level</span>
        </div>

        <div>
          <label htmlFor="complexity" className="block text-sm font-semibold text-[#214B57] mb-3 font-dm-sans">
            Complexity <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id="complexity"
            className={inputClass}
            onChange={(e) => setData({ ...data, complexity: e.target.value })}
            value={data.complexity || ""}
            required
            aria-required="true"
            aria-describedby="complexity-help"
          >
            <option value="">Choose complexity level</option>
            <option value="standard">Standard</option>
            <option value="reconfigure">Reconfigure</option>
            <option value="structural">Structural</option>
          </select>
          <span id="complexity-help" className="sr-only">Select the complexity of structural changes required</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={back}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-6 py-2 rounded-md
            border border-black/10 bg-white/80 text-[#214B57] font-normal font-dm-sans
            shadow-[0_12px_30px_rgba(33,75,87,0.04)]
            hover:bg-white transition
          "
        >
          ← Back
        </button>
        <button
          onClick={next}
          disabled={!data.project || !data.finishTier || !data.complexity}
          className="
            w-full sm:w-auto
            inline-flex items-center justify-center
            min-w-[122px] min-h-[31px] px-8 py-2 rounded-md
            text-white font-normal font-dm-sans
            hover:bg-[#214B57] transition-all duration-150
            active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]
            disabled:bg-[#CED3D7] disabled:text-[#85929D] disabled:cursor-not-allowed
          "
          style={{ backgroundColor: '#F04E22' }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

