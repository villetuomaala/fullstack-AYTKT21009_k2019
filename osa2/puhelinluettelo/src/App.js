import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [ persons, setPersons] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterPersons = (event) => {
    const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setPersons(persons.map(p => !filteredPersons.includes(p) ? { ...p, display: false } : { ...p, display: true }))
  }

  const addNewPerson = (event) => {
    event.preventDefault()

    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} is already in phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter: <input onChange={handleFilterPersons}/></div>
      <br />
      <h2>Add new person</h2>
      <form onSubmit={addNewPerson}>
        <div>name: <input value={newName} onChange={handleNameInputChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberInputChange}/></div>
        <div><button type="submit" >add</button></div>
      </form>
      <h2>Numbers</h2>
      {rows()}
    </div>
  )

}

export default App