"use client";

import { useState, FormEvent } from "react";

export default function PricingLeadForm() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const inputClass =
    "w-full p-3 rounded-xl bg-white border border-[#4A4A4A] text-[#1D1D1D] placeholder:text-[#7F8C8D] font-dm-sans focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Track cta_email_guide_click and form_submit_pricing events
    if (typeof window !== "undefined" && (window as any).gtag) {
      const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
      if (hasConsent) {
        (window as any).gtag("event", "cta_email_guide_click", {
          event_category: "Pricing Guide",
          event_label: "Email me this guide",
          form_type: "pricing_guide_proposal",
        });
        
        (window as any).gtag("event", "form_submit_pricing", {
          event_category: "Form",
          event_label: "Pricing guide form submitted",
        });
      }
    }

    // TODO: Submit to API endpoint
    // await fetch("/api/pricing-lead", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-[#214B57]/10 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-[#214B57]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold font-noto-serif text-[#1D1D1D] mb-2">
          Thank you!
        </h3>
        <p className="text-[#7F8C8D] font-dm-sans">
          We'll send your detailed proposal to your email shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-7">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7F8C8D] font-dm-sans mb-2">
          Step 5
        </p>
        <h2 className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Request a detailed proposal
        </h2>
        <p className="text-[#7F8C8D] mt-2 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Share your details to receive a tailored proposal and a consultation
          slot. We'll reply within 24 hours.
        </p>
      </div>

      {/* Error messages for screen readers */}
      <div role="alert" aria-live="polite" aria-atomic="true" className="sr-only">
        {submitted && "Form submitted successfully"}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
            Full Name <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={inputClass}
            placeholder="Full Name"
            required
            aria-required="true"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
            Email <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={inputClass}
            placeholder="Email"
            required
            aria-required="true"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
            Phone <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="Phone"
            required
            aria-required="true"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="text-sm font-semibold text-[#1D1D1D] font-dm-sans">
            City <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            className={inputClass}
            placeholder="City"
            required
            aria-required="true"
          />
        </div>
      </div>

      <button
        type="submit"
        className="
          w-full sm:w-auto
          inline-flex items-center justify-center gap-2
          min-w-[122px] min-h-[31px] px-10 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#183941] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2 active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57]
        "
        style={{ backgroundColor: '#214B57' }}
      >
        Submit & get proposal →
      </button>

      <p className="mt-3 text-xs text-[#7F8C8D] font-dm-sans">
        By submitting, you agree to be contacted about your estimate and
        consultation.
      </p>
    </form>
  );
}

