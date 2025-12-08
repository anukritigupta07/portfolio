import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 92 },
    { name: "HTML/CSS", level: 95 },
    { name: "Git", level: 80 },
    { name: "REST APIs", level: 85 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 bg-linear-to-br from-black via-slate-950 to-blue-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
              🛠️ My Toolkit
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-linear-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Skills & Proficiency
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-6 text-left hover:border-cyan-500/40 hover:-translate-y-1 transition-all"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-cyan-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-blue-900/40 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
