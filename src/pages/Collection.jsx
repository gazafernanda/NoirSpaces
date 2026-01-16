import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "RIMSKI VRELEC SPA HOTEL", location: "KOTLJE, SLOVENIA", year: "2024", image: "/living-room.png" },
  { id: 2, title: "BOSPHORUS RETREAT", location: "ISTANBUL, TURKEY", year: "2023", image: "/bathroom.png" },
  { id: 3, title: "ZENITH OFFICE COMPLEX", location: "LONDON, UK", year: "2023", image: "/bedroom.png" },
  { id: 4, title: "MONO CLINIC", location: "ROME, ITALY", year: "2024", image: "/living-room.png" },
  { id: 5, title: "VELVET LOUNGE", location: "MILAN, ITALY", year: "2023", image: "/bathroom.png" },
  { id: 6, title: "SHADOW LOFT", location: "BERLIN, GERMANY", year: "2024", image: "/bedroom.png" },
];

export default function Collection() {
  return (
    <div className="bg-black pt-48 pb-40 px-12">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-32">
          <h1 className="text-7xl font-bold tracking-tighter mb-8">PROJECTS</h1>
          <div className="w-24 h-[1px] bg-accent-red mb-12" />
          <nav className="flex gap-12 text-[10px] tracking-[0.3em] text-white/30">
            <span className="text-white flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-red rounded-full" />ALL WORKS</span>
            <span className="hover:text-white cursor-pointer transition-colors">RESIDENTIAL</span>
            <span className="hover:text-white cursor-pointer transition-colors">COMMERCIAL</span>
            <span className="hover:text-white cursor-pointer transition-colors">WORKSPACE</span>
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: (i % 2) * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden mb-10 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute top-8 left-8">
                  <span className="w-3 h-3 bg-accent-red rounded-full block opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tighter mb-2 group-hover:text-accent-red transition-colors">{project.title}</h3>
              <div className="flex gap-4 text-[10px] tracking-[0.2em] text-white/40 italic">
                <span>{project.location}</span>
                <span>/</span>
                <span>{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
