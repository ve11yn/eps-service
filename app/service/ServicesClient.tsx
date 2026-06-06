"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";

type ServiceCategory = "Cleaning" | "Painting" | "Repairs";

type GalleryImage = {
  src: string;
  displaySrc: string;
  thumbSrc: string;
  alt: string;
  width: number;
  height: number;
};

type Service = {
  name: string;
  description: string;
  image: GalleryImage;
  bullets: string[];
  category: ServiceCategory;
  detailImages: GalleryImage[];
  beforeAfterImages?: GalleryImage[];
  resultImages?: GalleryImage[];
};

const asset = (path: string) => `/services-assets/${path}`;
const displayAsset = (path: string) => `/services-assets/display/${path}`;
const thumbAsset = (path: string) => `/services-assets/thumbs/${path}`;

function buildImage(path: string, alt: string, width = 1080, height = 1080): GalleryImage {
  return {
    src: asset(path),
    displaySrc: displayAsset(path),
    thumbSrc: thumbAsset(path),
    alt,
    width,
    height,
  };
}

function buildGallery(serviceName: string, label: string, paths: string[], width = 1080, height = 1080): GalleryImage[] {
  return paths.map((path, index) => ({
    src: asset(path),
    displaySrc: displayAsset(path),
    thumbSrc: thumbAsset(path),
    alt: `${serviceName} ${label} ${index + 1}`,
    width,
    height,
  }));
}

