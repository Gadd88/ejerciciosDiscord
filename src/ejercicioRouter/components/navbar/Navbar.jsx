import React from 'react'
import { Link } from 'react-router-dom'

const navbar = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '20px',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
}
const linkList = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '20px',
    height: '100%',
    width: '100%'
}
const Navbar = () => {
  return (
    <nav style={navbar}>
        <div>
            <img src="" alt="logo" />
        </div>
        <ul style={linkList}>
            <li>
                <Link to='/'>Inicio</Link>
            </li>
            <li>
                <Link to='form'>Formulario</Link>
            </li>
            <li>
                <Link to='nosotros'>Nosotros</Link>
            </li>
            <li>
                <Link to='contacto'>Contacto</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar