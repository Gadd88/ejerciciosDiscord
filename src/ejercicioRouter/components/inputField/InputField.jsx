import React from 'react'

const estilo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '10px',
    borderRadius: '10px'
}
const InputField = ({label, type}) => {
  return (
    <div style={estilo}>
        <label htmlFor={label}>{label}</label>
        <input type={type} name={label}/>
    </div>
  )
}

export default InputField