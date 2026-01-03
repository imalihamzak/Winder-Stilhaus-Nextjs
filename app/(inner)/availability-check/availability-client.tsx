"use client";

import { useState, FormEvent, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import { isWithinServiceArea } from "@/lib/postcode-checker";

interface ServiceArea {
  city: string;
  postcodes: string[];
}

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

type Status = "available" | "soft-gate" | null;

export default function PostcodeGatePageClient() {
  const router = useRouter();
  const [postcode, setPostcode] = useState<string>("");
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [leadSaved, setLeadSaved] = useState<boolean>(false);

  const checkAvailability = async () => {
    if (!postcode) return;
    setLoading(true);

    const { inArea, outcode } = isWithinServiceArea(postcode);

    // Track postcode check
    if (typeof window !== "undefined" && (window as any).gtag) {
      const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
      if (hasConsent) {
        (window as any).gtag("event", "postcode_gate_checked", {
          event_category: "Availability Checker",
          event_label: `Postcode checked: ${postcode}`,
          postcode: postcode,
          in_area: inArea,
          outcode: outcode,
        });
      }
    }

    setTimeout(() => {
      if (inArea) {
        setStatus("available");
        setTimeout(() => {
          router.push(`/location/leeds`);
        }, 2000);
      } else {
        setStatus("soft-gate");
        
        if (typeof window !== "undefined" && (window as any).gtag) {
          const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
          if (hasConsent) {
            (window as any).gtag("event", "postcode_gate_blocked", {
              event_category: "Availability Checker",
              event_label: `Postcode soft-gated: ${postcode}`,
              postcode: postcode,
              reason: "outside_radius_or_not_in_allow_list",
            });
          }
        }
      }
      setLoading(false);
    }, 800);
  };

  const handleLeadSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "postcode_gate_lead_submit", {
        event_category: "Availability Checker",
        event_label: `Waitlist signup for postcode: ${postcode}`,
        postcode: postcode,
        email: data.email,
      });
    }

    await fetch("/api/postcode-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postcode, ...data }),
    });

    setLeadSaved(true);
  };

  const serviceAreas: ServiceArea[] = [
    { city: "Leeds", postcodes: ["LS1", "LS2", "LS16", "LS29"] },
    { city: "Harrogate", postcodes: ["HG1", "HG2", "HG3"] },
    { city: "Bradford", postcodes: ["BD1", "BD2", "BD10"] },
    { city: "Wakefield", postcodes: ["WF1", "WF2", "WF10"] },
    { city: "Huddersfield", postcodes: ["HD1", "HD2", "HD3"] },
  ];

  const benefits: Benefit[] = [
    {
      icon: "✓",
      title: "Free Site Inspection",
      desc: "Complimentary on-site assessment of your property",
    },
    {
      icon: "✓",
      title: "Expert Design Consultation",
      desc: "One-on-one consultation with our interior design specialists",
    },
    {
      icon: "✓",
      title: "Premium Materials",
      desc: "Access to exclusive luxury materials and finishes",
    },
    {
      icon: "✓",
      title: "Turnkey Solutions",
      desc: "Complete design and build services from concept to completion",
    },
  ];

  return (
    <section className="bg-white min-h-screen pt-0 pb-16 sm:pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Hero Section */}
        <FadeIn direction="up" delay={0.1} duration={0.6}>
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F06434' }}></span>
              Service Coverage Checker
            </div>
            <h1 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Check Service Availability
            </h1>
            <p className="text-[#85929D] max-w-3xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              Verify if our premium interior design and renovation services are available in your area. 
              Enter your postcode to get instant access to our expert team and exclusive services.
            </p>
          </div>
        </FadeIn>

        {/* Main Checker Card */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Left Column - Checker with Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <FadeIn direction="right" delay={0.15} duration={0.6}>
              <div className="bg-white border border-[#e5e7eb] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 shadow-lg">
                <h2 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  Enter Your Postcode
                </h2>
                <p className="text-sm sm:text-base text-[#85929D] mb-6 sm:mb-8 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  We'll instantly check if we serve your location
                </p>

                {/* Input Section */}
                {status === null && (
                  <div key="input" className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <input
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                        placeholder="e.g., LS16 6AB"
                        className="flex-1 p-3 rounded-xl bg-white border border-[#4A4A4A] text-[#1D1D1D] placeholder:text-[#7F8C8D] font-dm-sans focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60"
                        onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                          if (e.key === "Enter") {
                            checkAvailability();
                          }
                        }}
                      />
                      <button
                        onClick={checkAvailability}
                        disabled={loading || !postcode}
                        className="w-full sm:w-auto min-w-[122px] min-h-[31px] px-6 py-2 rounded-md text-white text-sm font-normal font-dm-sans hover:bg-[#1a3d47] transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:ring-offset-1 active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57] disabled:bg-[#4A4A4A] disabled:text-[#7F8C8D] disabled:cursor-not-allowed whitespace-nowrap"
                        style={{ backgroundColor: '#214B57' }}
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Checking...
                          </span>
                        ) : (
                          "Check Now"
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-[#6c6f7a]">
                      Enter a UK postcode (e.g., LS16 6AB) to check availability
                    </p>
                  </div>
                )}

                {/* Available Result */}
                {status === "available" && (
                  <div key="available" className="text-center py-8">
                    <div className="inline-block mb-6">
                      <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                      Service Available in Your Area!
                    </h3>
                    <p className="text-[#85929D] text-base sm:text-lg mb-6 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                      Great news! We provide premium interior design services in your location.
                    </p>
                    <p className="text-sm text-[#6c6f7a]">
                      Redirecting you to your local service page...
                    </p>
                  </div>
                )}

                {/* Soft-gate Result */}
                {status === "soft-gate" && !leadSaved && (
                  <div key="soft-gate" className="py-8">
                    <div className="inline-block mb-6">
                      <div className="w-20 h-20 rounded-full bg-amber-50 border-4 border-amber-100 flex items-center justify-center">
                        <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-semibold text-[#214B57] mb-3 text-center font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                      You may be outside our working area
                    </h3>
                    <p className="text-[#85929D] mb-6 sm:mb-8 text-center text-base sm:text-lg font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                      We primarily serve the Leeds area and a 22.5-mile radius. For projects outside this, please contact us directly to check.
                    </p>

                    <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-md mx-auto">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="availability-name" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                          Full Name <span className="text-red-500" aria-label="required">*</span>
                        </label>
                        <input
                          id="availability-name"
                          name="name"
                          type="text"
                          required
                          aria-required="true"
                          placeholder="Full Name"
                          className="w-full p-4 rounded-xl bg-white border-2 border-[#e5e7eb] text-[#1D1D1D] placeholder:text-[#85929D] outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-[#214B57] transition font-dm-sans"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="availability-phone" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                          Phone Number <span className="text-red-500" aria-label="required">*</span>
                        </label>
                        <input
                          id="availability-phone"
                          name="phone"
                          required
                          type="tel"
                          aria-required="true"
                          placeholder="Phone Number"
                          className="w-full p-4 rounded-xl bg-white border-2 border-[#e5e7eb] text-[#1D1D1D] placeholder:text-[#85929D] outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-[#214B57] transition font-dm-sans"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="availability-email" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                          Email Address <span className="text-red-500" aria-label="required">*</span>
                        </label>
                        <input
                          id="availability-email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          placeholder="Email Address"
                          className="w-full p-4 rounded-xl bg-white border-2 border-[#e5e7eb] text-[#1D1D1D] placeholder:text-[#85929D] outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-[#214B57] transition font-dm-sans"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full min-w-[122px] min-h-[31px] py-2 rounded-md bg-white border border-[#214B57] text-[#214B57] font-normal font-dm-sans shadow-[0_18px_45px_rgba(26,29,41,0.08)] hover:bg-[#214B57] hover:text-white hover:border-[#F06434] hover:border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2 active:bg-[#214B57] active:text-white active:border-[#F06434] active:border-2"
                      >
                        Contact us to check coverage
                      </button>
                    </form>
                  </div>
                )}

                {/* Confirmation for soft-gate lead */}
                {leadSaved && status === "soft-gate" && (
                  <div key="soft-gate-confirmation" className="text-center py-8">
                    <div className="inline-block mb-6">
                      <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                      Thank you!
                    </h3>
                    <p className="text-[#85929D] text-lg font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                      We've received your details and will be in touch shortly to discuss your project.
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Service Benefits */}
            <FadeIn direction="up" delay={0.2} duration={0.6}>
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#214B57] mb-6 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  What You Get
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#214B57' }}>
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#214B57] mb-1 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Info */}
          <FadeIn direction="left" delay={0.2} duration={0.6}>
            <div className="space-y-6">
              {/* Service Areas */}
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#214B57] mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  Current Service Areas
                </h3>
                <div className="space-y-3">
                  {serviceAreas.map((area, i) => (
                    <div key={i} className="pb-3 border-b border-[#e5e7eb] last:border-0 last:pb-0">
                      <p className="font-semibold text-[#214B57] mb-1 font-dm-sans">{area.city}</p>
                      <p className="text-sm text-[#85929D] font-dm-sans">
                        Postcodes: {area.postcodes.slice(0, 3).join(", ")}
                        {area.postcodes.length > 3 && " + more"}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#85929D] mt-4 font-dm-sans">
                  We're continuously expanding. Check back regularly for updates.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: '#214B57' }}>
                <h3 className="font-semibold mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  Need Help?
                </h3>
                <p className="text-white/80 text-sm mb-4 font-dm-sans">
                  Have questions about service availability or coverage areas?
                </p>
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 min-w-[122px] min-h-[31px] px-5 py-2 rounded-md bg-white border border-[#214B57] text-[#214B57] font-normal font-dm-sans text-sm hover:bg-[#214B57] hover:text-white hover:border-[#F06434] hover:border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2 active:bg-[#214B57] active:text-white active:border-[#F06434] active:border-2"
                >
                  Contact Support
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Additional Info Section */}
        <FadeIn direction="up" delay={0.3} duration={0.6}>
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-semibold text-[#214B57] mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  Why Check Availability?
                </h2>
                <p className="text-[#85929D] text-lg leading-relaxed mb-6 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  Our service coverage ensures that we can provide the highest quality interior design 
                  and renovation services with our expert teams and premium materials. By checking 
                  availability, you ensure access to our full range of services including on-site 
                  consultations, material sourcing, and project management.
                </p>
                <ul className="space-y-3">
                  {[
                    "Guaranteed service quality and support",
                    "Access to local design specialists",
                    "Premium material sourcing in your area",
                    "Dedicated project management team",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#F06434] font-bold mt-1">✓</span>
                      <span className="text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#214B57] mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>Service Coverage</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#85929D] font-dm-sans">Major Cities</span>
                      <span className="text-sm font-semibold text-[#214B57] font-dm-sans">3+</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-2">
                      <div className="h-2 rounded-full" style={{ width: "60%", backgroundColor: '#214B57' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#85929D] font-dm-sans">Service Areas</span>
                      <span className="text-sm font-semibold text-[#214B57] font-dm-sans">15+</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-2">
                      <div className="h-2 rounded-full" style={{ width: "75%", backgroundColor: '#214B57' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#85929D] font-dm-sans">Projects Completed</span>
                      <span className="text-sm font-semibold text-[#214B57] font-dm-sans">500+</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-2">
                      <div className="h-2 rounded-full" style={{ width: "90%", backgroundColor: '#214B57' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

