import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "IIMS College",
      degree: "BSc (Hons) Computing",
      period: "2021 – 2025",
      status: "In Progress",
    },
    {
      institution: "United Academy",
      degree: "Higher Secondary Education Board",
      period: "2019",
      status: "Completed",
    },
    {
      institution: "Peace Garden Sec. School",
      degree: "Secondary Education Examination",
      period: "2017",
      status: "Completed",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Education</h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.period}</span>
                    <span
                      className={`ml-4 px-2 py-1 rounded-full text-xs font-medium ${
                        edu.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
