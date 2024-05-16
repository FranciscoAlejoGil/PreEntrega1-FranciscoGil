import { Link } from "react-router-dom"

function ItemDetailContainer ({ product }) {
    return (
        <div className="p-3 lg:w-auto lg:h-auto md:w-44 md:h-auto rounded-md shadow-lg group shadow-black user-card md:hover:scale-105 hover:scale-110 transition duration-500 hover:bg-gradient-to-r from-zinc-600 to-zinc-400 group bg-zinc-600 gap-5">
            <div>
                <img className="p-3 rounded" src={product.imagen}/>
            </div>
            <ul className="text-zinc-500 group-hover:text-zinc-200 transition-colors duration-500">
                <li><h2 className="my-2 font-bold lg:text-xl md:text-sm ">{product.nombre}</h2></li>
                <li className="my-2">${product.precio}</li>
                <li className="hover:underline w-1/4 italic"><Link to={`/products/${product.id}`}>Ver mas</Link></li>
            </ul>
        </div>
        
    )
}

export default ItemDetailContainer