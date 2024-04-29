import { Link } from "react-router-dom"

function CardProducts ({ product }) {

    return (
        <div className="p-3 rounded-md shadow-lg shadow-black user-card hover:scale-110 transition duration-500 hover:bg-gradient-to-r from-zinc-600 to-zinc-400 group bg-zinc-600 gap-5">
            <div>
                <img className=" p-3 rounded" src={product.imagen}/>
            </div>
            <ul className="text-white">
                <li><h2 className="my-2 font-bold text-lg ">{product.nombre}</h2></li>
                <li className="my-2">Precio: ${product.precio}</li>
                <li className="hover:underline w-1/4 italic"><Link to={`/products/${product.id}`}>Ver mas</Link></li>
            </ul>
        </div>
        
    )
}

export default CardProducts
