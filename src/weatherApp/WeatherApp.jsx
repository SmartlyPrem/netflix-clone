import React, { useEffect, useState } from 'react';
import History from './History';
import Weather from './Weather';

const WeatherApp = () => {
    const [weather, SetWeather] = useState(null);
    const [history, setHistory] = useState([]);
    const API_KEY = `21805bff7224936fa25d6cec016a0a4b`;

    async function fetchWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        const getFilterCity = history.filter(
            (d, i) => {
                if (city != d.name) return true
            }
        )
        if (data.cod == "200") {
            SetWeather(data);
            setHistory(
                [
                    ...getFilterCity,
                    {
                        name: city,
                        timestamp: new Date().getTime(),
                    }
                ]
            )
        } else {
            SetWeather(null)
        }
    }

    async function getUpdateTime(cityName) {
        if (cityName != "") {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const getFilterCity = history.filter(
                (d, i) => {
                    if (cityName != d.name) return true
                }
            )
            if (data.cod == "200") {
                SetWeather(data);
                setHistory(
                    [
                        ...getFilterCity,
                        {
                            name: cityName,
                            timestamp: new Date().getTime(),
                        }
                    ]
                )
            } else {
                SetWeather(null)
            }
        }
    }

    const clearAll = () => {
        return (
            localStorage.removeItem('history'),
            setHistory([])
        )
    }

useEffect(
    () => {
        const lsHistory = localStorage.getItem('history');
        if (lsHistory != null) {
            setHistory(JSON.parse(lsHistory));
        }
    }, []
)

useEffect(
    () => {
        localStorage.setItem('history', JSON.stringify(history))
    }, [history]
)

return (
    <div className="container grid grid-cols-5 gap-4 mx-auto my-3">
        <History history={history} getUpdateTime={getUpdateTime} clearAll={clearAll} />
        <Weather weather={weather} fetchWeather={fetchWeather} />
    </div>
);
}

export default WeatherApp;
