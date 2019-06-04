import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.value}
        </button>
    )
}

const Header = (props) => {
    return (
        <h1>{props.value}</h1>
    )
}

const Statistics = (props)  => {
    return (
        <div>
            <span>{props.text}</span> <span>{props.value}</span>
        </div>
    )
}

const Table = (props) => {
    return (
        <table>
            {props.data.map(row => {
                return (
                    <tr>
                        <td>{row.text}</td>
                        <td>{row.value}</td>
                    </tr>
                )
            })}
        </table>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setAnswerValue = (valueType) => {
    switch(valueType) {
        case 'good':
            setGood(good+1)
            break;
        case 'neutral':
            setNeutral(neutral+1)
            break;
        case 'bad':
            setBad(bad+1)
            break;
        default:
            throw "Not supported"
      }
  }

const tableData = [
    {text: 'hyvä', value: good},
    {text: 'neutraali', value: neutral},
    {text: 'huono', value: bad},
    {text: 'yhteensä', value: good-bad},
    {text: 'keskiarvo', value: (good-bad)/(good+neutral+bad)},
    {text: 'positiivisia', value: (good/(good+neutral+bad)*100).toString()+'%'}
]

  return (
    <div>
      <Header value="anna palautetta"/>
      <Button handleClick={() => (setAnswerValue('good'))} value="hyvä"/>
      <Button handleClick={() => (setAnswerValue('neutral'))} value="neutraali"/>
      <Button handleClick={() => (setAnswerValue('bad'))} value="huono"/>

      <Header value="statistiikka"/>
      { good+neutral+bad !== 0 ?
        <div>
            <Table data={tableData} />
        </div>
        :
        <div>Ei yhtään palautetta annettu</div>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)