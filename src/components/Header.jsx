import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 py-6 lg:py-8 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-sm pt-4 pb-4" : "bg-transparent"
          }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <NavLink to="/" className="text-white no-underline group flex items-baseline gap-1 z-50">
            <span className="text-lg lg:text-xl font-bold tracking-tighter">NOIR</span>
            <span className="text-lg lg:text-xl font-light tracking-tighter opacity-70">SPACES</span>
            <span className="text-accent-red text-2xl leading-[0] translate-y-[2px]">.</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-16">
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
                    {isActive && (
                      <motion.span
                        layoutId="bullet"
                        className="w-1.5 h-1.5 bg-accent-red rounded-full shadow-[0_0_8px_rgba(255,0,0,0.5)]"
                      />
                    )}
                    {link.name}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger Trigger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 flex flex-col gap-1.5 cursor-pointer p-2"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1px] bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[1px] bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1px] bg-white origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[90] lg:hidden flex flex-col justify-center px-12"
          >
            <nav className="flex flex-col gap-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-5xl font-bold tracking-tighter uppercase no-underline flex items-center gap-4 ${isActive ? "text-accent-red" : "text-white/20"
                      }`
                    }
                  >
                    {link.name}
                    <AnimatePresence>
                      {window.location.pathname === link.path && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 bg-accent-red rounded-full"
                        />
                      )}
                    </AnimatePresence>
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-12 left-12 right-12 pt-12 border-t border-white/10">
              <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase italic">
                Beyond Architecture
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
