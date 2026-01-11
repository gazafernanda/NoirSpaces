import { useState, useEffect } from "react";
console.log("About page loaded");
import { useNavigate, useLocation } from "react-router-dom";

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "12", label: "Years Experience" },
  { number: "45", label: "Awards Won" },
  { number: "98%", label: "Client Satisfaction" },
];

const team = [
  { name: "Alexander Noir", role: "Founder & Lead Architect", initial: "AN" },
  { name: "Sofia Chen", role: "Interior Design Director", initial: "SC" },
  { name: "Marcus Webb", role: "Creative Director", initial: "MW" },
];

const generateParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    width: Math.random() * 15 + 8,
    height: Math.random() * 2 + 1,
    rotation: Math.random() * 360,
    opacity: Math.random() * 0.4 + 0.15,
    speed: Math.random() * 0.8 + 0.3,
  }));
};

function About() {
  const navigate = useNavigate();
  const location = useLocation();
  const [particles] = useState(() => generateParticles(80));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);



  return (
    <div
      className={`page min-h-screen relative overflow-x-hidden overflow-y-auto bg-gradient-to-br from-[#050507] via-[#0a0a0c] to-[#0d0d10]`}
    >
      {/* Parallax Lines */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-r from-transparent via-[#ff6b35]/60 to-transparent rounded-sm transition-transform duration-150"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              opacity: particle.opacity,
              transform: `rotate(${particle.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {/* Ambient Glows */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 blur-[100px] z-0 transition-transform duration-500"
        style={{
          top: "-200px",
          right: "-200px",
          background: "radial-gradient(circle, #ff6b35 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 blur-[100px] z-0 transition-transform duration-500"
        style={{
          bottom: "-300px",
          left: "-200px",
          background: "radial-gradient(circle, #1e3a5f 0%, transparent 70%)",
        }}
      />

      {/* Main Content */}
      <main className="min-h-screen pt-32 px-12 pb-24 relative z-20 flex justify-center">
        <div className="max-w-[900px] w-full">
          {/* Header */}
          <header
            className={`text-center mb-16 transition-all duration-800 ${isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
              }`}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#ff6b35] mb-4">
              About
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl lg:text-7xl leading-tight mb-10 tracking-[-0.02em]">
              <span className="font-extralight text-[rgba(255,255,255,0.6)]">
                Crafting
              </span>
              <span className="block font-semibold drop-shadow-2xl">Darkness</span>
            </h1>
          </header>

          {/* Intro */}
          <div
            className={`mb-16 transition-all duration-800 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
          >
            <p className="text-lg leading-relaxed text-[rgba(255,255,255,0.5)] text-center mb-6">
              At <span className="text-[#ff6b35] font-medium">Architecs</span>,
              we believe that true luxury lies in the shadows. Since 2012, we've
              been transforming spaces into sophisticated sanctuaries where
              darkness becomes an art form.
            </p>
            <p className="text-base text-[rgba(255,255,255,0.3)] text-center">
              Our philosophy is simple: embrace the night. We specialize in
              creating interiors that captivate through contrast, using deep
              tones and strategic lighting to craft environments that are both
              dramatic and deeply comfortable.
            </p>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-[rgba(255,255,255,0.08)] mb-16 transition-all duration-800 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transition-transform duration-300"
                style={{}}
              >
                <span className="font-['Playfair_Display'] text-4xl lg:text-6xl font-semibold text-[#f5f5f5] block mb-3">
                  {stat.number}
                </span>
                <span className="text-xs uppercase tracking-[0.1em] text-[rgba(255,255,255,0.3)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Team */}
          <div
            className={`mb-16 transition-all duration-800 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
          >
            <h2 className="font-['Playfair_Display'] text-2xl font-medium text-center mb-10 text-[#f5f5f5]">
              The Visionaries
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 bg-[rgba(255,255,255,0.02)] rounded-3xl border border-[rgba(255,255,255,0.05)] transition-all duration-400 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,107,53,0.3)] hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    animationDelay: `${0.5 + index * 0.15}s`,
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8f5a] flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                    <span className="text-lg font-semibold text-[#0a0a0c]">
                      {member.initial}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-1 text-[#f5f5f5]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[rgba(255,255,255,0.3)]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div
            className={`text-center py-16 transition-all duration-800 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
          >
            <h2 className="font-['Playfair_Display'] text-2xl font-medium mb-6 text-[#f5f5f5]">
              Start Your Journey
            </h2>
            <p className="text-base text-[rgba(255,255,255,0.3)] mb-8">
              Ready to transform your space into a masterpiece of darkness?
            </p>
            <a
              href="mailto:hello@architecs.com"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#ff6b35] text-[#ff6b35] text-sm font-medium no-underline tracking-[0.05em] transition-all duration-300 relative overflow-hidden hover:text-[#0a0a0c]"
            >
              <span className="absolute inset-0 bg-[#ff6b35] -translate-x-full transition-transform duration-300 z-0" />
              <span className="relative z-10">Get In Touch</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="relative z-10 transition-transform duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer Controls */}
      <footer
        className={`fixed bottom-0 left-0 right-0 flex justify-between items-center px-12 py-8 z-50 transition-all duration-800 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        {/* Page Indicator */}
        <div className="flex gap-4">
          <button
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${location.pathname === "/"
              ? "bg-[rgba(255,255,255,0.3)]"
              : "bg-[rgba(255,255,255,0.3)]"
              }`}
            onClick={() => navigate("/")}
            aria-label="Go to Home"
          />
          <button
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${location.pathname === "/collection"
              ? "bg-[rgba(255,255,255,0.3)]"
              : "bg-[rgba(255,255,255,0.3)]"
              }`}
            onClick={() => navigate("/collection")}
            aria-label="Go to Collection"
          />
          <button
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${location.pathname === "/about"
              ? "bg-[#ff6b35] scale-110 shadow-[0_0_15px_rgba(255,107,53,0.5)]"
              : "bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] hover:scale-130"
              }`}
            onClick={() => navigate("/about")}
            aria-label="Go to About"
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-6">
          <span className="text-sm text-[rgba(255,255,255,0.5)] tracking-[0.1em]">
            <span className="text-[#f5f5f5] font-medium">03</span>
            {" / "}
            <span>03</span>
          </span>

          <button
            className="w-12 h-12 border border-[rgba(255,255,255,0.08)] bg-transparent text-[#f5f5f5] cursor-pointer flex items-center justify-center transition-all duration-300 relative overflow-hidden hover:scale-105 hover:border-[#ff6b35]"
            onClick={() => navigate("/collection")}
            aria-label="Previous page"
          >
            <div className="absolute inset-0 bg-[#ff6b35] -translate-x-full transition-transform duration-300 z-0" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative z-10 transition-transform duration-300"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="w-12 h-12 border border-[rgba(255,255,255,0.08)] bg-transparent text-[#f5f5f5] cursor-pointer flex items-center justify-center transition-all duration-300 relative overflow-hidden hover:scale-105 hover:border-[#ff6b35]"
            onClick={() => navigate("/")}
            aria-label="Back to home"
          >
            <div className="absolute inset-0 bg-[#ff6b35] -translate-x-full transition-transform duration-300 z-0" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative z-10 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </footer>


    </div>
  );
}

export default About;
