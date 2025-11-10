import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "Palm Mind Website",
      description:
        "Developed a fully dynamic website for Palm Mind Technology with features including Discovery call, career sections to manage job roles, chatbot that helps to communicate with palm mind bot.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      status: "Deployed",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      title: "Keepme AI",
      description:
        "Developing an AI-powered platform with advanced features for user management and intelligent automation.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      status: "Ongoing",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "Khokana Paau Website",
      description:
        "Developed a fully dynamic website with features including online registration, admin-managed product listings, shopping cart and checkout, user reviews, and a photo gallery.",
      technologies: ["Node.js", "Express.js", "React", "HTML/CSS", "JavaScript", "MongoDB"],
      status: "Ongoing",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "Event Management System",
      description:
        "Developing an event management platform that allows users to browse, book, and manage events like blood donation drives, concerts, and programs, featuring ticketing and real-time updates.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS"],
      status: "Group Project",
      statusColor: "bg-purple-100 text-purple-800",
    },
    {
      title: "Evergreen Gym Management System",
      description:
        "Developed a comprehensive management system for Evergreen Gym Fitness, including payment tracking and membership management.",
      technologies: ["Django", "HTML/CSS", "JavaScript", "MySQL", "PythonAnywhere"],
      status: "Deployed",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      title: "Yamaha AMC",
      description:
        "Developed an Annual Maintenance System for Yamaha, enabling user management, bike servicing, and integration with a card-swiping device.",
      technologies: ["Django", "HTML/CSS", "JavaScript", "MySQL"],
      status: "Deployment Phase",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {(project.status === "Deployed" || project.status === "Deployment Phase") && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="https://github.com/roshandangol0506" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
