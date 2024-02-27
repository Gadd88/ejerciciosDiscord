import {useContext} from 'react'
import { ProductosContext } from '../context/ProductosContext'

const Producto = ({producto}) => {

    const {productosCarritos, setProductosCarrito} = useContext(ProductosContext)

    const {id, image, title, description, price} = producto
    const handleClick = (producto) => {
        setProductosCarrito([...productosCarritos, 
            producto])
        console.log(productosCarritos)
    }
    return (
        <li 
            id={id}
            className="border rounded-md p-5 flex flex-col items-stretch justify-center">
            <img src={image} alt="img" width={100} height={100} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <button
                onClick={()=>handleClick(producto)} 
                className="rounded-md border-2 p-5 bg-blue-300 text-black font-semibold">Agregar</button>
        </li>
    )
}

export default Producto