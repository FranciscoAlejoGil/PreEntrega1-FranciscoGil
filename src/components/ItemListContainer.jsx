import CardProducts from "./CardProducts" 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ItemListContainer () {

    const [products, setProduct] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        fetch("/data.json")
            .then((res) => {
            return res.json();
        })
        .then((jsonData) => {
            const {
            tienda: { products },
            } = jsonData;

            if (categoryId) {
            const filteredProducts = products.filter(
            (product) =>
                product.categoria.toLowerCase() === categoryId.toLowerCase()
            );
            setProduct(filteredProducts);
            return;
        }
        setProduct(products);
        });
    }, [categoryId]);

    return (
        <div className="mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-8 xl:gap-8">
            {products.map((product) => {
                return <CardProducts key={product.id} product={product} />
            })}
            </div>
        </div>  
    )
}

export default ItemListContainer