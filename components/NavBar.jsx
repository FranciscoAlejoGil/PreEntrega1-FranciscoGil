import { Link } from "react-router-dom"
import DropdownBoton from "./DropdownBoton"

function NavBar(){

    return(
        <nav className="p-3 flex hidden md:flex md:gap-4">
            <Link to={"/"}>Inicio</Link>
            <DropdownBoton></DropdownBoton>
            <Link to={"/nosotros"}>Nosotros</Link>
            <Link to={"/ayuda"}>Ayuda</Link>
        </nav>
    )
}

export default NavBar