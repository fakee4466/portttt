import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    const isDarkTheme = initialTheme === 'dark';
    setIsDark(isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newTheme = isDark ? 'light' : 'dark';
    const newIsDark = !isDark;
    
    // Update state
    setIsDark(newIsDark);
    
    // Update body class
    document.body.classList.toggle('light-theme', !newIsDark);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Reset animation state
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      className={`theme-toggle ${isAnimating ? 'switching' : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      type="button"
    >
      <span className="theme-icon">
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  );
};

export default ThemeToggle;
