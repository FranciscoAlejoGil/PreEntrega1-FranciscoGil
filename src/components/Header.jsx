import NavBar from "./NavBar.jsx";
import CartWidget from "./CartWidget.jsx";

function Header() {

    return (
    <div className=" flex justify-between md:p-2 lg:p-4 font-bold bg-gradient-to-l from-zinc-900 to-zinc-500 shadow-md ">
        <CartWidget/>
        <h1 className="md:text-2xl lg:text-3xl p-2 text-white">
            ZERO CMPNY
        </h1>
        <NavBar/>
    </div>
    )
}

export default Header
