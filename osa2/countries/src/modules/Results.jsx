import React from 'react'
import Country from './Country'

const Result = ({ data }) => {

  if (data.length > 10) return 'Too many matches' 

  if (data.length === 1) return (
    <Country data={data} />
  )

  return (
    data.map(d => 
      <div key={d.numericCode}>
        {d.name}
      </div>
    )
  )
}

export default Result