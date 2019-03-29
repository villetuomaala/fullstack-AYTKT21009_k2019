import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header value={course}/>
      <Content value={parts}/>
      <Total value={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))