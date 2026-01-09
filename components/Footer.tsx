"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import MonogramUnderlay from "@/components/MonogramUnderlay";

const FooterSection = () => {
  return (
    <footer 
      className="text-white px-3 sm:px-4 md:px-6 pt-6 border-t border-[#4A4A4A] relative overflow-hidden"
  style={{
    background: 'linear-gradient(315deg, #214B57 0%, #183941 80%, #142F36 100%)'
  }}
    >
      {/* Ring pattern underlay: large scale, cropped off-edge, visible opacity, subtle parallax */}
      <MonogramUnderlay opacity={0.20} />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium glass container */}
        <div className="">
          <div className="relative p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] gap-10 md:gap-12">
              {/* Brand - Centered */}
              <div className="space-y-5 flex flex-col items-center text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/70 font-dm-sans">
                    Premium interiors
                  </p>
                  <div className="mt-2 flex justify-center">
                    <img
                      src="/assets/MonogramLogo.png"
                      alt="Winder&Stilhaus monogram"
                      width={150}
                      height={150}
                      className="h-[100px] sm:h-[120px] md:h-[140px] w-auto shrink-0"
                      loading="lazy"
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <p className="text-white/80 max-w-md mx-auto font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  Luxury interiors crafted with precision, transparency, and on-time delivery —
                  designed to feel timeless, not trendy.
                </p>

                <div className="flex items-center justify-center gap-3">
                  <Link
                    href="#"
                    className="w-11 h-11 rounded-full ws-double-ring ws-double-ring--on-dark bg-white/10 flex items-center justify-center text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:bg-white/20 transition"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </Link>
                  <Link
                    href="#"
                    className="w-11 h-11 rounded-full ws-double-ring ws-double-ring--on-dark bg-white/10 flex items-center justify-center text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:bg-white/20 transition"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </Link>
                  <Link
                    href="#"
                    className="w-11 h-11 rounded-full ws-double-ring ws-double-ring--on-dark bg-white/10 flex items-center justify-center text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:bg-white/20 transition"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </Link>
                  <Link
                    href="#"
                    className="w-11 h-11 rounded-full ws-double-ring ws-double-ring--on-dark bg-white/10 flex items-center justify-center text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:bg-white/20 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white font-dm-sans">
                    Premium finish
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white font-dm-sans">
                    Transparent scope
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white font-dm-sans">
                    On-time delivery
                  </span>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white font-noto-serif">
                  Company
                </h4>

                <ul className="space-y-3 text-sm text-white/70 font-dm-sans">
                  <li>
                    <Link className="hover:text-white transition" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/project">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white font-noto-serif">
                  Support
                </h4>

                <ul className="space-y-3 text-sm text-white/70 font-dm-sans">
                  <li>
                    <Link className="hover:text-white transition" href="/contact-us">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/availability-check">
                      Availability
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/areas-we-cover">
                      Areas We Cover
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/location/leeds">
                      Locations
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/testimonials">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/aftercare">
                      Aftercare
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/cookies">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition" href="/terms">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>

{/* Newsletter (simple) */}
<div className="space-y-4">
  <div>
    <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white font-noto-serif">
      Stay updated
    </h4>
    <p className="mt-2 text-sm text-white/70 leading-relaxed font-dm-sans">
      Monthly design notes and material insights.
    </p>
  </div>

  <div className="flex items-center gap-3 rounded-md border border-white/20 bg-white/10 px-3 py-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 bg-white/20 px-2 py-2 text-sm text-white placeholder:text-white/50 border border-white/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans"
      suppressHydrationWarning
    />
    <button className="shrink-0 px-4 py-2 rounded-md min-w-[122px] min-h-[31px] text-white text-sm font-normal font-dm-sans hover:bg-[#183941] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2" style={{ backgroundColor: '#214B57' }}>
      Subscribe
    </button>
  </div>

  <p className="text-xs text-white/70 font-dm-sans">No spam. Unsubscribe anytime.</p>

  <div className="text-sm text-white space-y-1 font-dm-sans">
    <p className="font-semibold text-white font-noto-serif">Contact</p>
    <p className="text-white/70">+123 456 7890</p>
    <p className="text-white/70">hello@luxuryinteriors.com</p>
  </div>
</div>

            </div>

            {/* Bottom bar */}
            <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70 font-dm-sans">
              <div className="flex flex-col gap-2">
                <p>© 2025 Winder&Stilhaus. All rights reserved.</p>
                <p className="text-xs italic text-white/70">Visual concept images may be used for illustration.</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Link href="/terms" className="hover:text-white transition">
                  Terms
                </Link>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy
                </Link>
                <Link href="/cookies" className="hover:text-white transition">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;

