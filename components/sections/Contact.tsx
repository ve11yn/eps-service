"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

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
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-[#1E73D8] uppercase tracking-wide mb-2">
            Contact
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium text-slate-800">
            Chat With Us
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Contact us today for cleaning, repairs, painting and property maintenance services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left - Contact Info */}
          <div className="space-y-4">
            
            {/* Phone numbers - combined cleaner */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#1E73D8]/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-[#1E73D8]" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Repairs & General</span>
                  </div>
                  <a href={`tel:${PHONE_TEL}`} className="text-sm text-gray-900 font-medium hover:text-[#1E73D8] transition">
                    {PHONE}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Cleaning Services</span>
                  </div>
                  <a href={`tel:${CLEANING_PHONE_TEL}`} className="text-sm text-gray-900 font-medium hover:text-[#25D366] transition">
                    {CLEANING_PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp direct */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">WhatsApp</span>
                    <p className="text-xs text-gray-400">Fastest response</p>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${WHATSAPP}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-900 font-medium hover:text-[#25D366] transition"
                >
                  Message us →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Business Hours</span>
                  <div className="mt-2 space-y-1 text-sm text-gray-500">
                    <div className="flex justify-between gap-8">
                      <span>Monday - Friday</span>
                      <span className="text-gray-700">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Saturday</span>
                      <span className="text-gray-700">9:00 AM – 2:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Office</span>
                  <p className="mt-1 text-sm text-gray-500">{ADDRESS}</p>
                  <a 
                    href="https://maps.google.com/?q=33+Borthwick+Dr+Singapore+559536"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-[#1E73D8] hover:underline"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800">Speak to Our Team</h3>
                <p className="text-sm text-gray-500 mt-1">Fill in the form and we'll reply via WhatsApp</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required 
                    value={form.name} 
                    onChange={setField("name")} 
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-[#1E73D8] focus:outline-none focus:ring-1 focus:ring-[#1E73D8]/20 transition"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required 
                    value={form.phone} 
                    onChange={setField("phone")} 
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-[#1E73D8] focus:outline-none focus:ring-1 focus:ring-[#1E73D8]/20 transition"
                    placeholder="+65 9123 4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-gray-400 text-xs">(optional)</span>
                  </label>
                  <input 
                    type="email" 
                    value={form.email} 
                    onChange={setField("email")} 
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-[#1E73D8] focus:outline-none focus:ring-1 focus:ring-[#1E73D8]/20 transition"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={setField("message")}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-[#1E73D8] focus:outline-none focus:ring-1 focus:ring-[#1E73D8]/20 transition resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E73D8] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#1668c4] transition-all disabled:opacity-70 mt-2"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                
                {submitted && (
                  <div className="flex items-center justify-center gap-2 py-2 text-sm text-green-600 bg-green-50 rounded-lg">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Thank you. Our team will reply shortly.
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