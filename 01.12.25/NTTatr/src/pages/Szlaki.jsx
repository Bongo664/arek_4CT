import { useEffect, useState } from 'react';
import './Pages.css';

function Szlaki() {
    const [szlaki, setSzlaki] = useState([]);
    const [filtr, setFiltr] = useState('wszystkie');

    // useEffect - załadowanie szlaków
    useEffect(() => {
        document.title = 'Szlaki - NT Tatr';

        const tablicaSzlakow = [
            { id: 1, nazwa: 'Morskie Oko', trudnosc: 'łatwy', czas: '2h', dystans: '9 km' },
            { id: 2, nazwa: 'Dolina Pięciu Stawów', trudnosc: 'średni', czas: '5h', dystans: '15 km' },
            { id: 3, nazwa: 'Rysy', trudnosc: 'trudny', czas: '8h', dystans: '18 km' },
            { id: 4, nazwa: 'Giewont', trudnosc: 'średni', czas: '4h', dystans: '12 km' },
            { id: 5, nazwa: 'Dolina Kościeliska', trudnosc: 'łatwy', czas: '3h', dystans: '10 km' }
        ];

        setSzlaki(tablicaSzlakow);
    }, []);

    // Filtrowanie szlaków
    const filtrowaneZlaki = filtr === 'wszystkie'
        ? szlaki
        : szlaki.filter(szlak => szlak.trudnosc === filtr);

    return (
        <div className="page">
            <h1>🥾 Szlaki Turystyczne</h1>

            <div className="filter-bar">
                <label>Filtruj według trudności:</label>
                <select value={filtr} onChange={(e) => setFiltr(e.target.value)}>
                    <option value="wszystkie">Wszystkie</option>
                    <option value="łatwy">Łatwe</option>
                    <option value="średni">Średnie</option>
                    <option value="trudny">Trudne</option>
                </select>
            </div>

            <div className="cards-grid">
                {filtrowaneZlaki.map(szlak => (
                    <div key={szlak.id} className="card">
                        <h3>{szlak.nazwa}</h3>
                        <p><strong>Trudność:</strong> <span className={`badge ${szlak.trudnosc}`}>{szlak.trudnosc}</span></p>
                        <p><strong>Czas:</strong> {szlak.czas}</p>
                        <p><strong>Dystans:</strong> {szlak.dystans}</p>
                    </div>
                ))}
            </div>

            {filtrowaneZlaki.length === 0 && (
                <p className="no-results">Brak szlaków dla wybranego filtru</p>
            )}
        </div>
    );
}

export default Szlaki;
