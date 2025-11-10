"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface HeroProps {
  scrollToSection: (id: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-neutral-800">
            <Image src="/professional-profile-developer.jpg" alt="Roshan Dangol" fill className="object-cover" />
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Roshan Dangol</h1>

          <p className="text-2xl font-light opacity-80 mb-4">Node.js Full Stack Developer</p>
          <p className="text-lg opacity-70 mb-8">MERN Stack Specialist based in Khokana, Lalitpur</p>

          <p className="text-lg font-light leading-relaxed opacity-80 mb-8">
            A passionate Software Developer with strong foundation in Node.js full-stack development, proficient in
            databases like MongoDB and MySQL, and skilled in API integration.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection("work")}
              className="text-lg font-light tracking-wider border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-light tracking-wider px-8 py-3 hover:opacity-70 transition-opacity"
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-sm opacity-50 animate-bounce">Scroll to explore</div>
      </div>
    </div>
  )
}
