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
        <div>
            <CardProducts products={products} />            
        </div>  
    )
}

export default ItemListContainer