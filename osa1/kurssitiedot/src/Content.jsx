import React from 'react'
import Part from './Part'

const Content = (props) => {
  return (
    <div>
        <Part name={props.value[0].name} count={props.value[0].count} />
        <Part name={props.value[1].name} count={props.value[1].count} />
        <Part name={props.value[2].name} count={props.value[2].count} />
    </div>
  )
}

export default Content