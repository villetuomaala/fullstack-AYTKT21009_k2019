import React, { useState, useEffect} from 'react'
import Input from './modules/Input'
import Results from './modules/Results'
import axios from 'axios'

const App = () => {
  const [ countriesData, setCountriesData ] = useState([]) 
  const [ result, setResult ] = useState([]) 
  const countriesEndpoint = 'https://restcountries.eu/rest/v2/all'

  const handleSearchCountries = (event) => {
    const res = countriesData.filter(c => c.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setResult(res);
  }

  useEffect(() => {
    axios
      .get(countriesEndpoint)
      .then(response => {
        console.log(response.data)
        setCountriesData(response.data)
      })
  },[])

  return (
    <div>
      <div>
        <span>Find countries</span> <Input type="text" name="search" onChange={handleSearchCountries} />
      </div>
      <Results data={result} />
    </div>
  )
}

export default App