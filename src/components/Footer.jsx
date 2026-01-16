export default function Footer() {
    return (
        <footer className="bg-black py-24 px-12 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-bold tracking-tighter mb-8 italic">NOIRSPACES.</h2>
                        <p className="text-white/40 max-w-sm text-sm leading-relaxed">
                            We approach every project with a modernist lens, focusing on the essential interplay of form, light, and context.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] tracking-[0.3em] text-accent-red mb-8">LOCATIONS</h4>
                        <div className="flex flex-col gap-6 text-[13px] text-white/60">
                            <p>MILAN<br /><span className="text-[11px] opacity-40 italic">Via Durini 14, 20122</span></p>
                            <p>ISTANBUL<br /><span className="text-[11px] opacity-40 italic">Kuzguncuk, No. 34</span></p>
                            <p>LONDON<br /><span className="text-[11px] opacity-40 italic">Shoreditch, E1 6JJ</span></p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] tracking-[0.3em] text-accent-red mb-8">CONTACT</h4>
                        <div className="flex flex-col gap-4 text-[13px] text-white/60">
                            <a href="mailto:studio@noirspaces.com" className="hover:text-white transition-colors no-underline">studio@noirspaces.com</a>
                            <p>+39 02 123 4567</p>
                            <div className="flex gap-4 mt-4">
                                <a href="#" className="hover:text-accent-red transition-colors no-underline">IG</a>
                                <a href="#" className="hover:text-accent-red transition-colors no-underline">TW</a>
                                <a href="#" className="hover:text-accent-red transition-colors no-underline">LI</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-12 border-t border-white/5 text-[10px] tracking-[0.2em] text-white/20">
                    <span>&copy; 2024 NOIRSPACES ARCHITECTS</span>
                    <span className="hover:text-white pointer-events-none transition-colors italic">BEYOND ARCHITECTURE</span>
                </div>
            </div>
        </footer>
    );
}
