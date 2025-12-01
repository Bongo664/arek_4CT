import React, { useContext } from 'react';
import { ThemeContext } from '../App';

function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer style={{ backgroundColor: theme.background, color: theme.color, padding: '10px', textAlign: 'center' }}>
            <p>Stopka aplikacji — obecny motyw: {theme.name}</p>
        </footer>
    );
}

export default Footer;
