import { RevealOnScroll } from "../RevealOnScroll";
import { Code2, Database, GraduationCap, Award, Download } from "lucide-react";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
    "HTML/CSS",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Git",
  ];

  const achievements = [
    "Built 5+ full-stack projects with modern tech stack",
    "Strong understanding of data structures & algorithms",
    "Active contributor to open-source projects",
    "Participated in hackathons and coding competitions",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-linear-to-br from-black via-slate-950 to-blue-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
                👨‍💻 Get to Know Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
              A passionate developer eager to create impactful solutions
            </p>
          </div>

          {/* Introduction */}
          <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-8 mb-8 hover:border-cyan-500/40 transition-all">
            <p className="text-blue-200/80 text-lg leading-relaxed">
              I'm a passionate full-stack developer currently pursuing my B.Tech
              in Information Technology. I love crafting clean, scalable web
              applications and transforming complex problems into elegant
              solutions. My goal is to build products that offer exceptional
              performance and delightful user experiences.
            </p>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Frontend */}
            <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-8 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <Code2 size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 text-cyan-300 border border-blue-500/30 py-2 px-4 rounded-lg text-sm font-medium hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-8 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <Database size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 text-cyan-300 border border-blue-500/30 py-2 px-4 rounded-lg text-sm font-medium hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-8 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <GraduationCap size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4 text-blue-200/80">
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-blue-300/70 mb-2">
                    Dr. APJ Abdul Kalam Technical University
                  </p>
                  <p className="text-sm text-blue-400/60">2022 - 2026</p>
                </div>
                <div className="pt-4 border-t border-blue-500/20">
                  <p className="text-sm text-blue-200/70">
                    <strong>Relevant Coursework:</strong> Data Structures &
                    Algorithms, Web Development, Database Management, Software
                    Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-8 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <Award size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Highlights</h3>
              </div>
              <ul className="space-y-3 text-blue-200/80">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-blue-200/70 mb-4">
              Want to know more about my experience?
            </p>
            <a
              href="/resume.pdf"
              download="Anukriti_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};