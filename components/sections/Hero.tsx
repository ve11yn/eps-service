"use client";

import Image from "next/image";
import { ArrowRight, Phone, Star, BadgeCheck } from "lucide-react";

const PHONE = "+65 8274 4647";
const PHONE_TEL = "+6582744647";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 border-b border-slate-900">
      <Image
        src="/hero.jpg"
        alt="EPS Services professional team caring for a Singapore home"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/20" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6 pt-24 pb-16 lg:pt-28 lg:pb-20 w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wide text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#35D6F7] animate-pulse" />
            Singapore home services since 2014
          </div>
          <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)]">
            A better way to <br className="hidden sm:block" />
            <span className="text-[#9fe4ff]">care for your home.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm lg:text-lg text-white/80 leading-relaxed">
            Cleaning, painting, repairs, plumbing, electrical, and move-in solutions from one trusted team.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E73D8] text-white px-7 py-3.5 font-medium shadow-sm hover:bg-[#1668c4] hover:-translate-y-0.5 transition-all"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-7 py-3.5 font-medium text-white hover:bg-white/15 transition"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#9fe4ff] text-[#9fe4ff]" />
                ))}
              </div>
              <span className="text-sm">
                <span className="font-medium text-white">5.0</span> from 120+ reviews
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <BadgeCheck className="h-4 w-4 text-[#9fe4ff]" />
              <span>Licensed & insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
