import { useState, useEffect } from 'react';
import axios from 'axios';
import './Pogoda.css';

function Pogoda() {
    const [danePogodowe, ustawDanePogodowe] = useState([]);

    const miasta = [
        { nazwa: 'Pszczyna', lat: 49.98, lon: 18.95 },
        { nazwa: 'Katowice', lat: 50.26, lon: 19.02 },
        { nazwa: 'Bielsko-Biała', lat: 49.82, lon: 19.05 },
    ];

    useEffect(() => {
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=49.98,50.26,49.82&longitude=18.95,19.02,19.05&current_weather=true")
            .then(odpowiedz => {
                const dane = odpowiedz.data.map((daneMiasta, index) => ({
                    miasto: miasta[index].nazwa,
                    temperatura: daneMiasta.current_weather.temperature,
                    predkoscWiatru: daneMiasta.current_weather.windspeed,
                    kodPogody: daneMiasta.current_weather.weathercode
                }));
                ustawDanePogodowe(dane);
            })
            .catch(blad => console.error("Błąd:", blad));
    }, []);

    const pobierzIkonePogody = (kod) => {
        if (kod === 0) return '☀️';
        if (kod >= 1 && kod <= 3) return '⛅';
        if (kod >= 45 && kod <= 48) return '🌫️';
        if (kod >= 51 && kod <= 67) return '🌧️';
        if (kod >= 80 && kod <= 82) return '🌧️';
        if (kod >= 71 && kod <= 77) return '❄️';
        if (kod >= 85 && kod <= 86) return '❄️';
        if (kod >= 95 && kod <= 99) return '⛈️';
        return '❓';
    };

    return (
        <div className="pogoda-container">
            <h2>Aktualna Pogoda</h2>
            <div className="weather-cards">
                {danePogodowe.map((element, indeks) => (
                    <div key={indeks} className="weather-card">
                        <h3 className="city-name">{element.miasto}</h3>
                        <div className="weather-icon">{pobierzIkonePogody(element.kodPogody)}</div>
                        <p className="weather-info">Temp: {element.temperatura}°C</p>
                        <p className="weather-info">Wiatr: {element.predkoscWiatru} km/h</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pogoda;
