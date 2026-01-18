import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center px-responsive overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src={`${import.meta.env.BASE_URL}living-room.png`}
            alt="Hero Architectural"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-white/20 text-[9px] md:text-[10px] tracking-[0.5em] mb-8 md:mb-12">SINCE 2012 / MILAN</h1>
            <div className="flex flex-col">
              <span className="text-[14vw] md:text-[10vw] font-bold tracking-tighter leading-[0.85] italic">BEYOND</span>
              <span className="text-[10vw] md:text-[10vw] font-light tracking-tighter leading-[0.85] ml-[10vw] md:ml-[12vw]">ARCHITECTURE</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 flex items-center gap-4 md:gap-6">
          <motion.div
            animate={{ width: [32, 60, 32] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-[1px] bg-accent-red"
          />
          <span className="text-[9px] md:text-[11px] tracking-[0.3em] text-white/40 italic">SCROLL</span>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-responsive bg-black border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <motion.div
            {...fadeIn}
            className="md:col-span-12 mb-8 md:mb-12"
          >
            <h2 className="text-accent-red text-[10px] tracking-[0.4em] mb-4 uppercase">OUR PHILOSOPHY</h2>
            <div className="w-16 md:w-24 h-[1px] bg-accent-red" />
          </motion.div>
          <div className="md:col-span-8">
            <motion.p
              {...fadeIn}
              className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-tight"
            >
              We create spaces that <span className="italic">breathe</span>. Architecture is not just about structure, it's about the <span className="text-white/30 italic">atmosphere</span> created within.
            </motion.p>
          </div>
          <div className="md:col-start-9 md:col-span-4 self-end mt-8 md:mt-0">
            <motion.p
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="text-white/40 leading-relaxed text-sm"
            >
              Rooted in modernist principles, NoirSpaces focuses on the essential. We strip away the unnecessary to reveal the raw beauty of form and materiality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 md:py-40 px-responsive border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-accent-red text-[10px] tracking-[0.4em] mb-16 md:mb-24 uppercase">THE APPROACH</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24"
          >
            {[
              { num: "01", title: "ANALYSIS", text: "Deep dive into context, site history, and user needs to establish a solid foundation." },
              { num: "02", title: "CONCEPT", text: "Formulating a singular, powerful idea that guides every architectural decision." },
              { num: "03", title: "EXECUTION", text: "Translating concepts into physical reality with obsessive attention to detail." }
            ].map((step) => (
              <motion.div key={step.num} variants={fadeIn} className="flex flex-col gap-6 md:gap-8">
                <span className="text-4xl md:text-5xl font-bold text-white/10 tracking-tighter italic">{step.num}</span>
                <h3 className="text-2xl font-bold tracking-tighter italic">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Block */}
      <section className="py-32 md:py-64 px-responsive bg-neutral-950 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-accent-red text-[10px] tracking-[0.5em] mb-16 md:mb-24 uppercase">CORE EXPERTISE</h2>
            <div className="flex flex-col gap-8 md:gap-12 font-bold tracking-tighter text-[12vw] md:text-[6vw] leading-none mb-12 md:mb-24">
              <span className="hover:italic hover:text-accent-red transition-all cursor-default">ARCHITECTURE.</span>
              <span className="text-white/20 hover:text-white transition-all cursor-default">INTERIOR DESIGN.</span>
              <span className="hover:italic hover:text-accent-red transition-all cursor-default">URBAN PLANNING.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 md:py-40 px-responsive border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            {...fadeIn}
            className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">FEATURED WORK</h2>
            <Link to="/collection" className="text-[10px] md:text-[11px] tracking-[0.2em] text-accent-red hover:text-white transition-colors no-underline border-b border-accent-red pb-1">VIEW ALL PROJECTS</Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <motion.div {...fadeIn} className="group cursor-pointer">
              <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden mb-6 md:mb-8 relative">
                <img src={`${import.meta.env.BASE_URL}living-room.png`} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" alt="Project 1" />
                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                  <span className="w-2 md:w-3 h-2 md:h-3 bg-accent-red rounded-full block opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[2px] bg-accent-red translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tighter mb-2 italic">OBSIDIAN RESIDENCE</h3>
              <p className="text-[10px] md:text-[11px] tracking-widest text-white/40">MILAN, ITALY / 2024</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.3 }} className="group cursor-pointer md:mt-40">
              <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden mb-6 md:mb-8 relative">
                <img src={`${import.meta.env.BASE_URL}bathroom.png`} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" alt="Project 2" />
                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                  <span className="w-2 md:w-3 h-2 md:h-3 bg-accent-red rounded-full block opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[2px] bg-accent-red translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tighter mb-2 italic">THE SILENT OFFICE</h3>
              <p className="text-[10px] md:text-[11px] tracking-widest text-white/40">LONDON, UK / 2023</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
