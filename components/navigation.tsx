"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { ThemeSwitch } from "./theme-switch"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact us", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-2">
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "relative flex h-14 items-center justify-between rounded-full bg-background/80 backdrop-blur-md border shadow-lg px-6 transition-all duration-300",
            isScrolled ? "border-transparent" : "border-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'} alt="AP Creative Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex gap-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex h-8 items-center justify-center rounded-full px-4 py-1 text-sm font-medium transition-all duration-300 hover:text-[#ed1b24] focus:text-[#ed1b24]",
                      "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[#ed1b24] after:transition-all after:duration-300 after:-translate-x-1/2",
                      "hover:after:w-3/4 focus:after:w-3/4",
                      pathname === item.href && "text-[#ed1b24] after:w-3/4"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Theme Switcher */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitch />
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full h-8 w-8 p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-card/95 backdrop-blur-lg border border-border/50 shadow-lg rounded-2xl p-4">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      "after:absolute after:bottom-1 after:left-4 after:h-0.5 after:w-0 after:bg-[#ed1b24] after:transition-all after:duration-300",
                      "hover:after:w-8 focus:after:w-8 hover:text-[#ed1b24] focus:text-[#ed1b24]",
                      pathname === item.href
                        ? "text-[#ed1b24] after:w-8"
                        : "hover:bg-accent/20"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
