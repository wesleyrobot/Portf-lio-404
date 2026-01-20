import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Inicializar Matrix Rain se estiver em hacker mode
    if (theme === 'hacker') {
      setTimeout(() => initMatrixRain(), 100);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      // Ciclo: light -> hacker -> light
      if (prevTheme === 'light') return 'hacker';
      return 'light';
    });
  };

  return { theme, toggleTheme };
};

// Matrix Rain Effect
function initMatrixRain() {
  const canvas = document.getElementById('matrix-rain');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = Math.floor(canvas.width / 20);
  const drops = Array(columns).fill(1);
  const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()';
  const characters = matrix.split('');

  let animationId;

  function draw() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme !== 'hacker') {
      if (animationId) cancelAnimationFrame(animationId);
      return;
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = '15px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(text, i * 20, drops[i] * 20);

      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }

    animationId = requestAnimationFrame(draw);
  }

  draw();

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
    if (animationId) cancelAnimationFrame(animationId);
  };
}
