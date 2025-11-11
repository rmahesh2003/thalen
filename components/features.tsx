"use client"

export default function Features() {
  return (
    <section className="bg-black px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white">Why AeroMed</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              number: "90%",
              label: "Faster Response",
              description: "Autonomous dispatch eliminates human coordination delays",
            },
            {
              number: "24/7",
              label: "Always Available",
              description: "Operates in all weather conditions and times of day",
            },
            {
              number: "99.9%",
              label: "Safety Record",
              description: "Military-grade avionics and autonomous systems",
            },
          ].map((item, i) => (
            <div key={i} className="border-t border-white/10 pt-8">
              <div className="text-4xl font-bold text-white mb-2">{item.number}</div>
              <div className="text-sm uppercase tracking-wider text-white mb-3">{item.label}</div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
