import { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 4300);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="splash-name">Wesley Costa</h1>
        <p className="splash-subtitle">Full-Stack Developer & QA Analyst</p>
      </div>
    </div>
  );
};

export default SplashScreen;
