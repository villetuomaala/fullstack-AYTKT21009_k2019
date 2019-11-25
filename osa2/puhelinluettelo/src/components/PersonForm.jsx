import React from 'react'

const PersonForm = ({inputs, submit}) => {

  const inputRows = () => inputs.map(input => 
    <div key={input.id}>{input.text}: <input value={input.value} onChange={input.handler}/></div>
  )

  return (
    <form onSubmit={submit}>
      {inputRows()}
      <div><button type="submit" >add</button></div>
    </form>
  )
}

export default PersonForm