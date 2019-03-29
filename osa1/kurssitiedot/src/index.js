import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
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
  }

  return (
    <div>
      <Header value={course.name}/>
      <Content value={course.parts}/>
      <Total value={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))