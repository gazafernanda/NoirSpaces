import { useState } from 'react'
import './App.css'

// Image imports
const images = [
  {
    id: 1,
    src: '/living-room.png',
    alt: 'Dark modern living room with leather sofa',
    title: 'Living Room'
  },
  {
    id: 2,
    src: '/bathroom.png',
    alt: 'Luxurious dark bathroom with marble fixtures',
    title: 'Bathroom'
  },
  {
    id: 3,
    src: '/bedroom.png',
    alt: 'Contemporary dark bedroom with nature view',
    title: 'Bedroom'
  }
]

const slides = [
  { number: '01', titleLight: 'Modern', titleBold: 'Living' },
  { number: '02', titleLight: 'Dark', titleBold: 'Interior' },
  { number: '03', titleLight: 'Luxury', titleBold: 'Design' }
]

function App() {
  const [activeSlide, setActiveSlide] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const handleNext = () => {
    setActiveSlide(prev => (prev >= 3 ? 1 : prev + 1))
    setActiveImage(prev => (prev >= 2 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setActiveSlide(prev => (prev <= 1 ? 3 : prev - 1))
    setActiveImage(prev => (prev <= 0 ? 2 : prev - 1))
  }

  const handleIndicatorClick = (index) => {
    setActiveSlide(index + 1)
    setActiveImage(index)
  }

  const currentSlide = slides[activeSlide - 1]

  return (
    <div className="app">
      {/* Ambient glow effects */}
      <div className="ambient-glow glow-1" aria-hidden="true" />
      <div className="ambient-glow glow-2" aria-hidden="true" />

      {/* Header */}
      <header className="header">
        <a href="/" className="logo">Architecs</a>

        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link active">Home</a>
            </li>
            <li>
              <a href="#" className="nav-link">Collection</a>
            </li>
            <li>
              <a href="#" className="nav-link">About</a>
            </li>
          </ul>

          <button className="menu-button" aria-label="Open menu">
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Hero Section */}
          <section className="hero-section">
            <span className="slide-number">{currentSlide.number}.</span>
            <h1 className="hero-title">
              <span className="light">{currentSlide.titleLight}</span>
              <span className="bold">{currentSlide.titleBold}</span>
            </h1>
          </section>

          {/* Gallery Section */}
          <section className="gallery-section">
            <div className="gallery-container">
              {images.map((image, index) => (
                <article
                  key={image.id}
                  className={`gallery-item ${index === activeImage ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer Controls */}
      <footer className="footer-controls">
        <div className="slide-indicators">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`indicator ${index === activeImage ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="pagination">
          <span className="page-info">
            <span className="page-current">
              {String(activeSlide).padStart(2, '0')}
            </span>
            {' / '}
            <span>03</span>
          </span>

          <button
            className="nav-arrow"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
