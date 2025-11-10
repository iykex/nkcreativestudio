"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { Stats } from "@/components/stats"

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-background">
      <Navigation />
      <main className="flex-1 w-full">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <Stats />
      </main>
      <Footer />
    </div>
  )
}