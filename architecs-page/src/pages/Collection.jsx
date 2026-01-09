import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Collection.css'

const collections = [
    { id: 1, title: 'Noir Kitchen', category: 'Kitchen Design', year: '2024', image: '/kitchen.png', description: 'Minimalist elegance meets functional luxury' },
    { id: 2, title: 'Urban Office', category: 'Workspace', year: '2024', image: '/office.png', description: 'Where productivity meets sophistication' },
    { id: 3, title: 'Velvet Lounge', category: 'Living Space', year: '2023', image: '/lounge.png', description: 'Art deco reimagined for modern living' },
    { id: 4, title: 'Shadow Suite', category: 'Bedroom', year: '2023', image: '/bedroom.png', description: 'Tranquility in monochromatic harmony' },
    { id: 5, title: 'Obsidian Bath', category: 'Bathroom', year: '2024', image: '/bathroom.png', description: 'Spa-inspired sanctuary in midnight tones' },
    { id: 6, title: 'Twilight Living', category: 'Living Room', year: '2024', image: '/living-room.png', description: 'Contemporary comfort with dramatic flair' }
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

function Collection() {
    const navigate = useNavigate()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [particles] = useState(() => generateParticles(80))
    const [isLoaded, setIsLoaded] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(null)
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

    return (
        <div className={`page collection-page ${isLoaded ? 'loaded' : ''}`} ref={containerRef}>
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

            <main className="collection-main">
                <header className={`collection-header ${isLoaded ? 'animate-in' : ''}`}>
                    <div className="page-label">Collection</div>
                    <h1 className="collection-title">
                        <span className="light">Our</span>
                        <span className="bold">Portfolio</span>
                    </h1>
                    <p className="collection-subtitle">Curated selection of our finest dark interior designs</p>
                </header>

                <div className={`collection-grid ${isLoaded ? 'animate-in' : ''}`}>
                    {collections.map((item, index) => (
                        <article
                            key={item.id}
                            className={`collection-item ${hoveredItem === item.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            style={{
                                animationDelay: `${0.1 + index * 0.1}s`,
                                transform: hoveredItem === item.id ? 'translateY(-10px) scale(1.02)' : `translateY(${mousePosition.y * (5 + index * 2)}px)`
                            }}
                        >
                            <div className="item-image-wrapper">
                                <img src={item.image} alt={item.title} className="item-image" loading="lazy" />
                                <div className="item-overlay">
                                    <span className="item-category">{item.category}</span>
                                    <span className="item-year">{item.year}</span>
                                </div>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">{item.title}</h3>
                                <p className="item-description">{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <footer className={`footer-controls ${isLoaded ? 'animate-in' : ''}`}>
                <div className="page-indicator">
                    <button className="dot" onClick={() => navigate('/')} aria-label="Go to Home" />
                    <button className="dot active" onClick={() => navigate('/collection')} aria-label="Go to Collection" />
                    <button className="dot" onClick={() => navigate('/about')} aria-label="Go to About" />
                </div>

                <div className="pagination">
                    <span className="page-info">
                        <span className="page-current">02</span>
                        {' / '}
                        <span>03</span>
                    </span>

                    <button className="nav-arrow prev" onClick={() => navigate('/')} aria-label="Previous page">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button className="nav-arrow" onClick={() => navigate('/about')} aria-label="Next page">
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

export default Collection
