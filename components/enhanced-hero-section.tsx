"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface EnhancedHeroSectionProps {
  title: string
  subtitle: string
  description: string
  icon?: React.ReactNode
  heroImages?: string[]
  pageType?: "portfolio"
}

export function EnhancedHeroSection({
  title,
  subtitle,
  description,
  icon,
  heroImages = [],
  pageType = "portfolio",
}: EnhancedHeroSectionProps) {
  // Default images based on page type - only 3 images per type
  const defaultImages = {
    portfolio: [
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_01.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/brochure/brc_01.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_01.jpg",
    ],
  }

  const images =
    heroImages.length > 0 ? heroImages.slice(0, 3) : defaultImages[pageType]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient for warmth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 via-brand-secondary/30 to-brand-primary/40" />

      {/* 3 static vertical panels */}
      <div className="absolute inset-0 flex z-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-1 overflow-hidden"
            initial={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <Image
              src={image}
              alt={`Hero panel ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
            {/* Gentle vertical divider */}
            {index < images.length - 1 && (
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Subtle blurred overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-[5]" />

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Top label */}
          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium mb-8 border border-white/20"
            >
              {icon}
              {title}
              {icon}
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
          >
            {subtitle}
            <span className="bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent block mt-2">
              {description}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base md:text-lg text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Discover our creative solutions designed to elevate your brand and captivate your audience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
