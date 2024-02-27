import React from 'react'
import delIcon from '../../../assets/icons/delete.svg'

const Telefonos = ({item}) => {
  return (
    <li>
        {item}
        <button style={{
            backgroundColor: '#fff',
            width:'20px',
            height:'20px',
            display: 'flex',
            placeContent: 'center',
        }}>
            <img
                style={{
                    width: '20px',
                    height: '100%',
                    objectFit: 'cover'
                }} 
                src={delIcon} alt="" />
        </button>
        <button>Editar</button>
    </li>
  )
}

export default Telefonos