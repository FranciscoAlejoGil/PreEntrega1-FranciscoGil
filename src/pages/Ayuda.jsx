function Ayuda () {
    return (
        <div className="p-5 h-full">
            <h1 className="text-4xl font-bold text-zinc-200 p-5 text-center">AYUDA</h1>
            <h3 className="text-2xl font-semibold text-zinc-200 p-4">Coloque lo siguientes datos:</h3>
            <div className=" p-5 grid grid-rows-2 border-zinc-900 rounded-md bg-zinc-900 w-1/4">
                <input type="text" placeholder="Nombre" className="ml-5 p-2 w-56 h-10 mb-5 rounded"/>
                <input type="mail" placeholder="Mail" className="ml-5 p-2 w-56 rounded h-10"/>
                <input type="text" placeholder="Teléfono" className="ml-5 p-2 w-56 rounded h-10"/>
                <button className="ml-5 text-left w-56 mt-5 bg-zinc-700 text-zinc-200 border border-zinc-700 hover:bg-zinc-400 hover:text-zinc-950 hover:border-zinc-400 transition duration-300 p-3 rounded font-bold">GUARDAR</button>
            </div>
            <h4 className="text-2xl font-semibold text-zinc-200 p-4 text-center">Nos estaremos contactando con usted via mail o por teléfono.</h4>
        </div>
    )
}
export default Ayuda