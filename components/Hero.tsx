"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import MonogramUnderlay from "@/components/MonogramUnderlay";

// Hero section component

const heroContent = {
  eyebrow: "Premium Interiors",
  description:
    "Luxury renovation with instant price estimates. Crafting magazine-worthy interiors with precision and warmth.",
  primaryCta: {
    label: "Start instant quote",
    href: "#pricing-guide",
  },
  secondaryCta: {
    label: "Portfolio Review",
    href: "/project",
  },
  images: [
    { src: "/assets/portfolio/kitchen.png", alt: "Kitchen project" },
    { src: "/img-1.png", alt: "Interior project" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Kitchens", href: "/service/kitchen-renovation" },
    { label: "Bathrooms", href: "/service/bathroom-remodeling" },
    { label: "Interiors", href: "/service/full-home-design" },
    { label: "How we work", href: "/how-we-work" },
    { label: "Pricing", href: "#pricing-guide" },
    { label: "Who we are", href: "/about" },
    { label: "Contact", href: "/contact-us" },
  ],
  topActions: [{ label: "Book a consultation", href: "/contact-us", variant: "filled" }],
};

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [hash, setHash] = useState<string>("");
  const pathname = usePathname();
  const containerClass = "max-w-7xl mx-auto px-3 sm:px-4 md:px-6";
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Mark as hydrated after first client render and track hash
  useEffect(() => {
    setIsHydrated(true);
    // Set initial hash
    if (typeof window !== "undefined") {
      setHash(window.location.hash);
    }
    
    // Listen for hash changes
    const handleHashChange = () => {
      if (typeof window !== "undefined") {
        setHash(window.location.hash);
      }
    };
    
    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange);
      // Also check hash on pathname change
      const checkHash = () => setHash(window.location.hash);
      window.addEventListener("popstate", checkHash);
      
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
        window.removeEventListener("popstate", checkHash);
      };
    }
  }, [pathname]);

  const isActive = (href: string): boolean => {
    // Always return false during SSR and initial client render to prevent hydration mismatch
    if (!isHydrated) return false;

    // Get current hash directly to avoid state timing issues
    const currentHash = typeof window !== "undefined" ? window.location.hash : "";

    // Special handling for homepage links
    if (pathname === "/") {
      if (href === "/") {
        // Home is only active if we're NOT on pricing section
        return currentHash !== "#pricing-guide";
      }
      if (href === "#pricing-guide") {
        // Pricing is only active if hash is present
        return currentHash === "#pricing-guide";
      }
    } else {
      // Not on homepage, so neither Home nor Pricing should be active
      if (href === "/" || href === "#pricing-guide") {
        return false;
      }
    }
    if (href === "/service/kitchen-renovation") return pathname?.startsWith("/service/kitchen");
    if (href === "/service/bathroom-remodeling") return pathname?.startsWith("/service/bathroom");
    if (href === "/service/full-home-design")
      return pathname?.startsWith("/service/full-home") || pathname?.startsWith("/service/interior");
    if (href === "/how-we-work") return pathname?.startsWith("/how-we-work");
    if (href === "/about") return pathname?.startsWith("/about");
    if (href === "/contact-us") return pathname?.startsWith("/contact-us");
    return pathname === href || pathname?.startsWith(href + "/");
  };

  // Focus trap for mobile menu
  useEffect(() => {
    if (menuOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;

      const firstFocusable = menuRef.current?.querySelector("a, button") as HTMLElement | null;
      if (firstFocusable) firstFocusable.focus();

      const handleTabKey = (e: KeyboardEvent) => {
        if (!menuRef.current) return;

        const focusableElements = menuRef.current.querySelectorAll(
          'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }

        if (e.key === "Escape") setMenuOpen(false);
      };

      document.addEventListener("keydown", handleTabKey);
      return () => document.removeEventListener("keydown", handleTabKey);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [menuOpen]);

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="skip-to-content"
        onClick={(e) => {
          e.preventDefault();
          const mainContent = document.getElementById("main-content");
          if (mainContent) {
            mainContent.setAttribute("tabindex", "-1");
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
            mainContent.addEventListener(
              "blur",
              () => {
                mainContent.removeAttribute("tabindex");
              },
              { once: true }
            );
          }
        }}
      >
        Skip to main content
      </a>

      {/* Sticky Header - Solid Ocean Blue */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#214B57' }} suppressHydrationWarning>
        <div className={containerClass}>
          {/* Backdrop (mobile menu) */}
          {menuOpen && (
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[90] md:hidden"
            />
          )}

          {/* Top Nav */}
          <div
            className="flex items-center justify-between text-sm font-medium text-white py-3 sm:py-4"
            suppressHydrationWarning
          >
            <a href="/" className="flex items-center min-w-0 flex-shrink group">
              {/* Horizontal lockup: Official logo from brand pack */}
              <img
                src="/assets/ReverseLogo.png"
                alt="Winder&Stilhaus logo"
                width={150}
                height={40}
                className="h-8 sm:h-10 md:h-12 w-auto shrink-0"
                loading="eager"
                suppressHydrationWarning
              />
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {heroContent.navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    suppressHydrationWarning
                    className={`
                      relative transition
                      ${active ? "text-white font-semibold" : "text-white/80 hover:text-white"}
                      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                      ${
                        active
                          ? "after:w-full after:bg-[#F04E22]"
                          : "after:w-0 after:bg-[#F04E22] after:transition-all after:duration-300 hover:after:w-full"
                      }
                    `}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 relative z-50">
              <a
                href="#pricing-guide"
                onClick={(e) => {
                  e.preventDefault();
                  const pathname = window.location.pathname;
                  
                  if (pathname === "/") {
                    // On homepage, smooth scroll to pricing guide
                    const target = document.getElementById("pricing-guide");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                      
                      // Move focus to heading after scroll
                      setTimeout(() => {
                        const heading = document.getElementById("pricing-guide-heading") || 
                          target.querySelector("h2") as HTMLElement;
                        if (heading) {
                          heading.setAttribute("tabindex", "-1");
                          heading.focus({ preventScroll: true });
                          heading.addEventListener("blur", () => {
                            heading.removeAttribute("tabindex");
                          }, { once: true });
                        }
                      }, 600);
                    }
                  } else {
                    // On other pages, navigate to homepage pricing section
                    window.location.href = "/#pricing-guide";
                  }
                  
                  // Track event
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
                    if (hasConsent) {
                      (window as any).gtag("event", "cta_book_click", {
                        event_category: "CTA",
                        event_label: "Header - Book a consultation",
                        value: 1,
                      });
                    }
                  }
                }}
                className="
                  inline-flex items-center justify-center
                  min-w-[122px] min-h-[31px] px-5 py-2 rounded-md
                  text-sm font-normal font-dm-sans
                  bg-white border border-[#214B57] text-[#214B57]
                  hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:border-2
                  transition-all duration-150 whitespace-nowrap
                  focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2
                  active:bg-[#214B57] active:text-white active:border-[#F04E22] active:border-2
                  disabled:bg-[#4A4A4A] disabled:text-[#7F8C8D] disabled:cursor-not-allowed
                  relative z-50 shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                "
              >
                <span className="hidden sm:inline">{heroContent.topActions[0].label}</span>
                <span className="sm:hidden">Book</span>
              </a>

              <button
                ref={menuButtonRef}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle Menu"
                aria-expanded={menuOpen}
                className="
                  md:hidden flex flex-col justify-between w-10 h-9 p-2
                  rounded-full border border-white/20 bg-white/10
                  text-white relative z-[120]
                "
              >
                <span className="w-full h-0.5 bg-current" />
                <span className="w-full h-0.5 bg-current" />
                <span className="w-full h-0.5 bg-current" />
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
              <div
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className="
                  fixed z-[120] top-[72px] sm:top-[80px] left-0 right-0 mx-3 sm:mx-4 md:mx-6 mt-2
                  bg-[#1D1D1D] text-white
                  rounded-2xl border border-[#4A4A4A]
                  shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                  p-4 flex flex-col gap-3 md:hidden
                  max-w-[calc(100vw-1.5rem)]
                "
              >
                {heroContent.navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      suppressHydrationWarning
                      className={`text-sm font-semibold transition ${
                        active ? "text-white font-bold" : "text-[#7F8C8D] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}

                <div className="pt-2">
                  <a
                    href="#pricing-guide"
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      const pathname = window.location.pathname;
                      
                      if (pathname === "/") {
                        // On homepage, smooth scroll to pricing guide
                        const target = document.getElementById("pricing-guide");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth", block: "start" });
                          
                          // Move focus to heading after scroll
                          setTimeout(() => {
                            const heading = document.getElementById("pricing-guide-heading") || 
                              target.querySelector("h2") as HTMLElement;
                            if (heading) {
                              heading.setAttribute("tabindex", "-1");
                              heading.focus({ preventScroll: true });
                              heading.addEventListener("blur", () => {
                                heading.removeAttribute("tabindex");
                              }, { once: true });
                            }
                          }, 600);
                        }
                      } else {
                        // On other pages, navigate to homepage pricing section
                        window.location.href = "/#pricing-guide";
                      }
                      
                      // Track event
                      if (typeof window !== "undefined" && (window as any).gtag) {
                        const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
                        if (hasConsent) {
                          (window as any).gtag("event", "cta_book_click", {
                            event_category: "CTA",
                            event_label: "Mobile Menu - Book a consultation",
                            value: 1,
                          });
                        }
                      }
                    }}
                    className="
                      block w-full text-center min-w-[122px] min-h-[31px] px-4 py-2 rounded-md
                      bg-white border border-[#214B57] text-[#214B57] text-sm font-normal font-dm-sans
                      hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:border-2
                      transition-all duration-150
                      focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2
                      active:bg-[#214B57] active:text-white active:border-[#F04E22] active:border-2
                      shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                    "
                  >
                    {heroContent.topActions[0].label}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Content Section - Ocean Blue Gradient with Monogram Ring Underlay */}
      <section
        className="
          relative mx-auto
          text-white
          pt-20 sm:pt-24 md:pt-28 pb-7 sm:pb-10 md:pb-12
        "
  style={{
    background: 'linear-gradient(135deg, #214B57 0%, #183941 80%, #142F36 100%)',
    overflow: 'hidden'
  }}
        suppressHydrationWarning
      >
        {/* Ring pattern underlay: large scale, cropped off-edge, visible opacity, subtle parallax */}
        <MonogramUnderlay opacity={0.5} />

        <div className={`${containerClass} relative z-10`}>
          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
            {/* LEFT */}
            <motion.div
              className="space-y-6 lg:pr-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] uppercase tracking-[0.32em] text-white font-dm-sans"
                  style={{
                    fontSize: "clamp(0.6875rem, 1vw, 0.875rem)",
                    fontWeight: 400,
                    lineHeight: "1.2",
                    letterSpacing: "0.32em",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#F04E22" }} />
                  {heroContent.eyebrow}
                </span>

                {/* <span className="text-xs sm:text-sm text-[#85929D]">
                  Instant estimate • Design-led execution • Premium finish
                </span> */}
              </motion.div>

              <motion.h1
                className="typography-headline text-white"
                style={{
                  fontSize: "clamp(1.75rem, 5vw, 4rem)",
                  lineHeight: "1.2",
                  letterSpacing: "0px",
                  fontWeight: 700, /* Bold for H1 */
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  fontFamily: "Noto Serif, serif",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                High-End Kitchens.
                <br />
                Refined Bathrooms.
                <br />
                Fearlessly Modern
                <br />
                Homes.
              </motion.h1>

              <motion.p
                className="text-white max-w-xl text-base sm:text-lg leading-relaxed font-dm-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ color: '#FFFFFF', fontFamily: 'DM Sans, sans-serif' }}
              >
                Made to last and made to stand out.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href={heroContent.primaryCta.href}
                  onClick={(e) => {
                    if (heroContent.primaryCta.href.startsWith("#")) {
                      e.preventDefault();
                      const targetId = heroContent.primaryCta.href.substring(1); // Remove #
                      const target = document.getElementById(targetId);
                      
                      if (target) {
                        // Smooth scroll to pricing guide section
                        target.scrollIntoView({ behavior: "smooth", block: "start" });

                        // After scroll completes, focus the heading
                        setTimeout(() => {
                          const heading = document.getElementById("pricing-guide-heading") ||
                            target.querySelector("h2") as HTMLElement ||
                            target.querySelector("h1") as HTMLElement;
                          
                          if (heading) {
                            // Make heading focusable temporarily
                            heading.setAttribute("tabindex", "-1");
                            heading.focus({ preventScroll: true });
                            
                            // Remove tabindex after blur to restore normal tab order
                            const handleBlur = () => {
                              heading.removeAttribute("tabindex");
                              heading.removeEventListener("blur", handleBlur);
                            };
                            heading.addEventListener("blur", handleBlur, { once: true });
                          }
                        }, 600); // Reduced timeout for better UX
                      }
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-6 py-2 rounded-md bg-white border border-[#214B57] text-[#214B57] text-sm font-normal font-dm-sans hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:border-2 transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:ring-offset-1 active:bg-[#214B57] active:text-white active:border-[#F04E22] active:border-2 disabled:bg-[#4A4A4A] disabled:text-[#7F8C8D] disabled:cursor-not-allowed"
                >
                  {heroContent.primaryCta.label}
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </a>
              </motion.div>
            </motion.div>

            {/* ✅ Right spacer only (keeps layout identical without affecting height) */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}