const ALL_SERVICES: Service[] = [
  {
    name: "Stone Restoration",
    description:
      "Our stone restoration services specialize in revitalizing and maintaining the beauty of natural stone surfaces. We offer a comprehensive range of services such as cleaning, polishing, repairing, and sealing to ensure your stone surfaces look their best. Our experienced team utilizes advanced techniques and eco-friendly products to restore your surfaces to their original luster. In addition to restoration, we provide ongoing maintenance solutions that prevent the need for future restorations.",
    image: buildImage("stone-restoration/stoneRestoration-main.jpeg", "Stone Restoration main image", 1125, 1998),
    detailImages: buildGallery("Stone Restoration", "detail", [
      "stone-restoration/stoneRestoration-1.jpg",
      "stone-restoration/stoneRestoration-2.jpg",
      "stone-restoration/stoneRestoration-3.jpg",
      "stone-restoration/stoneRestoration-4.jpg",
    ]),
    beforeAfterImages: buildGallery("Stone Restoration", "before and after", [
      "stone-restoration/stoneRestoration-bfraftr-1.jpg",
      "stone-restoration/stoneRestoration-bfraftr-2.jpg",
      "stone-restoration/stoneRestoration-bfraftr-3.jpg",
      "stone-restoration/stoneRestoration-bfraftr-4.jpg",
    ]),
    bullets: [
      "Polishing and honing",
      "Scratch reduction",
      "Gloss restoration",
      "Marble & granite care",
      "No-restoration guarantee",
      "Eco-friendly products",
    ],
    category: "Repairs",
  },
  {
    name: "Painting & Wall Rectification",
    description:
      "Our painting and wall rectification services are designed to transform your spaces and enhance their overall appeal. Whether you're looking to refresh a single room or undertake a complete interior or exterior makeover, our skilled team is equipped to handle projects of all sizes. We specialize in meticulous surface preparation, ensuring that walls are free of imperfections before applying high-quality paints that provide a flawless finish.",
    image: buildImage("painting-rectification/paintingRectification-1.jpg", "Painting & Wall Rectification main image"),
    detailImages: buildGallery("Painting & Wall Rectification", "detail", [
      "painting-rectification/paintingRectification-2.jpg",
      "painting-rectification/paintingRectification-3.jpg",
    ]),
    beforeAfterImages: buildGallery("Painting & Wall Rectification", "before and after", [
      "painting-rectification/paintinfRectification-brfaftr-1.jpg",
    ]),
    bullets: [
      "Surface preparation",
      "Crack repair",
      "Water damage restoration",
      "Wide color range",
      "Flawless finish",
      "Interior & exterior",
    ],
    category: "Painting",
  },
  {
    name: "Air Con Servicing",
    description:
      "Our air conditioning servicing services are designed to keep your cooling systems running efficiently and effectively, ensuring a comfortable environment in your home or business. We offer comprehensive maintenance packages that include thorough inspections, cleaning of filters and coils, and checking refrigerant levels. Our skilled technicians are trained to identify potential issues before they become major problems.",
    image: buildImage("air-con/airCon-1.jpg", "Air Con Servicing main image"),
    detailImages: buildGallery("Air Con Servicing", "detail", [
      "air-con/airCon-2.jpg",
      "air-con/airCon-3.jpg",
    ]),
    bullets: [
      "Filter & coil cleaning",
      "Refrigerant checks",
      "Energy efficiency",
      "Breakdown repairs",
      "Preventive maintenance",
      "Extend system lifespan",
    ],
    category: "Repairs",
  },
  {
    name: "High Area Cleaning",
    description:
      "Our high area cleaning service is designed to tackle those hard-to-reach spaces that often go overlooked, ensuring a thorough and professional clean for your facility. Whether it's high ceilings, overhead beams, or tall windows, our trained team utilizes specialized equipment and techniques to safely and effectively clean elevated surfaces.",
    image: buildImage("high-area/highArea-1.jpg", "High Area Cleaning main image"),
    detailImages: buildGallery("High Area Cleaning", "detail", [
      "high-area/highArea-2.jpg",
      "high-area/highArea-3.jpg",
      "high-area/highArea-4.jpg",
    ]),
    bullets: [
      "Ceiling & beam cleaning",
      "High dust removal",
      "Allergen elimination",
      "Specialized equipment",
      "Improved air quality",
      "Safety focused",
    ],
    category: "Cleaning",
  },
  {
    name: "Handover Cleaning",
    description:
      "Our handover cleaning services are meticulously designed to ensure that properties are spotless and ready for new occupants, whether you're moving in or preparing to hand over a rental. We understand that first impressions matter, and our dedicated team goes above and beyond to provide a thorough clean that covers every corner of the space.",
    image: buildImage("handover-cleaning/handoverCleaning-1.jpg", "Handover Cleaning main image"),
    detailImages: buildGallery("Handover Cleaning", "detail", [
      "handover-cleaning/handoverCleaning-2.jpg",
      "handover-cleaning/handoverCleaning-3.jpg",
      "handover-cleaning/handoverCleaning-4.jpg",
    ]),
    resultImages: buildGallery("Handover Cleaning", "result", [
      "handover-cleaning/handoverCleaning-result-1.jpg",
      "handover-cleaning/handoverCleaning-result-2.jpg",
      "handover-cleaning/handoverCleaning-result-3.jpg",
      "handover-cleaning/handoverCleaning-result-4.jpg",
      "handover-cleaning/handoverCleaning-result-5.jpg",
      "handover-cleaning/handoverCleaning-result-6.jpg",
      "handover-cleaning/handoverCleaning-result-7.jpg",
      "handover-cleaning/handoverCleaning-result-8.jpg",
      "handover-cleaning/handoverCleaning-result-9.jpg",
      "handover-cleaning/handoverCleaning-result-10.jpg",
      "handover-cleaning/handoverCleaning-result-11.jpg",
      "handover-cleaning/handoverCleaning-result-12.jpg",
    ]),
    bullets: [
      "Move-in/out cleaning",
      "Deep carpet cleaning",
      "Kitchen & bathroom sanitizing",
      "Window cleaning",
      "Appliance cleaning",
      "Eco-friendly products",
    ],
    category: "Cleaning",
  },
  {
    name: "Rectification & Handywork",
    description:
      "Our Rectification & Handywork Services offer expert solutions for all your repair needs, from fixing leaky faucets to drywall repairs. Our skilled technicians deliver high-quality workmanship and exceptional customer service, ensuring your space is functional and comfortable.",
    image: buildImage("rectification-handywork/rectificationHandywork-1.jpg", "Rectification & Handywork main image"),
    detailImages: buildGallery("Rectification & Handywork", "detail", [
      "rectification-handywork/rectificationHandywork-2.jpg",
      "rectification-handywork/rectificationHandywork-3.jpg",
    ]),
    beforeAfterImages: buildGallery("Rectification & Handywork", "before and after", [
      "rectification-handywork/rectificationHandywork-bfraftr-1.jpg",
      "rectification-handywork/rectificationHandywork-bfraftr-2.jpg",
    ]),
    bullets: [
      "Leak repairs",
      "Drywall fixing",
      "Fixture installation",
      "Punch list completion",
      "General maintenance",
      "Emergency repairs",
    ],
    category: "Repairs",
  },
  {
    name: "Upholstery Services",
    description:
      "Our Upholstery Service specializes in transforming and restoring your furniture to its former glory, offering a wide range of fabrics and materials to suit your style and needs. Whether you want to refresh an old sofa, reupholster a cherished chair, or create custom pieces, our skilled craftsmen ensure high-quality workmanship and attention to detail.",
    image: buildImage("upholstery/upholstery-1.jpg", "Upholstery Services main image"),
    detailImages: buildGallery("Upholstery Services", "detail", [
      "upholstery/upholstery-2.jpg",
      "upholstery/upholstery-3.jpg",
    ]),
    beforeAfterImages: buildGallery("Upholstery Services", "before and after", [
      "upholstery/upholstery-bfraftr-1.jpg",
    ]),
    bullets: [
      "Sofa & chair restoration",
      "Fabric selection",
      "Custom upholstery",
      "Stain removal",
      "Odor elimination",
      "Durable craftsmanship",
    ],
    category: "Cleaning",
  },
  {
    name: "Disinfecting Services",
    description:
      "Our Disinfecting Service provides thorough cleaning and sanitization to ensure your space is safe and healthy. Using hospital-grade disinfectants and advanced techniques, we target high-touch surfaces and common areas to eliminate harmful germs, bacteria, and viruses.",
    image: buildImage("disinfecting/disinfecting-1.jpg", "Disinfecting Services main image"),
    detailImages: buildGallery("Disinfecting Services", "detail", [
      "disinfecting/disinfecting-2.jpg",
      "disinfecting/disinfecting-3.jpg",
    ]),
    bullets: [
      "Hospital-grade disinfectants",
      "High-touch surface focus",
      "Germ & virus elimination",
      "Residential & commercial",
      "Flexible scheduling",
      "Health & safety focused",
    ],
    category: "Cleaning",
  },
  {
    name: "Hard Floor Pressure Washing",
    description:
      "Our Hard Floor Pressure Washing & Scrubbing Service is designed to restore the beauty and cleanliness of your hard surfaces, including tile, concrete, and stone. Using high-powered equipment and specialized cleaning solutions, we effectively remove dirt, grime, and stains, leaving your floors looking fresh and revitalized.",
    image: buildImage("hard-pressure/hardPressure-1.jpg", "Hard Floor Pressure Washing main image"),
    detailImages: buildGallery("Hard Floor Pressure Washing", "detail", [
      "hard-pressure/hardPressure-2.jpg",
      "hard-pressure/hardPressure-3.jpg",
    ]),
    bullets: [
      "Pressure washing",
      "Deep scrubbing",
      "Stain & grime removal",
      "Tile & concrete cleaning",
      "Allergen elimination",
      "Longevity improvement",
    ],
    category: "Cleaning",
  },
];

