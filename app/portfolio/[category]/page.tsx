"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { useState, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion } from "framer-motion"
import { Eye } from "lucide-react"

const categoryData: Record<string, { title: string; description: string; images: string[] }> = {
  "birthday-flyers": {
    title: "Birthday Flyers",
    description: "Fun and festive birthday flyer designs perfect for celebrations.",
    images: [
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/birthday_flyers/bf_01.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/birthday_flyers/bf_02.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/birthday_flyers/bf_03.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/birthday_flyers/bf_04.jpg",
    ],
  },
  brochure: {
    title: "Brochure",
    description: "Innovative product design solutions that combine aesthetics with functionality.",
    images: [
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/brochure/brc_01.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/brochure/brc_02.jpg",
    ],
  },
  church: {
    title: "Church",
    description:
      "Professional and inspiring church flyer designs that engage and communicate your message effectively.",
    images: [
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/church/ch_01.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/church/ch_02.jpg",
    ],
  },
  flyers: {
    title: "Flyers",
    description: "Professional business flyers designed to promote your services and attract clients.",
    images: [
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_01.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_02.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_03.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_04.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_05.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_06.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_07.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_08.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_09.jpg",
      // "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_10.jpg",
      // "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/flyers/fl_11.jpg",
    ],
  },
  forum: {
    title: "Forum",
    description: "Eye-catching event flyers that create buzz and drive attendance.",
    images: ["https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/forum/frm_01.jpg"],
  },
  logos: {
    title: "Logos",
    description: "Custom logo designs that represent your brand identity with creativity and professionalism.",
    images: [
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_01.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_02.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_03.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_04.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_05.jpg",
      "https://cdn.jsdelivr.net/gh/iykex/ap-creative@main/images/portfolio/logos/lg_06.jpg",
    ],
  },
}

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params)
  const data = categoryData[category]
  const [selectedImage, setSelectedImage] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Category not found</h1>
      </div>
    )
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % data.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + data.images.length) % data.images.length)
  }

  const openDialog = () => {
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <EnhancedHeroSection
        title={data.title}
        subtitle={data.title}
        description="Gallery"
        icon={<Eye size={16} className="animate-pulse" />}
        heroImages={data.images.slice(0, 3)}
        pageType="portfolio"
      />

      {/* Gallery Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/10 to-background flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {data.title}
              <span className="bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent block mt-2">
                Gallery
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {data.description}
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-brand-accent/10 to-[#ed1b24]/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg mb-8 md:mb-16">
            <div
              className="relative bg-gray-900 aspect-[4/3] md:aspect-video lg:aspect-[2/1] flex items-center justify-center overflow-hidden group cursor-pointer"
              onClick={openDialog}
            >
              <Image
                src={data.images[selectedImage] || "/placeholder.svg"}
                alt={`${data.title} ${selectedImage + 1}`}
                fill
                className="object-contain"
              />

              {/* Previous button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-[#ed1b24]/80 hover:bg-[#ed1b24] text-white p-3 md:p-4 rounded-full transition-all opacity-0 md:opacity-100 group-hover:opacity-100 z-10 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="md:w-7 md:h-7" />
              </button>

              {/* Next button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-[#ed1b24]/80 hover:bg-[#ed1b24] text-white p-3 md:p-4 rounded-full transition-all opacity-0 md:opacity-100 group-hover:opacity-100 z-10 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="md:w-7 md:h-7" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium">
                {selectedImage + 1} / {data.images.length}
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">
              Gallery
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {data.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? "ring-2 ring-[#ed1b24] scale-90" : "hover:scale-90"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-accent/10 to-[#ed1b24]/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Interested in similar work?
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
              Let's create something amazing together. Get in touch with our team.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-brand-accent to-[#ed1b24] hover:shadow-lg hover:shadow-[#ed1b24]/25 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeDialog}
        >
          <div
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={data.images[selectedImage] || "/placeholder.svg"}
              alt={`${data.title} ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
            
            <button
              onClick={closeDialog}
              className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#ed1b24]/80 hover:bg-[#ed1b24] text-white p-4 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#ed1b24]/80 hover:bg-[#ed1b24] text-white p-4 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm md:text-base font-medium">
              {selectedImage + 1} / {data.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
