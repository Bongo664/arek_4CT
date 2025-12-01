import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

export const ThemeContext = React.createContext();

const themes = {
  czerwony: {
    name: 'czerwony',
    background: 'red',
    color: 'white'
  },
  zielony: {
    name: 'zielony',
    background: 'green',
    color: 'orange'
  },
  niebieski: {
    name: 'niebieski',
    background: 'blue',
    color: 'black'
  }
};

function App() {
  const [currentTheme, setCurrentTheme] = useState('czerwony');

  const handleThemeChange = (event) => {
    setCurrentTheme(event.target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme] }}>
      <div className="app-container">
        <Header />
        <div className="theme-switcher">
          <label htmlFor="theme-select">Wybierz motyw: </label>
          <select id="theme-select" value={currentTheme} onChange={handleThemeChange}>
            <option value="czerwony">Czerwony (tło: czerwone, tekst: biały)</option>
            <option value="zielony">Zielony (tło: zielone, tekst: pomarańczowy)</option>
            <option value="niebieski">Niebieski (tło: niebieskie, tekst: czarny)</option>
          </select>
        </div>
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
