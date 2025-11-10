"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const portfolioCategories = [
  {
    title: "Brand Identity",
    description: "Complete brand identities that make a lasting impression",
    items: [
      {
        title: "Corporate Logo",
        image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_01.jpg",
        category: "logos"
      },
      {
        title: "Brand Guidelines",
        image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_02.jpg",
        category: "logos"
      },
      {
        title: "Logo Design",
        image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_03.jpg",
        category: "logos"
      }
    ]
  },
  {
    title: "Print Design",
    description: "Eye-catching print materials that stand out",
    items: [
      {
        title: "Church Flyer",
        image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/church/ch_01.jpg",
        category: "church"
      },
      {
        title: "Marketing Flyer",
        image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_01.jpg",
        category: "flyers"
      },
      {
        title: "Birthday Flyer",
        image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/birthday_flyers/bf_01.jpg",
        category: "birthday-flyers"
      }
    ]
  },
  {
    title: "Marketing Materials",
    description: "Strategic marketing designs that drive engagement",
    items: [
      {
        title: "Brochure Design",
        image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/brochure/brc_01.jpg",
        category: "brochure"
      },
      {
        title: "Forum Flyer",
        image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/forum/frm_01.jpg",
        category: "forum"
      },
      {
        title: "Business Card",
        image: "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_04.jpg",
        category: "logos"
      }
    ]
  }
]

export function PortfolioSection() {
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
            Our Work
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground mb-6"
          >
            Creative Portfolio
            <span className="bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent block mt-2">Showcasing Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse collection of creative projects that demonstrate our commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="space-y-20">
          {portfolioCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground max-w-2xl">
                  {category.description}
                </p>
              </motion.div>

              {/* Portfolio Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 + itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full bg-card border border-transparent rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 dark:border-gray-800">
                      <CardContent className="p-0">
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          
                          {/* Hover Overlay */}
                          <motion.div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <h4 className="text-white text-lg font-bold mb-3 text-center px-4">
                              {item.title}
                            </h4>
                            <Link
                              href={`/portfolio/${item.category}`}
                              className="inline-flex items-center gap-2 px-6 py-2 bg-foreground/10 dark:bg-foreground/20 text-foreground font-medium rounded-2xl hover:bg-foreground/20 dark:hover:bg-foreground/30 transition-colors duration-300 backdrop-blur-sm group"
                            >
                              View Project
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-foreground group-hover:translate-x-1 transition-transform"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-foreground group-hover:text-brand-accent transition-colors">
                              {item.title}
                            </h4>
                            <div className="flex gap-2">
                              <div className="w-2 h-2 bg-brand-accent rounded-full" />
                              <div className="w-2 h-2 bg-brand-accent rounded-full opacity-60" />
                              <div className="w-2 h-2 bg-brand-accent rounded-full opacity-30" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-sm text-muted-foreground">
                              {category.title}
                            </p>
                            <Link
                              href={`/portfolio/${item.category}`}
                              className="md:hidden bg-background/50 backdrop-blur-sm rounded-full border-1 border-foreground/20 p-2 text-[#ed1b24]">
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
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-accent to-[#ed1b24] text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-brand-accent/25 transition-all duration-300"
          >
            View Full Portfolio
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}