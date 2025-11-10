"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  scrollToSection: (id: string) => void
  currentSection: string
}

export default function Navigation({ scrollToSection, currentSection }: NavigationProps) {
  const [isAvailable, setIsAvailable] = useState(true)
  const [availabilityText, setAvailabilityText] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateAvailability = () => {
      const now = new Date()
      const day = now.getDay()
      const date = now.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      })

      const isWeekend = day === 0 || day === 6
      setIsAvailable(!isWeekend)

      if (isWeekend) {
        setAvailabilityText(`${date} not available for work`)
      } else {
        setAvailabilityText(`${date} available for work`)
      }
    }

    updateAvailability()
    const timer = setInterval(updateAvailability, 60000)
    return () => clearInterval(timer)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About us" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="text-base md:text-lg font-light tracking-wider hover:opacity-70 transition-opacity duration-300 group flex-shrink-0"
        >
          Roshan
          <span className="block text-xs md:text-sm opacity-70 group-hover:opacity-100">Full Stack Dev</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-light tracking-wider transition-all duration-300 ${
                currentSection === item.id ? "opacity-100 border-b border-white pb-1" : "opacity-60 hover:opacity-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Section - Availability and Resume */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Availability - Hidden on small mobile */}
          <div className="hidden sm:flex text-right flex-shrink-0">
            <div className="text-xs opacity-70 tracking-wider">{availabilityText}</div>
            <div className={`text-xs font-light ${isAvailable ? "text-green-400" : "text-red-400"}`}>
              {isAvailable ? "● Available" : "● Unavailable"}
            </div>
          </div>

          {/* Resume Button - Hidden on mobile */}
          <a
            href="/MERN Stack (Roshan Dangol).pdf"
            className="hidden sm:block text-xs md:text-sm font-light tracking-wider border border-white px-2 md:px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 flex-shrink-0"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:opacity-70 transition-opacity flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-md border-b border-white border-opacity-10">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-light ${
                  currentSection === item.id
                    ? "bg-white bg-opacity-10 opacity-100"
                    : "opacity-70 hover:opacity-100 hover:bg-white hover:bg-opacity-5"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Availability */}
            <div className="px-4 py-3 border-t border-white border-opacity-10">
              <div className="text-xs opacity-70 tracking-wider mb-1">{availabilityText}</div>
              <div className={`text-xs font-light ${isAvailable ? "text-green-400" : "text-red-400"}`}>
                {isAvailable ? "● Available" : "● Unavailable"}
              </div>
            </div>

            {/* Mobile Resume Button */}
            <a
              href="/MERN Stack (Roshan Dangol).pdf"
              className="block w-full text-center text-sm font-light tracking-wider border border-white px-4 py-3 hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
