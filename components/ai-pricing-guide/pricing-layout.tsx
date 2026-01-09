"use client";
import { useState, useEffect } from "react";
import StepOnePostcode from "./step-one-postcode";
import StepTwoProject from "./step-two-project";
import StepThreePropertyEra from "./step-three-property-era";
import StepFourFinishTier from "./step-four-finish-tier";
import StepFiveComplexity from "./step-five-complexity";
import StepSixMEP from "./step-six-mep";
import StepSevenOptions from "./step-seven-options";
import PricingResult from "./pricing-result";
import PricingLeadForm from "./pricing-lead-form";
import FadeIn from "@/components/FadeIn";
import { PricingData } from "./types";

export default function InstantPricingGuide() {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<PricingData>({
    postcode: "",
    houseNumber: "",
    sizeSource: null, // "epc" or "manual"
    gia: "",
    bedroomSize: "", // "1", "2", "3", "4", "5+"
    project: "", // "kitchen", "bathroom", "interior-package"
    propertyEra: "", // "pre-1945", "1945-1999", "2000+"
    finishTier: "", // "standard", "premium", "luxury"
    complexity: "", // "standard", "reconfigure", "structural"
    mepIntensity: "medium", // "light", "medium", "heavy" (default: medium)
    options: [], // Array of selected adders
  });

  const steps = [
    "Address",
    "Project",
    "Property Era",
    "Finish",
    "Complexity",
    "MEP",
    "Options",
    "Results",
  ];

  // Track pricing_start when component mounts
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
      if (hasConsent) {
        (window as any).gtag("event", "pricing_start", {
          event_category: "Pricing Guide",
          event_label: "User started pricing guide",
        });
      }
    }
  }, []);

  // Track pricing_step_complete when step changes
  useEffect(() => {
    if (step > 1 && typeof window !== "undefined" && (window as any).gtag) {
      const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
      if (hasConsent) {
        (window as any).gtag("event", "pricing_step_complete", {
          event_category: "Pricing Guide",
          event_label: `Step ${step}: ${steps[step - 1]}`,
          step_number: step,
          step_name: steps[step - 1],
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const next = () => {
    const newStep = Math.min(step + 1, 8);
    setStep(newStep);
    
    // Track pricing_complete when reaching results step
    if (newStep === 8 && typeof window !== "undefined" && (window as any).gtag) {
      const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
      if (hasConsent) {
        (window as any).gtag("event", "pricing_complete", {
          event_category: "Pricing Guide",
          event_label: "User completed pricing guide",
        });
      }
    }
  };
  
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section id="pricing-guide" className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(180deg, #214B57 0%, #183941 100%)' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-12 md:py-16">
        {/* Heading */}
        <FadeIn className="text-center mb-8 md:mb-10 px-2">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] uppercase tracking-[0.32em] text-white font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Smart Costing
            </span>
            <span className="text-xs sm:text-sm text-white/80 font-dm-sans">
              Instant range • Transparent inputs • No obligation
            </span>
          </div>

          <h2 id="pricing-guide-heading" className="mt-4 text-white font-noto-serif max-w-2xl mx-auto" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.17rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
            Instant Pricing Guide
          </h2>

          <p className="mt-3 text-white/90 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1.25rem, 2vw, 2.67rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
            Get an instant, tailored cost range with a few quick inputs. Clean,
            professional, and consistent with your homepage style.
          </p>
        </FadeIn>

        {/* Stepper - Compact Professional Design */}
        <FadeIn className="max-w-6xl mx-auto mb-6 sm:mb-8">
          <div className="rounded-xl border border-[#4A4A4A]/30 bg-white px-4 sm:px-6 py-4 shadow-sm">
            {/* Desktop: Compact horizontal layout */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Progress line background - from step 1 center to step 8 center */}
                <div className="absolute top-4 h-[1px] bg-[#4A4A4A]/15 z-0" style={{ 
                  left: '6.25%', // Center of first step (1/16 of width)
                  width: '87.5%' // From step 1 center to step 8 center (14/16 = 87.5%)
                }} />
                {/* Progress line fill - smooth transition, stops at step 8 center */}
                <div 
                  className="absolute top-4 h-[1px] bg-[#214B57] z-0 transition-all duration-500"
                  style={{ 
                    left: '6.25%',
                    width: step === steps.length 
                      ? '87.5%' // Full width when on last step
                      : `calc(87.5% * ${((step - 1) / (steps.length - 1))})`
                  }}
                />
                
                <div className="relative flex items-start justify-between">
                  {steps.map((label, idx) => {
                    const stepNumber = idx + 1;
                    const isActive = stepNumber === step;
                    const isDone = stepNumber < step;

                    return (
                      <div key={label} className="relative flex flex-col items-center flex-1">
                        {/* Step Circle - smaller and more refined */}
                        <div
                          style={{
                            ["--ws-ring-outer" as any]: isActive || isDone ? "rgba(33, 75, 87, 0.40)" : "rgba(74, 74, 74, 0.22)",
                            ["--ws-ring-inner" as any]: isActive || isDone ? "rgba(33, 75, 87, 0.18)" : "rgba(74, 74, 74, 0.12)",
                          }}
                          className={`relative z-10 w-8 h-8 rounded-full ws-double-ring ws-double-ring--tight flex items-center justify-center text-xs font-semibold transition-all mb-1.5
                            ${
                              isActive
                                ? "bg-[#214B57] text-white shadow-sm"
                                : isDone
                                ? "bg-white text-[#214B57]"
                                : "bg-white text-[#85929D]"
                            }`}
                        >
                          {isDone ? (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            stepNumber
                          )}
                        </div>
                        {/* Step Label - compact text */}
                        <p
                          className={`text-center leading-tight font-dm-sans ${
                            isActive ? "text-[#214B57] font-semibold" : isDone ? "text-[#214B57]" : "text-[#85929D]"
                          }`}
                          style={{ 
                            maxWidth: '80px',
                            lineHeight: '1.2',
                            fontSize: '0.75rem', // 12px
                            fontWeight: 500
                          }}
                        >
                          {label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile: Compact horizontal with scroll */}
            <div className="md:hidden">
              <div className="relative">
                {/* Progress line background - from step 1 center to step 8 center */}
                <div className="absolute top-3.5 h-[1px] bg-[#4A4A4A]/15 z-0" style={{ 
                  left: '14px', // Approximate center of first step circle
                  width: 'calc(100% - 28px)' // From step 1 center to step 8 center
                }} />
                {/* Progress line fill - stops at step 8 center */}
                <div 
                  className="absolute top-3.5 h-[1px] bg-[#214B57] z-0 transition-all duration-500"
                  style={{ 
                    left: '14px',
                    width: step === steps.length
                      ? 'calc(100% - 28px)' // Full width when on last step
                      : `calc((100% - 28px) * ${((step - 1) / (steps.length - 1))})`
                  }}
                />
                
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {steps.map((label, idx) => {
                    const stepNumber = idx + 1;
                    const isActive = stepNumber === step;
                    const isDone = stepNumber < step;

                    return (
                      <div key={label} className="flex items-center flex-shrink-0">
                        <div className="flex flex-col items-center min-w-[50px]">
                          <div
                            style={{
                              ["--ws-ring-outer" as any]: isActive || isDone ? "rgba(33, 75, 87, 0.40)" : "rgba(74, 74, 74, 0.22)",
                              ["--ws-ring-inner" as any]: isActive || isDone ? "rgba(33, 75, 87, 0.18)" : "rgba(74, 74, 74, 0.12)",
                            }}
                            className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold border transition-all
                              ${
                                isActive
                                  ? "bg-[#214B57] text-white ws-double-ring ws-double-ring--tight shadow-sm border-transparent"
                                  : isDone
                                  ? "bg-white text-[#214B57] ws-double-ring ws-double-ring--tight border-transparent"
                                  : "bg-white text-[#85929D] ws-double-ring ws-double-ring--tight border-transparent"
                              }`}
                          >
                            {isDone ? (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              stepNumber
                            )}
                          </div>
                          <p
                            className={`mt-1 text-center leading-tight font-dm-sans ${
                              isActive ? "text-[#214B57] font-semibold" : isDone ? "text-[#214B57]" : "text-[#85929D]"
                            }`}
                            style={{
                              fontSize: '0.6875rem', // 11px
                              fontWeight: 500
                            }}
                          >
                            {label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Main card */}
        <FadeIn className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[28px] border border-[#4A4A4A] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)] p-6 sm:p-8 md:p-12">
            {/* subtle shine */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />

            <div className="relative">
              {step === 1 && (
                <div key="step1">
                  <StepOnePostcode data={data} setData={setData} next={next} />
                </div>
              )}
              {step === 2 && (
                <div key="step2">
                  <StepTwoProject
                    data={data}
                    setData={setData}
                    next={next}
                    back={back}
                  />
                </div>
              )}
              {step === 3 && (
                <div key="step3">
                  <StepThreePropertyEra
                    data={data}
                    setData={setData}
                    next={next}
                    back={back}
                  />
                </div>
              )}
              {step === 4 && (
                <div key="step4">
                  <StepFourFinishTier
                    data={data}
                    setData={setData}
                    next={next}
                    back={back}
                  />
                </div>
              )}
              {step === 5 && (
                <div key="step5">
                  <StepFiveComplexity
                    data={data}
                    setData={setData}
                    next={next}
                    back={back}
                  />
                </div>
              )}
              {step === 6 && (
                <div key="step6">
                  <StepSixMEP
                    data={data}
                    setData={setData}
                    next={next}
                    back={back}
                  />
                </div>
              )}
              {step === 7 && (
                <div key="step7">
                  <StepSevenOptions
                    data={data}
                    setData={setData}
                    next={next}
                    back={back}
                  />
                </div>
              )}
              {step === 8 && (
                <div key="step8">
                  <PricingResult data={data} next={next} />
                </div>
              )}
            </div>
          </div>

          {/* small footer hint */}
          <p className="mt-4 text-center text-xs text-[#85929D] font-dm-sans">
            Tip: Estimates vary by materials, site conditions, and finish level.
            We'll confirm after a quick consultation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

