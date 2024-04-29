import { Link } from "react-router-dom"
function CartWidget(){

    return (
        <div className="gap-4 flex">
            <Link to={"/carrito"}>
            <img src="../carrito.png" alt="" className="p-4 invert brightness-0 hover:scale-125 transition"/>
            </Link>
        </div>
    )

}


export default CartWidget