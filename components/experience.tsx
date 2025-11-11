import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full Time Developer",
      company: "Palm Mind Technology",
      period: "Current",
      status: "Running",
      description:
        "Working on real-world projects using MERN stack technologies, contributing to web development initiatives.",
    },
    {
      title: "MERN Stack Internship",
      company: "Palm Mind Technology",
      period: "4 months (2082 B.S.)",
      status: "Completed",
      description:
        "Worked on real-world projects using MERN stack technologies, contributing to web development initiatives.",
    },
    {
      title: "MERN Stack Training",
      company: "Boardway Infosys",
      period: "4 months (2081 B.S.)",
      status: "Completed",
      description: "Comprehensive training program covering MongoDB, Express.js, React.js, and Node.js development.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Training & Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                  <p className="text-lg text-gray-700 mb-2">{exp.company}</p>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                    <span
                      className={`ml-4 px-2 py-1 rounded-full text-xs font-medium ${
                        exp.status === "Running" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
