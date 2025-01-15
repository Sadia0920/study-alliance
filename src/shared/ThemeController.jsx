import React, { useEffect, useState } from 'react'
import './ThemeController.css'

export default function ThemeController() {
    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="App">
      <button onClick={toggleTheme} className="theme-toggle-btn">
      <input
  type="checkbox"
  value="synthwave"
  className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-purple-600 bg-[#d4af37] [--tglbg:theme(colors.purple.900)] checked:border-blue-600 checked:bg-blue-300
   checked:[--tglbg:theme(colors.blue.900)]" />
      </button>
    </div>
  )
}
