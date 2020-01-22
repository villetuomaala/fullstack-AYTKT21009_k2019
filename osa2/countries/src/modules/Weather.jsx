import React from 'react'

const Weather = ({ data }) => {
    if (data.length === 1 ) {
      return (
        <div>
          <h3>Weather in {data[0].location.name}</h3>
          <div>temperature {data[0].current.temperature} &deg;C</div>
          <div>{data[0].current.weather_icons.map(i => <img src={i} width="5%" alt={data[0].current.weather_descriptions.join(", ")}/> )}</div>
          <div>{data[0].current.weather_descriptions.join(", ")}</div>
        </div>
      )
    } else return ''
}

export default Weather