function ImageGridSection({
  title,
  images,
  onImageClick,
  limit,
  showAll,
  onShowMore,
}: {
  title: string;
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
  limit?: number;
  showAll?: boolean;
  onShowMore?: () => void;
}) {
  if (images.length === 0) return null;

  const visibleImages = limit && !showAll ? images.slice(0, limit) : images;
  const hasMore = Boolean(limit && images.length > limit && !showAll);

  return (
    <section className="border-t border-slate-200 p-8 bg-slate-50">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleImages.map((image) => (
          <button
            type="button"
            key={image.src}
            onClick={() => onImageClick(image)}
            className="group relative aspect-square overflow-hidden rounded-md bg-slate-200 text-left"
          >
            <Image
              src={image.thumbSrc}
              alt={image.alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={58}
            />
          </button>
        ))}
      </div>

      {hasMore && onShowMore ? (
        <div className="mt-5">
          <button
            type="button"
            onClick={onShowMore}
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Show more
          </button>
        </div>
      ) : null}
    </section>
  );
}

function ImageLightbox({ image, onClose }: { image: GalleryImage | null; onClose: () => void }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="relative h-[85vh] w-[92vw] max-w-6xl" onClick={(event) => event.stopPropagation()}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="92vw"
          quality={82}
          priority
        />
      </div>
    </div>
  );
}

