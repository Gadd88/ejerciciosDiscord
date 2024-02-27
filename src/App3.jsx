import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./ejercicioRouter/pages/Home"
import FormView from "./ejercicioRouter/pages/FormView"
import Nosotros from "./ejercicioRouter/pages/Nosotros"
import Contacto from "./ejercicioRouter/pages/Contacto"
import Navbar from "./ejercicioRouter/components/navbar/Navbar"
import Footer from "./ejercicioRouter/components/footer/Footer"
// import Footer from "./components/footer/Footer"
// import Header from "./components/header/Header"
// import Main from "./components/main/Main"
// import Nosotros from "./components/nosotros/Nosotros"
// import Contacto from "./components/contacto/Contacto"

function App3() {
  
  const telefonos = [
    '321321321321',
    '654654654654',
    '654321546835',
  ]

  return (
    <BrowserRouter>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '250px 1fr',
        gridTemplateRows: '1fr 100px',
        height: '100dvh',
        width: '100%'
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<FormView/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contacto" element={<Contacto datos={telefonos}/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App3
