import React, { useContext } from 'react';
import { ThemeContext } from '../App';

function Main() {
    const { theme } = useContext(ThemeContext);

    return (
        <main style={{ backgroundColor: theme.background, color: theme.color, padding: '50px', minHeight: '200px' }}>
            <p>To jest sekcja główna. Wszystkie komponenty korzystają z aktualnego stylu przekazywanego przez context i useContext.</p>
        </main>
    );
}

export default Main;
