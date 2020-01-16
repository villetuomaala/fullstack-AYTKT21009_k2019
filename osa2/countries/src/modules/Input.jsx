import React from 'react'

const Input = ({ type, name, onChange }) => {
  return (
    <input type={type} name={name} onChange={onChange} />
  )
}

export default Input