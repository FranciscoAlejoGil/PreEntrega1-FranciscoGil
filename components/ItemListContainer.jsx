import CardProducts from "./CardProducts" 
import { useState, useEffect } from "react"

function ItemListContainer () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch("https://fakestoreapi.com/products")
        .then((res) =>{ 
            return res.json()
            })
        .then((res) =>{
            setProducts(res) 
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold  text-gray-900">Todos los Productos: </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 gap-y-8">
            {products.map((product) => {
                return <CardProducts key={product.id} product={product} />
            })}
            </div>
        </div>  
    )
}

export default ItemListContainer