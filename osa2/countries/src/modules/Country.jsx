import React from 'react'
import UnorderedList from './UnorderedList'

const Country = ({ data }) => {
  return (
    data.map(d => 
      <div key={d.numericCode}>
        <h1>{d.name}</h1>
        <div>capital: {d.capital}</div>
        <div>population: {d.population}</div>
        <p>languages</p>
        <UnorderedList elems={d.languages} />
        <img src={d.flag} alt={d.name} width="20%" style={{border: 'solid 1px black'}}/>
      </div>
    )
  )
}

export default Country