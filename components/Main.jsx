import { Routes, Route} from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Productos from '../pages/Productos'
import Nosotros from '../pages/Nosotros'
import Ayuda from '../pages/Ayuda'
import ProductoDetalle from '../pages/ProductoDetalle'

function Main() {
    return (
        <main className="bg-slate-300">
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/productos' element={<Productos/>}/>
                <Route path='/products/:Id' element={<ProductoDetalle/>}></Route>
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/ayuda' element={<Ayuda/>}/>
            </Routes>
        </main>
    )
}

export default Main