import { useContext, useEffect, useState } from "react"
import Producto from "./Producto"
import { ProductosContext } from "../context/ProductosContext"

const ListaProductos = () => {
    
    const { productos} = useContext(ProductosContext)
    
  return (
    <div className="w-1/2">
        <h1>Lista de Productos</h1>
        <section className="container">
            <ul>
                {
                    productos.map(producto => (
                        <Producto 
                            key={producto.id}
                            producto={producto} />
                    ))
                }
            </ul>
        </section>    
    </div>
  )
}

export default ListaProductos