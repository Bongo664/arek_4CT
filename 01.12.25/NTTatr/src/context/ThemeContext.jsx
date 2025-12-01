import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Odczytaj zapisany motyw z localStorage lub użyj 'light' jako domyślny
        const savedTheme = localStorage.getItem('nttatr-theme');
        return savedTheme || 'light';
    });

    // useEffect - zapisz motyw do localStorage przy każdej zmianie
    useEffect(() => {
        localStorage.setItem('nttatr-theme', theme);
        console.log(`Motyw zmieniony na: ${theme}`);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const value = {
        theme,
        toggleTheme,
        isDark: theme === 'dark'
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
