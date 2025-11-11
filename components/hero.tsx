"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scale = 1 + scrollY * 0.0005
      setScale(Math.min(scale, 1.3))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen bg-black px-6 pt-32 pb-20 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/8 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-8 max-w-xl">
            <h1 className="text-6xl font-bold leading-tight text-white lg:text-7xl tracking-tighter">
              Life-Saving Care on Demand
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Autonomous VTOL medevac aircraft designed to reduce critical time-to-care with precision routing and
              direct hospital connectivity.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a href="/how-it-works">
                <button className="w-full sm:w-auto border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
                  EXPLORE
                </button>
              </a>
              <a href="/about">
                <button className="w-full sm:w-auto border border-gray-600 px-8 py-3 text-sm font-semibold text-gray-400 transition hover:border-white hover:text-white">
                  Learn More
                </button>
              </a>
            </div>
          </div>

          {/* Right: Hero Image - Sleek VTOL drone with backlit neon glow and zoom effect */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-red-500/20 via-white/5 to-transparent rounded-full blur-3xl scale-125 opacity-50" />

            <img
              src="/vtol-drone-aircraft.jpg"
              alt="Thalen autonomous VTOL aircraft with backlit neon design"
              className="w-full max-w-md object-contain drop-shadow-2xl relative z-20 transition-transform duration-300"
              style={{ transform: `scale(${scale})` }}
            />

            <div className="absolute -top-32 right-0 w-80 h-80 bg-gradient-radial from-red-500/15 via-transparent to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
            <div className="absolute -bottom-20 left-10 w-96 h-96 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
