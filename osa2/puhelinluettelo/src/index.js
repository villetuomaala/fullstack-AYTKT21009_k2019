import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'  // highlight-line

const persons = [{ name: 'Ville Tuomaala', number: '050 438 0847' }]

ReactDOM.render(
  <App persons={persons}/>,
  document.getElementById('root')
)