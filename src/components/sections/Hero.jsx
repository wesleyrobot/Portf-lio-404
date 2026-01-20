import { useState, useEffect } from 'react';
import './Hero.css';
import normalImageLight from '../../assets/images/wesley_normal_light.jpg';
import normalImageDark from '../../assets/images/wesley_normal_dark.jpg';
import roboImageLight from '../../assets/images/wesley_robo_light.png';
import roboImageDark from '../../assets/images/wesley_robo_dark.png';

const Hero = () => {
  const [hovered, setHovered] = useState(null);
  const [isHackerTheme, setIsHackerTheme] = useState(
    document.documentElement.getAttribute('data-theme') === 'hacker'
  );

  useEffect(() => {
    const checkTheme = () => {
      setIsHackerTheme(document.documentElement.getAttribute('data-theme') === 'hacker');
    };

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  const normalImage = isHackerTheme ? normalImageDark : normalImageLight;
  const roboImage = isHackerTheme ? roboImageDark : roboImageLight;

  return (
    <section id="section" className="hero-section light nopad-t nopad-b">
      <div className="row">
        <div className="col-12">
          <div id="face" className="face">
            {/* Fundo sólido atrás das imagens */}
            <div className="face-background"></div>

            <a
              href="#projects"
              id="link-designer"
              className="split-link"
              onMouseEnter={() => setHovered('designer')}
              onMouseLeave={() => setHovered(null)}
            >
              <div id="designer" className="designer">
                <div id="designer-desc" className="description">
                  <h1>Cybersecurity</h1>
                  <p>Qualidade de software e prevenção de riscos operacionais</p>
                </div>
              </div>
            </a>

            <a
              href="#about"
              id="link-coder"
              className="split-link"
              onMouseEnter={() => setHovered('coder')}
              onMouseLeave={() => setHovered(null)}
            >
              <div id="coder" className="coder">
                <div id="coder-desc" className="description">
                  <h1>
                    <span className="chevron-left">&lt;</span>
                    Desenvolvedor
                    <span className="chevron-right">&gt;</span>
                  </h1>
                  <p>Full-Stack especializado em automação e sistemas escaláveis</p>
                </div>
              </div>
            </a>

            <div
              id="designer-img"
              className="designer-img"
            >
              <img src={normalImage} alt="Wesley Costa - Analista QA" />
            </div>

            <div
              id="coder-img"
              className={`coder-img ${hovered === 'designer' ? 'shrink' : ''} ${hovered === 'coder' ? 'expand' : ''}`}
            >
              <img src={roboImage} alt="Wesley Costa - Desenvolvedor" />
            </div>

            <div id="designer-bg" className="designer-bg"></div>
            <div
              id="coder-bg"
              className={`coder-bg ${hovered === 'designer' ? 'shrink' : ''} ${hovered === 'coder' ? 'expand' : ''}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
