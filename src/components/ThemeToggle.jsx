import './ThemeToggle.css';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <div className="theme-toggle-container">
      <div className="theme-toggle-tooltip">THEME</div>
      <input
        type="checkbox"
        id="theme-toggle-input"
        className="theme-toggle-input"
        checked={theme === 'hacker'}
        onChange={onToggle}
      />
      <label htmlFor="theme-toggle-input" className="theme-toggle-label"></label>
    </div>
  );
};

export default ThemeToggle;
