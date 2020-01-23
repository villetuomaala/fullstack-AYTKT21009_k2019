import React from 'react'

const Weather = ({ data }) => {
  if (data.length === 1 ) {
    const weatherData = data[0]

    return (
      <div>
        <h3>Weather in {weatherData.location.name}</h3>
        <div>temperature {weatherData.current.temperature} &deg;C</div>
        <div>{weatherData.current.weather_icons.map(i => <img src={i} width="5%" alt={weatherData.current.weather_descriptions.join(", ")}/> )}</div>
        <div>{weatherData.current.weather_descriptions.join(", ")}</div>
      </div>
    )
  } else return ''
}

export default Weather