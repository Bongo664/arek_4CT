import React, { useContext } from 'react';
import { ThemeContext } from '../App';

function Header() {
    const { theme } = useContext(ThemeContext);

    return (
        <header style={{ backgroundColor: theme.background, color: theme.color, padding: '20px', textAlign: 'center' }}>
            <h1>Moja aplikacja (żyjący motyw: {theme.name})</h1>
        </header>
    );
}

export default Header;
