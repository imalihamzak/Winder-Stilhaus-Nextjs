"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  faqs?: FAQ[];
  [key: string]: any;
}

interface ServiceFAQProps {
  service?: Service;
}

export default function ServiceFAQ({ service }: ServiceFAQProps) {
  // Use service-specific FAQs if provided, otherwise use defaults
  const faqs: FAQ[] = service?.faqs || [
    {
      question: "How long does a luxury interior project take?",
      answer:
        "Most luxury interior projects take between 6–12 weeks depending on size and customisation.",
    },
    {
      question: "Do you provide 3D design previews?",
      answer:
        "Yes, detailed 3D visualisations are included before execution begins.",
    },
    {
      question: "Do you manage civil and MEP work?",
      answer:
        "Yes, we provide complete turnkey execution including civil, electrical and plumbing.",
    },
    {
      question: "Is custom furniture included?",
      answer:
        "Yes, custom furniture design and production is part of our service.",
    },
    {
      question: "Do you offer post-handover support?",
      answer:
        "Absolutely, we provide after-service support and warranty coverage.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#1D1D1D] py-6 md:py-8 px-3 sm:px-4 md:px-6 border-t border-[#CED3D7]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-6 md:mb-8" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              FAQ
            </span>
          </div>
          <h2 className="text-white font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
          Service FAQs
        </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-[28px] border border-[#4A4A4A] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="divide-y divide-black/10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <FadeIn key={index} className="bg-transparent">
              <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between gap-4 hover:bg-[#4A4A4A]/5 transition"
              >
                      <div className="min-w-0">
                        <p className="font-semibold text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.75vw, 1.625rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                {faq.question}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 w-10 h-10 rounded-full border border-[#4A4A4A] bg-white flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                      >
                        <ChevronDown className="text-[#214B57]" size={20} />
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
                            <div className="rounded-2xl border border-[#4A4A4A] bg-white p-5 text-[#7F8C8D] font-dm-sans shadow-[0_18px_45px_rgba(0,0,0,0.1)]" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                  {faq.answer}
                </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

