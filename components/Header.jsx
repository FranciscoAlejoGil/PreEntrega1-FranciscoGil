import NavBar from "./NavBar.jsx";
import CartWidget from "./CartWidget.jsx";

function Header() {

    return (
    <div className=" flex justify-between p-4 font-bold bg-zinc-600 shadow-md">
        <CartWidget/>
        <h1 className="text-3xl p-2 text-white">
            Zer0 Cmpany
        </h1>
        <NavBar/>
    </div>
    )
}

export default Header
