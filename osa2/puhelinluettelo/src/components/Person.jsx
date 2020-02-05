import React from 'react'

const Person = ({ person, deleteHandler }) => 
  person.display ? 
    <div>{person.name} {person.number} <button onClick={() => deleteHandler(person.id, person.name)}>Delete</button></div>
  : null

export default Person