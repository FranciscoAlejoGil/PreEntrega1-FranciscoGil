import useCart from "../hook/useCart"
import { createSale } from "../utils"
import Swal from "sweetalert2"


function Carrito () {

    const {carrito} = useCart()

    const handleClick = (e) => {
        e.preventDefault()
        createSale()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Gracias por su compra',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className="justify-center p-5 h-full">
            <div>
            {carrito.map((item) => {
            return (
                <div className=" p-6 grid grid-cols-2 gap-40 bg-zinc-800">
            <div>
                <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-zinc-200 md:text-5xl lg:text-6xl">{item.nombre}</h2>
                <p className="mb-4 font-extrabold leading-none tracking-tight text-zinc-200 md:text-3xl lg:text-4xl">${item.precio}</p>
            </div>  
            <img className="w-1/2" src={item.imagen} alt={item.nombre} />
        </div>
            )
            })}
            </div>
            <button className="bg-zinc-700 text-zinc-200 border border-zinc-700 hover:bg-zinc-400 hover:text-zinc-950 hover:border-zinc-400 transition duration-300 p-3 rounded font-bold" onClick={handleClick}>COMPRAR</button>
        </div>
    )
}


export default Carrito