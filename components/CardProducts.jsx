import { Link } from "react-router-dom"

function CardProducts ({ product }) {

    const {title, id, image, price} = product

    return (
        <div className="p-3 transition rounded-md shadow-md user-card hover:scale-105 hover:bg-slate-100 group bg-slate-200 gap-4">
            <div className="">
                <img className=" p-4 rounded" src={image}/>
            </div>
            <ul>
                <li><h2 className="my-2 text-black">{title}</h2></li>
                <li className="my-2">Precio: ${price}</li>
                <li><Link to={`/products/${id}`}>Ver mas</Link></li>
            </ul>
        </div>
        
    )
}

export default CardProducts
