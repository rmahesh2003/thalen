"use client"

export default function CTA() {
  return (
    <section className="bg-black px-6 py-24 lg:px-12 border-t border-white/10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Emergency Response?</h2>
        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
          Join healthcare systems and EMS agencies evaluating the future of autonomous medical transport.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
          <button className="border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
            Join Pilot Program
          </button>
          <button className="border border-gray-600 px-8 py-3 text-sm font-semibold text-gray-400 transition hover:border-white hover:text-white">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}
