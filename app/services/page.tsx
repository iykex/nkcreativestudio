"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import {
  Palette,
  Gem,
  Package,
  Shield,
  Megaphone,
  Printer,
  Camera,
  Video,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    { title: "Graphic Design", icon: <Palette size={48} /> },
    { title: "Branding", icon: <Gem size={48} /> },
    { title: "Packaging", icon: <Package size={48} /> },
    { title: "Logo Design", icon: <Shield size={48} /> },
    { title: "Marketing", icon: <Megaphone size={48} /> },
    { title: "Print Design", icon: <Printer size={48} /> },
    { title: "Videography and Photography", icon: <Camera size={48} /> },
  ]

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_80%)]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Beautifully crafted design and branding experiences that elevate your business presence
            and connect emotionally with your audience.
          </p>
        </motion.div>
      </section>

      {/* Service Highlights */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {[
            {
              title: "Graphic Design",
              icon: <Palette size={32} className="text-white" />,
              sections: [
                {
                  subtitle: "Visual Identity",
                  items: [
                    {
                      name: "Logo Design",
                      desc: "Custom-made logos that reflect your brand personality",
                    },
                    {
                      name: "Brand Guidelines",
                      desc: "Ensuring consistent visual identity across all touchpoints",
                    },
                  ],
                },
                {
                  subtitle: "Marketing Materials",
                  items: [
                    { name: "Brochures", desc: "Well-crafted layouts that inform and engage" },
                    {
                      name: "Business Cards",
                      desc: "Elegant and professional first impressions",
                    },
                    {
                      name: "Posters & Flyers",
                      desc: "Attention-grabbing designs for your campaigns",
                    },
                  ],
                },
              ],
            },
            {
              title: "Branding",
              icon: <Gem size={32} className="text-white" />,
              description:
                "We build memorable brands that resonate with audiences. From strategy to identity systems, we help define what makes you distinct and desirable.",
            },
            {
              title: "Packaging",
              icon: <Package size={32} className="text-white" />,
              description:
                "Packaging that combines form and function. We design experiences that make your product feel premium from the first touch.",
              points: [
                {
                  name: "Custom Boxes",
                  desc: "Precision-tailored for presentation and protection",
                },
                {
                  name: "Labels & Stickers",
                  desc: "Refined finishing touches that complete your brand look",
                },
              ],
            },
            {
              title: "Videography and Photography",
              icon: <Video size={32} className="text-white" />,
              description:
                "Capturing moments and telling stories through high-quality videography and photography. We provide professional visual content for events, products, and branding campaigns.",
            },
          ].map((service, i) => (
            <motion.section
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-accent to-[#ed1b24] flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                </div>

                {service.description ? (
                  <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                    {service.description}
                  </p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-8">
                    {service.sections?.map((section) => (
                      <div key={section.subtitle}>
                        <h3 className="text-xl font-semibold mb-4">{section.subtitle}</h3>
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li key={item.name} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-brand-accent rounded-full mt-2" />
                              <p>
                                <span className="font-semibold">{item.name}:</span>{" "}
                                <span className="text-muted-foreground">{item.desc}</span>
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {service.points && (
                  <ul className="mt-8 space-y-3">
                    {service.points.map((p) => (
                      <li key={p.name} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-brand-accent rounded-full mt-2" />
                        <p>
                          <span className="font-semibold">{p.name}:</span>{" "}
                          <span className="text-muted-foreground">{p.desc}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            All Services{" "}
            <span className="bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent">
              At a Glance
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore everything we offer — refined, purposeful, and ready to elevate your brand.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((item, i) => (
                <CarouselItem key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 h-full"
                  >
                    <Card className="bg-white/10 backdrop-blur-md border-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
                      <CardContent className="flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 text-[#ed1b24] flex items-center justify-center mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-base font-semibold">{item.title}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex bg-white/10 backdrop-blur-sm border border-[#ed1b24]" />
            <CarouselNext className="hidden sm:flex bg-white/10 backdrop-blur-sm border border-[#ed1b24]" />
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  )
}
