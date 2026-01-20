import { useScrollAnimation } from '../../hooks';
import { websites } from '../../data';
import './Sites.css';

const Sites = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="sites" className="sites section">
      <div className="container" style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 30px' }}>
        <div
          ref={headerRef}
          className={`scroll-animate ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Sites Desenvolvidos</h2>
          <p className="section-subtitle">
            Projetos web ao vivo e em produção
          </p>
        </div>

        <div
          ref={gridRef}
          className={`sites-grid ${gridVisible ? 'grid-visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', width: '100%', marginTop: '40px' }}
        >
          {websites.map((site, index) => (
            <div
              key={site.id}
              className={`book ${gridVisible ? 'book-visible' : ''}`}
              style={{
                height: '520px',
                minHeight: '520px',
                width: '100%',
                transitionDelay: `${index * 0.15}s`
              }}
            >
              {/* Conteúdo interno do livro (visível quando aberto) */}
              <div className="book-content">
                <div className="site-header">
                  <span className="site-badge">{site.badge}</span>
                  <h3>{site.title}</h3>
                  <p className="company">{site.company}</p>
                </div>

                <p className="site-description">{site.description}</p>

                <div className="site-section">
                  <h4>Tecnologias</h4>
                  <div className="tech-tags">
                    {site.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="site-section">
                  <h4>Funcionalidades</h4>
                  <ul className="features-list">
                    {site.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={site.link}
                  className="site-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Site →
                </a>
              </div>

              {/* Capa do livro (hover para abrir) */}
              <div className="cover">
                {/* SVG Decorative Pattern */}
                <svg className="cover-pattern" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id={`coverGradient${site.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.2)', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0.05)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>

                  {/* Geometric shapes */}
                  <circle cx="50" cy="80" r="40" fill={`url(#coverGradient${site.id})`} opacity="0.3" />
                  <circle cx="350" cy="520" r="60" fill={`url(#coverGradient${site.id})`} opacity="0.25" />
                  <rect x="300" y="40" width="80" height="80" fill={`url(#coverGradient${site.id})`} opacity="0.2" transform="rotate(30 340 80)" />

                  {/* Dots grid pattern */}
                  {[...Array(30)].map((_, i) => (
                    <circle
                      key={i}
                      cx={(i % 6) * 70 + 30}
                      cy={Math.floor(i / 6) * 100 + 50}
                      r="2"
                      fill="rgba(255,255,255,0.15)"
                    />
                  ))}

                  {/* Decorative lines */}
                  <line x1="0" y1="150" x2="150" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  <line x1="250" y1="450" x2="400" y2="450" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                </svg>

                <div className="cover-content">
                  <div className="cover-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="cover-title">{site.title}</h3>
                  <div className="cover-divider"></div>
                  <p className="cover-hint">Passe o mouse</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sites;
