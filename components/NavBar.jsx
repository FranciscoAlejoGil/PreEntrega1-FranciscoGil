import { Link } from "react-router-dom"

function NavBar(){

    return(
        <nav className="p-3 flex hidden md:flex md:gap-4">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/productos"}>Productos</Link>
            <Link to={"/nosotros"}>Nosotros</Link>
            <Link to={"/ayuda"}>Ayuda</Link>
        </nav>
    )
}

export default NavBar