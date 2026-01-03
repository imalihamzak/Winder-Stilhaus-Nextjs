"use client";

import { useState } from "react";
import { PricingData } from "./types";

interface PricingResultProps {
  data: PricingData;
  next: () => void;
}

// Mock pricing matrix (in production, this would come from CMS/admin)
const PRICING_MATRIX: Record<string, Record<string, { base: number; min: number; max: number }>> = {
  kitchen: {
    standard: { base: 20000, min: 15000, max: 28000 },
    premium: { base: 35000, min: 28000, max: 50000 },
    luxury: { base: 55000, min: 50000, max: 80000 },
  },
  bathroom: {
    standard: { base: 15000, min: 12000, max: 22000 },
    premium: { base: 28000, min: 22000, max: 40000 },
    luxury: { base: 45000, min: 40000, max: 65000 },
  },
  "interior-package": {
    standard: { base: 100000, min: 80000, max: 150000 },
    premium: { base: 180000, min: 150000, max: 250000 },
    luxury: { base: 300000, min: 250000, max: 400000 },
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
    light: 0.9,
    medium: 1.0,
    heavy: 1.4,
  },
  propertyEra: {
    "2000+": 1.0,
    "1945-1999": 1.1,
    "pre-1945": 1.25,
  },
};

// Options pricing (adders)
const OPTIONS_PRICING: Record<string, { min: number; max: number }> = {
  "underfloor-heating": { min: 2000, max: 5000 },
  "smart-home": { min: 3000, max: 8000 },
  "bespoke-joinery": { min: 5000, max: 15000 },
  "premium-appliances": { min: 3000, max: 12000 },
  "luxury-fixtures": { min: 2000, max: 8000 },
  "acoustic-treatment": { min: 1500, max: 5000 },
  "home-cinema": { min: 5000, max: 20000 },
  "wine-storage": { min: 2000, max: 8000 },
};

// VAT rate (20% UK standard rate)
const VAT_RATE = 0.20;

