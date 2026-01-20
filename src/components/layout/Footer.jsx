import './Footer.css';
import Ghost from './Ghost';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      const headerHeight = 70;
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Wesley Costa</h3>
            <p>Full-Stack Developer & QA Analyst</p>
          </div>

          <nav className="footer-nav">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Sobre</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projetos</a>
            <a href="#sites" onClick={(e) => handleNavClick(e, '#sites')}>Sites</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contato</a>
          </nav>

          <button className="back-to-top" onClick={scrollToTop}>
            ↑ Voltar ao Topo
          </button>
        </div>

        {/* Ghost Animation */}
        <div style={{ textAlign: 'center', padding: '40px 0 20px 0' }}>
          <Ghost />
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Wesley Costa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
