"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const heroContent = {
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
  topActions: [
    { label: "Book a consultation", href: "/contact-us", variant: "filled" },
  ],
};

export default function SharedHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const containerClass = "max-w-7xl mx-auto px-3 sm:px-4 md:px-6";
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

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

  const isActive = (href) => {
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
    if (href === "/service/kitchen-renovation") {
      return pathname?.startsWith("/service/kitchen");
    }
    if (href === "/service/bathroom-remodeling") {
      return pathname?.startsWith("/service/bathroom");
    }
    if (href === "/service/full-home-design") {
      return pathname?.startsWith("/service/full-home") || pathname?.startsWith("/service/interior");
    }
    if (href === "/how-we-work") {
      return pathname?.startsWith("/how-we-work");
    }
    if (href === "/about") {
      return pathname?.startsWith("/about");
    }
    if (href === "/contact-us") {
      return pathname?.startsWith("/contact-us");
    }
    return pathname === href || pathname?.startsWith(href + "/");
  };

  // Focus trap for mobile menu
  useEffect(() => {
    if (menuOpen) {
      // Store the element that had focus before opening menu
      previousFocusRef.current = document.activeElement;
      
      // Focus the first focusable element in the menu
      const firstFocusable = menuRef.current?.querySelector('a, button');
      if (firstFocusable) {
        firstFocusable.focus();
      }

      // Trap focus within menu
      const handleTabKey = (e) => {
        if (!menuRef.current) return;
        
        const focusableElements = menuRef.current.querySelectorAll(
          'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
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
        
        if (e.key === 'Escape') {
          setMenuOpen(false);
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    } else if (previousFocusRef.current) {
      // Restore focus when menu closes
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
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            mainContent.addEventListener('blur', () => {
              mainContent.removeAttribute('tabindex');
            }, { once: true });
          }
        }}
      >
        Skip to main content
      </a>
      
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm" suppressHydrationWarning>
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
          <div className="flex items-center justify-between text-sm font-medium text-[#85929D] py-3 sm:py-4" suppressHydrationWarning>
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
            <img
              src="/assets/Primary Logo – Teal & Grey.png"
              alt="Winder & Stilhaus logo"
              width={150}
              height={40}
              className="h-8 sm:h-10 md:h-12 w-auto shrink-0"
              loading="eager"
              suppressHydrationWarning
            />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {heroContent.navLinks.map((link) => {
              const active = isActive(link.href);
              const handleClick = (e) => {
                // If pricing link and not on homepage, navigate to homepage first
                if (link.href === "#pricing-guide" && pathname !== "/") {
                  e.preventDefault();
                  // Use window.location for reliable hash navigation
                  window.location.href = "/#pricing-guide";
                }
              };
              // Always use the same href to avoid hydration mismatch
              const href = link.href;
              return (
                <a
                  key={link.label}
                  href={href}
                  onClick={handleClick}
                  suppressHydrationWarning
                  className={`
                    relative transition
                    ${active 
                      ? "text-[#214B57] font-semibold" 
                      : "text-[#85929D] hover:text-[#214B57]"
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    ${active 
                      ? "after:w-full after:bg-[#214B57]" 
                      : "after:w-0 after:bg-[#214B57] after:transition-all after:duration-300 hover:after:w-full"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-3 relative z-50">
            <a
              href={heroContent.topActions[0].href}
              className="
                inline-flex items-center justify-center
                min-w-[122px] min-h-[31px] px-5 py-2 rounded-md text-white
                text-sm font-normal font-dm-sans
                hover:bg-[#214B57] transition-all duration-150 whitespace-nowrap
                focus:outline-none focus:ring-3 focus:ring-[#214B57] focus:ring-offset-2
                active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]
                disabled:bg-[#CED3D7] disabled:text-[#85929D] disabled:cursor-not-allowed
                relative z-50
              "
              style={{ backgroundColor: '#F04E22' }}
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
                rounded-full border border-black/10 bg-white
                text-[#0f1624]  relative z-[120]
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
                bg-white text-[#0f1624]
                rounded-2xl border border-black/10
                shadow-[0_20px_60px_rgba(15,22,36,0.07)]
                p-4 flex flex-col gap-3 md:hidden
                max-w-[calc(100vw-1.5rem)]
              "
            >
              {heroContent.navLinks.map((link) => {
                const active = isActive(link.href);
                const handleClick = (e) => {
                  // If pricing link and not on homepage, navigate to homepage first
                  if (link.href === "#pricing-guide" && pathname !== "/") {
                    e.preventDefault();
                    setMenuOpen(false);
                    // Use window.location for reliable hash navigation
                    window.location.href = "/#pricing-guide";
                  } else {
                    setMenuOpen(false);
                  }
                };
                // Always use the same href to avoid hydration mismatch
                const href = link.href;
                return (
                  <a
                    key={link.label}
                    href={href}
                    onClick={handleClick}
                    suppressHydrationWarning
                    className={`text-sm font-semibold transition ${
                      active 
                        ? "text-[#214B57] font-bold" 
                        : "text-[#85929D] hover:text-[#214B57]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-2">
                <a
                  href={heroContent.topActions[0].href}
                  className="
                    block w-full text-center px-4 py-2 rounded-full
                    bg-[#F04E22] text-white text-sm font-normal font-dm-sans min-w-[122px] min-h-[31px] hover:bg-[#214B57] active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]
                    shadow-[0_10px_25px_rgba(26,29,41,0.07)]
                    hover:opacity-90 transition
                  "
                  onClick={() => setMenuOpen(false)}
                >
                  {heroContent.topActions[0].label}
                </a>
              </div>
            </div>
          )}
          </div>
        </div>
      </header>
    </>
  );
}

