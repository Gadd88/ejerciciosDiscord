import Carrito from "./ejercicioCarrito/components/Carrito"
import ListaProductos from "./ejercicioCarrito/components/ListaProductos"
import ProductosContextProvider from "./ejercicioCarrito/context/ProductosContext"

const App = () => {
  
  return (
    <ProductosContextProvider>
      <div className="container w-full m-auto">
        <div className="flex justify-center items-start">
          <ListaProductos/>
          <Carrito />
        </div>
      </div>
    </ProductosContextProvider>
    )
}

export default App