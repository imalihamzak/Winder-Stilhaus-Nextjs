"use client";

import { useState, useEffect } from "react";
import { isInServiceArea } from "./service-area-config";

interface PricingData {
  postcode?: string;
  houseNumber?: string;
  sizeSource?: string | null;
  gia?: string;
  bedroomSize?: string;
  project?: string;
  finishTier?: string;
  complexity?: string;
  mepIntensity?: string;
  propertyEra?: string;
}

interface LookupResult {
  found: boolean;
  gia?: string;
  source: string;
}

interface StepOnePostcodeProps {
  data: PricingData;
  setData: (data: PricingData) => void;
  next: () => void;
}

export default function StepOnePostcode({ data, setData, next }: StepOnePostcodeProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [lookupResult, setLookupResult] = useState<LookupResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serviceAreaCheck, setServiceAreaCheck] = useState<{ inArea: boolean; reason: string } | null>(null);
  const inputClass =
    "w-full p-3 rounded-xl bg-white border border-[#4A4A4A] text-[#1D1D1D] placeholder:text-[#7F8C8D] font-dm-sans focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60";
  const labelClass = "text-sm font-semibold text-[#1D1D1D] mb-2";

  // Check service area when postcode changes
  useEffect(() => {
    if (data.postcode && data.postcode.length >= 5) {
      const check = isInServiceArea(data.postcode);
      setServiceAreaCheck(check);
    } else {
      setServiceAreaCheck(null);
    }
  }, [data.postcode]);

  const handleLookup = async () => {
    if (!data.postcode || !data.houseNumber) return;
    
    setLoading(true);
    
    // TODO: Integrate with UPRN/EPC lookup API
    // For now, simulate lookup
    setTimeout(() => {
      // Mock: If postcode starts with LS, assume we found EPC data
      const foundEPC = data.postcode?.toUpperCase().startsWith("LS") ?? false;
      
      if (foundEPC) {
        setLookupResult({
          found: true,
          gia: "1200", // Gross Internal Area from EPC
          source: "EPC"
        });
        setData({ ...data, sizeSource: "epc", gia: "1200" });
      } else {
        setLookupResult({
          found: false,
          source: "manual"
        });
        setData({ ...data, sizeSource: "manual" });
      }
      
      setLoading(false);
    }, 1000);
  };

  const handleBedroomSelect = (bedrooms: string) => {
    setData({ ...data, bedroomSize: bedrooms });
  };

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 1
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Property location
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Enter your postcode and house number. We'll look up your property details automatically.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="postcode" className={labelClass}>
              Postcode <span className="text-red-500" aria-label="required">*</span>
            </label>
            <input
              id="postcode"
              type="text"
              placeholder="e.g., LS16 5AB"
              className={inputClass}
              value={data.postcode || ""}
              onChange={(e) => setData({ ...data, postcode: e.target.value })}
              required
              aria-required="true"
              aria-describedby="postcode-help"
            />
            <span id="postcode-help" className="sr-only">Enter your UK postcode</span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="house-number" className={labelClass}>
              House number <span className="text-red-500" aria-label="required">*</span>
            </label>
            <input
              id="house-number"
              type="text"
              placeholder="e.g., 42"
              className={inputClass}
              value={data.houseNumber || ""}
              onChange={(e) => setData({ ...data, houseNumber: e.target.value })}
              required
              aria-required="true"
              aria-describedby="house-number-help"
            />
            <span id="house-number-help" className="sr-only">Enter your house number or name</span>
          </div>
        </div>

        {data.postcode && data.houseNumber && !lookupResult && (
          <button
            onClick={handleLookup}
            disabled={loading}
            className="
              w-full
              inline-flex items-center justify-center gap-2
              min-w-[122px] min-h-[31px] px-6 py-2 rounded-md
              text-white font-normal font-dm-sans
              shadow-[0_18px_45px_rgba(0,0,0,0.1)]
              hover:bg-[#1a3d47] transition-all duration-150
              focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2
              active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57]
              disabled:bg-[#4A4A4A] disabled:text-[#7F8C8D] disabled:cursor-not-allowed
            "
            style={{ backgroundColor: '#214B57' }}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Looking up property...
              </>
            ) : (
              "Look up property"
            )}
          </button>
        )}

        {lookupResult?.found && (
          <div className="rounded-xl border border-[#4A4A4A] bg-white p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#214B57] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-[#1D1D1D] mb-1">Property found</p>
                <p className="text-sm text-[#7F8C8D]">
                  Using EPC data: Gross Internal Area (GIA) of {lookupResult.gia} sq.ft
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Service Area Banner (non-blocking) */}
        {serviceAreaCheck && !serviceAreaCheck.inArea && (
          <div className="rounded-xl border border-[#F04E22]/30 bg-[#F04E22]/5 p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#F04E22] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-[#1D1D1D] mb-1">Outside our primary service area</p>
                <p className="text-sm text-[#7F8C8D]">
                  We primarily serve areas within 22.5 miles of LS16. You can still continue, and we'll discuss service options during your consultation.
                </p>
              </div>
            </div>
          </div>
        )}

        {lookupResult && !lookupResult.found && (
          <div className="space-y-4">
          <div className="rounded-xl border border-[#4A4A4A] bg-white p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#214B57] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-[#1D1D1D] mb-1">Property not found in database</p>
                <p className="text-sm text-[#7F8C8D]">
                  Please select the number of bedrooms as a size proxy
                </p>
              </div>
            </div>
          </div>

            <div>
              <label className={labelClass} id="bedroom-size-label">
                Number of bedrooms <span className="text-red-500" aria-label="required">*</span>
              </label>
              <div className="grid grid-cols-5 gap-3" role="radiogroup" aria-labelledby="bedroom-size-label">
                {["1", "2", "3", "4", "5+"].map((bedrooms) => (
                  <button
                    key={bedrooms}
                    type="button"
                    role="radio"
                    aria-checked={data.bedroomSize === bedrooms}
                    onClick={() => handleBedroomSelect(bedrooms)}
                    className={`
                      p-4 rounded-xl border-2 transition text-center
                      ${
                        data.bedroomSize === bedrooms
                          ? "border-[#214B57] bg-[#214B57] text-white"
                          : "border-[#4A4A4A] bg-white text-[#1D1D1D] hover:border-[#214B57]/30"
                      }
                    `}
                  >
                    <p className="font-semibold text-lg">{bedrooms}</p>
                    <p className="text-xs mt-1 opacity-80">bedroom{bedrooms !== "1" ? "s" : ""}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Error messages for screen readers */}
      <div role="alert" aria-live="polite" aria-atomic="true" className="sr-only">
        {Object.values(errors).map((error, i) => (
          <span key={i}>{error}</span>
        ))}
      </div>

      {((lookupResult?.found) || (lookupResult && !lookupResult.found && data.bedroomSize)) && (
        <div className="flex justify-end">
          <button
            onClick={next}
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#1a3d47] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2 active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57] disabled:bg-[#4A4A4A] disabled:text-[#7F8C8D] disabled:cursor-not-allowed
            "
            style={{ backgroundColor: '#214B57' }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

