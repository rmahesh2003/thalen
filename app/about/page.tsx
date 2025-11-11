import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "About – Thalen Industries",
  description: "Thalen Industries is pioneering autonomous emergency medical transportation.",
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-black">
      <Header />
      <section className="min-h-screen bg-black px-6 pt-32 pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">About Thalen Industries</h1>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Thalen Industries is a pioneering aerospace company dedicated to revolutionizing emergency medical
              transportation through autonomous VTOL aircraft. We believe that advanced technology, combined with
              medical expertise, can save lives by dramatically reducing time-to-care.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To eliminate time as a barrier to emergency medical care by deploying intelligent, autonomous aircraft
                that seamlessly integrate with hospital systems and emergency services. We envision a world where every
                patient receives critical care within minutes, regardless of geography.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                A global emergency response network powered by autonomous aircraft, where technology serves humanity.
                We're building infrastructure that makes life-saving care universally accessible and dramatically
                improves patient outcomes.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Why Thalen</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Expert Team",
                  description: "Aerospace engineers, AI researchers, and emergency medical professionals.",
                },
                {
                  title: "Mission-Driven",
                  description: "Every decision prioritizes patient outcomes and emergency response effectiveness.",
                },
                {
                  title: "Proven Technology",
                  description: "Built on validated autonomous systems and medical integration protocols.",
                },
                {
                  title: "Global Reach",
                  description: "Designed for deployment in diverse geographic and climatic conditions.",
                },
                {
                  title: "Regulatory Ready",
                  description: "Engineered with safety and certification requirements as core design principles.",
                },
                {
                  title: "Future Forward",
                  description: "Continuous innovation in AI, materials science, and medical telemetry.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 p-6 rounded-lg bg-white/5">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
