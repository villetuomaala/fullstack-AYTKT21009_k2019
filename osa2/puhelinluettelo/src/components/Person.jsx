import React from 'react'

const Person = ({ person }) => 
  person.display ? <div>{person.name} {person.number}</div> : null


export default Person