import { useState, useRef, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';
import { projects } from '../data/projects';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [carouselContainerRef, carouselVisible] = useScrollAnimation({ threshold: 0.1 });

  const currentProject = projects[currentIndex];

  const getImagePath = (imageName) => {
    try {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    } catch {
      return `https://via.placeholder.com/800x600?text=${currentProject.title}`;
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch/Mouse handlers para arrastar
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 100) {
      goToPrev();
    } else if (translateX < -100) {
      goToNext();
    }
    setTranslateX(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-play: muda de projeto a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="projects" className="projects section dark">
      <div className="container">
        <div
          ref={headerRef}
          className={`header-center scroll-animate ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Soluções completas desenvolvidas do zero
          </p>
        </div>

        <div
          ref={carouselContainerRef}
          className={`carousel-container scroll-animate-scale ${carouselVisible ? 'visible' : ''}`}
        >
          {/* Botão Anterior */}
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={goToPrev}
            aria-label="Projeto anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div
            className="carousel-track"
            ref={carouselRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{
              transform: `translateX(${translateX}px)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            <div className="carousel-slide" key={currentIndex}>
              {/* Imagem do Projeto */}
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img
                    src={getImagePath(currentProject.image)}
                    alt={currentProject.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600?text=${currentProject.title}`;
                    }}
                  />

                  {/* Overlay com número */}
                  <div className="project-number-badge">
                    {currentProject.number}
                  </div>
                </div>

                {/* Informações do Projeto */}
                <div className="project-info">
                  <span className="project-category-tag">{currentProject.category}</span>
                  <h3 className="project-title">{currentProject.title}</h3>
                  <p className="project-description">{currentProject.description}</p>

                  <div className="tech-tags">
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botão Próximo */}
          <button
            className="carousel-btn carousel-btn-next"
            onClick={goToNext}
            aria-label="Próximo projeto"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>

        {/* Indicadores de Slide */}
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="carousel-counter">
          <span className="current">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="separator">/</span>
          <span className="total">{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
