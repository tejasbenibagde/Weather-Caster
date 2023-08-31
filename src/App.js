import React, { useState } from 'react';
import { FetchWeather } from './api/FetchWeather';
import './App.css'

const App = () => {

    //using usestate hoook in react
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) =>{
        if(e.key === 'Enter'){
            const data = await FetchWeather(query)

            setWeather(data);
            setQuery('')
        }
    }

  return (
    <div className='main-container'>
        <div className='input-field'>
            <input type = "text" className = "search" placeholder = "Enter a location..." value = {query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
        </div>

        {weather.main && (
            <div className='city'>
                <div className='card'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className='city-temp'>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className='city-wind'>
                        <h4>wind:</h4>
                        <h4>{weather.wind.speed}m/s</h4>
                    </ div>

                    <div className='info'>
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default App;