export default function PricingResult({ data, next }: PricingResultProps) {
  const [includeVAT, setIncludeVAT] = useState<boolean>(true); // Admin toggle - default true

  // Calculate price range from matrix and multipliers
  const calculatePrice = (): { min: number; max: number; breakdown: Record<string, { min: number; max: number }> } => {
    const project = data.project;
    const finishTier = data.finishTier;
    
    if (!project || !finishTier) {
      return { 
        min: 0, 
        max: 0,
        breakdown: {
          cabinetry: { min: 0, max: 0 },
          mep: { min: 0, max: 0 },
          surfaces: { min: 0, max: 0 },
          labour: { min: 0, max: 0 },
          contingency: { min: 0, max: 0 },
          options: { min: 0, max: 0 }
        }
      };
    }

    const base = PRICING_MATRIX[project]?.[finishTier];
    if (!base) {
      return { 
        min: 0, 
        max: 0,
        breakdown: {
          cabinetry: { min: 0, max: 0 },
          mep: { min: 0, max: 0 },
          surfaces: { min: 0, max: 0 },
          labour: { min: 0, max: 0 },
          contingency: { min: 0, max: 0 },
          options: { min: 0, max: 0 }
        }
      };
    }

    let min = base.min;
    let max = base.max;

    // Calculate breakdown percentages (approximate)
    const cabinetryPercent = data.project === "kitchen" ? 0.35 : data.project === "bathroom" ? 0.25 : 0.30;
    const mepPercent = 0.20;
    const surfacesPercent = data.project === "kitchen" ? 0.25 : data.project === "bathroom" ? 0.30 : 0.25;
    const labourPercent = 0.15;
    const contingencyPercent = 0.05;

    // Base breakdown
    let cabinetryMin = min * cabinetryPercent;
    let cabinetryMax = max * cabinetryPercent;
    let mepMin = min * mepPercent;
    let mepMax = max * mepPercent;
    let surfacesMin = min * surfacesPercent;
    let surfacesMax = max * surfacesPercent;
    let labourMin = min * labourPercent;
    let labourMax = max * labourPercent;
    let contingencyMin = min * contingencyPercent;
    let contingencyMax = max * contingencyPercent;

    // Apply multipliers
    if (data.complexity) {
      const complexityMult = MULTIPLIERS.complexity[data.complexity as keyof typeof MULTIPLIERS.complexity] || 1.0;
      min *= complexityMult;
      max *= complexityMult;
      // Complexity affects labour and contingency more
      labourMin *= complexityMult * 1.2;
      labourMax *= complexityMult * 1.2;
      contingencyMin *= complexityMult * 1.5;
      contingencyMax *= complexityMult * 1.5;
    }

    if (data.mepIntensity) {
      const mepMult = MULTIPLIERS.mep[data.mepIntensity as keyof typeof MULTIPLIERS.mep] || 1.0;
      min *= mepMult;
      max *= mepMult;
      // MEP multiplier primarily affects MEP costs
      mepMin *= mepMult * 1.5;
      mepMax *= mepMult * 1.5;
    }

    if (data.propertyEra) {
      const eraMult = MULTIPLIERS.propertyEra[data.propertyEra as keyof typeof MULTIPLIERS.propertyEra] || 1.0;
      min *= eraMult;
      max *= eraMult;
      // Era affects contingency and labour
      contingencyMin *= eraMult * 1.3;
      contingencyMax *= eraMult * 1.3;
      labourMin *= eraMult * 1.1;
      labourMax *= eraMult * 1.1;
    }

    // Add options pricing
    let optionsMin = 0;
    let optionsMax = 0;
    if (data.options && data.options.length > 0) {
      data.options.forEach(optionId => {
        const optionPrice = OPTIONS_PRICING[optionId];
        if (optionPrice) {
          optionsMin += optionPrice.min;
          optionsMax += optionPrice.max;
        }
      });
    }
    min += optionsMin;
    max += optionsMax;

    // Recalculate breakdown with multipliers applied
    const baseMin = min - optionsMin;
    const baseMax = max - optionsMax;
    
    return {
      min: Math.round(min),
      max: Math.round(max),
      breakdown: {
        cabinetry: {
          min: Math.round(baseMin * cabinetryPercent),
          max: Math.round(baseMax * cabinetryPercent),
        },
        mep: {
          min: Math.round(mepMin),
          max: Math.round(mepMax),
        },
        surfaces: {
          min: Math.round(baseMin * surfacesPercent),
          max: Math.round(baseMax * surfacesPercent),
        },
        labour: {
          min: Math.round(labourMin),
          max: Math.round(labourMax),
        },
        contingency: {
          min: Math.round(contingencyMin),
          max: Math.round(contingencyMax),
        },
        options: {
          min: Math.round(optionsMin),
          max: Math.round(optionsMax),
        },
      },
    };
  };

  const priceData = calculatePrice();
  const priceRange = { min: priceData.min, max: priceData.max };
  
  // Apply VAT if needed
  const applyVAT = (amount: number): number => {
    return includeVAT ? Math.round(amount * (1 + VAT_RATE)) : amount;
  };
  
  const finalMin = applyVAT(priceRange.min);
  const finalMax = applyVAT(priceRange.max);

  const formatGBP = (n: number): string =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(n || 0);

  // Calculate programme (weeks) based on project type
  const getProgramme = (): string => {
    const programmes: Record<string, Record<string, string>> = {
      kitchen: { standard: "6-8", premium: "8-10", luxury: "10-12" },
      bathroom: { standard: "4-6", premium: "6-8", luxury: "8-10" },
      "interior-package": { standard: "12-16", premium: "16-20", luxury: "20-24" },
    };
    return programmes[data.project || ""]?.[data.finishTier || ""] || "—";
  };

  const handleEmailGuide = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
      if (hasConsent) {
        (window as any).gtag("event", "cta_email_guide_click", {
          event_category: "Pricing Guide",
          event_label: "Email me this guide",
          form_type: "pricing_result",
        });
      }
    }
    // Store pricing summary for email
    const pricingSummary = {
      project: data.project,
      finishTier: data.finishTier,
      complexity: data.complexity,
      mepIntensity: data.mepIntensity,
      propertyEra: data.propertyEra,
      options: data.options || [],
      priceRange: { min: finalMin, max: finalMax },
      breakdown: priceData.breakdown,
      programme: getProgramme(),
      includeVAT: includeVAT,
    };
    // Store in sessionStorage for contact form
    if (typeof window !== "undefined") {
      sessionStorage.setItem("pricingSummary", JSON.stringify(pricingSummary));
    }
    // Navigate to contact form - pricing summary is stored in sessionStorage
    // The contact form can retrieve it and include it in the email
    window.location.href = "/contact-us?source=pricing-guide";
  };

  const handleBookConsultation = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
      if (hasConsent) {
        (window as any).gtag("event", "cta_book_click", {
          event_category: "Pricing Guide",
          event_label: "Book consultation from result",
        });
      }
    }
    window.location.href = "/contact-us";
  };

  const handleCall = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
      if (hasConsent) {
        (window as any).gtag("event", "cta_call_click", {
          event_category: "Pricing Guide",
          event_label: "Call from result",
        });
      }
    }
    window.location.href = "tel:+1234567890";
  };

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Your guide price
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Estimated cost range
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Based on your selections. Final price subject to survey and design sign-off.
        </p>
      </div>

      {/* VAT Toggle (Admin) */}
      <div className="mb-4 flex items-center justify-end gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={includeVAT}
            onChange={(e) => setIncludeVAT(e.target.checked)}
            className="w-4 h-4 rounded border-[#4A4A4A] text-[#214B57] focus:ring-[#214B57] accent-[#214B57]"
            aria-label="Include VAT in prices"
          />
          <span className="text-sm text-[#7F8C8D] font-dm-sans">
            {includeVAT ? "Prices incl. VAT" : "Prices ex VAT"}
          </span>
        </label>
      </div>

      {/* Price Range */}
      <div className="rounded-2xl border border-[#4A4A4A] bg-white px-5 sm:px-6 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.1)] mb-6">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7F8C8D] font-dm-sans mb-2">
            Guide Price Range {includeVAT ? "(incl. VAT)" : "(ex VAT)"}
          </p>
          <p className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            {formatGBP(finalMin)} — {formatGBP(finalMax)}
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-3 border-t border-[#4A4A4A] pt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#7F8C8D] font-dm-sans">
              {data.project === "kitchen" ? "Cabinetry" : data.project === "bathroom" ? "Joinery" : "Cabinetry/Joinery"}
            </span>
            <span className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
              {formatGBP(applyVAT(priceData.breakdown.cabinetry.min))} — {formatGBP(applyVAT(priceData.breakdown.cabinetry.max))}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#7F8C8D] font-dm-sans">MEP</span>
            <span className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
              {formatGBP(applyVAT(priceData.breakdown.mep.min))} — {formatGBP(applyVAT(priceData.breakdown.mep.max))}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#7F8C8D] font-dm-sans">Surfaces/Fixtures</span>
            <span className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
              {formatGBP(applyVAT(priceData.breakdown.surfaces.min))} — {formatGBP(applyVAT(priceData.breakdown.surfaces.max))}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#7F8C8D] font-dm-sans">Labour/PM</span>
            <span className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
              {formatGBP(applyVAT(priceData.breakdown.labour.min))} — {formatGBP(applyVAT(priceData.breakdown.labour.max))}
            </span>
          </div>
          {priceData.breakdown.options.min > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#7F8C8D] font-dm-sans">Additional Options</span>
              <span className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
                {formatGBP(applyVAT(priceData.breakdown.options.min))} — {formatGBP(applyVAT(priceData.breakdown.options.max))}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#7F8C8D] font-dm-sans">Contingency</span>
            <span className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
              {formatGBP(applyVAT(priceData.breakdown.contingency.min))} — {formatGBP(applyVAT(priceData.breakdown.contingency.max))}
            </span>
          </div>
          <div className="flex justify-between items-center border-t border-[#4A4A4A] pt-3">
            <span className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">Programme</span>
            <span className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
              {getProgramme()} weeks
            </span>
          </div>
        </div>
      </div>

      {/* Micro-disclaimer */}
      <p className="text-xs text-[#7F8C8D] font-dm-sans text-center mb-6 italic">
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
            hover:bg-[#003A66] transition-all duration-150
            focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2
            active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57]
          "
          style={{ backgroundColor: '#214B57' }}
        >
          Book consultation
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleCall}
            className="
              inline-flex items-center justify-center gap-2
              min-w-[122px] min-h-[31px] px-6 py-2 rounded-md
              border border-[#4A4A4A] bg-white text-[#1D1D1D] font-normal font-dm-sans
              shadow-[0_12px_30px_rgba(0,0,0,0.05)]
              hover:bg-[#F9FAFB] transition
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
              border border-[#4A4A4A] bg-white text-[#1D1D1D] font-normal font-dm-sans
              shadow-[0_12px_30px_rgba(0,0,0,0.05)]
              hover:bg-[#F9FAFB] transition
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



