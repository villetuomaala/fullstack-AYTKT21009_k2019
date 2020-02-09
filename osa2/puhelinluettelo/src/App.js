import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/person'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ message, setMessage ] = useState({})

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

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

  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Delete person ${name}?`)) {
      personService.remove(id)
        .then(deletedPerson => {
          setPersons(persons.filter(p => p.id !== id))
          displayMessage(`Person ${name} deleted`, 'success')
        })
    }
  }

  const displayMessage = (msg, msgType) => {
    setMessage({ content: msg, type: msgType })
    setTimeout(() => setMessage({}), 5000)
  }

  const inputs = [
    { 
      text: 'name',
      id: 1,
      value: newName,
      handler: handleNameInputChange 
    },
    { 
      text: 'number',
      id: 2,
      value: newNumber,
      handler: handleNumberInputChange 
    }
  ]

  const addNewPerson = (event) => {
    event.preventDefault()

    const filteredPersons = persons.filter(p => p.name === newName)
    
    if (filteredPersons.length > 0 && window.confirm(`This phonebook already includes ${newName}. Replace the person with new number?`)) {
      filteredPersons.map(p => 
        personService.update(p.id, { "id": p.id, "name": newName, "number": newNumber, "display": true })
          .then(updatedPerson => {
            setPersons(persons.filter(pe => pe.id !== p.id).concat(updatedPerson))
            setNewName('')
            setNewNumber('')
            displayMessage(`Person ${updatedPerson.name} updated`, 'success')
          })
      )
    } else {
      personService.create({ name: newName, number: newNumber, display: true })
        .then(person => {
          setPersons(persons.concat(person))
          setNewName('')
          setNewNumber('')

          displayMessage(`Added new person ${person.name}`, 'success')
        })
    }
  }

  return (
    <div>
      <Notification message={message.content} type={message.type} />
      <h2>Phonebook</h2>
      <Filter handler={handleFilterPersons} />
      <br />
      <h2>Add new person</h2>
      <PersonForm inputs={inputs} submit={addNewPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} deleteHandler={handleDeletePerson}/>
    </div>
  )

}

export default App