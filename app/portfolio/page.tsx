"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Eye, Filter } from "lucide-react"

export default function PortfolioPage() {
  const categories = [
    {
      name: "Birthday Flyers",
      image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/birthday_flyers/bf_01.jpg",
      description: "Fun and festive birthday flyer designs perfect for celebrations.",
    },
    {
      name: "Brochure",
      image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/brochure/brc_01.jpg",
      description: "Innovative product design solutions that combine aesthetics with functionality.",
    },
    {
      name: "Church",
      image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/church/ch_01.jpg",
      description: "Professional and inspiring church flyer designs that engage and communicate your message effectively.",
    },
    {
      name: "Flyers",
      image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_01.jpg",
      description: "Professional business flyers designed to promote your services and attract clients.",
    },
    {
      name: "Forum",
      image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/forum/frm_01.jpg",
      description: "Eye-catching event flyers that create buzz and drive attendance.",
    },
    {
      name: "Logos",
      image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_01.jpg",
      description: "Custom logo designs that represent your brand identity with creativity and professionalism.",
    },
  ]

  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  const portfolioGrid = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    categoryIndex: i % categories.length,
  }))

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <EnhancedHeroSection
        title="Our Portfolio"
        subtitle="Creative Works"
        description="That Inspire"
        icon={<Eye size={16} className="animate-pulse" />}
        pageType="portfolio"
      />

      {/* Portfolio Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {activeCategory === null ? "All Categories" : categories[activeCategory].name}
              <span className="bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent block mt-2">
                Gallery
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {activeCategory === null
                ? "Explore our complete collection of creative works across all categories."
                : categories[activeCategory].description
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeCategory === null
              ? categories
              : [categories[activeCategory]]
            ).map((category, index) => (
              <motion.div
                key={activeCategory === null ? index : category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-background to-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent"
              >
                <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                    {category.description}
                  </p>
                  <Link
                    href={`/portfolio/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent to-[#ed1b24] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-brand-accent/25 transition-all duration-300 opacity-0 group-hover:opacity-100 delay-150 transform translate-y-2 group-hover:translate-y-0"
                  >
                    View More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <Link
                href={`/portfolio/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="md:hidden absolute bottom-4 right-4 bg-background/50 backdrop-blur-sm rounded-full border-1 border-gray-200 p-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
