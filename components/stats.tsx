"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Heart, Award, TrendingUp, Star } from "lucide-react"

const statsData = [
  {
    number: "100+",
    label: "Projects Completed",
    icon: Briefcase,
    description: "Successful creative projects delivered",
    color: "from-brand-accent to-[#ed1b24]"
  },
  {
    number: "60+",
    label: "Happy Clients",
    icon: Users,
    description: "Satisfied business partners",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "5+",
    label: "Years Experience",
    icon: Award,
    description: "Industry expertise and innovation",
    color: "from-green-500 to-emerald-500"
  },
  {
    number: "24/7",
    label: "Support",
    icon: Heart,
    description: "Dedicated client assistance",
    color: "from-purple-500 to-[#ed1b24]"
  },
  {
    number: "95%",
    label: "Client Retention",
    icon: TrendingUp,
    description: "Long-term partnerships",
    color: "from-orange-500 to-red-500"
  },
  {
    number: "5+",
    label: "Years in Business",
    icon: Star,
    description: "Industry recognition",
    color: "from-yellow-500 to-orange-500"
  },
]

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-brand-dark via-brand-primary to-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-medium mb-6 border border-brand-accent/20">
            Our Achievements
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground mb-6"
          >
            By The Numbers
            <span className="block bg-gradient-to-r from-brand-accent to-[#ed1b24] bg-clip-text text-transparent mt-2">Excellence in Every Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to quality and client satisfaction is reflected in these impressive numbers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-background/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-background/15 hover:shadow-2xl hover:shadow-background/10 border border-transparent hover:border-gray-150 dark:border-transparent"
            >
              {/* Background gradient accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full opacity-15 blur-2xl group-hover:opacity-25 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon size={24} className="text-foreground" />
                </div>
              </div>

              {/* Number */}
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-foreground mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {stat.number}
              </motion.h3>

              {/* Label */}
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 flex gap-1 opacity-40">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Static decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/4 w-30 h-30 bg-white/5 rounded-full blur-xl" />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/5 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 left-1/2 w-35 h-35 bg-white/5 rounded-full blur-xl" />
        </div>
      </div>
    </section>
  )
}