import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="bg-black pt-32 md:pt-48 pb-24 md:pb-40 px-responsive min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <header className="mb-16 md:mb-24">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter italic"
                    >
                        LET'S <span className="text-white/20">TALK</span>.
                    </motion.h1>
                    <div className="w-16 md:w-24 h-[1px] bg-accent-red mt-8" />
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col gap-12"
                        >
                            <div className="flex flex-col gap-2">
                                <label className="text-[9px] md:text-[10px] tracking-[0.4em] text-accent-red uppercase font-bold">Name</label>
                                <input type="text" placeholder="YOUR NAME" className="bg-transparent border-b border-white/10 py-4 focus:border-accent-red outline-none transition-all text-sm md:text-base" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[9px] md:text-[10px] tracking-[0.4em] text-accent-red uppercase font-bold">Email</label>
                                <input type="email" placeholder="YOUR EMAIL" className="bg-transparent border-b border-white/10 py-4 focus:border-accent-red outline-none transition-all text-sm md:text-base" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[9px] md:text-[10px] tracking-[0.4em] text-accent-red uppercase font-bold">Message</label>
                                <textarea rows="4" placeholder="HOW CAN WE HELP?" className="bg-transparent border-b border-white/10 py-4 focus:border-accent-red outline-none transition-all resize-none text-sm md:text-base" />
                            </div>

                            <motion.button
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-6 mt-6 md:mt-8 group cursor-pointer w-fit"
                            >
                                <span className="text-[10px] md:text-[11px] tracking-[0.3em] font-bold uppercase transition-colors group-hover:text-accent-red">SEND INQUIRY</span>
                                <div className="w-8 md:w-12 h-[1px] bg-accent-red group-hover:w-16 transition-all" />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Office Details */}
                    <div className="lg:col-start-9 lg:col-span-4 mt-8 md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col gap-12 md:gap-16 border-l border-white/10 pl-8 md:pl-12"
                        >
                            <div>
                                <h4 className="text-[9px] md:text-[10px] tracking-[0.4em] text-accent-red mb-4 uppercase font-bold">MILAN / HQ</h4>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed tracking-tight">
                                    Via Architettura 42,<br />
                                    20121 Milano, Italy<br />
                                    +39 02 123 4567
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[9px] md:text-[10px] tracking-[0.4em] text-accent-red mb-4 uppercase font-bold">ISTANBUL</h4>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed tracking-tight">
                                    Pera Place, Room 201,<br />
                                    Beyoğlu, İstanbul<br />
                                    +90 212 987 6543
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[9px] md:text-[10px] tracking-[0.4em] text-accent-red mb-4 uppercase font-bold">LONDON</h4>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed tracking-tight">
                                    Shoreditch Design Canal,<br />
                                    London E1 6PX<br />
                                    +44 20 7654 3210
                                </p>
                            </div>

                            <div className="pt-8 md:pt-12 border-t border-white/5">
                                <p className="text-[10px] md:text-[11px] tracking-[0.3em] text-white/20 italic">ENQUIRIES@NOIRSPACES.ARCH</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
