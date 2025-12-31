"use client";
import { useState, useEffect } from "react";
import StepOnePostcode from "./step-one-postcode";
import StepTwoProject from "./step-two-project";
import StepThreeServices from "./step-three-services";
import PricingResult from "./pricing-result";
import PricingLeadForm from "./pricing-lead-form";
import FadeIn from "@/components/FadeIn";

export default function InstantPricingGuide() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    postcode: "",
    houseNumber: "",
    sizeSource: null, // "epc" or "manual"
    gia: "",
    bedroomSize: "", // "Small", "Medium", "Large"
    project: "", // "kitchen", "bathroom", "full-home"
    finishTier: "", // "entry", "mid", "premium"
    complexity: "", // "standard", "reconfigure", "structural"
    mepIntensity: "medium", // "medium" or "advanced" (default: medium)
    propertyEra: "", // "period", "90s-00s", "new-build"
  });

  const steps = [
    "Property",
    "Project",
    "Details",
    "Estimate",
    "Proposal",
  ];

  // Track pricing_start when component mounts
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "pricing_start", {
        event_category: "Pricing Guide",
        event_label: "User started pricing guide",
      });
    }
  }, []);

  // Track pricing_step when step changes
  useEffect(() => {
    if (step > 1 && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "pricing_step", {
        event_category: "Pricing Guide",
        event_label: `Step ${step}: ${steps[step - 1]}`,
        step_number: step,
        step_name: steps[step - 1],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const next = () => {
    const newStep = Math.min(step + 1, 5);
    setStep(newStep);
    
    // Track pricing_complete when reaching final step
    if (newStep === 5 && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "pricing_complete", {
        event_category: "Pricing Guide",
        event_label: "User completed pricing guide",
      });
    }
  };
  
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section id="pricing-guide" className="bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-12 md:py-16">
        {/* Heading */}
        <FadeIn className="text-center mb-8 md:mb-10 px-2">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Smart Costing
            </span>
            <span className="text-xs sm:text-sm text-[#85929D] font-dm-sans">
              Instant range • Transparent inputs • No obligation
            </span>
          </div>

          <h2 id="pricing-guide-heading" className="mt-4 text-[#214B57] font-noto-serif max-w-2xl mx-auto" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            Instant Pricing Guide
          </h2>

          <p className="mt-3 text-[#85929D] max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1.25rem, 2vw, 2.67rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            Get an instant, tailored cost range with a few quick inputs. Clean,
            professional, and consistent with your homepage style.
          </p>
        </FadeIn>

        {/* Stepper */}
        <FadeIn className="max-w-5xl mx-auto mb-6 sm:mb-8">
          <div className="rounded-[22px] border border-black/10 bg-white/45 backdrop-blur px-4 sm:px-6 py-4 shadow-[0_18px_45px_rgba(26,29,41,0.04)]">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {steps.map((label, idx) => {
                const stepNumber = idx + 1;
                const isActive = stepNumber === step;
                const isDone = stepNumber < step;

                return (
                  <div
                    key={label}
                    className="flex-1 flex items-center gap-3 sm:gap-4"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border
                        ${
                          isActive
                            ? "bg-[#214B57] text-white border-[#214B57] shadow-[0_14px_35px_rgba(33,75,87,0.08)]"
                            : isDone
                            ? "bg-white text-[#214B57] border-black/10"
                            : "bg-white/70 text-[#85929D] border-black/10"
                        }`}
                    >
                      {isDone ? "✓" : stepNumber}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-[10px] sm:text-xs font-semibold tracking-[-0.01em] truncate font-dm-sans ${
                          isActive ? "text-[#214B57]" : "text-[#85929D]"
                        }`}
                      >
                        {label}
                      </p>

                      <div className="mt-1 h-1.5 w-full rounded-full bg-black/5 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isDone
                              ? "w-full bg-[#214B57]"
                              : isActive
                              ? "w-2/5 bg-[#214B57]"
                              : "w-0 bg-transparent"
                          }`}
                        />
                      </div>
                    </div>

                    {stepNumber !== steps.length && (
                      <div className="hidden sm:block h-px bg-black/10 flex-1" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Main card */}
        <FadeIn className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/55 backdrop-blur shadow-[0_30px_90px_rgba(15,22,36,0.05)] p-5 sm:p-6 md:p-10">
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
                  <StepThreeServices
                    data={data}
                    setData={setData}
                    next={next}
                    back={back}
                  />
                </div>
              )}
              {step === 4 && (
                <div key="step4">
                  <PricingResult data={data} next={next} />
                </div>
              )}
              {step === 5 && (
                <div key="step5">
                  <PricingLeadForm />
                </div>
              )}
            </div>
          </div>

          {/* small footer hint */}
          <p className="mt-4 text-center text-xs text-[#85929D] font-dm-sans">
            Tip: Estimates vary by materials, site conditions, and finish level.
            We’ll confirm after a quick consultation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
