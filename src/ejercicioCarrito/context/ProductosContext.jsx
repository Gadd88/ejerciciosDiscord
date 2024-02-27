import { createContext, useEffect, useState } from "react";

export const ProductosContext = createContext()

const ProductosContextProvider = ({children}) => {
    const [productosCarrito, setProductosCarrito] = useState([])
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
        const nuevoCarrito = productosCarrito.filter(producto => producto.id != id)
        setProductosCarrito(nuevoCarrito)
    }
    const agregarAlCarrito = (producto) => {
        const existeItem = productosCarrito.find(item => item.id === producto.id)
        if(existeItem){
            setProductosCarrito((prev) => prev.map((item) => (
                item.id === producto.id 
                ? {...item, cantidad: item.cantidad + 1}
                : item
                )))
        }else{
            setProductosCarrito([
                ...productosCarrito,
                {...producto, cantidad: 1}  
                ])
        }

    }

    return (
        <ProductosContext.Provider
            value={{
                productosCarrito,
                agregarAlCarrito,
                productos,
                eliminarDelCarrito
            }}>
            {children}
        </ProductosContext.Provider>
    )
}

export default ProductosContextProvider