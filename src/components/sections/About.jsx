import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../../hooks';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [terminalRef, terminalVisible] = useScrollAnimation({ threshold: 0.1 });
  const [techRef, techVisible] = useScrollAnimation({ threshold: 0.1 });

  const techIcons = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Ubuntu', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg' },
    { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about gray" ref={sectionRef}>
      <div className="row">
        <div className="col-12">
          <div
            ref={headerRef}
            className={`header-center scroll-animate ${headerVisible ? 'visible' : ''}`}
          >
            <h3>Sobre Mim</h3>
            <p>Desenvolvedor e Analista de QA com foco em qualidade e inovação</p>
          </div>

          <div
            ref={terminalRef}
            className={`about-content scroll-animate-scale ${terminalVisible ? 'visible' : ''}`}
          >
            <div className="terminal-header">
              <span className="terminal-button close"></span>
              <span className="terminal-button minimize"></span>
              <span className="terminal-button maximize"></span>
              <span className="terminal-title">wesley@portfolio:~$</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-input">cat about.txt</span>
              </div>

              <div className="terminal-line terminal-divider">
                ════════════════════════════════════════════════════════════
              </div>

              <div className="terminal-line terminal-output">
                &gt; Inicializando perfil profissional...
              </div>

              <div className="terminal-line terminal-output">
                &gt; Nome: <span className="terminal-highlight">Wesley Costa</span>
              </div>

              <div className="terminal-line terminal-output">
                &gt; Função: <span className="terminal-highlight">Desenvolvedor Full Stack</span>
              </div>

              <div className="terminal-line terminal-output">
                &gt; Especialização: <span className="terminal-highlight">Cybersecurity</span> | Desenvolvimento Full-Stack | DevSecOps
              </div>

              <div className="terminal-line terminal-divider">
                ────────────────────────────────────────────────────────────
              </div>

              <div className="terminal-line terminal-output">
                Transformando ideias em realidade digital. Desenvolvedor
              </div>

              <div className="terminal-line terminal-output">
                apaixonado por criar experiências únicas e inovadoras que
              </div>

              <div className="terminal-line terminal-output">
                conectam pessoas e tecnologia.
              </div>

              <div className="terminal-line terminal-divider">
                ────────────────────────────────────────────────────────────
              </div>

              <div className="terminal-line terminal-output">
                &gt; Habilidades: <span className="terminal-highlight">Pentesting</span> | Análise de Vulnerabilidades | Code Review
              </div>

              <div className="terminal-line terminal-output">
                &gt; Foco: Desenvolvimento seguro, testes de invasão e proteção de dados
              </div>

              <div className="terminal-line terminal-divider">
                ════════════════════════════════════════════════════════════
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </div>

          <div
            ref={techRef}
            className={`tech-icons-section scroll-animate ${techVisible ? 'visible' : ''}`}
          >
            <h4 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '60px', color: 'var(--text-primary)', fontSize: '24px' }}>Tecnologias & Ferramentas</h4>
            <div className="tech-icons-grid">
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className={`tech-icon-card ${techVisible ? 'tech-visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
