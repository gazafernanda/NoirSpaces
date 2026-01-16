import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "STUDIO", path: "/about" },
    { name: "PROJECTS", path: "/collection" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] px-12 py-8 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-sm py-6" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white no-underline group flex items-baseline gap-1">
          <span className="text-xl font-bold tracking-tighter">NOIR</span>
          <span className="text-xl font-light tracking-tighter opacity-70">SPACES</span>
          <span className="text-accent-red text-2xl leading-[0] translate-y-[2px]">.</span>
        </NavLink>

        <nav className="flex gap-16">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] font-medium tracking-[0.2em] uppercase no-underline transition-all duration-300 flex items-center gap-2 ${isActive ? "text-white" : "text-white/40 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="w-1.5 h-1.5 bg-accent-red rounded-full shadow-[0_0_8px_rgba(255,0,0,0.5)]" />}
                  {link.name}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
