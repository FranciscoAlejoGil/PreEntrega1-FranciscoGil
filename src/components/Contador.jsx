import { useState } from "react"
import { Plus, Minus } from "lucide-react"

function Contador(props) {

    const [numero, setNumero] = useState(0)
    const incrementar = () => {
        setNumero(numero + 1)
    }
    const decrementar = () => {
        setNumero(numero - 1)
    }
    const confirmar = () => {
        props.handleConfirm(numero)
    }
    return (
        <div className="gap-4">
            <div className=" flex items-center gap-2 mt-8">
                <button onClick={incrementar} className="p-1 text-zinc-200"><Plus/></button>
                <p className="text-zinc-200">{numero}</p>
                {numero > 0 && <button onClick={decrementar} className="p-1 text-zinc-200"><Minus/></button>}
            </div>
            <button className="bg-zinc-700 text-zinc-200 border border-zinc-700 hover:bg-zinc-400 hover:text-zinc-950 hover:border-zinc-400 transition duration-300 p-3 rounded font-bold mt-8" onClick={confirmar}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default Contador