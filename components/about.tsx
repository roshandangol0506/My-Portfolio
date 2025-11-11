"use client";

import { useEffect, useState } from "react";

interface AboutProps {
  scrollToSection: (id: string) => void;
}

export default function About({ scrollToSection }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "jQuery", "Python", "HTML/CSS"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "NestJs", "Express.js", "Django"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Agile/Scrum", "Docker", "Vercel"],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-light mb-6 opacity-90">
                Background
              </h3>
              <p className="text-lg font-light leading-relaxed opacity-80 mb-6">
                Highly passionate and dedicated Full Stack Developer (MERN) with
                a strong foundation in building scalable, efficient, and
                user-focused web applications. Skilled in JavaScript, React,
                Node.js, Express.js, Socket.io and MongoDB, with hands-on
                experience in both frontend and backend development.
              </p>
              <p className="text-lg font-light leading-relaxed opacity-80">
                A lifelong learner who thrives on exploring new technologies and
                continuously improving technical and problem-solving skills.
                Eager to contribute innovative ideas and drive impactful results
                in a dynamic development environment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-6 opacity-90">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-light text-xl mb-2">
                    BSc (Hons) Computing
                  </h4>
                  <p className="text-sm opacity-70">
                    IIMS College • 2021 - 2024
                  </p>
                </div>
                <div>
                  <h4 className="font-light text-xl mb-2">
                    Higher Secondary Education
                  </h4>
                  <p className="text-sm opacity-70">United Academy • 2019</p>
                </div>
                <div>
                  <h4 className="font-light text-xl mb-2">
                    Secondary Education
                  </h4>
                  <p className="text-sm opacity-70">
                    Peace Garden Secondary School • 2017
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-8 opacity-90">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className="transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-light text-lg mb-4 opacity-90">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <p
                        key={skill}
                        className="text-base font-light opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
