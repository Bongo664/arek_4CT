import { useState, useEffect } from 'react';
import axios from 'axios';
import './Pogoda.css';

function Pogoda() {
    const [weatherData, setWeatherData] = useState([]);

    const cities = [
        { name: 'Pszczyna', lat: 49.98, lon: 18.95 },
        { name: 'Katowice', lat: 50.26, lon: 19.02 },
        { name: 'Bielsko-Biała', lat: 49.82, lon: 19.05 },
    ];

    useEffect(() => {
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=49.98,50.26,49.82&longitude=18.95,19.02,19.05&current_weather=true")
            .then(response => {
                const data = response.data.map((cityData, index) => ({
                    city: cities[index].name,
                    temperature: cityData.current_weather.temperature,
                    windspeed: cityData.current_weather.windspeed,
                    weathercode: cityData.current_weather.weathercode
                }));
                setWeatherData(data);
            })
            .catch(err => console.error("Błąd:", err));
    }, []);

    const getWeatherIcon = (code) => {
        if (code === 0) return '☀️';
        if (code >= 1 && code <= 3) return '⛅';
        if (code >= 45 && code <= 48) return '🌫️';
        if (code >= 51 && code <= 67) return '🌧️';
        if (code >= 80 && code <= 82) return '🌧️';
        if (code >= 71 && code <= 77) return '❄️';
        if (code >= 85 && code <= 86) return '❄️';
        if (code >= 95 && code <= 99) return '⛈️';
        return '❓';
    };

    return (
        <div className="pogoda-container">
            <h2>Aktualna Pogoda</h2>
            <div className="weather-cards">
                {weatherData.map((item, index) => (
                    <div key={index} className="weather-card">
                        <h3 className="city-name">{item.city}</h3>
                        <div className="weather-icon">{getWeatherIcon(item.weathercode)}</div>
                        <p className="weather-info">Temp: {item.temperature}°C</p>
                        <p className="weather-info">Wiatr: {item.windspeed} km/h</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pogoda;
