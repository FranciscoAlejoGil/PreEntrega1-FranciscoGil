import useCart from "../hook/useCart"

function Carrito () {

    const {carrito} = useCart()
    console.log(carrito);

    return (
        <div className="flex justify-center p-5 h-full">
            <h1 className="text-3xl font-bold text-white">Aqui se veran reflejados los productos que usted sume al carrito</h1>
        </div>
    )
}


export default Carrito