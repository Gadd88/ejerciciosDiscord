import {useContext} from 'react'
import { ProductosContext } from '../context/ProductosContext'

const Producto = ({producto}) => {

    const { agregarAlCarrito} = useContext(ProductosContext)

    const {id, image, title, description, price} = producto
    
    return (
        <div 
            className="border rounded-md p-5 flex flex-col items-stretch justify-center">
            <img src={image} alt="img" width={100} height={100} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <button
                onClick={()=>agregarAlCarrito(producto)} 
                className="rounded-md border-2 p-5 bg-blue-300 text-black font-semibold">Agregar</button>
        </div>
    )
}

export default Producto