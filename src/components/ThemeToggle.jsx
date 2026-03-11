import { Icon } from '@iconify/react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle flex items-center justify-center"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className={`absolute left-1 text-xs transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
        <Icon icon="ri:moon-fill" className="text-gray-300" />
      </span>
      <span className={`absolute right-1 text-xs transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
        <Icon icon="ri:sun-fill" className="text-yellow-500" />
      </span>
    </button>
  );
};

export default ThemeToggle;
