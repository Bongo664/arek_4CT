import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css';

function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`footer ${theme}`}>
            <div className="footer-container">
                <div className="footer-links">
                    <a href="#privacy">Polityka prywatności</a>
                    <a href="#terms">Regulamin</a>
                    <a href="#about">O projekcie</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
