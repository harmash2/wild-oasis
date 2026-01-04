import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
    'isDark',
  );

  useEffect(
    function () {
      if (darkMode) {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
        document.documentElement.classList.add('dark-mode');
      }
    },
    [darkMode],
  );

  function toggleMode() {
    setDarkMode((s) => !s);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error('DarkModeContext was used outside of DarkModeProvider');
  return context;
}

export { DarkModeProvider, useDarkMode };
