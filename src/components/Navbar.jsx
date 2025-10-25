import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group"
            >
              {/* SVG Logo Icon */}
              <div className="w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#60a5fa'}} />
                      <stop offset="50%" style={{stopColor: '#22d3ee'}} />
                      <stop offset="100%" style={{stopColor: '#38bdf8'}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Code brackets < / > */}
                  <path d="M 35 20 L 15 50 L 35 80" 
                        fill="none" 
                        stroke="url(#logoGradient)" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                  
                  <path d="M 65 20 L 85 50 L 65 80" 
                        fill="none" 
                        stroke="url(#logoGradient)" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                  
                  <line x1="60" y1="25" x2="40" y2="75" 
                        stroke="url(#logoGradient)" 
                        strokeWidth="4" 
                        strokeLinecap="round"/>
                </svg>
              </div>
              
              
            </a>

            {/* Mobile Menu Toggle */}
            <div
              className="w-8 h-6 flex flex-col justify-between cursor-pointer z-50 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span
                className={`w-full h-0.5 bg-blue-400 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-cyan-400 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-blue-400 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-blue-200 hover:text-cyan-400 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-blue-200 hover:text-cyan-400 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-blue-200 hover:text-cyan-400 transition-colors font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-blue-200 hover:text-cyan-400 transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-blue-200 hover:text-cyan-400 transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-blue-200 hover:text-cyan-400 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-blue-200 hover:text-cyan-400 transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-blue-200 hover:text-cyan-400 transition-colors font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}