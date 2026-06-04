"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Service", href: "/service" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 lg:h-14">
          {/* Logo */}
          <div className="transition-transform duration-300 hover:scale-[1.02]">
            <Logo dark={scrolled} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? "text-gray-700 hover:text-[#1E73D8]"
                      : "text-white/90 hover:text-white"
                  } relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#1E73D8] after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="tel:+6582744647"
              className={`flex items-center gap-1.5 text-xs font-medium transition-all duration-200 ${
                scrolled
                  ? "text-gray-600 hover:text-[#1E73D8]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              +65 8274 4647
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary text-white px-4 py-1.5 text-xs font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              Contact Us <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-1.5 rounded-xl transition-all duration-200 ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-12 lg:top-14 bottom-0 bg-white z-40 animate-in slide-in-from-top-5 duration-300 overflow-y-auto">
          <div className="flex flex-col min-h-full">
            <div className="flex-1 px-4 py-4">
              <div className="flex flex-col gap-0.5">
                {NAV_ITEMS.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-gray-800 font-medium hover:bg-gray-50 hover:text-[#1E73D8] transition"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-6 px-3">
                <div className="h-px bg-gray-100 mb-4" />
                <Link
                  href="tel:+6582744647"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gray-50 mb-2"
                >
                  <Phone className="h-4 w-4 text-[#1E73D8]" />
                  <div>
                    <div className="text-xs text-gray-500">Call us</div>
                    <div className="text-sm font-semibold text-gray-800">+65 8274 4647</div>
                  </div>
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-primary text-white px-4 py-3 font-semibold shadow-md text-sm mt-2"
                >
                  Free Consultation <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100">
              <p className="text-center text-xs text-gray-400">
                Serving Singapore since 2014
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
