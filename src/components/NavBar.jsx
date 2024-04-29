import { Link } from "react-router-dom"
import DropdownBoton from "./DropdownBoton"

function NavBar(){

    return(
        <nav className="p-3 flex sm:hidden md:flex md:gap-4 text-white">
            <Link className="hover:scale-125 transition" to={"/"}>Inicio</Link>
            <DropdownBoton></DropdownBoton>
            <Link className="hover:scale-125 transition" to={"/nosotros"}>Nosotros</Link>
            <Link className="hover:scale-125 transition" to={"/ayuda"}>Ayuda</Link>
        </nav>
    )
}

export default NavBar