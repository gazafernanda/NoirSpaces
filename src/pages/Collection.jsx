import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  { id: 1, title: "RIMSKI VRELEC SPA HOTEL", location: "KOTLJE, SLOVENIA", year: "2024", image: `${import.meta.env.BASE_URL}living-room.png`, category: "COMMERCIAL" },
  { id: 2, title: "BOSPHORUS RETREAT", location: "ISTANBUL, TURKEY", year: "2023", image: `${import.meta.env.BASE_URL}bathroom.png`, category: "RESIDENTIAL" },
  { id: 3, title: "ZENITH OFFICE COMPLEX", location: "LONDON, UK", year: "2023", image: `${import.meta.env.BASE_URL}bedroom.png`, category: "COMMERCIAL" },
  { id: 4, title: "MONO CLINIC", location: "ROME, ITALY", year: "2024", image: `${import.meta.env.BASE_URL}living-room.png`, category: "COMMERCIAL" },
  { id: 5, title: "VELVET LOUNGE", location: "MILAN, ITALY", year: "2023", image: `${import.meta.env.BASE_URL}bathroom.png`, category: "INTERIOR" },
  { id: 6, title: "SHADOW LOFT", location: "BERLIN, GERMANY", year: "2024", image: `${import.meta.env.BASE_URL}bedroom.png`, category: "RESIDENTIAL" },
];

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "CULTURAL", "INTERIOR"];

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-black pt-32 md:pt-48 pb-24 md:pb-40 px-responsive">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 md:mb-12"
          >
            PROJECTS.
          </motion.h1>

          {/* Scrollable Filters */}
          <div className="flex gap-6 md:gap-12 overflow-x-auto pb-4 no-scrollbar border-b border-white/5 scroll-smooth">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveCategory(cat)}
                className={`text-[9px] md:text-[11px] tracking-[0.3em] whitespace-nowrap transition-colors cursor-pointer ${activeCategory === cat ? "text-accent-red font-bold" : "text-white/30 hover:text-white"
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i % 2 * 0.2 }}
              className={`group cursor-pointer ${i % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden mb-6 md:mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-accent-red rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter italic">{project.title}</h3>
                  <p className="text-[10px] md:text-[11px] tracking-widest text-white/40 uppercase mt-1">{project.location}</p>
                </div>
                <span className="text-[10px] md:text-[11px] font-medium text-white/20">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
