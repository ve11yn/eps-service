"use client";

import Image from "next/image";
import { ArrowRight, Phone, Star, BadgeCheck, Clock, ShieldCheck, Award, HeartHandshake } from "lucide-react";

const PHONE = "+65 8274 4647";
const PHONE_TEL = "+6582744647";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#35D6F7] blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#1E73D8] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 lg:px-6 pt-24 pb-16 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-[#35D6F7] animate-pulse" />
              Trusted Singapore home services · Since 2014
            </div>
            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              A better way to <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-white to-[#35D6F7] bg-clip-text text-transparent">
                care for your home.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
              Cleaning, painting, repairs, plumbing, electrical and move-in solutions — delivered by one trusted team.
            </p>
            
            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3">
              {/* Primary CTA - Blue Gradient */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-white px-7 py-3.5 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              
              {/* Secondary CTA - White outline */}
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition"
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#35D6F7] text-[#35D6F7]" />
                  ))}
                </div>
                <span className="text-sm text-white/80">
                  <span className="font-bold text-white">5.0</span> from 120+ reviews
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <BadgeCheck className="h-4 w-4 text-[#35D6F7]" />
                <span>Licensed & insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Clock className="h-4 w-4 text-[#35D6F7]" />
                <span>Same-week scheduling</span>
              </div>
            </div>
          </div>

          {/* Right side - Image with floating cards */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/hero.jpg"
                alt="EPS Services professional team caring for a Singapore home"
                width={900}
                height={1100}
                className="h-[460px] lg:h-[560px] w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              
              {/* Satisfaction card */}
              <div className="absolute left-5 right-5 bottom-5 rounded-2xl bg-white/95 backdrop-blur p-4 flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800 leading-tight">100% Satisfaction Guarantee</div>
                  <div className="text-xs text-gray-500 mt-0.5">We make it right — every job, every time.</div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="hidden lg:flex absolute -left-8 top-10 rounded-2xl bg-white shadow-2xl p-4 items-center gap-3 animate-float">
              <div className="h-11 w-11 rounded-xl bg-[#1E73D8]/10 grid place-items-center">
                <Award className="h-5 w-5 text-[#1E73D8]" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-800 leading-none">10+</div>
                <div className="text-[11px] text-gray-500 mt-1">Years of trusted service</div>
              </div>
            </div>
            <div className="hidden lg:flex absolute -right-6 bottom-28 rounded-2xl bg-slate-800 text-white shadow-2xl p-4 items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center">
                <HeartHandshake className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-extrabold leading-none">1,000+</div>
                <div className="text-[11px] text-white/70 mt-1">Happy Singapore homes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}