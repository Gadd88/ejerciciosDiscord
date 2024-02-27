import { useContext } from "react"
import { ProductosContext } from "../context/ProductosContext"

const Carrito = () => {

    const { productosCarrito, eliminarDelCarrito, agregarAlCarrito } = useContext(ProductosContext)
    
    return (
        <div className="container border rounded-md w-1/2 h-96">
            <h1>Carrito</h1>
            <table className="flex flex-col items-stretch w-full">
                <thead>
                    <tr className="flex justify-between w-full p-5 border">
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Boton</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-5 p-3">
                    {
                        productosCarrito.map(producto => (
                            <tr 
                                className="flex justify-center items-center"
                                key={producto.id}>
                                    <td className="w-1/4">
                                        {producto.title}
                                    </td>
                                    <td className="w-1/4 self-center text-end">
                                        ${producto.price}
                                    </td>
                                    <td className="w-1/4 self-center text-end">
                                        {producto.cantidad}
                                    </td>
                                    <td className="w-1/4 self-center flex justify-end gap-2">
                                        <button
                                            onClick={()=>agregarAlCarrito(producto)} 
                                            className="rounded-md w-1/4 bg-blue-600 text-white font-semibold">+</button>
                                        <button
                                            onClick={()=>eliminarDelCarrito(producto.id)} 
                                            className="rounded-md w-1/4 bg-red-600 text-white font-semibold">-</button>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
  )
}

export default Carrito