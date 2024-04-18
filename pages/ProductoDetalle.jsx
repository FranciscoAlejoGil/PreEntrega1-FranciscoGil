import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function ProductoDetalle() {

    const {Id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${Id}`)
            .then(res => {
                return res.json()
            })
            .then((res) => {
                setProduct(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="p-3 grid grid-cols-2 gap-40 bg-slate-300">
            <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{product.title}</h2>
            <p className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">${product.price}</p>
            <p className="g-4 mb-4 font-bold leading-none tracking-tight text-gray-900 md:text-md lg:text-xl">{product.description}</p>
            </div>
            <img className="s:max-w-xxs md:max-w-xs lg:max-w-s" src={product.image} alt={product.title} />
        </div>
    )
}


export default ProductoDetalle