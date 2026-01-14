import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "/living-room.png",
    alt: "Dark modern living room",
    title: "Living Room",
  },
  {
    id: 2,
    src: "/bathroom.png",
    alt: "Luxurious dark bathroom",
    title: "Bathroom",
  },
  {
    id: 3,
    src: "/bedroom.png",
    alt: "Contemporary dark bedroom",
    title: "Bedroom",
  },
];

const slides = [
  { number: "01", titleLight: "Modern", titleBold: "Living" },
  { number: "02", titleLight: "Dark", titleBold: "Interior" },
  { number: "03", titleLight: "Luxury", titleBold: "Design" },
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

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSlide, setActiveSlide] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [particles] = useState(() => generateParticles(80));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);



  const handleNext = () => {
    navigate("/collection");
  };

  const handleIndicatorClick = (index) => {
    setActiveSlide(index + 1);
    setActiveImage(index);
  };

  const currentSlide = slides[activeSlide - 1];

  return (
    <div
      className={`page min-h-screen relative overflow-hidden bg-gradient-to-br from-[#050507] via-[#0a0a0c] to-[#0d0d10]`}
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
      <main className="min-h-screen flex items-center py-20 px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <section
            className={`flex flex-col justify-center lg:pr-8 transition-all duration-1000 delay-200 ${isLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
              }`}
          >
            <span
              className="text-sm font-light text-[rgba(255,255,255,0.3)] tracking-[0.2em] mb-6 block transition-transform duration-300"
            >
              {currentSlide.number}.
            </span>
            <h1
              className="font-['Playfair_Display'] text-5xl lg:text-7xl font-light leading-tight tracking-[-0.02em] mb-10"
            >
              <span className="block font-extralight text-[rgba(255,255,255,0.5)]">
                {currentSlide.titleLight}
              </span>
              <span className="block font-semibold">
                {currentSlide.titleBold}
              </span>
            </h1>
          </section>

          {/* Gallery Section */}
          <section
            className={`flex items-center justify-center transition-all duration-1000 delay-400 ${isLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
              }`}
          >
            <div
              className="flex gap-6 transition-transform duration-500 preserve-3d"
              style={{
                perspective: "1000px",
              }}
            >
              {images.map((image, index) => (
                <article
                  key={image.id}
                  className={`relative w-48 h-[350px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${index === activeImage
                    ? "w-60 shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                    : ""
                    }`}
                  onClick={() => handleIndicatorClick(index)}
                  style={{
                    transform: `translateZ(${index === activeImage ? 50 : 0}px)`,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.6)] opacity-0 transition-opacity duration-300 z-10" />
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-600"
                    loading="lazy"
                  />
                  {index === activeImage && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff6b35]/80 to-transparent z-20 animate-pulse" />
                  )}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 translate-y-5 transition-all duration-300"
                    style={{ transform: "translateY(20px)" }}
                  >
                    <span className="text-sm font-medium tracking-[0.05em] uppercase">
                      {image.title}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
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
              ? "bg-[#ff6b35] scale-110 shadow-[0_0_15px_rgba(255,107,53,0.5)]"
              : "bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] hover:scale-130"
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
              ? "bg-[#ff6b35] scale-110 shadow-[0_0_15px_rgba(255,107,53,0.5)]"
              : "bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] hover:scale-130"
              }`}
            onClick={() => navigate("/about")}
            aria-label="Go to About"
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-6">
          <span className="text-sm text-[rgba(255,255,255,0.5)] tracking-[0.1em] font-medium">
            <span className="text-[#f5f5f5] text-lg">01</span>
            {" / "}
            <span>03</span>
          </span>

          <button
            className="w-12 h-12 border border-[rgba(255,255,255,0.08)] bg-transparent text-[#f5f5f5] cursor-pointer flex items-center justify-center transition-all duration-300 relative overflow-hidden hover:scale-105 hover:border-[#ff6b35]"
            onClick={handleNext}
            aria-label="Next"
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

export default Home;
