"use client";

// Mock pricing matrix (in production, this would come from CMS/admin)
const PRICING_MATRIX = {
  kitchen: {
    entry: { base: 15000, min: 12000, max: 20000 },
    mid: { base: 25000, min: 20000, max: 35000 },
    premium: { base: 40000, min: 35000, max: 60000 },
  },
  bathroom: {
    entry: { base: 12000, min: 10000, max: 18000 },
    mid: { base: 20000, min: 18000, max: 30000 },
    premium: { base: 35000, min: 30000, max: 50000 },
  },
  "full-home": {
    entry: { base: 80000, min: 60000, max: 120000 },
    mid: { base: 150000, min: 120000, max: 200000 },
    premium: { base: 250000, min: 200000, max: 350000 },
  },
};

// Multipliers
const MULTIPLIERS = {
  complexity: {
    standard: 1.0,
    reconfigure: 1.3,
    structural: 1.6,
  },
  mep: {
    medium: 1.0,
    advanced: 1.4,
  },
  propertyEra: {
    "new-build": 1.0,
    "90s-00s": 1.1,
    period: 1.25,
  },
};

export default function PricingResult({ data, next }) {
  // Calculate price range from matrix and multipliers
  const calculatePrice = () => {
    const project = data.project;
    const finishTier = data.finishTier;
    
    if (!project || !finishTier) {
      return { min: 0, max: 0 };
    }

    const base = PRICING_MATRIX[project]?.[finishTier];
    if (!base) {
      return { min: 0, max: 0 };
    }

    let min = base.min;
    let max = base.max;

    // Apply multipliers
    if (data.complexity) {
      const complexityMult = MULTIPLIERS.complexity[data.complexity] || 1.0;
      min *= complexityMult;
      max *= complexityMult;
    }

    if (data.mepIntensity) {
      const mepMult = MULTIPLIERS.mep[data.mepIntensity] || 1.0;
      min *= mepMult;
      max *= mepMult;
    }

    if (data.propertyEra) {
      const eraMult = MULTIPLIERS.propertyEra[data.propertyEra] || 1.0;
      min *= eraMult;
      max *= eraMult;
    }

    return {
      min: Math.round(min),
      max: Math.round(max),
    };
  };

  const priceRange = calculatePrice();

  const formatGBP = (n) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(n || 0);

  // Calculate programme (weeks) based on project type
  const getProgramme = () => {
    const programmes = {
      kitchen: { entry: "6-8", mid: "8-10", premium: "10-12" },
      bathroom: { entry: "4-6", mid: "6-8", premium: "8-10" },
      "full-home": { entry: "12-16", mid: "16-20", premium: "20-24" },
    };
    return programmes[data.project]?.[data.finishTier] || "—";
  };

  const handleEmailGuide = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_email_me", {
        event_category: "Pricing Guide",
        event_label: "Email me this guide",
        form_type: "pricing_result",
      });
    }
    next(); // Go to lead form
  };

  const handleBookConsultation = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_book", {
        event_category: "Pricing Guide",
        event_label: "Book consultation from result",
      });
    }
    window.location.href = "/contact-us";
  };

  const handleCall = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_call", {
        event_category: "Pricing Guide",
        event_label: "Call from result",
      });
    }
    window.location.href = "tel:+1234567890";
  };

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#85929D] font-dm-sans mb-2">
          Your guide price
        </p>
        <h2 className="text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Estimated cost range
        </h2>
        <p className="text-[#85929D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Based on your selections. Final price subject to survey and design sign-off.
        </p>
      </div>

      {/* Price Range */}
      <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-5 sm:px-6 py-6 shadow-[0_18px_45px_rgba(26,29,41,0.04)] mb-6">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#85929D] font-dm-sans mb-2">
            Guide Price Range
          </p>
          <p className="text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            {formatGBP(priceRange.min)} — {formatGBP(priceRange.max)}
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-3 border-t border-black/10 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#85929D] font-dm-sans">Cabinetry</span>
            <span className="text-sm font-semibold text-[#214B57] font-dm-sans">
              {data.project === "kitchen" ? "Included" : "N/A"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#85929D] font-dm-sans">Worktops</span>
            <span className="text-sm font-semibold text-[#214B57] font-dm-sans">
              {data.project === "kitchen" ? "Included" : "N/A"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#85929D] font-dm-sans">Fitting</span>
            <span className="text-sm font-semibold text-[#214B57] font-dm-sans">Included</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#85929D] font-dm-sans">MEP</span>
            <span className="text-sm font-semibold text-[#214B57] font-dm-sans">
              {data.mepIntensity === "advanced" ? "Advanced" : "Standard"}
            </span>
          </div>
          <div className="flex justify-between items-center border-t border-black/10 pt-3">
            <span className="text-sm font-semibold text-[#214B57] font-dm-sans">Programme</span>
            <span className="text-sm font-semibold text-[#214B57] font-dm-sans">
              {getProgramme()} weeks
            </span>
          </div>
        </div>
      </div>

      {/* Micro-disclaimer */}
      <p className="text-xs text-[#85929D] font-dm-sans text-center mb-6 italic">
        Guide only. Final price subject to survey and design sign-off.
      </p>

      {/* CTAs */}
      <div className="space-y-3">
        <button
          onClick={handleBookConsultation}
          className="
            w-full
            inline-flex items-center justify-center gap-2
            min-w-[122px] min-h-[31px] px-8 py-2 rounded-md
            text-white font-normal font-dm-sans
            hover:bg-[#214B57] transition-all duration-150
            active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]
          "
          style={{ backgroundColor: '#F04E22' }}
        >
          Book consultation
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleCall}
            className="
              inline-flex items-center justify-center gap-2
              min-w-[122px] min-h-[31px] px-6 py-2 rounded-md
              border border-black/10 bg-white/80 text-[#214B57] font-normal font-dm-sans
              shadow-[0_12px_30px_rgba(33,75,87,0.04)]
              hover:bg-white transition
            "
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </button>

          <button
            onClick={handleEmailGuide}
            className="
              inline-flex items-center justify-center gap-2
              min-w-[122px] min-h-[31px] px-6 py-2 rounded-md
              border border-black/10 bg-white/80 text-[#214B57] font-normal font-dm-sans
              shadow-[0_12px_30px_rgba(33,75,87,0.04)]
              hover:bg-white transition
            "
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email me this guide
          </button>
        </div>
      </div>
    </div>
  );
}
