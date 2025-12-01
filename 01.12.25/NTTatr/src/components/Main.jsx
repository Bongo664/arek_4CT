import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Main.css';

function Main({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <main className={`main ${theme}`}>
            <div className="main-container">
                {children}
            </div>
        </main>
    );
}

export default Main;
