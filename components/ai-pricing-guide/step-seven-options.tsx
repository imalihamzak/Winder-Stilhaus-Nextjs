"use client";

import { useState } from "react";
import { PricingStepProps } from "./types";

const AVAILABLE_OPTIONS = [
  { id: "underfloor-heating", label: "Underfloor heating", description: "Add underfloor heating system" },
  { id: "smart-home", label: "Smart home integration", description: "Smart lighting, heating, and security systems" },
  { id: "bespoke-joinery", label: "Bespoke joinery", description: "Custom built-in storage and furniture" },
  { id: "premium-appliances", label: "Premium appliances", description: "High-end kitchen or bathroom appliances" },
  { id: "luxury-fixtures", label: "Luxury fixtures", description: "Premium taps, fittings, and hardware" },
  { id: "acoustic-treatment", label: "Acoustic treatment", description: "Soundproofing and acoustic panels" },
  { id: "home-cinema", label: "Home cinema", description: "Dedicated media room setup" },
  { id: "wine-storage", label: "Wine storage", description: "Climate-controlled wine storage solution" },
];

export default function StepSevenOptions({ data, setData, next, back }: PricingStepProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(data.options || []);

  const toggleOption = (optionId: string) => {
    const newOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter(id => id !== optionId)
      : [...selectedOptions, optionId];
    setSelectedOptions(newOptions);
    setData({ ...data, options: newOptions });
  };

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 7
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Additional options
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Select any additional features or upgrades you'd like to include (optional).
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {AVAILABLE_OPTIONS.map((option) => {
          const isSelected = selectedOptions.includes(option.id);
          return (
            <label
              key={option.id}
              className={`
                flex items-center justify-between gap-4 rounded-2xl border-2 p-4 cursor-pointer transition
                ${
                  isSelected
                    ? "border-[#214B57] bg-[#214B57]/5"
                    : "border-[#4A4A4A] bg-white hover:border-[#214B57]/30"
                }
              `}
            >
              <div className="flex-1">
                <p className="font-semibold text-[#1D1D1D]">{option.label}</p>
                <p className="text-sm text-[#7F8C8D]">{option.description}</p>
              </div>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleOption(option.id)}
                className="w-5 h-5 rounded border-[#4A4A4A] text-[#214B57] focus:ring-[#214B57] accent-[#214B57]"
                aria-label={`Select ${option.label}`}
              />
            </label>
          );
        })}
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
            min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#1a3d47] transition-all duration-150
            focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2
            active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57]
          "
          style={{ backgroundColor: '#214B57' }}
        >
          View estimate →
        </button>
      </div>
    </div>
  );
}

