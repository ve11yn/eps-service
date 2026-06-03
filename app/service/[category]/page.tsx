import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getServiceCategory, SERVICE_CATEGORIES } from "../data";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = params;
  const category = getServiceCategory(categorySlug);

  if (!category) {
    return {
      title: "Services | EPS Services",
    };
  }

  return {
    title: `${category.title} | EPS Services`,
    description: category.description,
  };
}

function ServiceCard({
  title,
  description,
  image,
  beforeImage,
  afterImage,
  bullets,
}: (typeof SERVICE_CATEGORIES)[number]["services"][number]) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-[28rem] overflow-hidden bg-slate-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
          Service detail
        </div>

        <div className="absolute inset-x-4 bottom-4 translate-y-2 rounded-2xl border border-white/15 bg-slate-950/70 p-4 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm leading-6 text-white/85">{description}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              { label: "Before", source: beforeImage, muted: true },
              { label: "After", source: afterImage, muted: false },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  {item.label}
                </div>
                <div className="relative h-24 overflow-hidden rounded-xl bg-white/10">
                  <Image
                    src={item.source}
                    alt={`${title} ${item.label.toLowerCase()}`}
                    fill
                    className={`object-cover transition duration-500 ${
                      item.muted ? "scale-105 grayscale contrast-75" : "scale-100"
                    }`}
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {bullets.map((bullet) => (
            <span
              key={bullet}
              className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-[#1E73D8]" />
              {bullet}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = params;
  const category = getServiceCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const Icon = category.icon;

  return (
    <main className="bg-[#f7f9fc]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#07111f] via-[#0c1b33] to-[#12345d] pt-[calc(8rem+10px)] pb-[calc(5rem+10px)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href="/service"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to menu
          </Link>

          <div className="mt-5 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
              <Icon className="h-3.5 w-3.5" />
              {category.serviceCount} services
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white lg:text-6xl">
              {category.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 lg:text-lg">{category.description}</p>
          </div>
        </div>
      </section>

      <section className="py-[calc(5rem+10px)] lg:py-[calc(7rem+10px)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {category.services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
            <div>
              <div className="text-sm font-semibold text-slate-900">Need the next category?</div>
              <div className="mt-1 text-sm text-slate-600">
                Switch between cleaning, painting, and repairs from the main service menu.
              </div>
            </div>
            <Link
              href="/service"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1E73D8] to-[#35D6F7] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              View all categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
