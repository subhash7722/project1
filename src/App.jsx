import React, { useState } from 'react'
import "./App.css"

function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState(null)

  async function handleClick() {
    const API_KEY = "c7e1718e8d122b30f3da59dff8ea6acb"
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
    )
    const myResult = await result.json()
    setData(myResult.main)
  }

  return (
    <div className="app">
      <div className="weather-card">
        <h1 className="title">🌤️ Weather App</h1>

        <div className="input-group">
          <input
            className="city-input"
            type="text"
            placeholder="Enter city name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn" onClick={handleClick}>
            Search
          </button>
        </div>

        {data ? (
          <div className="weather-info">
            <h2>🌡️ Temp: {data.temp} °C</h2>
            <h3>🤗 Feels Like: {data.feels_like} °C</h3>
          </div>
        ) : (
          <p className="message">Enter a city to get weather</p>
        )}
      </div>
    </div>
  )
}

export default App
