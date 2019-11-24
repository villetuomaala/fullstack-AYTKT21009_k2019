import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'  // highlight-line

const persons = [
  { name: 'Ville Tuomaala', number: '050 438 0847', display: true},
  { name: 'Ada Lovelace', number: '39-44-5323523', display: true },
  { name: 'Dan Abramov', number: '12-43-234345', display: true },
  { name: 'Mary Poppendieck', number: '39-23-6423122', display: true }]

ReactDOM.render(
  <App persons={persons}/>,
  document.getElementById('root')
)