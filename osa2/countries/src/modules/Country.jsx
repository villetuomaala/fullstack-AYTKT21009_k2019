import React, { useState, useEffect} from 'react'
import UnorderedList from './UnorderedList'
import axios from 'axios'
import Weather from './Weather'

const weatherAPI = {
    baseUrl: 'http://api.weatherstack.com/',
    endpoints: {
      current: 'current'
    },
    accessKey: 'bf1543d4e41f64ee549510f69b6571ec'
  }

const Country =  ({ data }) => {
  const [ weatherData, setWeatherData ] = useState([])

  useEffect(() => {
    axios
      .get(`${weatherAPI.baseUrl}${weatherAPI.endpoints.current}?access_key=${weatherAPI.accessKey}&query=${data[0].capital}`)
      .then(response => {
        setWeatherData([response.data])
      })
  },[])

  return (
    data.map(d => 
      <div key={d.numericCode}>
        <h1>{d.name}</h1>
        <div>capital: {d.capital}</div>
        <div>population: {d.population}</div>
        <p>languages</p>
        <UnorderedList elems={d.languages} />
        <img src={d.flag} alt={d.name} width="20%" style={{border: 'solid 1px black'}}/>
        <Weather data={weatherData} />
      </div>
    )
  )
}

export default Country