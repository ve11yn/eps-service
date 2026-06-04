// app/service/ServicesClient.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, X } from "lucide-react";
import { useState } from "react";

const ALL_SERVICES = [
  {
    name: "Stone Restoration",
    description: "Our stone restoration services specialize in revitalizing and maintaining the beauty of natural stone surfaces. We offer a comprehensive range of services such as cleaning, polishing, repairing, and sealing to ensure your stone surfaces look their best. Our experienced team utilizes advanced techniques and eco-friendly products to restore your surfaces to their original luster. In addition to restoration, we provide ongoing maintenance solutions that prevent the need for future restorations.",
    image: "/services/stone-restoration/stoneRestoration1.jpg",
    beforeImage: "/services/stone-restoration/StoneRestoration2.png",
    afterImage: "/services/stone-restoration/StoneRestoration3.png",
    bullets: ["Polishing and honing", "Scratch reduction", "Gloss restoration", "Marble & granite care", "No-restoration guarantee", "Eco-friendly products"],
    category: "Repairs"
  },
  {
    name: "Painting & Wall Rectification",
    description: "Our painting and wall rectification services are designed to transform your spaces and enhance their overall appeal. Whether you're looking to refresh a single room or undertake a complete interior or exterior makeover, our skilled team is equipped to handle projects of all sizes. We specialize in meticulous surface preparation, ensuring that walls are free of imperfections before applying high-quality paints that provide a flawless finish.",
    image: "/services/painting-wall-rectification.png",
    beforeImage: "/services/painting-wall-rectification.png",
    afterImage: "/services/painting-wall-rectification.png",
    bullets: ["Surface preparation", "Crack repair", "Water damage restoration", "Wide color range", "Flawless finish", "Interior & exterior"],
    category: "Painting"
  },
  {
    name: "Air Con Servicing",
    description: "Our air conditioning servicing services are designed to keep your cooling systems running efficiently and effectively, ensuring a comfortable environment in your home or business. We offer comprehensive maintenance packages that include thorough inspections, cleaning of filters and coils, and checking refrigerant levels. Our skilled technicians are trained to identify potential issues before they become major problems.",
    image: "/services/air-con-servicing.png",
    beforeImage: "/services/air-con-servicing.png",
    afterImage: "/services/air-con-servicing.png",
    bullets: ["Filter & coil cleaning", "Refrigerant checks", "Energy efficiency", "Breakdown repairs", "Preventive maintenance", "Extend system lifespan"],
    category: "Repairs"
  },
  {
    name: "High Area Cleaning",
    description: "Our high area cleaning service is designed to tackle those hard-to-reach spaces that often go overlooked, ensuring a thorough and professional clean for your facility. Whether it's high ceilings, overhead beams, or tall windows, our trained team utilizes specialized equipment and techniques to safely and effectively clean elevated surfaces.",
    image: "/services/high-area-cleaning.png",
    beforeImage: "/services/high-area-cleaning.png",
    afterImage: "/services/high-area-cleaning.png",
    bullets: ["Ceiling & beam cleaning", "High dust removal", "Allergen elimination", "Specialized equipment", "Improved air quality", "Safety focused"],
    category: "Cleaning"
  },
  {
    name: "Handover Cleaning",
    description: "Our handover cleaning services are meticulously designed to ensure that properties are spotless and ready for new occupants, whether you're moving in or preparing to hand over a rental. We understand that first impressions matter, and our dedicated team goes above and beyond to provide a thorough clean that covers every corner of the space.",
    image: "/services/handover-cleaning-service.png",
    beforeImage: "/services/handover-cleaning-service.png",
    afterImage: "/services/handover-cleaning-service.png",
    bullets: ["Move-in/out cleaning", "Deep carpet cleaning", "Kitchen & bathroom sanitizing", "Window cleaning", "Appliance cleaning", "Eco-friendly products"],
    category: "Cleaning"
  },
  {
    name: "Rectification & Handywork",
    description: "Our Rectification & Handywork Services offer expert solutions for all your repair needs, from fixing leaky faucets to drywall repairs. Our skilled technicians deliver high-quality workmanship and exceptional customer service, ensuring your space is functional and comfortable.",
    image: "/services/rectification-handywork-services.png",
    beforeImage: "/services/rectification-handywork-services.png",
    afterImage: "/services/rectification-handywork-services.png",
    bullets: ["Leak repairs", "Drywall fixing", "Fixture installation", "Punch list completion", "General maintenance", "Emergency repairs"],
    category: "Repairs"
  },
  {
    name: "Upholstery Services",
    description: "Our Upholstery Service specializes in transforming and restoring your furniture to its former glory, offering a wide range of fabrics and materials to suit your style and needs. Whether you want to refresh an old sofa, reupholster a cherished chair, or create custom pieces, our skilled craftsmen ensure high-quality workmanship and attention to detail.",
    image: "/services/upholstry-services.png",
    beforeImage: "/services/upholstry-services.png",
    afterImage: "/services/upholstry-services.png",
    bullets: ["Sofa & chair restoration", "Fabric selection", "Custom upholstery", "Stain removal", "Odor elimination", "Durable craftsmanship"],
    category: "Cleaning"
  },
  {
    name: "Disinfecting Services",
    description: "Our Disinfecting Service provides thorough cleaning and sanitization to ensure your space is safe and healthy. Using hospital-grade disinfectants and advanced techniques, we target high-touch surfaces and common areas to eliminate harmful germs, bacteria, and viruses.",
    image: "/services/disinfecting-services.png",
    beforeImage: "/services/disinfecting-services.png",
    afterImage: "/services/disinfecting-services.png",
    bullets: ["Hospital-grade disinfectants", "High-touch surface focus", "Germ & virus elimination", "Residential & commercial", "Flexible scheduling", "Health & safety focused"],
    category: "Cleaning"
  },
  {
    name: "Hard Floor Pressure Washing",
    description: "Our Hard Floor Pressure Washing & Scrubbing Service is designed to restore the beauty and cleanliness of your hard surfaces, including tile, concrete, and stone. Using high-powered equipment and specialized cleaning solutions, we effectively remove dirt, grime, and stains, leaving your floors looking fresh and revitalized.",
    image: "/services/hard-floor-pressure.png",
    beforeImage: "/services/hard-floor-pressure.png",
    afterImage: "/services/hard-floor-pressure.png",
    bullets: ["Pressure washing", "Deep scrubbing", "Stain & grime removal", "Tile & concrete cleaning", "Allergen elimination", "Longevity improvement"],
    category: "Cleaning"
  }
];

