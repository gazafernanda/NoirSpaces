import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const team = [
  { name: "Sofia Rossi", role: "Principal Architect", origin: "Milan" },
  { name: "Julian Thorne", role: "Creative Director", origin: "London" },
  { name: "Ezgi Kaya", role: "Interior Lead", origin: "Istanbul" },
  { name: "Marcus Vane", role: "Senior Planner", origin: "Berlin" },
];

export default function About() {
  return (
    <div className="bg-black pt-48 pb-12 px-12">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-32">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl font-bold tracking-tighter mb-8 italic"
          >
            STUDIO.
          </motion.h1>
          <div className="w-24 h-[1px] bg-accent-red" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-64">
          <div className="lg:col-span-12">
            <motion.h2
              {...fadeIn}
              className="text-4xl md:text-[6vw] font-light leading-tight tracking-tighter uppercase mb-24"
            >
              ARCHITECTURAL <span className="italic font-bold">EXCELLENCE</span> THROUGH <span className="text-accent-red italic">MODERNIST</span> RESTRAINT.
            </motion.h2>
          </div>

          <div className="lg:col-span-7">
            <motion.div {...fadeIn} className="aspect-[21/9] overflow-hidden grayscale mb-16 relative group">
              <img src="/bedroom.png" alt="Studio Space" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
              <div className="absolute inset-0 border border-white/10 group-hover:border-accent-red transition-colors" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.p {...fadeIn} className="text-lg font-light leading-relaxed">
                Founded in 2012, NoirSpaces is a multidisciplinary architectural studio dedicated to creating spaces that transcend the ordinary. We believe that architecture should be a reflection of its context, yet remain timeless in its execution.
              </motion.p>
              <motion.p {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="text-white/40 text-sm leading-relaxed">
                Our approach is rooted in the interplay of shadow and light. By utilizing monochromatic palettes and raw materials, we allow the form of the architecture to speak for itself. We don't just build structures; we craft environments.
              </motion.p>
            </div>
          </div>

          <div className="lg:col-start-9 lg:col-span-4 self-center">
            <motion.div {...fadeIn} className="flex flex-col gap-12 border-l border-white/10 pl-12">
              <div>
                <h4 className="text-[10px] tracking-[0.3em] text-accent-red mb-4 uppercase">Awards</h4>
                <p className="text-xl font-medium tracking-tight">Milan Design Gold 2024</p>
                <p className="text-xl font-medium tracking-tight opacity-40">Modernist Icon 2023</p>
                <p className="text-xl font-medium tracking-tight opacity-20">A+ Architecture 2022</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* The Team - NEW SECTION */}
        <section className="mb-64">
          <motion.h3 {...fadeIn} className="text-accent-red text-[10px] tracking-[0.4em] mb-24 uppercase font-bold text-center">THE TEAM</motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.1 }}
                className="group p-8 border border-white/5 hover:border-accent-red transition-colors"
              >
                <h4 className="text-2xl font-bold tracking-tighter mb-1 italic">{member.name}</h4>
                <p className="text-[11px] tracking-widest text-accent-red mb-4 uppercase">{member.role}</p>
                <p className="text-white/20 text-[10px] tracking-[0.2em]">{member.origin.toUpperCase()}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partners - NEW SECTION */}
        <section className="mb-64 py-24 border-y border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 opacity-20">
            {["MATERIAL", "LIGHT CO.", "URBANITY", "SENSES", "MONO", "LEVELS"].map((partner, i) => (
              <motion.span
                key={partner}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.05 }}
                className="text-[10px] tracking-[0.5em] text-center font-bold"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="py-40 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[10vw] font-bold tracking-tighter leading-none opacity-5 mb-12 italic">BEYOND DESIGN</h3>
            <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase">Milan / Istanbul / London</p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
