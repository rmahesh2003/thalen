import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "How It Works – Thalen Industries",
  description: "Understand the autonomous medevac workflow from emergency alert to patient arrival.",
}

export default function HowItWorksPage() {
  return (
    <main className="overflow-hidden bg-black">
      <Header />
      <section className="min-h-screen bg-black px-6 pt-32 pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">How It Works</h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Our intelligent system streamlines emergency response with precision automation and hospital integration.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: 1,
                title: "Emergency Alert",
                description:
                  "Emergency services trigger autonomous response with patient location and medical urgency data.",
              },
              {
                step: 2,
                title: "AI Route Optimization",
                description:
                  "Real-time weather, traffic, and hospital capacity data inform optimal flight path calculation in milliseconds.",
              },
              {
                step: 3,
                title: "Autonomous Deployment",
                description:
                  "Aircraft launches automatically and navigates to scene with precision landing capability.",
              },
              {
                step: 4,
                title: "Medical Telemetry Transmission",
                description:
                  "Patient vitals stream directly to receiving hospital, enabling pre-arrival preparation and faster care.",
              },
              {
                step: 5,
                title: "Safe Transport",
                description:
                  "Autonomous flight handles navigation while medical team focuses entirely on patient care.",
              },
              {
                step: 6,
                title: "Hospital Integration",
                description: "Seamless handoff with pre-staging teams and coordinated care continuity from arrival.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  {item.step < 6 && <div className="w-1 h-12 bg-white/20 my-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
