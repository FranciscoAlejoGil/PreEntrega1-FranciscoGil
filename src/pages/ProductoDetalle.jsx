import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Contador from "../components/Contador";

function ProductoDetalle() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('../data.json').then((res) => {
        return res.json();
        })
        .then((jsonData) => {
            const { tienda: { products } } = jsonData;
            const product = products.find((product) => product.id === parseInt(id));
    
            setProduct(product);
        });
    }, [id]);

    return (
        <div className="p-3 grid grid-cols-2 gap-40 bg-zinc-800">
            <div>
            <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-zinc-200 md:text-5xl lg:text-6xl">{product.nombre}</h2>
            <p className="mb-4 font-extrabold leading-none tracking-tight text-zinc-200 md:text-3xl lg:text-4xl">${product.precio}</p>
            <p className="g-4 mb-4 font-bold leading-none tracking-tight text-zinc-200 md:text-md lg:text-xl">{product.descripcion}</p>
            <Contador/>
            </div>  
            <img className="s:max-w-xxs md:max-w-xs lg:max-w-s" src={product.imagen} alt={product.nombre} />
        </div>
    )
}


export default ProductoDetalle