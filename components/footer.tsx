"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react"
import { ScrollToTop } from "./scroll-to-top"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme()

  // Dynamically pick correct logo based on theme
  const logoSrc = theme === "dark" ? "/logo-light.png" : "/logo-dark.png"

  const footerLinks = {
    explore: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    portfolio: [
      { label: "Brand Identity", href: "/portfolio/branding" },
      { label: "Print Design", href: "/portfolio/print" },
      { label: "Digital Design", href: "/portfolio/digital" },
      { label: "Packaging", href: "/portfolio/packaging" },
    ],
    company: [
      { label: "Our Process", href: "/process" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  }

  return (
    <div>
      <footer className="bg-gradient-to-br from-brand-dark via-brand-primary to-brand-dark text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main content */}
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="flex items-center space-x-3 mb-6">
                <Link href="/" className="flex items-center space-x-3 group">
            <img src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'} alt="AP Creative Logo" className="h-10 w-auto" />
          </Link>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
                  We are a creative design studio passionate about crafting
                  innovative solutions that captivate audiences and elevate
                  brands to new heights.
                </p>

                {/* Social links */}
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Linkedin, href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-background/20 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={18} className="text-foreground" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Compass size={20} />
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {footerLinks.explore.map((link) => (
                    <motion.li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <motion.div
                          className="w-1 h-1 bg-foreground rounded-full"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="relative">{link.label}</span>
                        <ArrowRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Phone size={20} />
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">
                      +1 778 903 8871
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">
                    +233 20 832 9357
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">
                      kp.adusah@gmail.com
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-muted-foreground mt-1" />
                    <span className="text-muted-foreground">
                      🇨🇦 Vancouver BC, Canada
                      <br />
                      🇬🇭 Kumasi, Ghana
                      <br />
                      🇬🇭 Accra, Ghana
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-foreground/10 pt-8 pb-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} AP Creative Studio. All rights
                reserved.
              </p>
              {/* <div className="flex gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </div> */}
            </div>
          </motion.div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
