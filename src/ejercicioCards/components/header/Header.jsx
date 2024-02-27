import ListaLinks from '../listaLinks/ListaLinks'
import './header.css'

function Header(){

    return(
        <header className="header">
            <nav className="navbar">
                <ListaLinks />
            </nav>
        </header>
    )
}

export default Header