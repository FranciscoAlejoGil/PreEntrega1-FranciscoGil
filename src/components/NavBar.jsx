import { Link } from "react-router-dom"
import DropdownBoton from "./DropdownBoton"

function NavBar(){

    return(
        <nav className="md:p-2 lg:p-3 group flex lg:gap-4 md:gap-3 text-white">
            <Link className="hover:scale-110 transition md:text-sm lg:text-lg" to={"/"}>Inicio</Link>
            <DropdownBoton></DropdownBoton>
            <Link className="hover:scale-110 transition md:text-sm lg:text-lg" to={"/nosotros"}>Nosotros</Link>
            <Link className="hover:scale-110 transition md:text-sm lg:text-lg" to={"/ayuda"}>Ayuda</Link>
        </nav>
    )
}

export default NavBar