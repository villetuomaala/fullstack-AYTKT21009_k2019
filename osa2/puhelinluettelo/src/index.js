import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'  // highlight-line

const persons = [{ name: 'Arto Hellas' }]

ReactDOM.render(
  <App persons={persons}/>,
  document.getElementById('root')
)