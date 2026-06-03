import { ArrowRight, CheckCircle2, Sparkles, Paintbrush, Wrench, Droplets, Zap, Gem, ShieldCheck, Layers, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FEATURED_SERVICES = [
  {
    title: "Cleaning",
    description: "Choose us for meticulous cleaning and reliable service. Exceptional quality and customer satisfaction guaranteed!",
    longDescription: "Deep cleaning, move-in/out cleaning, and routine maintenance by trained specialists. We use eco-friendly products and ensure every corner is spotless.",
    icon: Sparkles,
    image: "/cleaning.png",
    href: "/service/cleaning",
    features: ["Deep cleaning", "Move-in/out", "Routine maintenance", "Eco-friendly products"]
  },
  {
    title: "Painting",
    description: "Revitalize your space with our expert painting. We deliver high-quality, precise finishes for a clean, professional look.",
    longDescription: "Interior and exterior repainting with low-odour, premium-grade finishes. Our team ensures minimal disruption and perfect results.",
    icon: Paintbrush,
    image: "/painting.png",
    href: "/service/painting",
    features: ["Interior/Exterior", "Low-odour paint", "Premium finishes", "Minimal disruption"]
  },
  {
    title: "Repair",
    description: "We tackle all issues with precision and efficiency, restoring your space to perfect condition.",
    longDescription: "From fixtures to major fixes, our handyman team handles it all. Licensed, insured, and ready to solve your problems.",
    icon: Wrench,
    image: "/repair.png",
    href: "/service/repairs",
    features: ["Fixtures & fittings", "Minor repairs", "Major fixes", "Licensed specialists"]
  },
];


export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 mt-16">
          <span className="inline-block text-sm font-semibold text-[#1E73D8] uppercase tracking-wide mb-2">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium text-slate-800">
            Professional solutions for your home
          </h2>
          <p className="mt-4 text-gray-600 text-sm">
            We provide services for home owners for their own marble works, cleaning services, 
            disinfecting and minor repair for move in condition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FEATURED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image slot */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-md">
                    <Icon className="h-5 w-5 text-[#1E73D8]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-medium text-slate-800">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Feature chips */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="text-xs text-gray-400">+{service.features.length - 2} more</span>
                    )}
                  </div>

                  {/* View details link */}
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#1E73D8] hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      
      </div>
    </section>
  );
}
