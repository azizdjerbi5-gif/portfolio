"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#about", label: "Profil" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#projects", label: "Projets" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
            AD<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-1">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-2 py-1 text-xs font-medium rounded transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
