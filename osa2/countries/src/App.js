import React, { useState, useEffect} from 'react'
import Input from './modules/Input'
import Country from './modules/Country'
import axios from 'axios'

const App = () => {
  const [ countriesData, setCountriesData ] = useState([]) 
  const [ result, setResult ] = useState([]) 

  const countriesAPI = {
    baseUrl: 'https://restcountries.eu/rest/v2/',
    endpoints: {
      all: 'all'
    }
  }

  const handleSearchCountries = (event) => {
    const res = countriesData.filter(c => c.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setResult(res)
  }

  const handleShowCountry = (event) => {
    const res = countriesData.filter(c => c.name.toLowerCase().includes(event.target.getAttribute('data').toLowerCase()))
    setResult(res);
  }

  useEffect(() => {
    axios
      .get(`${countriesAPI.baseUrl}${countriesAPI.endpoints.all}`)
      .then(response => {
        setCountriesData(response.data)
      })
  },[])

  return (
    <div>
      <div>
        <span>Find countries</span> <Input type="text" name="search" onChange={handleSearchCountries} />
      </div>
      {result.length > 10 ? 'Too many matches' : result.length === 1 ? <Country data={result} /> : result.map(d => 
        <div key={d.numericCode}>
          {d.name} {<Input type="button" onClick={handleShowCountry} value="show" data={d.name} />}
        </div>
      )}
    </div>
  )
}

export default App