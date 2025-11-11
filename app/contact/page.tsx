"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", company: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="overflow-hidden bg-black">
      <Header />
      <section className="min-h-screen bg-black px-6 pt-32 pb-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-400">
              Interested in our autonomous emergency response systems? Contact our team to learn more about deployment,
              partnerships, or investment opportunities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 transition focus:outline-none focus:border-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 transition focus:outline-none focus:border-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Company / Organization</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 transition focus:outline-none focus:border-white"
                placeholder="Your organization"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 transition focus:outline-none focus:border-white resize-none"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Send Message
            </button>

            {submitted && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 px-4 py-3 rounded">
                Thank you for your message. We'll be in touch shortly.
              </div>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
