import { useEffect, useState } from "react"
import ListaCards from "./ejercicioProfileCard/views/ListaCards"

const App = () => {

  const [users, setUsers] = useState([])
  const consultaApi = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10')
    const result = await response.json()
    setUsers(result.results)
  }
  useEffect(() => {
    consultaApi()
  }, [])
  
  return (
    <div className="container w-full m-auto">
      <ListaCards users={users}/>
    </div>
  )
}

export default App