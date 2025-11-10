// ****** Mini Weather App Project In React ****** //

// App.jsx file code:
/*
import Weather from "./Weather"


function App() {

    return (
        <>
        <div>
            <Weather />
        </div>
        </>
    )
}

export default App
*/


// Weather.jsx file code:
/*
import { useState } from 'react'
import './App.css'
export default function Weather() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState()
    const apiKey = "bf0c78fd04c8c9f973fa9c4ef1158b15&units=metric";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const fetchWeather = async () => {
            try {
                const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
                const data = await response.json();
                setWeather(data);
                console.log(data);
            }
            catch (error) {
                console.error("Error fetching weather data:", error)
            }
        }
    const handleClick = () => {
        fetchWeather();
    }
    return (
        <>
            <div className="weather-container">
                <h1>Weather App In React</h1>
                <input type="text" placeholder="Enter city" value={city} onChange={handleCityChange}/>
                <br /><br />
                <button onClick={handleClick}>Submit</button>
                {
                    weather && <>
                        <div className="weather-info">
                            <h3>{weather.name}</h3>
                            <h3>Temp is : {weather.main.temp}</h3>
                            <h3>{weather.weather[0].description}</h3>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

*/


// App.css file code: 
/*
    .weather-container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ADDBF8;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    }

    .weather-info {
    margin-top: 20px;
    }
*/