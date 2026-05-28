
import Image from "next/image";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";

const PHONE = "+65 8274 4647";
const PHONE_TEL = "+6582744647";

const HIGHLIGHTS = [
  "Established Singapore home services since 2014",
  "Residential specialists — condos, HDB and landed",
  "Move-in condition restoration for landlords & agents",
  "Reliable, transparent and affordable solutions",
];

export function About() {
  return (
    <section id="about" className="py-[calc(3rem+10px)] lg:py-[calc(4.5rem+10px)] bg-gray-50">
      <div className="mx-auto max-w-5xl my-[calc(4rem+10px)] px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-3.5">
                <Image
                src="/about-team.jpg"
                alt="EPS Services maintenance team"
                width={600}
                height={600}
                className="rounded-2xl shadow-card aspect-[4/5] object-cover w-full"
              />
                <div className="rounded-2xl bg-gradient-primary text-white p-4 shadow-lg">
                  <div className="text-4xl font-semibold">10+</div>
                  <div className="mt-1 text-sm text-white/85">Years</div>
                </div>
              </div>
              <div className="pt-8 space-y-3.5">
                <div className="rounded-2xl bg-slate-800 text-white p-4 shadow-lg">
                  <div className="text-4xl font-semibold">1,000+</div>
                  <div className="mt-1 text-sm text-white/70">Projects</div>
                </div>
                

                <Image
                src="/about-work.jpg"
                alt="EPS painter at work"
                width={600}
                height={750}
                className="rounded-2xl shadow-card aspect-[4/5] object-cover w-full"
              />
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-bold text-[#1E73D8] uppercase tracking-wider">About EPS Services</span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-medium text-slate-800 leading-tight">
            Your one-stop property partner.
          </h2>
            <p className="mt-5 text-gray-600 text-sm leading-relaxed">
              One team for cleaning, repairs, painting, and move-in work across condos, HDB, and landed homes.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#6BEA00] shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-slate-700 hover:bg-gray-50 transition"
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
