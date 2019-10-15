import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.value}
        </button>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
        <Button value="next" handleClick={() => setSelected(Math.floor((Math.random() * anecdotes.length) + 0))} />
        <Button value="vote this" handleClick={() => votes[selected] += 1} />
        <br/>
        {props.anecdotes.find(o => o.id === selected).value}
    </div>
  )
}

const anecdotes = [
  { id: 0,  value: 'If it hurts, do it more often' },
  { id: 1,  value: 'Adding manpower to a late software project makes it later!' },
  { id: 2, value: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' },
  { id: 3, value: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' },
  { id: 4, value: 'Premature optimization is the root of all evil.' },
  { id: 5, value: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' }
]

const votes = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
