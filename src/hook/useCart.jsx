import { useContext } from "react"
import { contexto } from "../context";

const useCart = () => {
    const valorActual = useContext(contexto)
    return valorActual
}

export default useCart;