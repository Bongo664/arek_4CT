import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ONas from './components/ONas';
import Kontakt from './components/Kontakt';
import Aktualnosci from './components/Aktualnosci';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navigation">
          <Link to="/o-nas">O nas</Link>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/aktualnosci">Aktualności</Link>
        </nav>

        <Routes>
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/aktualnosci" element={<Aktualnosci />} />
          <Route path="/" element={<ONas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
