"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    date: "",
    details: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = "Request a quote for work"
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Location: ${formData.location}
      Date: ${formData.date}
      Details: ${formData.details}
    `
    window.location.href = `mailto:kp.adusah@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      {/* Transparent Navbar Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Hero / Intro */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(237,27,36,0.15),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's Bring Your Vision to Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Tell us about your project and we’ll reach out with ideas, pricing, and timelines.  
            We’re excited to collaborate with you.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-background/30 backdrop-blur-md rounded-xl border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/70 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-background/30 backdrop-blur-md rounded-xl border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/70 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="location"
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-background/30 backdrop-blur-md rounded-xl border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/70 transition-all"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-background/30 backdrop-blur-md rounded-xl border-1 border-gray-300 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent/70 transition-all"
              />
            </div>

            <textarea
              name="details"
              placeholder="Project Details"
              value={formData.details}
              onChange={handleChange}
              rows={6}
              className="w-full px-6 py-4 bg-background/30 backdrop-blur-md rounded-xl border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/70 transition-all resize-none"
            />

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-brand-accent to-[#ed1b24] text-white font-semibold rounded-xl hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <Mail size={20} />
            </button>
          </motion.form>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Call for Help",
                icon: <Phone size={24} className="text-white" />,
                content: (
                  <>
                    +1 778 903 8871
                    <br />+233 20 832 9357
                  </>
                ),
              },
              {
                title: "Email Address",
                icon: <Mail size={24} className="text-white" />,
                content: <>kp.adusah@gmail.com</>,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-background/70 to-secondary/40 backdrop-blur-lg rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent to-[#ed1b24] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