function ServiceCard({ service, onClick }: { service: typeof ALL_SERVICES[0]; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden bg-slate-900 md:h-72">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm rounded-md">
          {service.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-medium text-slate-900 group-hover:text-[#1E73D8] transition-colors line-clamp-1">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">{service.description.substring(0, 350)}...</p>
       
      </div>
    </div>
  );
}

function ServiceModal({ service, onClose }: { service: typeof ALL_SERVICES[0] | null; onClose: () => void }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-5xl w-full bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
        >
          <X className="h-5 w-5 text-slate-700" />
        </button>

        {/* Main content - Description left, Image right */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left - Text content */}
          <div className="p-8 mt-10">
            <span className="inline-block bg-[#1E73D8]/10 text-[#1E73D8] text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {service.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{service.name}</h2>
            <div className="mt-4">
              <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-slate-900 mb-3 text-sm">What's included:</h3>
              <div className="grid grid-cols-2 gap-2">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#1E73D8] flex-shrink-0" />
                    <span className="text-sm text-slate-600">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Main Image - Centered */}
          <div className="flex flex-col items-start justify-center p-8">
            <div className="relative w-full h-64 md:h-80 rounded-lg mt-10 overflow-hidden bg-slate-200 shadow-md">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
            </div>
             <div className="border-t border-slate-200 p-6 bg-white">
          <Link
            href="/#contact"
            className="inline-flex items-start gap-1.5 rounded-full bg-gradient-primary text-white px-4 py-1.5 text-md font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
          </div>
        </div>

        {/* Bottom - Before & After Images side by side */}
        <div className="border-t border-slate-200 p-8 bg-slate-50">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-72 rounded-lg overflow-hidden bg-slate-200 shadow-md">
              <Image
                src={service.beforeImage}
                alt={`${service.name} - Before`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-72 rounded-lg overflow-hidden bg-slate-200 shadow-md">
              <Image
                src={service.afterImage}
                alt={`${service.name} - After`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
export default function ServicesClient() {
  const [selectedService, setSelectedService] = useState<typeof ALL_SERVICES[0] | null>(null);
  
  const cleaningServices = ALL_SERVICES.filter(s => s.category === "Cleaning");
  const paintingServices = ALL_SERVICES.filter(s => s.category === "Painting");
  const repairServices = ALL_SERVICES.filter(s => s.category === "Repairs");

  return (
    <main className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#07111f] pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#35D6F7]">Our services</p>
            <h1 className="mt-4 text-5xl font-medium leading-tight text-white lg:text-6xl">
              Professional Home Services
            </h1>
            <p className="mt-5 max-w-2xl text-md leading-7 text-white/70 lg:text-lg">
              At EPS, we offer a comprehensive range of services, including restoration, marble polishing, plumbing, disinfecting, handover cleaning, painting, upholstery, timber work, electrical services, AC maintenance, and seepage rectification.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-20">
            <div className="mb-8">
              <h2 className="text-4xl font-medium text-slate-900">Cleaning Services</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cleaningServices.map((service) => (
                <ServiceCard key={service.name} service={service} onClick={() => setSelectedService(service)} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="mb-8">
              <h2 className="text-4xl font-medium text-slate-900">Painting Services</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paintingServices.map((service) => (
                <ServiceCard key={service.name} service={service} onClick={() => setSelectedService(service)} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="mb-8">
              <h2 className="text-4xl font-medium text-slate-900">Repair & Maintenance</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {repairServices.map((service) => (
                <ServiceCard key={service.name} service={service} onClick={() => setSelectedService(service)} />
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-white p-8 text-center shadow-sm">
            <h2 className="text-2xl font-medium text-slate-900">Need a custom solution?</h2>
            <p className="mt-2 text-sm text-slate-600">Contact us for personalized service packages tailored to your needs</p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-primary text-white px-4 py-1.5 text-md font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </main>
  );
}