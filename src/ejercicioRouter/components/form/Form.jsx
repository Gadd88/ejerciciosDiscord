import React from 'react'
import InputField from '../inputField/InputField'

const FormUser = () => {
  return (
    <form>
        <InputField label='Nombre' type='text' />
        <InputField label='Apellido' type='text'/>
        <InputField label='Email' type='email' />
        <InputField label='Teléfono' type='number' />
    </form>
  )
}

export default FormUser