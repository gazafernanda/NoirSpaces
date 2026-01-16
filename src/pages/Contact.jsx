import { motion } from "framer-motion";

export default function Contact() {
    const offices = [
        { city: "MILAN", address: "Via Durini 14, 20122", phone: "+39 02 123 4567", email: "milan@noirspaces.com" },
        { city: "ISTANBUL", address: "Kuzguncuk, No. 34", phone: "+90 212 987 6543", email: "istanbul@noirspaces.com" },
        { city: "LONDON", address: "Shoreditch, E1 6JJ", phone: "+44 20 7123 4567", email: "london@noirspaces.com" },
    ];

    return (
        <div className="bg-black pt-48 pb-40 px-12 text-white">
            <div className="max-w-[1400px] mx-auto">
                <header className="mb-32">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-7xl font-bold tracking-tighter mb-8"
                    >
                        GET IN <span className="italic text-accent-red">TOUCH</span>.
                    </motion.h1>
                    <div className="w-24 h-[1px] bg-accent-red" />
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Offices List */}
                    <div className="lg:col-span-4 flex flex-col gap-16">
                        {offices.map((office, i) => (
                            <motion.div
                                key={office.city}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-2 h-2 bg-accent-red rounded-full shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
                                    <h4 className="text-[10px] tracking-[0.4em] font-bold">{office.city}</h4>
                                </div>
                                <div className="text-white/40 text-sm flex flex-col gap-2 italic">
                                    <p>{office.address}</p>
                                    <p>{office.phone}</p>
                                    <a href={`mailto:${office.email}`} className="text-white hover:text-accent-red transition-colors no-underline">{office.email}</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-8">
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 border-l border-white/5 pl-12"
                        >
                            <div className="flex flex-col gap-4">
                                <label className="text-[10px] tracking-[0.3em] text-white/20">NAME</label>
                                <input type="text" className="bg-transparent border-b border-white/10 py-4 focus:border-accent-red outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-[10px] tracking-[0.3em] text-white/20">EMAIL</label>
                                <input type="email" className="bg-transparent border-b border-white/10 py-4 focus:border-accent-red outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-4 md:col-span-2">
                                <label className="text-[10px] tracking-[0.3em] text-white/20">MESSAGE</label>
                                <textarea rows="4" className="bg-transparent border-b border-white/10 py-4 focus:border-accent-red outline-none transition-all resize-none"></textarea>
                            </div>
                            <div className="md:col-span-2 mt-8">
                                <button type="submit" className="text-[11px] tracking-[0.4em] text-accent-red hover:text-white border border-accent-red hover:bg-accent-red px-12 py-5 transition-all w-fit uppercase font-bold">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>

                {/* Global Presence */}
                <section className="mt-64 pt-40 border-t border-white/10 text-center">
                    <h2 className="text-[12vw] font-bold tracking-tighter opacity-5 leading-none mb-12 italic">GLOBAL STUDIO.</h2>
                </section>
            </div>
        </div>
    );
}
