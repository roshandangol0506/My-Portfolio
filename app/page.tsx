"use client";

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [bgColor, setBgColor] = useState("bg-black");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.querySelectorAll("section");
      let currentSectionName = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionName = section.id;
        }
      });

      setCurrentSection(currentSectionName);

      switch (currentSectionName) {
        case "home":
          setBgColor("bg-black");
          break;
        case "about":
          setBgColor("bg-neutral-900");
          break;
        case "work":
          setBgColor("bg-neutral-800");
          break;
        case "experience":
          setBgColor("bg-neutral-950");
          break;
        case "contact":
          setBgColor("bg-neutral-900");
          break;
        default:
          setBgColor("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      ref={containerRef}
      className={`min-h-screen text-white transition-colors duration-1000 ${bgColor}`}
    >
      <Navigation
        scrollToSection={scrollToSection}
        currentSection={currentSection}
      />

      <section id="home">
        <Hero scrollToSection={scrollToSection} />
      </section>

      <section id="about">
        <About scrollToSection={scrollToSection} />
      </section>

      <section id="work">
        <Work scrollToSection={scrollToSection} />
      </section>

      <section id="experience">
        <Experience scrollToSection={scrollToSection} />
      </section>

      <section id="contact">
        <Contact scrollToSection={scrollToSection} />
      </section>
    </main>
  );
}
