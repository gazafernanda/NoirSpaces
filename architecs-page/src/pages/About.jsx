import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'

const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '12', label: 'Years Experience' },
    { number: '45', label: 'Awards Won' },
    { number: '98%', label: 'Client Satisfaction' }
]

const team = [
    { name: 'Alexander Noir', role: 'Founder & Lead Architect', initial: 'AN' },
    { name: 'Sofia Chen', role: 'Interior Design Director', initial: 'SC' },
    { name: 'Marcus Webb', role: 'Creative Director', initial: 'MW' }
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

function About() {
    const navigate = useNavigate()
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

    return (
        <div className={`page about-page ${isLoaded ? 'loaded' : ''}`} ref={containerRef}>
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

            <main className="about-main">
                <div className="about-content">
                    <header className={`about-header ${isLoaded ? 'animate-in' : ''}`}>
                        <div className="page-label">About</div>
                        <h1 className="about-title">
                            <span className="light">Crafting</span>
                            <span className="bold">Darkness</span>
                        </h1>
                    </header>

                    <div className={`about-intro ${isLoaded ? 'animate-in' : ''}`}>
                        <p className="intro-text">
                            At <strong>Architecs</strong>, we believe that true luxury lies in the shadows.
                            Since 2012, we've been transforming spaces into sophisticated sanctuaries
                            where darkness becomes an art form.
                        </p>
                        <p className="intro-text secondary">
                            Our philosophy is simple: embrace the night. We specialize in creating
                            interiors that captivate through contrast, using deep tones and strategic
                            lighting to craft environments that are both dramatic and deeply comfortable.
                        </p>
                    </div>

                    <div className={`stats-section ${isLoaded ? 'animate-in' : ''}`}>
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="stat-item"
                                style={{
                                    animationDelay: `${0.3 + index * 0.1}s`,
                                    transform: `translateY(${mousePosition.y * (5 + index * 3)}px)`
                                }}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className={`team-section ${isLoaded ? 'animate-in' : ''}`}>
                        <h2 className="section-title">The Visionaries</h2>
                        <div className="team-grid">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="team-member"
                                    style={{
                                        animationDelay: `${0.5 + index * 0.15}s`,
                                        transform: `translateX(${mousePosition.x * (10 + index * 5)}px)`
                                    }}
                                >
                                    <div className="member-avatar">
                                        <span>{member.initial}</span>
                                    </div>
                                    <div className="member-info">
                                        <h3 className="member-name">{member.name}</h3>
                                        <p className="member-role">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`contact-section ${isLoaded ? 'animate-in' : ''}`}>
                        <h2 className="section-title">Start Your Journey</h2>
                        <p className="contact-text">Ready to transform your space into a masterpiece of darkness?</p>
                        <a href="mailto:hello@architecs.com" className="contact-button">
                            Get In Touch
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </main>

            <footer className={`footer-controls ${isLoaded ? 'animate-in' : ''}`}>
                <div className="page-indicator">
                    <button className="dot" onClick={() => navigate('/')} aria-label="Go to Home" />
                    <button className="dot" onClick={() => navigate('/collection')} aria-label="Go to Collection" />
                    <button className="dot active" onClick={() => navigate('/about')} aria-label="Go to About" />
                </div>

                <div className="pagination">
                    <span className="page-info">
                        <span className="page-current">03</span>
                        {' / '}
                        <span>03</span>
                    </span>

                    <button className="nav-arrow prev" onClick={() => navigate('/collection')} aria-label="Previous page">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button className="nav-arrow" onClick={() => navigate('/')} aria-label="Back to home">
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

export default About
