import Image from "next/image";
import {
  CheckCircle2,
  Users,
  Calendar,
  Home,
  Award,
} from "lucide-react";

const SERVICE_HIGHLIGHTS = [
  "Cleaning & disinfecting",
  "Marble work & flooring",
  "Painting & touch-ups",
  "Plumbing & electrical",
];

const STATS = [
  {
    icon: Calendar,
    value: "10+",
    label: "Years of Service",
    description: "Trusted since 2014",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Happy Clients",
    description: "Landlords & homeowners",
  },
  {
    icon: Home,
    value: "2,500+",
    label: "Projects Completed",
    description: "Condo • HDB • Landed",
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfaction Rate",
    description: "Quality guaranteed",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-sm font-semibold text-[#1E73D8] uppercase tracking-wide mb-2">
            About EPS
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium text-slate-800">
            One-stop property solutions <span className="text-[#1E73D8]">since 2014</span>
          </h2>
        
        </div>

        {/* Main Content - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Images */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {/* Left column */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <Image
                    src="/about-team.jpg"
                    alt="EPS Services Team"
                    width={500}
                    height={650}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <div className="text-2xl font-bold text-slate-800">24/7</div>
                  <div className="text-sm text-gray-600 mt-0.5">Emergency support available</div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <Image
                    src="/about-work.jpg"
                    alt="EPS Technician Working"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
               
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>

            <div className="mt-4 space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                EPS Services provides comprehensive property maintenance
                solutions for landlords, tenants, agents and homeowners across
                Singapore.
              </p>
              <p>
                Our experienced team handles everything from deep cleaning and
                disinfecting to painting, marble restoration, flooring works,
                plumbing, electrical repairs and general maintenance.
              </p>
              <p>
                With more than a decade of industry experience, we focus on
                delivering efficient, reliable and hassle-free services that
                keep properties in excellent move-in condition.
              </p>
            </div>

            {/* Service Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {SERVICE_HIGHLIGHTS.map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-full px-3 py-1.5"
                >
                  <CheckCircle2 className="h-3 w-3 text-[#6BEA00]" />
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section - Clean horizontal layout */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-10 w-10 rounded-full bg-[#1E73D8]/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-[#1E73D8]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-700 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}