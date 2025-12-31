"use client";

import { useState } from "react";

export default function StepOnePostcode({ data, setData, next }) {
  const [loading, setLoading] = useState(false);
  const [lookupResult, setLookupResult] = useState(null);
  const [errors, setErrors] = useState({});
  const inputClass =
    "w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#214B57] placeholder:text-[#85929D] font-dm-sans focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20";
  const labelClass = "text-sm font-semibold text-[#214B57] mb-2";

  const handleLookup = async () => {
    if (!data.postcode || !data.houseNumber) return;
    
    setLoading(true);
    
    // TODO: Integrate with UPRN/EPC lookup API
    // For now, simulate lookup
    setTimeout(() => {
      // Mock: If postcode starts with LS, assume we found EPC data
      const foundEPC = data.postcode.toUpperCase().startsWith("LS");
      
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

  const handleBedroomSelect = (size) => {
    setData({ ...data, bedroomSize: size });
  };

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#85929D] font-dm-sans mb-2">
          Step 1
        </p>
        <h2 className="text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Property location
        </h2>
        <p className="text-[#85929D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
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
              shadow-[0_18px_45px_rgba(26,29,41,0.08)]
              hover:bg-[#214B57] transition-all duration-150
              active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]
              disabled:bg-[#CED3D7] disabled:text-[#85929D] disabled:cursor-not-allowed
            "
            style={{ backgroundColor: '#F04E22' }}
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
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-[#214B57] mb-1">Property found</p>
                <p className="text-sm text-[#85929D]">
                  Using EPC data: Gross Internal Area (GIA) of {lookupResult.gia} sq.ft
                </p>
              </div>
            </div>
          </div>
        )}

        {lookupResult && !lookupResult.found && (
          <div className="space-y-4">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-[#214B57] mb-1">Property not found in database</p>
                  <p className="text-sm text-[#85929D]">
                    Please select the approximate size of your property
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass} id="bedroom-size-label">
                Property size (by bedrooms) <span className="text-red-500" aria-label="required">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3" role="radiogroup" aria-labelledby="bedroom-size-label">
                {["Small", "Medium", "Large"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    role="radio"
                    aria-checked={data.bedroomSize === size}
                    onClick={() => handleBedroomSelect(size)}
                    className={`
                      p-4 rounded-xl border-2 transition
                      ${
                        data.bedroomSize === size
                          ? "border-[#214B57] bg-[#214B57] text-white"
                          : "border-black/10 bg-white/80 text-[#214B57] hover:border-[#214B57]/30"
                      }
                    `}
                  >
                    <p className="font-semibold">{size}</p>
                    <p className="text-xs mt-1 opacity-80">
                      {size === "Small" ? "1-2 bed" : size === "Medium" ? "3-4 bed" : "5+ bed"}
                    </p>
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
              min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22] disabled:bg-[#CED3D7] disabled:text-[#85929D] disabled:cursor-not-allowed
            "
            style={{ backgroundColor: '#F04E22' }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

