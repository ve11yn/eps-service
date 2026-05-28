"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/service" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 lg:px-6 py-4 flex items-center justify-between">
        <Logo dark={scrolled} />

        <nav className="hidden lg:flex items-center gap-9 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-[#1E73D8]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Primary CTA Button - Blue Gradient */}
        <Link
          href="/#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-primary text-white px-5 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-gray-700" : "text-white"}`}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-[#1E73D8]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-white px-5 py-3 font-semibold"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
