"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface WorkProps {
  scrollToSection: (id: string) => void;
}

export default function Work({ scrollToSection }: WorkProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Palm Mind Website",
      year: "2024",
      tech: ["React", "Next.js", "Tailwind CSS"],
      img: "/palmmind.png",
      description:
        "Fully dynamic website with Discovery call booking, career sections to manage job roles, and AI chatbot integration for real-time communication.",
      status: "Deployed",
      link: "https://palmmind.com",
    },
    {
      title: "Keepme AI",
      year: "2024",
      tech: ["Node.js", "Express.js", "MongoDB"],
      img: "/palmmind.png",
      description:
        "AI-powered application designed to enhance user experience with intelligent features and advanced automation capabilities.",
      status: "Ongoing",
      link: "#",
    },
    {
      title: "Khokana Paau Website",
      year: "2024",
      tech: ["Node.js", "Express.js", "React", "MongoDB"],
      img: "/palmmind.png",
      description:
        "Fully dynamic website with online registration, admin-managed product listings, shopping cart, checkout system, user reviews, and photo gallery.",
      status: "Ongoing",
      link: "#",
    },
    {
      title: "Event Management System",
      year: "2024",
      tech: ["MERN Stack", "Tailwind CSS"],
      img: "/palmmind.png",
      description:
        "Platform for browsing, booking, and managing events like blood donation drives and concerts with ticketing and real-time updates.",
      status: "Group Project",
      link: "#",
    },
    {
      title: "Evergreen Gym Management",
      year: "2023",
      tech: ["Django", "MySQL", "Python"],
      img: "/palmmind.png",
      description:
        "Comprehensive management system featuring payment tracking, membership management, and admin dashboard for Evergreen Gym Fitness.",
      status: "Deployed",
      link: "#",
    },
    {
      title: "Yamaha AMC",
      year: "2023",
      tech: ["Django", "MySQL", "JavaScript"],
      img: "/palmmind.png",
      description:
        "Annual Maintenance System with user management, bike servicing tracking, and card-swiping device integration for service centers.",
      status: "Deployment Phase",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
            My Work
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project List */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProject(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 border border-white ${
                      selectedProject === index
                        ? "bg-white bg-opacity-10 border-white border-opacity-100"
                        : "border-white border-opacity-20 hover:border-opacity-50"
                    }`}
                  >
                    <h3 className="font-light text-lg mb-2">{project.title}</h3>
                    <p className="text-sm opacity-70">{project.year}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-1/2 transform -translate-y-1/2">
                <div className="mb-6">
                  <span className="text-sm opacity-70 tracking-wider">
                    {String(selectedProject + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                  {projects[selectedProject].title}
                </h3>

                <div className="mb-6 flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-light px-3 py-1 border border-white border-opacity-30 rounded-full opacity-80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Image
                  src={projects[selectedProject].img}
                  alt="Roshan Dangol"
                  width={400}
                  height={400}
                />

                <p className="text-lg font-light leading-relaxed mb-8 opacity-90">
                  {projects[selectedProject].description}
                </p>

                <div className="flex items-center gap-6">
                  <span
                    className={`px-4 py-2 border border-white text-sm font-light tracking-wider ${
                      projects[selectedProject].status === "Deployed"
                        ? "bg-white text-black"
                        : ""
                    }`}
                  >
                    {projects[selectedProject].status}
                  </span>
                  {projects[selectedProject].link !== "#" && (
                    <a
                      href={projects[selectedProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light opacity-70 hover:opacity-100 transition-opacity"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
