import React from 'react'
import Telefonos from '../components/tel/Telefonos'


const Contacto = ({datos, datos2}) => {

  return (
    <div>
      <h1>
        Contactanos
      </h1>
      <div>
        <h3>Nuestros telefonos habilitados</h3>
        <ul>
          {
            datos.map((item, idx) => (
              <Telefonos item={item} key={idx} />
            ))
          }
        </ul>
        
      </div>
    </div>
  )
}

export default Contacto