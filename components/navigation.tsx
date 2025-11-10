"use client"

import { useState, useEffect } from "react"

interface NavigationProps {
  scrollToSection: (id: string) => void
  currentSection: string
}

export default function Navigation({ scrollToSection, currentSection }: NavigationProps) {
  const [isAvailable, setIsAvailable] = useState(true)
  const [availabilityText, setAvailabilityText] = useState("")

  useEffect(() => {
    const updateAvailability = () => {
      const now = new Date()
      const day = now.getDay()
      const date = now.toLocaleDateString("en-US", { day: "numeric", month: "short" })

      // Check if Saturday (6) or Sunday (0)
      const isWeekend = day === 0 || day === 6
      setIsAvailable(!isWeekend)

      if (isWeekend) {
        setAvailabilityText(`${date} not available for work`)
      } else {
        setAvailabilityText(`${date} available for work`)
      }
    }

    updateAvailability()
    const timer = setInterval(updateAvailability, 60000) // Update every minute
    return () => clearInterval(timer)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About us" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg font-light tracking-wider hover:opacity-70 transition-opacity duration-300 group"
        >
          Roshan
          <span className="block text-sm opacity-70 group-hover:opacity-100">Full Stack Dev</span>
        </button>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-light tracking-wider transition-all duration-300 ${
                currentSection === item.id ? "opacity-100 border-b border-white pb-1" : "opacity-60 hover:opacity-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-xs opacity-70 tracking-wider">{availabilityText}</div>
            <div className={`text-xs font-light ${isAvailable ? "text-green-400" : "text-red-400"}`}>
              {isAvailable ? "● Available" : "● Unavailable"}
            </div>
          </div>
          <a
            href="#resume"
            className="text-sm font-light tracking-wider border border-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
