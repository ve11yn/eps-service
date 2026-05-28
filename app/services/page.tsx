import { Sparkles, Paintbrush, Wrench, Droplets, Zap, Gem, ShieldCheck, Layers, Wind, Clock, Award, Users, Star } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Services | EPS Services — Professional Property Maintenance in Singapore",
  description: "EPS Services has been in the industry since 2014 providing a wide range of services for home owners including cleaning, painting, repairs, marble polishing, plumbing, electrical works and more.",
  keywords: "home services singapore, cleaning services, painting, plumbing, electrical, handyman, marble polishing, disinfecting, floor works",
};

const SERVICES_LIST = [
  { 
    icon: Sparkles, 
    title: "Cleaning Services", 
    desc: "Deep cleaning, move-in/out cleaning and routine cleaning by trained specialists.",
    features: ["Deep cleaning", "Move-in/Move-out cleaning", "Regular maintenance", "Post-renovation cleaning"]
  },
  { 
    icon: Paintbrush, 
    title: "Painting", 
    desc: "Interior repainting with low-odour, premium-grade finishes for a fresh new look.",
    features: ["Interior painting", "Low-odour paints", "Premium finishes", "Surface preparation"]
  },
  { 
    icon: Wrench, 
    title: "Handyman Repairs", 
    desc: "Fixtures, fittings and small fixes done properly the first time by experienced technicians.",
    features: ["Fixture repairs", "Cabinet fixes", "Door and window repairs", "General maintenance"]
  },
  { 
    icon: Droplets, 
    title: "Plumbing", 
    desc: "Leaks, chokes, fittings and complete plumbing installations for your home.",
    features: ["Leak detection", "Pipe repair", "Fixture installation", "Drain unblocking"]
  },
  { 
    icon: Zap, 
    title: "Electrical Works", 
    desc: "Licensed wiring, lighting, switches and safety upgrades by certified electricians.",
    features: ["Lighting installation", "Switch upgrades", "Safety checks", "Wiring repairs"]
  },
  { 
    icon: Gem, 
    title: "Marble Polishing", 
    desc: "Restore showroom shine to marble, granite and natural stone surfaces.",
    features: ["Marble polishing", "Granite restoration", "Stone sealing", "Scratch removal"]
  },
  { 
    icon: ShieldCheck, 
    title: "Disinfecting", 
    desc: "Hospital-grade disinfection for healthier indoor spaces and peace of mind.",
    features: ["Hospital-grade products", "Full home disinfection", "High-touch surfaces", "Safe for families"]
  },
  { 
    icon: Layers, 
    title: "Flooring", 
    desc: "Tiling, vinyl and parquet repair, replacement and installation services.",
    features: ["Tile installation", "Vinyl flooring", "Parquet repair", "Floor leveling"]
  },
  { 
    icon: Wind, 
    title: "Aircon Servicing", 
    desc: "General service, chemical wash and full aircon repair to keep your home cool.",
    features: ["Chemical wash", "General servicing", "Gas top-up", "Repair works"]
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-[calc(8rem+10px)] pb-[calc(5rem+10px)] bg-gradient-to-br from-[#0a1628] via-[#0f1d3a] to-[#1a2a4f]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              EPS Services has been in the industry since 2014 providing a wide range of services 
              to enhance efficiency and convenience for our clients.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-blue text-white px-6 py-3 font-semibold shadow-lg hover:brightness-110 transition"
              >
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[calc(5rem+10px)] lg:py-[calc(7rem+10px)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-[calc(3rem+10px)]">
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-wider">What We Offer</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy">
              Comprehensive Home Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              We provide services for home owners including marble works, cleaning services, 
              disinfecting and minor repairs for move-in condition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-border bg-white p-6 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-xl bg-accent/10 grid place-items-center group-hover:bg-gradient-blue transition-colors">
                    <Icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{service.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Trust Badges */}
          <div className="mt-[calc(4rem+10px)] flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 grid place-items-center">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-bold text-navy">Since 2014</div>
                <div className="text-xs text-muted-foreground">10+ Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 grid place-items-center">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-bold text-navy">1,000+</div>
                <div className="text-xs text-muted-foreground">Happy Homes Served</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 grid place-items-center">
                <Star className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-bold text-navy">5.0 Rating</div>
                <div className="text-xs text-muted-foreground">120+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[calc(5rem+10px)] bg-soft-grey">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            Ready to transform your home?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Contact us today for a free quote. We'll respond within 1 hour during business hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-blue text-white px-6 py-3 font-semibold shadow-lg hover:brightness-110 transition"
            >
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+6582744647"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 font-semibold text-navy hover:bg-soft-grey transition"
            >
              Call +65 8274 4647
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
