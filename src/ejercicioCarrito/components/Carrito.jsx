import { useContext } from "react"
import Producto from "./Producto"
import { ProductosContext } from "../context/ProductosContext"

const Carrito = () => {

    const { productosCarritos, eliminarDelCarrito } = useContext(ProductosContext)
    
    return (
        <div className="container border rounded-md w-1/2 h-96">
            <h1>Carrito</h1>
            <ul>
                {
                    productosCarritos?.map(producto => (
                        <li key={producto.id}
                            className="flex ">
                            <Producto key={producto.id} producto={producto} />
                            <p>Cantidad: {producto.count}</p>
                            <button
                                onClick={()=>eliminarDelCarrito(producto.id)} 
                                className="rounded-md border-2 p-5 bg-red-600 text-black font-semibold">Eliminar</button>
                        </li>
                    ))
                }
            </ul>
        </div>
  )
}

export default Carrito