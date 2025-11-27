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
      year: "2025",
      tech: ["React", "Next.js", "Tailwind CSS"],
      img: "/project/image1.png",
      description:
        "A fully dynamic and responsive official website of Palm Mind Technology, featuring a 'Book a Demo' and 'Discovery Call' section, career management for job roles, and an AI-powered chatbot for real-time communication. The website is built with a modern, SEO-optimized structure and enhanced with smooth animations and an engaging user interface for an exceptional browsing experience.",
      status: "Deployed",
      link: "https://palmmind.com",
    },
    {
      title: "ChatBots AI Application",
      year: "2025",
      tech: [
        "Node.js",
        "VanellaJs",
        "JQuery",
        "Socket.io",
        "Redis",
        "Docket",
        "Express.js",
        "MongoDB",
      ],
      img: "/project/Untitled.png",
      description:
        "An AI-powered chatbot ecosystem designed to enhance customer engagement and automation. I have developed and deployed over 10 intelligent chatbots for various companies using Vanilla JavaScript, jQuery, and React. These chatbots are seamlessly integrated across platforms such as Facebook and WhatsApp, all connected to a centralized dashboard that manages users and conversations in real time. Each chatbot supports a live agent system — enabling smooth handovers between AI-generated responses and real human interaction for efficient and personalized communication.",
      status: "Deployed",
      link: "https://palmmind.com",
    },
    {
      title: "Khokana Paau Website",
      year: "2024",
      tech: ["Node.js", "Next.js", "Express.js", "React", "MongoDB"],
      img: "/project/e-commerce.png",
      description:
        "A fully dynamic e-commerce website built during my training session at Broadway Infosys. The platform features a complete shopping experience with online registration, product listings, shopping cart, checkout system, user reviews, and a photo gallery. It includes an admin dashboard to manage, update, add, and delete products, as well as handle checkout processes. The entire website was restructured with a focus on performance, usability, and modern design principles.",
      status: "Completed",
      link: "https://github.com/roshandangol0506/Khona-Paau",
    },
    {
      title: "Book Circle",
      year: "2025",
      tech: ["React Native", "Node.js", "MongoDB", "Tailwind CSS"],
      img: "/project/bookCircle.jpg",
      description:
        "A React Native mobile application that allows users to write, upload, and manage their own books with full CRUD functionality. Readers can like, comment, and read books within the app, while authors can organize their works in a personal library featuring categorized sections for saved, reading, and finished books. The platform includes an advanced search feature for discovering content efficiently. A premium feature for purchasing books is currently in development, enhancing the app’s functionality and user experience.",
      status: "Group Project",
      link: "https://github.com/maharjangaurav/Book-Circle",
    },
    {
      title: "Evergreen Gym Management",
      year: "2023",
      tech: ["Django", "MySQL", "Python"],
      img: "/project/evergreen.png",
      description:
        "A comprehensive Gym Management System deployed for Evergreen Gym Fitness. The platform is designed to efficiently manage gym customers and trainers, track payments, and store customer information securely. It features an intuitive admin dashboard where the super owner can oversee both trainers and members, manage memberships, and monitor payment histories. The web app also supports online fee payments, streamlining daily gym operations and enhancing overall management efficiency.",
      status: "Deployed",
      link: "https://github.com/roshandangol0506/Gym-management-system",
    },
    {
      title: "LiveChat React",
      year: "2023",
      tech: ["React", "Nodejs", "Redis", "Socket.io", "Express.js", "MongoDB"],
      img: "/project/image.png",
      description:
        "A real-time LiveChat application built with React to facilitate seamless communication between chatbot users and human agents. Initially, users interact with AI-powered chatbots, while agents can monitor all active conversations through an interactive dashboard. Agents can take over any chat to communicate directly with users when needed, ensuring smooth human-AI collaboration. This LiveChat system is integrated with multiple company chatbots, providing a unified support experience across different organizations.",
      status: "Deployed",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 md:mb-12">
            My Work
          </h2>

          <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
            {/* Project List */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="space-y-2 md:space-y-4 max-h-96 lg:max-h-none overflow-y-auto lg:overflow-visible">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProject(index)}
                    className={`w-full text-left p-2 md:p-4 rounded-lg transition-all duration-300 border border-white text-sm md:text-base ${
                      selectedProject === index
                        ? "bg-white bg-opacity-10 border-white border-opacity-100"
                        : "border-white border-opacity-20 hover:border-opacity-50"
                    }`}
                  >
                    <h3 className="font-light text-base md:text-lg mb-1 md:mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm opacity-70">
                      {project.year}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details - Moved below on mobile */}
            <div className="lg:col-span-2 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="lg:sticky lg:top-1/4 lg:transform lg:-translate-y-1/4">
                <div className="mb-4 md:mb-6">
                  <span className="text-xs md:text-sm opacity-70 tracking-wider">
                    {String(selectedProject + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-balance">
                  {projects[selectedProject].title}
                </h3>

                <div className="mb-4 md:mb-6 flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-light px-2 md:px-3 py-1 border border-white border-opacity-30 rounded-full opacity-80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mb-6 md:mb-8 relative w-full overflow-hidden bg-white bg-opacity-5 border border-white border-opacity-10  rounded-3xl">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={projects[selectedProject].img || "/placeholder.svg"}
                      alt={projects[selectedProject].title}
                      fill
                      className="object-fit hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                  </div>
                </div>

                <p className="text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8 opacity-90">
                  {projects[selectedProject].description}
                </p>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  <span
                    className={`px-3 md:px-4 py-2 border border-white text-xs md:text-sm font-light tracking-wider ${
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
                      className="text-xs md:text-sm font-light opacity-70 hover:opacity-100 transition-opacity"
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
