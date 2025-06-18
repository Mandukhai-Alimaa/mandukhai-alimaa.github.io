import React, { useState, createContext } from 'react';
import '../App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import MainPage from './MainPage.js';

// Create theme context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('day');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'day' ? 'night' : 'day');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}-theme`}>
          <Header />
          <MainPage />
          <Footer />
      </div>
    </ThemeContext.Provider>
  );
}


export default App;
