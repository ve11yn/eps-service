"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const PHONE = "+65 8274 4647";
const PHONE_TEL = "+6582744647";
const CLEANING_PHONE = "+65 8774 1959";
const CLEANING_PHONE_TEL = "+6587741959";
const WHATSAPP = "6582744647";
const ADDRESS = "33 Borthwick Dr, Singapore 559536";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const text = `Hi EPS Services!%0A%0A*New Enquiry*%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A%0AMessage:%0A${form.message}`;
    
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    
    setForm({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const setField = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 mb-20 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-bold text-[#1E73D8] uppercase tracking-wider mb-2">Contact Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Get in touch with us</h2>
            <p className="mt-2 text-slate-500 text-base">Contact us for any enquiries</p>
        </div>

        <div className="flex flex-row gap-6 items-stretch">

          <div className="w-[35%] space-y-4">

            <div className="space-y-3">

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[#1E73D8]/10 grid place-items-center shrink-0">
                      <Phone className="h-4 w-4 text-[#1E73D8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-base">Repairs &amp; General Enquiries</h3>
                    </div>
                  </div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="shrink-0 rounded-full bg-[#1E73D8] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1668c4] transition"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[#35D6F7]/10 grid place-items-center shrink-0">
                      <Phone className="h-4 w-4 text-[#35D6F7]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-base">Cleaning Services</h3>
                    </div>
                  </div>
                  <a
                    href={`tel:${CLEANING_PHONE_TEL}`}
                    className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-[#35D6F7] hover:text-[#35D6F7] transition"
                  >
                    {CLEANING_PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-slate-100 grid place-items-center shrink-0">
                  <Clock className="h-4 w-4 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-base">Business Hours</h3>
                  <div className="mt-2 space-y-0.5 text-sm text-slate-500">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-slate-100 grid place-items-center shrink-0">
                  <MapPin className="h-4 w-4 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-base">Visit Us</h3>
                  <p className="mt-2 text-sm text-slate-500">{ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form (65% width) */}
          <div className="w-[65%] rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col">
            <div className="border-t-2 border-[#1E73D8] w-12 ml-5" />
            <div className="p-5 flex-1 flex flex-col">
              
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Full Name <span className="text-[#1E73D8]">*</span>
                  </label>
                  <input 
                    required 
                    value={form.name} 
                    onChange={setField("name")} 
                    className="w-full px-3 py-1.5 text-base rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:border-[#1E73D8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E73D8]/20 transition"
                    placeholder="Jane Tan" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Phone <span className="text-[#1E73D8]">*</span>
                  </label>
                  <input 
                    required 
                    value={form.phone} 
                    onChange={setField("phone")} 
                    className="w-full px-3 py-1.5 text-base rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:border-[#1E73D8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E73D8]/20 transition"
                    placeholder="+65 9123 4567" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    value={form.email} 
                    onChange={setField("email")} 
                    className="w-full px-3 py-1.5 text-base rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:border-[#1E73D8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E73D8]/20 transition"
                    placeholder="jane@example.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Message <span className="text-[#1E73D8]">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={setField("message")}
                    className="w-full px-3 py-1.5 text-base rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:border-[#1E73D8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E73D8]/20 transition resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E73D8] text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-[#1668c4] transition-all disabled:opacity-70 mt-1"
                >
                  {isSubmitting ? "Sending..." : "Send Message via WhatsApp"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                
                {submitted && (
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                    <CheckCircle className="h-3 w-3" />
                    Message sent! We'll contact you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}