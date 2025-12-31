"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // ✅ Enhanced GA4 Tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_book", {
        event_category: "CTA",
        event_label: "Contact Form - Book consultation",
        value: 1,
      });

      window.gtag("event", "contact_form_submit", {
        event_category: "Form",
        event_label: "Contact Page",
        value: 1,
        service: data.service || "Not specified",
        city: data.city || "Not specified",
      });

      // Track form field interactions
      window.gtag("event", "form_start", {
        event_category: "Form",
        event_label: "Contact Page",
      });
    }

    try {
      // ✅ Push Lead to CRM
      await fetch("/api/crm-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // ✅ Auto Email + WhatsApp Trigger API
      await fetch("/api/notify-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Track successful submission
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "form_submit_success", {
          event_category: "Form",
          event_label: "Contact Page",
        });
      }
    } catch (error) {
      // Track form errors
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "form_submit_error", {
          event_category: "Form",
          event_label: "Contact Page",
        });
      }
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-white pt-0 pb-16 sm:pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.1} duration={0.6} className="mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
                Contact Us
              </div>

              <h1 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Let's build something great together.
              </h1>

              <p className="text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                Reach out to us for a consultation, quote, or any inquiries. We're
                here to help you create your dream space.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Form */}
          <FadeIn direction="right" delay={0.15} duration={0.6}>
            <div className="bg-white border border-[#e5e7eb] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 shadow-lg">
              <h2 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Send us a message
              </h2>
              <p className="text-sm sm:text-base text-[#85929D] mb-6 sm:mb-8 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                We aim to respond to all inquiries within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#214B57]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#214B57]" size={32} />
                  </div>
                  <h3 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                    Message Sent!
                  </h3>
                  <p className="text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                    Thank you for reaching out. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Error messages for screen readers */}
                  <div role="alert" aria-live="polite" aria-atomic="true" className="sr-only">
                    {Object.values(errors).map((error, i) => (
                      <span key={i}>{error}</span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                      Full Name <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={`w-full p-3 rounded-xl bg-white/80 border ${
                        errors.name ? "border-red-500" : "border-black/10"
                      } text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans`}
                    />
                    {errors.name && (
                      <span id="contact-name-error" className="text-sm text-red-500" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                      Email <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={`w-full p-3 rounded-xl bg-white/80 border ${
                        errors.email ? "border-red-500" : "border-black/10"
                      } text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans`}
                    />
                    {errors.email && (
                      <span id="contact-email-error" className="text-sm text-red-500" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-phone" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                      Phone <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      required
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                      className={`w-full p-3 rounded-xl bg-white/80 border ${
                        errors.phone ? "border-red-500" : "border-black/10"
                      } text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans`}
                    />
                    {errors.phone && (
                      <span id="contact-phone-error" className="text-sm text-red-500" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-city" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                      City <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-city"
                      name="city"
                      type="text"
                      placeholder="City"
                      required
                      aria-required="true"
                      className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-service" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                      Service Interested In
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans"
                      defaultValue=""
                    >
                    <option value="" disabled>
                      Service Interested In
                    </option>
                    <option>Full Home Design</option>
                    <option>Kitchen Renovation</option>
                    <option>Bathroom Remodeling</option>
                    <option>Living & Lounge Styling</option>
                    <option>Other</option>
                  </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22] disabled:bg-[#CED3D7] disabled:text-[#85929D] disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#F04E22' }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="left" delay={0.2} duration={0.6}>
            <div className="space-y-6">
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#214B57] mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  Our Details
                </h3>
                <div className="space-y-4 text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  <p className="flex items-center gap-3">
                    <Phone className="text-[#F04E22] flex-shrink-0" size={20} />
                    <a href="tel:+923001234567" className="hover:text-[#214B57] transition break-all">
                      +92 300 1234567
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="text-[#F04E22] flex-shrink-0" size={20} />
                    <a href="mailto:info@luxuryinteriors.com" className="hover:text-[#214B57] transition break-all">
                      info@luxuryinteriors.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3 mt-6 pt-6 border-t border-[#e5e7eb]">
                    <Clock className="text-[#F04E22] flex-shrink-0" size={20} />
                    <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

