"use client";

export default function CTASection() {
  return (
    <section className="bg-[#f3f0ea] px-2 md:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1d29] mb-4">
          Ready to Transform Your Home?
        </h2>
        <p className="text-[#4a4f63] mb-8 text-lg md:text-xl">
          Let’s craft a luxurious space that reflects your lifestyle, comfort, and elegance.
        </p>
        <a
          href="/contact-us"
          className="bg-[#1a1d29] inline-block text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
        >
          Get Free Consultation →
        </a>
      </div>
    </section>
  );
}
