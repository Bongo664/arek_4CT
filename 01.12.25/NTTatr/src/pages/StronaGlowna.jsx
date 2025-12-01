import { useEffect, useState } from 'react';
import './Pages.css';

function StronaGlowna() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    // useEffect - symulacja pobierania danych i ustawienie tytułu
    useEffect(() => {
        document.title = 'Strona Główna - NT Tatr';

        // Symulacja pobierania danych
        const timer = setTimeout(() => {
            setData({
                welcome: 'Witamy w Tatrach!',
                description: 'Tatry to najwyższe pasmo górskie w Karpatach, położone na granicy Polski i Słowacji.'
            });
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="page loading">Ładowanie...</div>;
    }

    return (
        <div className="page">
            <h1>🏔️ {data.welcome}</h1>
            <div className="content-box">
                <p className="lead">{data.description}</p>
                <p>
                    Tatry oferują niezapomniane widoki, liczne szlaki turystyczne oraz
                    różnorodną florę i faunę. To idealne miejsce dla miłośników górskich wędrówek.
                </p>
                <div className="stats">
                    <div className="stat-item">
                        <h3>2655 m</h3>
                        <p>Najwyższy szczyt (Rysy)</p>
                    </div>
                    <div className="stat-item">
                        <h3>275 km²</h3>
                        <p>Powierzchnia</p>
                    </div>
                    <div className="stat-item">
                        <h3>600+</h3>
                        <p>Szlaków turystycznych</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StronaGlowna;
