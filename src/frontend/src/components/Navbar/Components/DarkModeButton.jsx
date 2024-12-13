import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import sun from 'assets/sun.jsx';
import moon from 'assets/moon.jsx';
import toggleDarkMode from '../../../utils/toggleDarkMode';

DarkModeButton.propTypes = {
  textOnly: PropTypes.bool,
};

export default function DarkModeButton({ textOnly = false }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // shift + d to toggle dark mode
    const handleKeyDown = (event) => {
      if (event.shiftKey && event.key === 'D') {
        toggleDarkMode(darkMode, setDarkMode);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [darkMode]);

  return (
    <button
      onClick={() => toggleDarkMode(darkMode, setDarkMode)}
      className={`${
        textOnly ? 'w-full h-7' : 'h-8 w-8'
      } flex items-center justify-center dark:bg-gray-200 bg-neutral-900 rounded-full transition-colors duration-300 ease-in-out`}
    >
      {textOnly ? (
        <span className='dark:text-gray-900 text-white text-sm h-[22px]'>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      ) : darkMode ? (
        sun
      ) : (
        moon
      )}
    </button>
  );
}
