import CartWidget from "./CartWidget.jsx";

function NavBar() {

    return (
    <header className=" flex justify-between p-4 font-bold bg-slate-300 shadow-md">
        <CartWidget />
        <h1 className="text-3xl p-2">
            Zer0 Cmpany
        </h1>
        <nav className="p-3 flex hidden md:flex md:gap-4">
            <a href="#">Productos</a>
            <a href="#">Ofertas</a>
            <a href="#">Nosotros</a>
            <a href="#">Ayuda</a>
        </nav>
    </header>
    )
}

export default NavBar;
