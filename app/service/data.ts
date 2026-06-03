import type { LucideIcon } from "lucide-react";
import { Sparkles, Paintbrush, Wrench } from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  bullets: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  icon: LucideIcon;
  serviceCount: number;
  previewImages: string[];
  services: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "cleaning",
    title: "Cleaning Services",
    description:
      "Detailed cleaning for homes that need a proper reset, handover preparation, or recurring maintenance.",
    summary:
      "Choose this menu for deep cleaning, upholstery care, high-area cleaning, disinfecting, and hard floor treatment.",
    icon: Sparkles,
    serviceCount: 5,
    previewImages: [
      "/services/high-area-cleaning.png",
      "/services/handover-cleaning-service.png",
      "/services/upholstry-services.png",
      "/services/disinfecting-services.png",
    ],
    services: [
      {
        title: "High Area Cleaning",
        description:
          "Safe cleaning for ceilings, ledges, fans, beams, and other hard-to-reach areas that collect dust over time.",
        image: "/services/high-area-cleaning.png",
        beforeImage: "/services/high-area-cleaning.png",
        afterImage: "/services/high-area-cleaning.png",
        bullets: ["Ceiling level dust removal", "Safe access methods", "Hard-to-reach detailing"],
      },
      {
        title: "Handover Cleaning Services",
        description:
          "Move-in and handover cleaning that prepares the property for the next occupant with a polished finish.",
        image: "/services/handover-cleaning-service.png",
        beforeImage: "/services/handover-cleaning-service.png",
        afterImage: "/services/handover-cleaning-service.png",
        bullets: ["Vacancy-ready cleaning", "Fixtures and corners", "Move-in presentation"],
      },
      {
        title: "Upholstery Services",
        description:
          "Deep vacuuming and extraction for sofas, cushions, and soft furnishings that need a proper refresh.",
        image: "/services/upholstry-services.png",
        beforeImage: "/services/upholstry-services.png",
        afterImage: "/services/upholstry-services.png",
        bullets: ["Fabric refresh", "Odour and dust reduction", "Deep extraction"],
      },
      {
        title: "Disinfecting Services",
        description:
          "Sanitizing treatment for high-touch surfaces and shared spaces that need a cleaner, healthier environment.",
        image: "/services/disinfecting-services.png",
        beforeImage: "/services/disinfecting-services.png",
        afterImage: "/services/disinfecting-services.png",
        bullets: ["High-touch sanitizing", "Surface treatment", "Indoor hygiene support"],
      },
      {
        title: "Hard Floor Pressure Washing & Scrubbing",
        description:
          "Machine scrubbing and pressure washing for stubborn dirt on tiled and other hard floor surfaces.",
        image: "/services/hard-floor-pressure.png",
        beforeImage: "/services/hard-floor-pressure.png",
        afterImage: "/services/hard-floor-pressure.png",
        bullets: ["Heavy-duty floor wash", "Stain and grime removal", "Mechanical scrubbing"],
      },
    ],
  },
  {
    slug: "painting",
    title: "Painting Services",
    description:
      "Surface correction and repainting for smoother walls, cleaner lines, and a more consistent finish.",
    summary:
      "Open this menu for painting and wall rectification work that brings damaged walls back into shape.",
    icon: Paintbrush,
    serviceCount: 1,
    previewImages: ["/services/painting-wall-rectification.png"],
    services: [
      {
        title: "Painting & Wall Rectification",
        description:
          "Patch, skim, and repaint walls so cracks, stains, and uneven sections are corrected before the final coat.",
        image: "/services/painting-wall-rectification.png",
        beforeImage: "/services/painting-wall-rectification.png",
        afterImage: "/services/painting-wall-rectification.png",
        bullets: ["Crack and patch repair", "Wall smoothing and touch-up", "Fresh repaint finish"],
      },
    ],
  },
  {
    slug: "repairs",
    title: "Repairs & Maintenance",
    description:
      "Targeted restoration and maintenance for surfaces, equipment, and small fixes that need technical attention.",
    summary:
      "Use this menu for stone restoration, air con servicing, and general rectification work.",
    icon: Wrench,
    serviceCount: 3,
    previewImages: [
      "/services/stone-restoration/stoneRestoration1.jpg",
      "/services/air-con-servicing.png",
      "/services/rectification-handywork-services.png",
    ],
    services: [
      {
        title: "Stone Restoration",
        description:
          "Diamond grinding and polishing that restores shine, removes scratches, and improves the look of natural stone.",
        image: "/services/stone-restoration/stoneRestoration1.jpg",
        beforeImage: "/services/stone-restoration/StoneRestoration2.png",
        afterImage: "/services/stone-restoration/StoneRestoration3.png",
        bullets: ["Polishing and honing", "Scratch reduction", "Gloss restoration"],
      },
      {
        title: "Air Con Servicing",
        description:
          "General air conditioner servicing that improves airflow, cooling performance, and drainage reliability.",
        image: "/services/air-con-servicing.png",
        beforeImage: "/services/air-con-servicing.png",
        afterImage: "/services/air-con-servicing.png",
        bullets: ["Coil and filter cleaning", "Drain checks", "Cooling performance"],
      },
      {
        title: "Rectification & Handywork Services",
        description:
          "Small repairs and on-site fixes for fittings, punch-list items, and finishing details that need closing out.",
        image: "/services/rectification-handywork-services.png",
        beforeImage: "/services/rectification-handywork-services.png",
        afterImage: "/services/rectification-handywork-services.png",
        bullets: ["Punch-list closeout", "Fixes and adjustments", "General finishing work"],
      },
    ],
  },
];

export function getServiceCategory(slug: string) {
  return SERVICE_CATEGORIES.find((category) => category.slug === slug);
}
