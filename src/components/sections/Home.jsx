import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  FileDown,
} from "lucide-react";

const RevealOnScroll = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 relative bg-linear-to-br from-black via-slate-950 to-blue-950 overflow-hidden"
    >
      {/* 🌌 Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <RevealOnScroll>
        <div className="text-center relative z-20 px-4 max-w-5xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="text-cyan-400 text-lg font-medium">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-linear-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Anukriti Gupta
          </h1>

          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm hover:border-cyan-500/50 transition-all">
            <Sparkles size={18} className="text-cyan-400 animate-pulse" />
            <span className="text-blue-200 text-base font-semibold">
              Full-Stack Developer
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-blue-200/70 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting elegant digital experiences with clean code and innovative
            solutions. Turning ideas into reality, one line at a time.
          </p>

          {/* 🔘 Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="cursor-pointer group flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white py-4 px-10 rounded-xl font-bold text-lg transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105"
            >
              View My Work
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="cursor-pointer group flex items-center gap-2 border-2 border-blue-500/50 text-blue-300 py-4 px-10 rounded-xl font-bold text-lg transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30 backdrop-blur-sm transform hover:scale-105"
            >
              <MessageCircle
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              Let's Talk
            </a>
          </div>

          {/* 🌐 Social Links */}
          <div className="flex justify-center items-center gap-6 mb-12">
            {/* GitHub */}
            <a
              href="https://github.com/anukritigupta07"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer p-4 bg-linear-to-br from-white/5 to-white/2 border border-blue-500/30 rounded-xl text-blue-400 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              title="GitHub"
            >
              <Github size={24} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/anukritigupta03"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer p-4 bg-linear-to-br from-white/5 to-white/2 border border-blue-500/30 rounded-xl text-blue-400 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            {/* Email */}
            <a
              href="mailto:guptaanukriti7@gmail.com"
              className="cursor-pointer p-4 bg-linear-to-br from-white/5 to-white/2 border border-blue-500/30 rounded-xl text-blue-400 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              title="Email Me"
            >
              <Mail size={24} />
            </a>

            {/* Resume */}
  <a
  href={`${import.meta.env.BASE_URL}Anukriti Gupta.pdf`}
  download="Anukriti_Gupta_Resume.pdf"
  className="p-4 bg-linear-to-br from-white/5 to-white/2 border border-blue-500/30 rounded-xl text-blue-400 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
  title="Download Resume"
>
  <FileDown size={24} />
</a>


          </div>

          {/* 🧠 Tech Stack */}
          <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-6 inline-block">
            <p className="text-blue-300/60 text-sm mb-3 font-medium">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-base">
              {["React", "Node.js", "TypeScript", "MongoDB", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-500/10 text-cyan-300 rounded-lg font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
