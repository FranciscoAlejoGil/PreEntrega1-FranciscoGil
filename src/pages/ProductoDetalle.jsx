import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProductDetail } from "../utils";
import ItemDetail from "../components/ItemDetail";

function ProductoDetalle() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductDetail(id)
        .then((resultado) => {
            setProduct(resultado);
        })
    }, []);

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}


export default ProductoDetalle