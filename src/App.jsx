import { useState } from 'react';

// Hooks
import { useTheme } from './hooks';

// Layout Components
import { Header, Footer, SplashScreen } from './components/layout';

// Section Components
import { Hero, About, Projects, Sites, Skills, Contact } from './components/sections';

// UI Components
import { Chatbot, ThemeToggle } from './components/ui';

// Styles
import './styles/index.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Matrix Rain Canvas */}
      <canvas id="matrix-rain"></canvas>

      {/* Access Granted Animation */}
      <div className="access-granted" id="access-granted">
        <div className="access-granted-text">
          ╔══════════════════╗<br />
          BEM-VINDO À MATRIX<br />
          ╚══════════════════╝
        </div>
      </div>

      {/* Theme Toggle 3D */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      {/* Chatbot */}
      <Chatbot />

      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <div className={showSplash ? 'hidden' : ''}>
        <Header theme={theme} onThemeToggle={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Sites />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

      <style jsx>{`
        .access-granted {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #000000;
          border: 3px solid #00ff00;
          padding: 40px 60px;
          z-index: 10001;
          opacity: 0;
          pointer-events: none;
          box-shadow: 0 0 50px rgba(0, 255, 0, 0.5);
        }

        .access-granted.show {
          animation: accessGranted 2s ease-out forwards;
        }

        @keyframes accessGranted {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .access-granted-text {
          color: #00ff00;
          font-size: 28px;
          font-weight: bold;
          text-align: center;
          font-family: 'Courier New', monospace;
          text-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
          letter-spacing: 2px;
          line-height: 1.4;
        }

        .hidden {
          display: none;
        }
      `}</style>
    </>
  );
}

export default App;
