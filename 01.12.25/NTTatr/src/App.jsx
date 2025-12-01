import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import StronaGlowna from './pages/StronaGlowna';
import Szczyty from './pages/Szczyty';
import Szlaki from './pages/Szlaki';
import Galeria from './pages/Galeria';
import Informacje from './pages/Informacje';
import Kontakt from './pages/Kontakt';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<StronaGlowna />} />
              <Route path="/szczyty" element={<Szczyty />} />
              <Route path="/szlaki" element={<Szlaki />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/informacje" element={<Informacje />} />
              <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
          </Main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
