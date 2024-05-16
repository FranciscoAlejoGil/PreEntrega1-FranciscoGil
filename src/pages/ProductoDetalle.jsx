import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Producto from "../components/Producto";
import { getProductDetail } from "../utils";

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
            <Producto product={product}/>
        </div>
    )
}


export default ProductoDetalle