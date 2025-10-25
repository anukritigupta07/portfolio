import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const contactInfo = {
    email: "guptaanukriti7@gmail.com",
    phone: "+91 70803 10497",
    location: "India",
    socials: [
      {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://linkedin.com/in/anukritipta03",
      },
      {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/anukritigupta07",
      },
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://instagram.com/anukritigupta03",
      },
      {
        name: "Twitter",
        icon: Twitter,
        href: "https://twitter.com/Anukriti__Gupta",
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(""), 3000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-linear-to-br from-black via-slate-950 to-blue-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
                💬 Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email */}
              <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2er border-blue-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                    <Mail size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-blue-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                    <Phone size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-blue-300 text-sm">{contactInfo.phone}</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                    <MapPin size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-blue-300 text-sm">{contactInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
                <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {contactInfo.socials.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110"
                      title={name}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="backdrop-blur-xl bg-linear-to-br from-white/5 to-white/2 border border-blue-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      placeholder="your name"
                      className="w-full bg-slate-900/50 border border-blue-500/30 rounded-xl px-4 py-3 text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      placeholder="yourmail@example.com"
                      className="w-full bg-slate-900/50 border border-blue-500/30 rounded-xl px-4 py-3 text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      placeholder="Tell me about your project..."
                      className="w-full bg-slate-900/50 border border-blue-500/30 rounded-xl px-4 py-3 text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all resize-none"
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div className="bg-green-500/20 border border-green-500/40 rounded-xl p-4 text-green-300 text-center backdrop-blur-sm">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-4 text-red-300 text-center backdrop-blur-sm">
                      ❌ Something went wrong. Please try again later.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};