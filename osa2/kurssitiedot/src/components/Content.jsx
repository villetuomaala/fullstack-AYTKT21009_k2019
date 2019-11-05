import React from 'react'
import Part from './Part'

const Content = ({value}) => {

  const rows = () => value.map(val => 
    <Part
      name={val.name}
      count={val.excercises}
      key={val.id}
    />
  )

  return (
    <div>
        {rows()}
    </div>
  )
}

export default Content