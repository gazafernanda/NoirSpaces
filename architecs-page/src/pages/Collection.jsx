import { useState, useEffect } from "react";
console.log("Collection page loaded");
import { useNavigate, useLocation } from "react-router-dom";

const collections = [
  {
    id: 1,
    title: "Noir Kitchen",
    category: "Kitchen Design",
    year: "2024",
    image: "/kitchen.png",
    description: "Minimalist elegance meets functional luxury",
  },
  {
    id: 2,
    title: "Urban Office",
    category: "Workspace",
    year: "2024",
    image: "/office.png",
    description: "Where productivity meets sophistication",
  },
  {
    id: 3,
    title: "Velvet Lounge",
    category: "Living Space",
    year: "2023",
    image: "/lounge.png",
    description: "Art deco reimagined for modern living",
  },
  {
    id: 4,
    title: "Shadow Suite",
    category: "Bedroom",
    year: "2023",
    image: "/bedroom.png",
    description: "Tranquility in monochromatic harmony",
  },
  {
    id: 5,
    title: "Obsidian Bath",
    category: "Bathroom",
    year: "2024",
    image: "/bathroom.png",
    description: "Spa-inspired sanctuary in midnight tones",
  },
  {
    id: 6,
    title: "Twilight Living",
    category: "Living Room",
    year: "2024",
    image: "/living-room.png",
    description: "Contemporary comfort with dramatic flair",
  },
];

const generateParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    width: Math.random() * 15 + 8,
    height: Math.random() * 2 + 1,
    rotation: Math.random() * 360,
    opacity: Math.random() * 0.4 + 0.15,
    speed: Math.random() * 0.8 + 0.3,
  }));
};

function Collection() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [particles] = useState(() => generateParticles(80));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);



  return (
    <div
      className={`page min-h-screen relative overflow-x-hidden overflow-y-auto bg-gradient-to-br from-[#050507] via-[#0a0a0c] to-[#0d0d10]`}
    >
      {/* Parallax Lines */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-r from-transparent via-[#ff6b35]/60 to-transparent rounded-sm transition-transform duration-150"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              opacity: particle.opacity,
              transform: `rotate(${particle.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {/* Ambient Glows */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 blur-[100px] z-0 transition-transform duration-500"
        style={{
          top: "-200px",
          right: "-200px",
          background: "radial-gradient(circle, #ff6b35 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 blur-[100px] z-0 transition-transform duration-500"
        style={{
          bottom: "-300px",
          left: "-200px",
          background: "radial-gradient(circle, #1e3a5f 0%, transparent 70%)",
        }}
      />

      {/* Main Content */}
      <main className="min-h-screen pt-32 px-12 pb-24 relative z-20">
        {/* Header */}
        <header
          className={`text-center mb-16 transition-all duration-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[#ff6b35] mb-4">
            Collection
          </div>
          <h1 className="font-['Playfair_Display'] text-5xl lg:text-7xl leading-tight mb-10 tracking-[-0.02em]">
            <span className="font-extralight text-[rgba(255,255,255,0.6)]">
              Our
            </span>
            <span className="block font-semibold drop-shadow-2xl">Portfolio</span>
          </h1>
          <p className="text-base text-[rgba(255,255,255,0.3)] max-w-[400px] mx-auto">
            Curated selection of our finest dark interior designs
          </p>
        </header>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto transition-all duration-800 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {collections.map((item, index) => (
            <article
              key={item.id}
              className="bg-[rgba(255,255,255,0.02)] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,107,53,0.3)] animate-fade-in group hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.5)]"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                animationFillMode: "forwards",
                transform:
                  hoveredItem === item.id
                    ? "translateY(-12px)"
                    : "none",
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-600"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)] flex justify-between items-end p-6 opacity-0 transition-opacity duration-300">
                  <span className="text-xs uppercase tracking-[0.1em] text-[#ff6b35]">
                    {item.category}
                  </span>
                  <span className="text-xs text-[rgba(255,255,255,0.3)]">
                    {item.year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-medium mb-2 text-[#f5f5f5]">
                  {item.title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.3)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer Controls */}
      <footer
        className={`fixed bottom-0 left-0 right-0 flex justify-between items-center px-12 py-8 z-50 transition-all duration-800 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        {/* Page Indicator */}
        <div className="flex gap-4">
          <button
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${location.pathname === "/"
              ? "bg-[rgba(255,255,255,0.3)]"
              : "bg-[rgba(255,255,255,0.3)]"
              }`}
            onClick={() => navigate("/")}
            aria-label="Go to Home"
          />
          <button
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${location.pathname === "/collection"
              ? "bg-[#ff6b35] scale-110 shadow-[0_0_15px_rgba(255,107,53,0.5)]"
              : "bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] hover:scale-130"
              }`}
            onClick={() => navigate("/collection")}
            aria-label="Go to Collection"
          />
          <button
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${location.pathname === "/about"
              ? "bg-[rgba(255,255,255,0.3)]"
              : "bg-[rgba(255,255,255,0.3)]"
              }`}
            onClick={() => navigate("/about")}
            aria-label="Go to About"
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-6">
          <span className="text-sm text-[rgba(255,255,255,0.5)] tracking-[0.1em]">
            <span className="text-[#f5f5f5] font-medium">02</span>
            {" / "}
            <span>03</span>
          </span>

          <button
            className="w-12 h-12 border border-[rgba(255,255,255,0.08)] bg-transparent text-[#f5f5f5] cursor-pointer flex items-center justify-center transition-all duration-300 relative overflow-hidden hover:scale-105 hover:border-[#ff6b35]"
            onClick={() => navigate("/")}
            aria-label="Previous page"
          >
            <div className="absolute inset-0 bg-[#ff6b35] -translate-x-full transition-transform duration-300 z-0" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative z-10 transition-transform duration-300"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="w-12 h-12 border border-[rgba(255,255,255,0.08)] bg-transparent text-[#f5f5f5] cursor-pointer flex items-center justify-center transition-all duration-300 relative overflow-hidden hover:scale-105 hover:border-[#ff6b35]"
            onClick={() => navigate("/about")}
            aria-label="Next page"
          >
            <div className="absolute inset-0 bg-[#ff6b35] -translate-x-full transition-transform duration-300 z-0" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative z-10 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </footer>


    </div>
  );
}

export default Collection;
