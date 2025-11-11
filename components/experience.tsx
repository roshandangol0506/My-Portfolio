"use client"

import { useEffect, useState } from "react"
import { Briefcase, Calendar } from "lucide-react"

interface ExperienceProps {
  scrollToSection: (id: string) => void
}

export default function Experience({ scrollToSection }: ExperienceProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const experiences = [
    {
      title: "Full Time Developer",
      company: "Palm Mind Technology",
      period: "Current",
      status: "Running",
      description:
        "Working on real-world projects using MERN stack technologies, contributing to web development initiatives and building scalable applications.",
    },
    {
      title: "MERN Stack Internship",
      company: "Palm Mind Technology",
      period: "4 months (2082 B.S.)",
      status: "Completed",
      description:
        "Worked on real-world projects using MERN stack technologies, contributing to web development initiatives and gaining practical experience.",
    },
    {
      title: "MERN Stack Training",
      company: "Boardway Infosys",
      period: "4 months (2081 B.S.)",
      status: "Completed",
      description:
        "Comprehensive training program covering MongoDB, Express.js, React.js, and Node.js development with hands-on projects and mentorship.",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-2 md:py-10">
      <div className="max-w-4xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 md:mb-12 text-balance">
            Training & Experience
          </h2>

          <div className="space-y-4 md:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 p-4 md:p-6 lg:p-8 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300"
              >
                {/* Icon - Hidden on extra small screens, shown on sm and up */}
                <div className="flex-shrink-0 hidden sm:flex">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>

                <div className="flex-grow w-full">
                  {/* Title and Company */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-white line-clamp-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white opacity-80 mb-3 md:mb-3">{exp.company}</p>

                  {/* Period and Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="flex items-center text-xs sm:text-sm md:text-base text-white opacity-70 gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <span
                      className={`w-fit text-xs font-medium px-2 md:px-3 py-1 rounded-full ${
                        exp.status === "Running"
                          ? "bg-green-500 bg-opacity-20 text-green-300"
                          : "bg-blue-500 bg-opacity-20 text-blue-300"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-white opacity-80">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
