"use client";

import { useState, FormEvent } from "react";
import FadeIn from "@/components/FadeIn";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Inline validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "email":
        if (!value) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return "";
      case "phone":
        if (!value) return "Phone is required";
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.replace(/\D/g, "").length < 10) {
          return "Please enter a valid phone number";
        }
        return "";
      case "name":
        if (!value) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
      case "postcode":
        if (!value) return "Postcode is required";
        const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i;
        if (!postcodeRegex.test(value)) return "Please enter a valid UK postcode";
        return "";
      case "city":
        if (!value) return "City is required";
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const newErrors: Record<string, string> = {};
    
    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key] as string);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstErrorField = document.querySelector(`[name="${Object.keys(newErrors)[0]}"]`) as HTMLElement;
      if (firstErrorField) {
        firstErrorField.focus();
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    
    setLoading(true);

    // ✅ Enhanced GA4 Tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "cta_book", {
        event_category: "CTA",
        event_label: "Contact Form - Book consultation",
        value: 1,
      });

      const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
      if (hasConsent) {
        (window as any).gtag("event", "form_submit_contact", {
        event_category: "Form",
        event_label: "Contact Page",
        value: 1,
        service: data.service || "Not specified",
        city: data.city || "Not specified",
      });
      }

      // Track form field interactions
      (window as any).gtag("event", "form_start", {
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
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "form_submit_success", {
          event_category: "Form",
          event_label: "Contact Page",
        });
      }
    } catch (error) {
      // Track form errors
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "form_submit_error", {
          event_category: "Form",
          event_label: "Contact Page",
        });
      }
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-[#1D1D1D] pt-0 pb-16 sm:pb-20 md:pb-24 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.1} duration={0.6} className="mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
                Contact Us
              </div>

              <h1 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
                Let's build something great together.
              </h1>

              <p className="text-white/90 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
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
              <h2 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-xl bg-white/80 border ${
                        errors.name ? "border-red-500" : "border-black/10"
                      } text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans`}
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-xl bg-white/80 border ${
                        errors.email ? "border-red-500" : "border-black/10"
                      } text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans`}
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-xl bg-white/80 border ${
                        errors.phone ? "border-red-500" : "border-black/10"
                      } text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans`}
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
                      aria-invalid={errors.city ? "true" : "false"}
                      aria-describedby={errors.city ? "contact-city-error" : undefined}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-xl bg-white/80 border ${
                        errors.city ? "border-red-500" : "border-black/10"
                      } text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans`}
                    />
                    {errors.city && (
                      <span id="contact-city-error" className="text-sm text-red-500" role="alert">
                        {errors.city}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-postcode" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                      Postcode <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-postcode"
                      name="postcode"
                      type="text"
                      placeholder="Postcode"
                      required
                      aria-required="true"
                      aria-invalid={errors.postcode ? "true" : "false"}
                      aria-describedby={errors.postcode ? "contact-postcode-error" : undefined}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-xl bg-white/80 border ${
                        errors.postcode ? "border-red-500" : "border-black/10"
                      } text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans`}
                    />
                    {errors.postcode && (
                      <span id="contact-postcode-error" className="text-sm text-red-500" role="alert">
                        {errors.postcode}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-service" className="text-sm font-semibold text-[#214B57] font-dm-sans">
                      Service Interested In
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans"
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
                      rows={4}
                      className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md bg-white border border-[#214B57] text-[#214B57] font-normal font-dm-sans hover:bg-[#214B57] hover:text-white hover:border-[#F06434] hover:border-2 transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:ring-offset-1 active:bg-[#214B57] active:text-white active:border-[#F06434] active:border-2 disabled:bg-[#CED3D7] disabled:text-[#85929D] disabled:cursor-not-allowed"
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
                    <Phone className="text-[#F06434] flex-shrink-0" size={20} />
                    <a href="tel:+923001234567" className="hover:text-[#214B57] transition break-all">
                      +92 300 1234567
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="text-[#F06434] flex-shrink-0" size={20} />
                    <a href="mailto:info@luxuryinteriors.com" className="hover:text-[#214B57] transition break-all">
                      info@luxuryinteriors.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <a 
                      href="https://wa.me/923001234567?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Winder%20%26%20Stilhaus" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-[#214B57] transition"
                    >
                      <svg className="text-[#F06434] flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp us
                    </a>
                  </p>
                  <p className="flex items-center gap-3 mt-6 pt-6 border-t border-[#e5e7eb]">
                    <Clock className="text-[#F06434] flex-shrink-0" size={20} />
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

