import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "LedgerLite",
      description:
        "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
      tech: ["React", "Node.js", "MongoDB", "Typescript"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Fixify",
      description:
        "ML-powered data visualization platform with predictive analytics and interactive reports.",
      tech: ["JavaScript", "ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-linear-to-br from-black via-slate-950 to-blue-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
             
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
              A showcase of my recent work in full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-8 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-blue-200/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 text-cyan-300 border border-blue-500/30 py-1.5 px-3 rounded-lg text-sm font-medium hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-blue-300 hover:text-cyan-400 transition-colors font-medium group/link"
                  >
                    <ExternalLink size={18} />
                    <span className="group-hover/link:underline">
                      Live Demo
                    </span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-blue-300 hover:text-cyan-400 transition-colors font-medium group/link"
                  >
                    <Github size={18} />
                    <span className="group-hover/link:underline">
                      Source Code
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </RevealOnScroll>
    </section>
  );
};