function ServiceCard({ service, onClick }: { service: Service; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden bg-slate-900 md:h-64">
        <Image
          src={service.image.thumbSrc}
          alt={service.image.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          quality={58}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 rounded-sm bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
          {service.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="line-clamp-1 text-lg font-medium text-slate-900 transition-colors group-hover:text-[#1E73D8]">
          {service.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
          {service.description.substring(0, 350)}...
        </p>
      </div>
    </div>
  );
}

function ServiceModal({ service, onClose }: { service: Service | null; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [showAllResults, setShowAllResults] = useState(false);

  useEffect(() => {
    setActiveImage(null);
    setShowAllResults(false);
  }, [service?.name]);

  if (!service) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
        <div
          className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-lg bg-white shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-30 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
          >
            <X className="h-5 w-5 text-slate-700" />
          </button>

          <div className="relative min-h-[360px] overflow-hidden bg-[#07111f] md:min-h-[420px]">
            <button
              type="button"
              onClick={() => setActiveImage(service.image)}
              className="absolute inset-y-0 right-0 block h-full w-full overflow-hidden border-0 p-0 text-left lg:w-[48%]"
            >
              <Image
                src={service.image.displaySrc}
                alt={service.image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 48vw"
                quality={66}
              />
              <div className="absolute inset-0 bg-[#0a1d42]/70" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#08152f]/20 via-[#0a1d42]/55 to-[#07111f]" />
            </button>

            <div className="relative z-10 flex min-h-[360px] items-center px-8 py-7 md:min-h-[420px] md:px-10 md:py-8">
              <div className="max-w-3xl lg:max-w-[56%]">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {service.category}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">{service.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">What&apos;s included:</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#1E73D8]" />
                    <span className="text-sm text-slate-600">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-md font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ImageGridSection
            title="More Project Images"
            images={[service.image, ...service.detailImages]}
            onImageClick={setActiveImage}
          />

          {service.beforeAfterImages && service.beforeAfterImages.length > 0 ? (
            <ImageGridSection
              title="Before & After"
              images={service.beforeAfterImages}
              onImageClick={setActiveImage}
            />
          ) : null}

          {service.resultImages && service.resultImages.length > 0 ? (
            <ImageGridSection
              title="Results"
              images={service.resultImages}
              onImageClick={setActiveImage}
              limit={6}
              showAll={showAllResults}
              onShowMore={() => setShowAllResults(true)}
            />
          ) : null}
        </div>
      </div>

      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
}

export default function ServicesClient() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const cleaningServices = ALL_SERVICES.filter((service) => service.category === "Cleaning");
  const paintingServices = ALL_SERVICES.filter((service) => service.category === "Painting");
  const repairServices = ALL_SERVICES.filter((service) => service.category === "Repairs");

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-[#07111f] pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#35D6F7]">Our services</p>
            <h1 className="mt-4 text-5xl font-medium leading-tight text-white lg:text-6xl">Professional Home Services</h1>
            <p className="mt-5 max-w-2xl text-md leading-7 text-white/70 lg:text-lg">
              At EPS, we offer a comprehensive range of services, including restoration, marble polishing, plumbing,
              disinfecting, handover cleaning, painting, upholstery, timber work, electrical services, AC maintenance,
              and seepage rectification.
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
            <p className="mt-2 text-sm text-slate-600">
              Contact us for personalized service packages tailored to your needs
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-1.5 text-md font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
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
