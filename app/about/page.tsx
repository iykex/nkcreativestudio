"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Stats } from "@/components/stats"
import { motion } from "framer-motion"
import { Users, Award, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      {/* Transparent Navigation Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(237,27,36,0.15),transparent_70%)]" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent mb-6"
          >
            We Design, You Shine ✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
          >
            At <span className="text-brand-accent font-semibold">AP Creative Studio</span>, creativity meets strategy.
            We turn ideas into impactful visuals and unforgettable experiences.
          </motion.p>
        </div>
      </section>

      {/* About Details */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Crafting Visual Identities That Speak
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                We’re a team of multidisciplinary creatives passionate about delivering design that tells stories,
                builds trust, and sparks emotion.
              </p>
              <p>
                From branding and packaging to digital experiences, we blend creativity and strategy to bring your
                brand’s vision to life with precision and passion.
              </p>
              <p>
                Every project we take on is a partnership — together, we’ll create something extraordinary.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                title: "Our Mission",
                icon: <Users size={24} className="text-white" />,
                text: "To empower brands through timeless and strategic design, creating visuals that inspire and connect with audiences globally.",
              },
              {
                title: "Our Vision",
                icon: <Award size={24} className="text-white" />,
                text: "To be a global creative hub recognized for transforming ideas into powerful visual identities that shape the future of design.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-background/80 to-secondary/30 backdrop-blur-lg rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent to-[#ed1b24] flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                </div>
                <p className="text-muted-foreground">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-[#ed1b24]/5 via-transparent to-secondary/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-[#ed1b24] rounded-xl flex items-center justify-center text-white shadow-md">
                <Sparkles size={26} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Creativity. Integrity. Innovation. Collaboration.  
              These principles guide every design we create and every relationship we build.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {["Creativity", "Innovation", "Excellence"].map((value, idx) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="p-6 rounded-2xl bg-card/60 backdrop-blur-md hover:bg-card/80 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <h4 className="text-xl font-semibold mb-3">{value}</h4>
                  <p className="text-muted-foreground">
                    We uphold {value.toLowerCase()} as the heart of everything we do — constantly pushing boundaries to
                    deliver design that resonates.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Stats />
      <Footer />
    </div>
  )
}
