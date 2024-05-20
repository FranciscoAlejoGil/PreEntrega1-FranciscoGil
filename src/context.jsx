import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

export function CarritoProvider(props) {

    const [cantCarrito, setcantCarrito] = useState(0)
    const [precioTotal, setprecioTotal] = useState(0)
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (cant, item) => {
        setcantCarrito(cantCarrito + cant);

        const copia = carrito.slice(0)
        const ProductoyCantidad = item
        ProductoyCantidad.cantidad = cant
        copia.push(ProductoyCantidad)

        setCarrito(copia)
    }

    const borrarDelCarrito = (id) => {}

    const vaciarCarrito = () => {
        setcantCarrito(0);
        setCarrito([]);
    }

    const valorActual = {
        carrito: carrito,
        cantCarrito: cantCarrito,
        precioTotal: precioTotal,
        agregarAlCarrito: agregarAlCarrito,
        borrarDelCarrito: borrarDelCarrito,
        vaciarCarrito: vaciarCarrito
    }

    return(
        <Provider value={valorActual}>
            {props.children}
        </Provider>
    )
}
