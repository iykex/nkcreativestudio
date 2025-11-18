"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Graphic Design",
    description: "Stunning visual designs that capture attention and communicate your message effectively.",
    icon: "🎨",
    image: "https://cdn.jsdelivr.net/gh/iykex/nkcreativestudio@main/images-home/portfolio/flyers/fl_03.jpg",
    features: ["Logo Design", "Marketing Materials", "Digital Graphics", "Print Design"]
  },
  {
    title: "Branding",
    description: "Complete brand identity solutions that make your business memorable and distinctive.",
    icon: "🏷️",
    image: "https://cdn.jsdelivr.net/gh/iykex/nkcreativestudio@main/images-home/portfolio/logos/lg_02.jpg",
    features: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Visual Identity"]
  },
  {
    title: "Packaging Design",
    description: "Innovative packaging solutions that protect your products and enhance shelf appeal.",
    icon: "📦",
    image: "https://cdn.jsdelivr.net/gh/iykex/nkcreativestudio@main/images-home/portfolio/brochure/brc_02.jpg",
    features: ["Product Packaging", "Label Design", "Box Design", "Sustainable Solutions"]
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-medium mb-6 border border-brand-accent/20">
            Our Expertise
          </div>
          <h2
            className="text-xl md:text-2xl font-bold text-foreground mb-6"
          >
            Creative Services
            <span className="bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent block mt-2">That Deliver Results</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive creative solutions tailored to elevate your brand and captivate your audience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-card border border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-500 rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 text-3xl">{service.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-2 bg-foreground/10 dark:bg-foreground/20 text-foreground px-4 py-2 rounded-xl font-medium hover:bg-foreground/20 dark:hover:bg-foreground/30 transition-colors duration-300 group-hover:shadow-md backdrop-blur-sm"
                    >
                      Learn more
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-foreground"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-accent to-[#ed1b24] text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-brand-accent/25 transition-all duration-300"
          >
            View All Services
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}