import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const images = [
    { id: 1, src: '/living-room.png', alt: 'Dark modern living room', title: 'Living Room' },
    { id: 2, src: '/bathroom.png', alt: 'Luxurious dark bathroom', title: 'Bathroom' },
    { id: 3, src: '/bedroom.png', alt: 'Contemporary dark bedroom', title: 'Bedroom' }
]

const slides = [
    { number: '01', titleLight: 'Modern', titleBold: 'Living' },
    { number: '02', titleLight: 'Dark', titleBold: 'Interior' },
    { number: '03', titleLight: 'Luxury', titleBold: 'Design' }
]

const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: Math.random() * 15 + 8,
        height: Math.random() * 2 + 1,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.4 + 0.15,
        speed: Math.random() * 0.8 + 0.3
    }))
}

function Home() {
    const navigate = useNavigate()
    const [activeSlide, setActiveSlide] = useState(1)
    const [activeImage, setActiveImage] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [particles] = useState(() => generateParticles(80))
    const [isLoaded, setIsLoaded] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                const x = (e.clientX - rect.left) / rect.width - 0.5
                const y = (e.clientY - rect.top) / rect.height - 0.5
                setMousePosition({ x, y })
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const handleNext = () => {
        navigate('/collection')
    }

    const handleIndicatorClick = (index) => {
        setActiveSlide(index + 1)
        setActiveImage(index)
    }

    const currentSlide = slides[activeSlide - 1]

    return (
        <div className={`page home-page ${isLoaded ? 'loaded' : ''}`} ref={containerRef}>
            {/* Parallax Lines */}
            <div className="particles-container" aria-hidden="true">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle-line"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: `${particle.width}px`,
                            height: `${particle.height}px`,
                            opacity: particle.opacity,
                            transform: `translate(${mousePosition.x * particle.speed * 80}px, ${mousePosition.y * particle.speed * 80}px) rotate(${particle.rotation}deg)`
                        }}
                    />
                ))}
            </div>

            <div className="ambient-glow glow-1" style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }} />
            <div className="ambient-glow glow-2" style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }} />

            <main className="main-content">
                <div className="content-wrapper">
                    <section className={`hero-section ${isLoaded ? 'animate-in' : ''}`}>
                        <span className="slide-number" style={{ transform: `translateX(${mousePosition.x * 10}px)` }}>
                            {currentSlide.number}.
                        </span>
                        <h1 className="hero-title" style={{ transform: `translateX(${mousePosition.x * 15}px) translateY(${mousePosition.y * 10}px)` }}>
                            <span className="light">{currentSlide.titleLight}</span>
                            <span className="bold">{currentSlide.titleBold}</span>
                        </h1>
                    </section>

                    <section className={`gallery-section ${isLoaded ? 'animate-in' : ''}`}>
                        <div className="gallery-container" style={{ transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)` }}>
                            {images.map((image, index) => (
                                <article
                                    key={image.id}
                                    className={`gallery-item ${index === activeImage ? 'active' : ''}`}
                                    onClick={() => handleIndicatorClick(index)}
                                    style={{ transform: `translateZ(${index === activeImage ? 50 : 0}px) translateY(${mousePosition.y * (10 + index * 5)}px)` }}
                                >
                                    <img src={image.src} alt={image.alt} className="gallery-image" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <span className="gallery-title">{image.title}</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className={`footer-controls ${isLoaded ? 'animate-in' : ''}`}>
                <div className="page-indicator">
                    <button className="dot active" onClick={() => navigate('/')} aria-label="Go to Home" />
                    <button className="dot" onClick={() => navigate('/collection')} aria-label="Go to Collection" />
                    <button className="dot" onClick={() => navigate('/about')} aria-label="Go to About" />
                </div>

                <div className="pagination">
                    <span className="page-info">
                        <span className="page-current">01</span>
                        {' / '}
                        <span>03</span>
                    </span>

                    <button className="nav-arrow" onClick={handleNext} aria-label="Next">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </footer>

            <div className="cursor-glow" style={{ left: `calc(50% + ${mousePosition.x * 100}%)`, top: `calc(50% + ${mousePosition.y * 100}%)` }} />
        </div>
    )
}

export default Home
