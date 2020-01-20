import React from 'react'

const Input = ({ type, name, onChange, onClick, value, data}) => {
  return (
    <input type={type} name={name} onChange={onChange} onClick={onClick} value={value} data={data} />
  )
}

export default Input