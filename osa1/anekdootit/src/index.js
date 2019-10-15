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
  const [mostVoted, setMostVoted] = useState(0);

  const handleVoting = () => {
    votes[selected] += 1;
    setMostVoted(getMostVoted());
  }

  const getMostVoted = () => {
    let indx = 0;
    let maxValue = 0;
    let maxIndx = 0;
    for (const i of votes) {
      if (i > maxValue) {
        maxIndx = indx;
        maxValue = i;
      }
      indx++;
    }
    return maxIndx;
  }

  return (
    <div>
        <h2>Anecdote of the day</h2>
        <Button value="next" handleClick={() => setSelected(Math.floor((Math.random() * anecdotes.length) + 0))} />
        <Button value="vote this" handleClick={() => (handleVoting())} />
        <br/>
        {props.anecdotes.find(o => o.id === selected).value}
        <h2>Anecdote with most votes</h2>
        {props.anecdotes.find(o => o.id === mostVoted).value}
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

const votes = [0,0,0,0,0,0];

ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes}/>,
  document.getElementById('root')
)
