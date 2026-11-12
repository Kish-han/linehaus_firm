"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile drawer on route change (React 19 render-time state adjustment)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: close mobile drawer with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F7F4]/92 backdrop-blur-md border-b border-[#DFDBD2] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-[#F8F7F4]/80 backdrop-blur-sm border-b border-[#DFDBD2]/60 py-4 md:py-5"
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Primary Brand Logo */}
            <BrandLogo variant="horizontal" theme="default" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-sans text-xs tracking-[0.16em] uppercase font-medium transition-all duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#384D58] ${
                      isActive
                        ? "text-[#14171A] font-semibold"
                        : "text-[#545F68] hover:text-[#14171A]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#384D58]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Group: Studio Location + Enquiry CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="hidden xl:flex flex-col text-right pr-4 border-r border-[#DFDBD2]">
                <span className="font-mono text-[10px] tracking-widest text-[#384D58] uppercase font-semibold">
                  {siteConfig.location.city}
                </span>
                <span className="font-mono text-[9px] tracking-wider text-[#545F68]">
                  Karnataka, India
                </span>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-sans font-medium tracking-[0.18em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#273740] transition-colors border border-[#384D58]"
              >
                <span>Initiate Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#14171A] hover:text-[#384D58] flex-shrink-0 ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#384D58]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-[65px] z-40 bg-[#F8F7F4] border-t border-[#DFDBD2] lg:hidden flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="space-y-6 pt-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#384D58] uppercase block">
              Navigation Menu
            </span>
            <nav className="flex flex-col space-y-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-2xl tracking-tight transition-colors py-1 ${
                    pathname === link.href ? "text-[#384D58] italic" : "text-[#14171A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#DFDBD2] space-y-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] tracking-widest text-[#384D58] uppercase block">
                Studio Location
              </span>
              <p className="font-sans text-xs text-[#545F68]">
                {siteConfig.location.addressDisplay}
              </p>
              <p className="font-mono text-[10px] text-[#384D58]">
                Architecture · Interiors · Construction
              </p>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase bg-[#384D58] text-[#F8F7F4] hover:bg-[#273740]"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
