"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary">
        <Image
          src="/nk_creative_logo-hero.png"
          alt="logo background"
          fill
          quality={100}
          className="object-contain opacity-5"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fixed decorative elements to avoid hydration mismatch */}
        <motion.div
          className="absolute top-10 right-5 w-34 h-24 border-transparent rounded-full rotate-12 md:w-42 md:h-42 md:top-20 md:right-10"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <img src="https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/logos/1REAL%20MUSIC.jpg" alt="logo" className="w-full h-full object-cover rounded-full opacity-90" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-5 w-30 h-30 border-transparent rounded-full -rotate-12 md:w-42 md:h-42 md:bottom-20 md:left-10"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <img src="https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/logos/LuxeTrendsgh%20logo%202.jpg" alt="logo" className="w-full h-full object-cover rounded-full opacity-90" />
        </motion.div>
        
        {/* Static floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-accent/5 rounded-full blur-xl" />
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-brand-accent/5 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-medium mb-8"
          >
            <Sparkles size={16} className="animate-pulse" />
            Premium Creative Solutions
            <Sparkles size={16} className="animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Elevate your brand
            <span className="bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent block mt-2">
              with Exceptional Designs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your vision into stunning reality with our expert creative design services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/services"
              className="px-8 py-4 bg-gradient-to-r from-brand-accent to-[#ed1b24] text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-brand-accent/25 transition-all duration-300 flex items-center gap-2 group"
            >
              Learn more
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-background/10 backdrop-blur-sm border border-transparent text-foreground font-medium rounded-2xl hover:bg-background/20 transition-all duration-300"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Fixed overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  )
}