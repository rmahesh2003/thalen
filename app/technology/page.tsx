"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("phoenix")

  const phoenixFeatures = [
    {
      title: "Emergency Response",
      description: "Rapid medical transport for hospitals, trauma centers, and remote facilities.",
    },
    {
      title: "Organ Transport",
      description: "Temperature-controlled autonomous delivery for transplant operations.",
    },
    {
      title: "Medical Supply Chain",
      description: "On-demand delivery of blood, medication, and critical medical supplies.",
    },
    {
      title: "Disaster Relief",
      description: "Rapid response deployment in natural disasters and humanitarian crises.",
    },
    {
      title: "Rural Healthcare",
      description: "Bridging the gap for remote communities with limited medical access.",
    },
    {
      title: "Community Health",
      description: "Cost-effective healthcare logistics for underserved populations.",
    },
  ]

  const valkyrieFeatures = [
    {
      title: "Precision Reconnaissance",
      description: "Advanced surveillance and real-time intelligence gathering systems.",
    },
    {
      title: "Autonomous Patrol",
      description: "Persistent area monitoring with adaptive flight algorithms.",
    },
    {
      title: "Tactical Response",
      description: "Rapid deployment for defense and security operations.",
    },
    {
      title: "Data Integration",
      description: "Seamless integration with command and control systems.",
    },
    {
      title: "Extended Endurance",
      description: "Long-duration flights for sustained operational coverage.",
    },
    {
      title: "Secure Comms",
      description: "Military-grade encrypted communication and telemetry systems.",
    },
  ]

  const features = activeTab === "phoenix" ? phoenixFeatures : valkyrieFeatures

  return (
    <main className="overflow-hidden bg-black">
      <Header />
      <section className="min-h-screen bg-black px-6 pt-32 pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tighter">Technology</h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Thalen Industries delivers cutting-edge autonomous systems with dual applications for civilian and defense
              sectors.
            </p>
          </div>

          <div className="flex gap-8 mb-16 border-b border-white/10">
            <button
              onClick={() => setActiveTab("phoenix")}
              className={`pb-4 text-lg font-semibold transition ${
                activeTab === "phoenix" ? "text-white border-b-2 border-white" : "text-gray-600 hover:text-gray-400"
              }`}
            >
              PHOENIX
              <span className="block text-xs text-gray-500 font-normal mt-1">Civilian Application</span>
            </button>
            <button
              onClick={() => setActiveTab("valkyrie")}
              className={`pb-4 text-lg font-semibold transition ${
                activeTab === "valkyrie" ? "text-white border-b-2 border-white" : "text-gray-600 hover:text-gray-400"
              }`}
            >
              VALKYRIE
              <span className="block text-xs text-gray-500 font-normal mt-1">Defense Application</span>
            </button>
          </div>

          <div className="mb-8">
            <div className="inline-block border border-white/20 px-4 py-2 rounded text-sm text-gray-300 font-medium">
              Coming 2026
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((tech, i) => (
              <div
                key={i}
                className="border border-white/10 rounded p-8 bg-white/5 hover:bg-white/10 transition-all hover:border-white/20"
              >
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
