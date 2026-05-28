import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/service" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const PHONE = "+65 8274 4647";
const PHONE_TEL = "+6582744647";
const ADDRESS = "33 Borthwick Dr, Singapore 559536";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Left side - Logo & Description */}
          <div className="lg:max-w-md">
            <Logo />
            <p className="mt-4 text-sm text-white/65 leading-relaxed">
              Singapore's trusted one-stop home services partner since 2014. Cleaning, repairs and everything in between.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/epsservices"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-white/15 grid place-items-center hover:bg-[#1E73D8] hover:border-[#1E73D8] transition"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.instagram.com/epsservices"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-white/15 grid place-items-center hover:bg-[#1E73D8] hover:border-[#1E73D8] transition"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
             
            </div>
          </div>

          {/* Right side - Contact Info */}
          <div>
            <h4 className="font-bold text-white text-base">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 text-[#35D6F7] shrink-0" /> 
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 mt-0.5 text-[#35D6F7] shrink-0" /> 
                <a href={`tel:${PHONE_TEL}`} className="hover:text-[#35D6F7] transition">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-3.5 w-3.5 mt-0.5 text-[#35D6F7] shrink-0" /> 
                <a href="mailto:hello@epsservices.sg" className="hover:text-[#35D6F7] transition">
                  hello@epsservices.sg
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} EPS Services. All rights reserved.</p>
          <p>33 Borthwick Dr, Singapore 559536 | +65 8274 4647</p>
        </div>
      </div>
    </footer>
  );
}