import React from 'react'
import Person from './Person'
 
const Persons = ({ persons, deleteHandler }) => {
  const rows = () => persons.map(person =>
    <Person
      key={person.id}
      person={person}
      deleteHandler={deleteHandler}
    />
  )
  return <div>{rows()}</div>
}

export default Persons