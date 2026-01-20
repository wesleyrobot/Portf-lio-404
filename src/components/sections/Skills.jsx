import { useScrollAnimation } from '../../hooks';
import { skillCategories } from '../../data';
import './Skills.css';

const Skills = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div
          ref={headerRef}
          className={`scroll-animate ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Habilidades & Tecnologias</h2>
          <p className="section-subtitle">
            Ferramentas e tecnologias que utilizo no dia a dia
          </p>
        </div>

        <div ref={gridRef} className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`skill-container noselect ${gridVisible ? 'skill-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>

                <div id="card">
                  <div className="card-content">
                    <div className="card-glare"></div>

                    {/* Cyber Lines */}
                    <div className="cyber-lines">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <p id="prompt">PASSE O MOUSE</p>

                    <div className="title">{category.category}</div>

                    {/* Glowing Elements */}
                    <div className="glowing-elements">
                      <div className="glow-1"></div>
                      <div className="glow-2"></div>
                      <div className="glow-3"></div>
                    </div>

                    <div className="subtitle">
                      <ul className="tech-list">
                        {category.technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Particles */}
                    <div className="card-particles">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    {/* Corner Elements */}
                    <div className="corner-elements">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    {/* Scan Line */}
                    <div className="scan-line"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
