import CardProducts from "./CardProducts" 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsbyCategory } from "../utils";

function ItemListContainer () {

    const [products, setProduct] = useState([]);
    const params = useParams();

    useEffect(() => {

        if(params.categoria) {
            getProductsbyCategory(params.categoria)
            .then((resultado)=>{
                setProduct(resultado)
            })

        } else {
            getProducts()
            .then((resultado)=>{
                setProduct(resultado)
            })
        }
    }, [params.categoria])


    return (
        <div className="mx-auto xs:p-5 sm:p-5 lg:max-w-7xl lg:p-8">
            <div className="grid xs:grid-cols-1 sm:grid-cols-4 sm:gap-3 lg:grid-cols-4 lg:gap-8">
            {products.map((product) => {
                return <CardProducts key={product.id} product={product} />
            })}
            </div>
        </div>  
    )
}

export default ItemListContainer