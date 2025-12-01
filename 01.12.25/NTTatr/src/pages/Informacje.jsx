import { useEffect, useState } from 'react';
import './Pages.css';

function Informacje() {
    const [expandedSection, setExpandedSection] = useState(null);
    const [weather, setWeather] = useState(null);

    // useEffect - symulacja pobierania pogody
    useEffect(() => {
        document.title = 'Informacje - NT Tatr';

        // Symulacja pobierania aktualnej pogody
        const timer = setTimeout(() => {
            setWeather({
                temp: '12°C',
                conditions: 'Częściowe zachmurzenie',
                wind: '15 km/h'
            });
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="page">
            <h1>ℹ️ Informacje Praktyczne</h1>

            {weather && (
                <div className="weather-box">
                    <h3>🌤️ Aktualna pogoda w Tatrach</h3>
                    <p>Temperatura: {weather.temp}</p>
                    <p>Warunki: {weather.conditions}</p>
                    <p>Wiatr: {weather.wind}</p>
                </div>
            )}

            <div className="faq-section">
                <h2>Najczęściej zadawane pytania (FAQ)</h2>

                <div className="faq-item">
                    <button
                        className="faq-question"
                        onClick={() => toggleSection('karnety')}
                    >
                        Jak kupić karnet do TPN? {expandedSection === 'karnety' ? '▲' : '▼'}
                    </button>
                    {expandedSection === 'karnety' && (
                        <div className="faq-answer">
                            <p>Karnety można kupić online na stronie TPN lub w punktach sprzedaży przy wejściach do parku.</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <button
                        className="faq-question"
                        onClick={() => toggleSection('bezpieczenstwo')}
                    >
                        Jak bezpiecznie wędrować? {expandedSection === 'bezpieczenstwo' ? '▲' : '▼'}
                    </button>
                    {expandedSection === 'bezpieczenstwo' && (
                        <div className="faq-answer">
                            <p>Zawsze sprawdzaj prognozę pogody, miej odpowiednie obuwie i ubranie, zabierz wodę i jedzenie.</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <button
                        className="faq-question"
                        onClick={() => toggleSection('sezon')}
                    >
                        Kiedy najlepszy sezon? {expandedSection === 'sezon' ? '▲' : '▼'}
                    </button>
                    {expandedSection === 'sezon' && (
                        <div className="faq-answer">
                            <p>Lato (czerwiec-sierpień) i jesień (wrzesień-październik) to najlepsze pory dla turystów.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Informacje;
