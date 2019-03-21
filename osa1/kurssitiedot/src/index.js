import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
    {name: 'Reactin perusteet', count: 10}, 
    {name: 'Tiedonvälitys propseilla', count: 7},
    {name: 'Komponenttien tila', count: 14}
  ]

  return (
    <div>
      <Header value={course}/>
      <Content value={parts}/>
      <p>yhteensä {parts[0].count + parts[1].count + parts[2].count} tehtävää</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))