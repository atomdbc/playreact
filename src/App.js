import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '91c7132a1be93756154084098de6ecd0';  
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    if (city.trim() === '') return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchWeather();
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Get Weather</button>
      {loading && <p>searching...</p>}
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;




// function App() {
//   const [count, setNumber] = useState(1);

//   const increase =  () =>{
//     setNumber(count * 2)
//   }
//   const decrease = () =>{
//     setNumber(Math.round(count / 2))
//   };

//   const reset = () =>{
//     setNumber(0)
//   }

  

//   return (
//     <div className="App">
//       <h1>Counter App</h1>
//       <p>{count}</p>
//       <button onClick={increase}>Posimultiply</button>
//       <button onClick={decrease}>Negatiply</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default App;
