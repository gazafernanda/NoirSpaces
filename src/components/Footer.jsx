export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-20 md:pt-32 pb-12 px-responsive text-white">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                <div className="lg:col-span-1">
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-xl font-bold tracking-tighter">NOIR</span>
                        <span className="text-xl font-light tracking-tighter opacity-70">SPACES</span>
                        <span className="text-accent-red text-2xl leading-[0] translate-y-[2px]">.</span>
                    </div>
                    <p className="text-white/30 text-[10px] tracking-[0.4em] leading-loose max-w-[200px]">
                        ARCHITECTING THE FUTURE THROUGH MODERNIST EXCELLENCE.
                    </p>
                </div>

                <div>
                    <h4 className="text-[10px] tracking-[0.4em] text-accent-red mb-8 uppercase font-bold">Studios</h4>
                    <ul className="flex flex-col gap-4 text-[11px] tracking-[0.2em] text-white/40 list-none p-0">
                        <li className="hover:text-white transition-colors cursor-default">MILAN - HQ</li>
                        <li className="hover:text-white transition-colors cursor-default">ISTANBUL - EASTERN HUB</li>
                        <li className="hover:text-white transition-colors cursor-default">LONDON - CREATIVE</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] tracking-[0.4em] text-accent-red mb-8 uppercase font-bold">Contact</h4>
                    <p className="text-[11px] tracking-[0.2em] text-white/40 leading-loose">
                        studio@noirspaces.arch<br />
                        +39 02 123 4567
                    </p>
                </div>

                <div className="lg:text-right flex flex-col justify-between h-full min-h-[100px]">
                    <div>
                        <h4 className="text-[10px] tracking-[0.4em] text-accent-red mb-8 uppercase font-bold italic">FOLLOW.</h4>
                    </div>
                    <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase italic">© 2024 NOIRSPACES / BEYOND DESIGN</p>
                </div>
            </div>
        </footer>
    );
}
