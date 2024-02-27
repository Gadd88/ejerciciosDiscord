import { createContext, useEffect, useState } from "react";

export const ProductosContext = createContext()

const ProductosContextProvider = ({children}) => {
    const [productosCarritos, setProductosCarrito] = useState([])
    const [productos, setProductos] = useState([])
    
    useEffect(()=>{
        //GET
        const consultarApi = async () =>{
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            setProductos(result)
        }
        consultarApi()
    },[])

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = productosCarritos.filter(producto => producto.id != id)
        setProductosCarrito(nuevoCarrito)
    }

    return (
        <ProductosContext.Provider
            value={{
                productosCarritos,
                setProductosCarrito,
                productos,
                eliminarDelCarrito
            }}>
            {children}
        </ProductosContext.Provider>
    )
}

export default ProductosContextProvider