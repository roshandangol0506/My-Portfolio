"use client"

import { useEffect, useState } from "react"

interface ContactProps {
  scrollToSection: (id: string) => void
}

export default function Contact({ scrollToSection }: ContactProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const contactInfo = [
    {
      label: "Email",
      value: "roshan.dangol00@gmail.com",
      href: "mailto:roshan.dangol00@gmail.com",
    },
    {
      label: "Phone",
      value: "+977-9864260404",
      href: "tel:+9779864260404",
    },
    {
      label: "Location",
      value: "Khokana, Lalitpur",
      href: null,
    },
    {
      label: "GitHub",
      value: "github.com/roshandangol0506",
      href: "https://github.com/roshandangol0506",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/roshan-dangol",
      href: "https://linkedin.com/in/roshan-dangol-829954317",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">Get In Touch</h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-8 opacity-90">Let's Connect</h3>
              <p className="text-lg font-light leading-relaxed opacity-80 mb-12">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className="transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-start py-4 border-b border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                      <span className="text-base font-light opacity-70 tracking-wide">{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-base font-light hover:opacity-70 transition-opacity text-right"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-base font-light text-right">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-8 opacity-90">Quick Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white border-opacity-30 py-3 font-light focus:outline-none focus:border-opacity-100 transition-all duration-300 placeholder-opacity-50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-white border-opacity-30 py-3 font-light focus:outline-none focus:border-opacity-100 transition-all duration-300 placeholder-opacity-50"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-transparent border-b border-white border-opacity-30 py-3 font-light focus:outline-none focus:border-opacity-100 transition-all duration-300 placeholder-opacity-50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-lg font-light tracking-wider border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 mt-8"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
