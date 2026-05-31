import Script from "next/script";

export function Reviews() {
  return (
    <section id="reviews" className="py-[calc(3rem+10px)] lg:py-[calc(4.5rem+10px)] bg-white">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold text-[#1E73D8] uppercase tracking-wider mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium text-slate-800">Loved by Singapore homeowners</h2>
          <p className="mt-3 text-sm text-slate-500">
            Live Google reviews below.
          </p>
        </div>

        <div className="rounded-2xl border w-full border-gray-200 bg-white p-2 shadow-sm lg:p-4">
          <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
          <div className="elfsight-app-e8d443fe-36c6-46f9-94de-bedf398803ae" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
}
