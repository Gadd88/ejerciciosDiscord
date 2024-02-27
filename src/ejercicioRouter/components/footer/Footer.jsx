import React from 'react'

const Footer = () => {
  return (
    <div style={{
        gridColumn: '2',
        width: '100%',
        textAlign: 'center'
    }}>
        Copyright &copy; {new Date().getFullYear()}
    </div>
  )
}

export default Footer