import React from 'react'

const CardLine = ({children}) => {
  return (
    <p className='bg-slate-800 text-sm rounded-md p-2 text-center text-white font-semibold w-full'>
        {children}
    </p>
  )
}

export default CardLine