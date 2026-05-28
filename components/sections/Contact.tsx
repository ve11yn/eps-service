"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, Clock, CheckCircle } from "lucide-react";

const PHONE = "+65 8274 4647";
const PHONE_TEL = "+6582744647";
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
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-wider mb-2">Contact Us</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">Get in touch with us</h2>
          <p className="mt-2 text-muted-foreground">We'll respond within 1 hour during business hours</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Contact Info */}
          <div className="space-y-4">
            {/* Contact Cards Row */}
            <div className="grid grid-cols-1 gap-3">
              <ContactItem icon={MapPin} label="VISIT US" value={ADDRESS} />
              <ContactItem icon={Phone} label="CALL US" value={PHONE} href={`tel:${PHONE_TEL}`} />
              <ContactItem icon={Mail} label="EMAIL US" value="hello@epsservices.sg" href="mailto:hello@epsservices.sg" />
            </div>

            {/* Business Hours */}
            <div className="bg-soft-grey rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-accent" />
                <h3 className="font-semibold text-navy text-sm">Business Hours</h3>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-40">
              <iframe
                title="EPS Services location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-soft-grey rounded-lg border border-border p-5">
            <h3 className="text-lg font-bold text-navy mb-4">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input 
                  required 
                  value={form.name} 
                  onChange={setField("name")} 
                  className="w-full px-3 py-2 rounded-lg border border-border bg-white text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition"
                  placeholder="Jane Tan" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Phone <span className="text-accent">*</span>
                </label>
                <input 
                  required 
                  value={form.phone} 
                  onChange={setField("phone")} 
                  className="w-full px-3 py-2 rounded-lg border border-border bg-white text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition"
                  placeholder="+65 9123 4567" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  value={form.email} 
                  onChange={setField("email")} 
                  className="w-full px-3 py-2 rounded-lg border border-border bg-white text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition"
                  placeholder="jane@example.com" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.message}
                  onChange={setField("message")}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-white text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>
              
              {/* BUTTON WITH SOLID BACKGROUND */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1E73D8] to-[#35D6F7] text-white px-4 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg hover:brightness-105 transition-all disabled:opacity-70 mt-4"
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
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper 
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg border border-border bg-white hover:shadow-sm transition"
    >
      <div className="h-8 w-8 rounded-lg bg-accent/10 grid place-items-center shrink-0">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm text-navy font-medium">{value}</div>
      </div>
    </Wrapper>
  );
}