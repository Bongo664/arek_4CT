import { useEffect, useState } from 'react';
import './Pages.css';

function Szczyty() {
    const [szczyty, setSzczyty] = useState([]);

    // useEffect - pobieranie listy szczytów
    useEffect(() => {
        document.title = 'Szczyty - NT Tatr';

        // Symulacja pobierania danych
        const tatrzanskieSzczyty = [
            { id: 1, nazwa: 'Rysy', wysokosc: 2499, typ: 'Tatry Wysokie' },
            { id: 2, nazwa: 'Giewont', wysokosc: 1895, typ: 'Tatry Zachodnie' },
            { id: 3, nazwa: 'Kasprowy Wierch', wysokosc: 1987, typ: 'Tatry Zachodnie' },
            { id: 4, nazwa: 'Świnica', wysokosc: 2301, typ: 'Tatry Wysokie' },
            { id: 5, nazwa: 'Kościelec', wysokosc: 2155, typ: 'Tatry Wysokie' },
            { id: 6, nazwa: 'Gerlach', wysokosc: 2655, typ: 'Tatry Wysokie (Słowacja)' }
        ];

        setSzczyty(tatrzanskieSzczyty);
        console.log('Załadowano szczyty:', tatrzanskieSzczyty.length);
    }, []);

    return (
        <div className="page">
            <h1>⛰️ Szczyty Tatrzańskie</h1>
            <p className="subtitle">Poznaj najpiękniejsze szczyty Tatr</p>

            <div className="cards-grid">
                {szczyty.map(szczyt => (
                    <div key={szczyt.id} className="card">
                        <h3>{szczyt.nazwa}</h3>
                        <p className="highlight">{szczyt.wysokosc} m n.p.m.</p>
                        <p className="badge">{szczyt.typ}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Szczyty;
