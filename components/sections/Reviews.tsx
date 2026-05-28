import { Star, Users, Clock, BadgeCheck, Award, HeartHandshake, TrendingUp, Quote } from "lucide-react";

const WHY_CHOOSE_US = [
  { icon: Users, title: "Experienced Team", desc: "A decade of vetted, uniformed technicians." },
  { icon: Clock, title: "Fast Response", desc: "Quick quotes and same-week scheduling." },
  { icon: BadgeCheck, title: "Affordable Pricing", desc: "Transparent quotes with no hidden fees." },
];

const REVIEWS_LIST = [
  {
    name: "Rachel Lim",
    role: "Homeowner, Tampines",
    rating: 5,
    text: "EPS handled our entire move-in — cleaning, painting and plumbing. Spotless results and very responsive team. Highly recommended.",
    date: "2 weeks ago",
  },
  {
    name: "Marcus Tan",
    role: "Property Agent",
    rating: 5,
    text: "My go-to vendor for handover cleaning. Quotes are clear, work is consistent, and they always show up on time. Easy 5 stars.",
    date: "1 month ago",
  },
  {
    name: "Priya Nair",
    role: "Landlord, Orchard",
    rating: 5,
    text: "The marble polishing was incredible — floors look brand new. Friendly crew and very fair pricing. Will use again.",
    date: "3 weeks ago",
  },
  {
    name: "Daniel Koh",
    role: "Condo Owner",
    rating: 5,
    text: "Booked them for AC servicing and minor repairs. Professional, tidy, and honest about what actually needed doing.",
    date: "2 months ago",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-[calc(3rem+10px)] lg:py-[calc(4.5rem+10px)] bg-white">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold text-[#1E73D8] uppercase tracking-wider mb-2">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-medium text-slate-800">
            Loved by Singapore homeowners
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#F5C542] text-[#F5C542]" />
              ))}
            </div>
            <span className="text-lg font-medium text-slate-800">5.0</span>
            <span className="text-sm text-gray-500">(120+ reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-12">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-xl bg-gray-50 border border-gray-200 px-4 py-3.5 hover:shadow-md hover:border-[#35D6F7] transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-[#1E73D8]/10 grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-[#1E73D8]" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-2.5">
          {REVIEWS_LIST.map((review) => (
            <article
              key={review.name}
              className="relative rounded-xl bg-white border border-gray-200 p-5 hover:shadow-lg hover:border-[#35D6F7] transition-all"
            >
              <Quote className="absolute top-3.5 right-3.5 h-7 w-7 text-[#1E73D8]/10" />
              
              <div className="flex gap-0.5 mb-2.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F5C542] text-[#F5C542]" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed text-xs lg:text-sm mb-3.5">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-primary text-white grid place-items-center font-medium text-xs">
                    {review.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://g.page/r/your-google-business-id/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-gray-50 hover:border-[#1E73D8] transition"
          >
            <Star className="h-4 w-4 fill-[#F5C542] text-[#F5C542]" />
            Read more reviews on Google
            <span className="text-xs">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
