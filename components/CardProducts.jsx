import { Link } from "react-router-dom"

function CardProducts ({ product }) {

    

    return (
        <div className="p-3 transition rounded-md shadow-md user-card hover:scale-105 hover:bg-zinc-100 group bg-zinc-300 gap-4">
            <div className="">
                <img className=" p-4 rounded" src={product.imagen}/>
            </div>
            <ul>
                <li><h2 className="my-2 text-black">{product.nombre}</h2></li>
                <li className="my-2">Precio: ${product.precio}</li>
                <li className="hover:underline"><Link to={`/products/${product.id}`}>Ver mas</Link></li>
            </ul>
        </div>
        
    )
}

export default CardProducts
