import React from 'react'

const Unorderedlist = ({ elems }) => {
  return (
    <ul>
      { elems.map(e => <li key={e.iso639_1}>{e.name}</li>) }
    </ul>
  )
}

export default Unorderedlist