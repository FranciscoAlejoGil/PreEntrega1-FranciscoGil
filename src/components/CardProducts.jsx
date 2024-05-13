import CardProducto from "./CardProducto.jsx"

function CardProducts ({ products }) {
    return (
        <div className="mx-auto xs:p-5 sm:p-5 lg:max-w-7xl lg:p-8">
            <div className="grid xs:grid-cols-1 sm:grid-cols-4 sm:gap-3 lg:grid-cols-4 lg:gap-8">
                {products.map((product) => {
                    return <CardProducto key={product.id} product={product} />
                    }) 
                }
            </div>
        </div>
    )
}

export default CardProducts
