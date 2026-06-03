import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SERVICE_CATEGORIES } from "./data";

export const metadata: Metadata = {
  title: "Services | EPS Services",
  description: "Browse EPS Services by menu: cleaning, painting, and repairs & maintenance.",
};

export default function ServiceHubPage() {
  return (
    <main className="bg-[#f7f9fc]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#07111f] via-[#0c1b33] to-[#12345d] pt-[calc(8rem+10px)] pb-[calc(5rem+10px)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
              Services Menu
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white lg:text-6xl">
              Choose a service category.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 lg:text-lg">
              The menu is split into cleaning, painting, and repair categories so each click opens the right set of
              services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[calc(5rem+10px)] lg:py-[calc(7rem+10px)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICE_CATEGORIES.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.slug}
                  href={`/service/${category.slug}`}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-72 overflow-hidden bg-slate-900">
                    <Image
                      src={category.previewImages[0]}
                      alt={category.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
                      <Icon className="h-3.5 w-3.5 text-[#1E73D8]" />
                      {category.serviceCount} services
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                          <p className="mt-1 max-w-xl text-sm leading-6 text-white/75">{category.summary}</p>
                        </div>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-white group-hover:text-[#1E73D8]">
                          <ChevronRight className="h-5 w-5" />
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-hidden">
                      {category.previewImages.slice(0, 3).map((image, index) => (
                        <div
                          key={image}
                          className="relative h-14 w-16 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur"
                        >
                          <Image
                            src={image}
                            alt={`${category.title} preview ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm leading-6 text-slate-600">{category.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1E73D8]">
                      Open menu <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
