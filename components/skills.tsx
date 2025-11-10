import { Code, Database, Globe, GitBranch } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["JavaScript", "HTML/CSS", "Python"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-8 h-8" />,
      skills: ["Node.js", "Express.js", "React.js", "Django", "Next.js", "Tailwind CSS"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "MongoDB"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Competency",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Git", "GitHub", "Teamwork", "Effective Communication", "Agile/Scrum"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900">{category.title}</h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
