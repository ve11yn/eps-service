import Image from "next/image";
import { Phone, CheckCircle2, ArrowRight, Users, Calendar, Home, Award } from "lucide-react";

const PHONE = "+65 8274 4647";
const PHONE_TEL = "+6582744647";

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
    description: "Trusted since 2014"
  },
  { 
    icon: Users, 
    value: "1,000+", 
    label: "Happy Clients",
    description: "Landlords & homeowners"
  },
  { 
    icon: Home, 
    value: "2,500+", 
    label: "Projects Completed",
    description: "Condo | HDB | Landed"
  },
  { 
    icon: Award, 
    value: "100%", 
    label: "Satisfaction Rate",
    description: "Quality guaranteed"
  },
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Main 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left side - Images with keypoints */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {/* Main large image */}
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                  <Image
                    src="/about-team.jpg"
                    alt="EPS Services team"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
              
                </div>
                
                {/* Small stat card */}
                <div className="bg-[#1E73D8] rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/80">Emergency support</div>
                </div>
              </div>
              
              {/* Right column images */}
              <div className="space-y-3 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                  <Image
                    src="/about-work.jpg"
                    alt="EPS technician working"
                    width={400}
                    height={350}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
              
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-white">Licensed</div>
                  <div className="text-sm text-white/70">Insured professionals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div>
            <span className="inline-block text-sm font-semibold text-[#1E73D8] uppercase tracking-wide">
              We Are EPS
            </span>
            <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-slate-800">
              One-stop property solutions <span className="text-[#1E73D8]">since 2014</span>
            </h2>

            <div className="mt-4 space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                EPS Services is a one stop solution provider to landlords,
                tenants, agents and homeowners who are facing property related
                matters in their day to day lives.
              </p>
              <p>
                With more than a decade of industry experience, our services
                ranges from cleaning, disinfecting, marble work to minor repairs
                such as painting, flooring work, plumbing, electrical work and
                more so as to provide a move in condition to any residential
                unit.
              </p>
              <p>
                We have a team of experienced technicians, plumber, electricians
                and cleaners who are capable to give your problems an efficient
                and convenient solutions.
              </p>
            </div>

            {/* Service tags */}
            <div className="mt-5 flex flex-wrap gap-2">
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

        {/* Stats bar at the bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center group cursor-default"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-[#1E73D8]/10 rounded-full flex items-center justify-center group-hover:bg-[#1E73D8] transition-colors duration-300">
                      <Icon className="h-6 w-6 text-[#1E73D8] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-slate-800">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-700 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       
    
      </div>
    </section>
  );
}