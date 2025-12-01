import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import './Header.css';

function Header() {
    const { theme, toggleTheme, isDark } = useContext(ThemeContext);

    return (
        <header className={`header ${theme}`}>
            <div className="header-container">
                <h1 className="logo">🏔️ NT Tatr</h1>

                <nav className="navigation">
                    <Link to="/">Strona Główna</Link>
                    <Link to="/szczyty">Szczyty</Link>
                    <Link to="/szlaki">Szlaki</Link>
                    <Link to="/galeria">Galeria</Link>
                    <Link to="/informacje">Informacje</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </nav>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Przełącz motyw"
                >
                    {isDark ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    );
}

export default Header;
