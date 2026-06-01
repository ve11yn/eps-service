import { ArrowRight, CheckCircle2, Sparkles, Paintbrush, Wrench, Droplets, Zap, Gem, ShieldCheck, Layers, Wind } from "lucide-react";

const SERVICES_LIST = [
  { icon: Sparkles, title: "Cleaning", desc: "Deep, move-in/out and routine cleaning by trained specialists." },
  { icon: Paintbrush, title: "Painting", desc: "Interior repainting with low-odour, premium-grade finishes." },
  { icon: Wrench, title: "Handyman Repairs", desc: "Fixtures, fittings and small fixes done properly the first time." },
  { icon: Droplets, title: "Plumbing", desc: "Leaks, chokes, fittings and complete plumbing installations." },
  { icon: Zap, title: "Electrical Works", desc: "Licensed wiring, lighting, switches and safety upgrades." },
  { icon: Gem, title: "Marble Polishing", desc: "Restore showroom shine to marble, granite and natural stone." },
  { icon: ShieldCheck, title: "Disinfecting", desc: "Hospital-grade disinfection for healthier indoor spaces." },
  { icon: Layers, title: "Flooring", desc: "Tiling, vinyl and parquet repair, replacement and install." },
  { icon: Wind, title: "Aircon Servicing", desc: "General service, chemical wash and full aircon repair." },
];

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-[#1E73D8] uppercase tracking-wider mb-2">What we do</span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-slate-800">
            One trusted team for every home essential.
          </h2>
        
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-2">
          {SERVICES_LIST.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-[#35D6F7] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#1E73D8]/10 grid place-items-center shrink-0 group-hover:bg-gradient-primary transition-all duration-300">
                    <Icon className="h-6 w-6 text-[#1E73D8] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-slate-800">{service.title}</h3>
                    <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
         <span className="inline-flex items-center gap-2 font-medium">
        <span className="text-black">Need a different service?</span>
        <span className="text-[#1E73D8] hover:underline cursor-pointer">
            Contact us →
        </span>
        </span>
        </div>
      </div>
    </section>
  );
}
