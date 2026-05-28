"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const PHONE = "+65 8274 4647";
const PHONE_TEL = "+6582744647";
const CLEANING_PHONE = "+65 8774 1959";
const CLEANING_PHONE_TEL = "+6587741959";
const WHATSAPP = "6582744647";
const MAP_EMBED_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.692521075655!2d103.85972777513895!3d1.361136761539118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17cdb623048b%3A0xbafd330da4604d02!2sEPS%20Services%20Pte%20Ltd!5e0!3m2!1sen!2sid!4v1779962577289!5m2!1sen!2sid";
const MAP_LINK = "https://maps.app.goo.gl/6GVsvihk84xKgR8v5";

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
    <section id="contact" className="py-[calc(5rem+10px)] bg-white">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-[#1E73D8] uppercase tracking-wider mb-2">Contact Us</span>
          <h2 className="text-3xl lg:text-4xl font-medium text-navy">Get in touch with us</h2>
          <p className="mt-2 text-muted-foreground">We'll respond within 1 hour during business hours</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Contact Info */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid gap-3">
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1E73D8]">EPS</div>
                    <h3 className="mt-1 text-sm font-medium leading-snug text-navy">
                      For Repairs &amp; Other Enquiries
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
                      Please provide pictures of issues for a quicker quotation
                    </p>
                  </div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-navy transition-colors hover:border-[#1E73D8]/30 hover:text-[#1E73D8]"
                  >
                    {PHONE}
                  </a>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1E73D8]">EPS TANIA</div>
                    <h3 className="mt-1 text-sm font-medium leading-snug text-navy">
                      For Cleaning/curtain Cleaning/Stain removal/floor works
                    </h3>
                  </div>
                  <a
                    href={`tel:${CLEANING_PHONE_TEL}`}
                    className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-navy transition-colors hover:border-[#1E73D8]/30 hover:text-[#1E73D8]"
                  >
                    {CLEANING_PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 h-60 shadow-sm">
              <iframe
                title="EPS Services location"
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-[#1E73D8] hover:gap-3 transition-all"
            >
              View on Google Maps <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Column - Form */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <div className="border-t-2 border-[#1E73D8]/20" />
            <div className="p-6 lg:p-7">
            <h3 className="text-lg font-semibold text-navy mb-5">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 mb-2">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input 
                  required 
                  value={form.name} 
                  onChange={setField("name")} 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-[#1E73D8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#1E73D8]/10"
                  placeholder="Jane Tan" 
                />
              </div>
              
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 mb-2">
                  Phone <span className="text-accent">*</span>
                </label>
                <input 
                  required 
                  value={form.phone} 
                  onChange={setField("phone")} 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-[#1E73D8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#1E73D8]/10"
                  placeholder="+65 9123 4567" 
                />
              </div>
              
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  value={form.email} 
                  onChange={setField("email")} 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-[#1E73D8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#1E73D8]/10"
                  placeholder="jane@example.com" 
                />
              </div>
              
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 mb-2">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.message}
                  onChange={setField("message")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-[#1E73D8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#1E73D8]/10 resize-none"
                  placeholder="Tell us what you need..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E73D8] text-white px-4 py-3 text-sm font-medium shadow-sm hover:bg-[#1668c4] transition-all disabled:opacity-70 mt-2"
              >
                {isSubmitting ? "Sending..." : "Send Message via WhatsApp"}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              
              {submitted && (
                <div className="flex items-center justify-center gap-2 text-xs text-green-600 mt-2">
                  <CheckCircle className="h-3.5 w-3.5" />
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
