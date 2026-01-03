"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How long does a full home renovation take?",
    answer:
      "Typically, a full home renovation takes 3–6 months depending on the scope, property size, approvals, and customization requirements.",
  },
  {
    question: "Do you handle permits and approvals?",
    answer:
      "Yes. We guide the full process — drawings, approvals, and required permits — so execution stays smooth and compliant.",
  },
  {
    question: "Can you work within my budget without compromising quality?",
    answer:
      "Absolutely. We optimise scope, materials, and finishing packages to match your budget while protecting the premium look and durability.",
  },
  {
    question: "Do you provide 3D visualizations before construction?",
    answer:
      "Yes. We provide 3D visuals so you can see the layout, finishes, and overall feel before execution begins.",
  },
  {
    question: "Do you source custom furniture and premium finishes?",
    answer:
      "Yes. We source and coordinate custom furniture, fixtures, and finishes based on your style, timelines, and functional needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-3 sm:px-4 md:px-6 py-14 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <FadeIn className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F06434' }} />
              FAQ
            </span>
            <span className="text-xs sm:text-sm text-[#7F8C8D] font-dm-sans">
              Clear answers • Premium process • Transparent delivery
            </span>
          </div>

          <h2 className="mt-4 text-[#1D1D1D] font-noto-serif max-w-2xl mx-auto" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            Frequently asked questions
          </h2>

          <p className="mt-3 text-[#7F8C8D] max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1.25rem, 2vw, 2.67rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
            Everything clients usually ask before starting a luxury interior or
            renovation project — answered clearly.
          </p>
        </FadeIn>

        {/* FAQ Card Shell - White cards on dark */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[28px] border border-[#4A4A4A] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="pointer-events-none absolute inset-0" />

            <div className="divide-y divide-[#7F8C8D]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <FadeIn key={index} className="bg-transparent">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="
                        w-full text-left
                        px-5 sm:px-7 py-5
                        flex items-center justify-between gap-4
                        hover:bg-[#F9FAFB] transition
                      "
                    >
                      <div className="min-w-0">
                        <p className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.75vw, 1.625rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                          {faq.question}
                        </p>
                        <p className="mt-1 text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                          Tap to {isOpen ? "close" : "view"} answer
                        </p>
                      </div>

                      <span
                        className={`
                          shrink-0 w-10 h-10 rounded-full
                          border border-[#4A4A4A]/20 bg-[#F9FAFB]
                          flex items-center justify-center
                          shadow-[0_12px_30px_rgba(0,0,0,0.05)]
                          transition-transform
                          ${isOpen ? 'rotate-180' : ''}
                        `}
                        aria-hidden="true"
                      >
                        <ChevronDown className="text-[#214B57]" />
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-7 pb-6">
                            <motion.div
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              className="rounded-2xl border border-[#4A4A4A]/20 bg-[#F9FAFB] p-5 text-[#7F8C8D] font-dm-sans"
                              style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}
                            >
                              {faq.answer}
                            </motion.div>

                            <motion.div
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{ duration: 0.3, delay: 0.15 }}
                              className="mt-4 flex flex-wrap gap-2"
                            >
                              {["Premium finishing", "Transparent scope", "Professional execution"].map((tag, tagIdx) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 rounded-full bg-[#4A4A4A]/5 border border-[#4A4A4A]/20 text-xs font-semibold text-[#1D1D1D] font-dm-sans"
                                >
                                  {tag}
                                </span>
                              ))}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* CTA row */}
          <FadeIn className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#7F8C8D] font-dm-sans">
              Still have questions? We'll reply quickly.
            </p>
            <a
              href="/contact-us"
              className="
                inline-flex items-center justify-center
                min-w-[122px] min-h-[31px] px-6 py-2 rounded-md
                text-white font-normal font-dm-sans
                hover:bg-[#003A66] transition-all duration-150
                focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2
                active:bg-white active:text-[#214B57] active:border-2 active:border-[#214B57]
              "
              style={{ backgroundColor: '#214B57' }}
            >
              Contact us →
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

