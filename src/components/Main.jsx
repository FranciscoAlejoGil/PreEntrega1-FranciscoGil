import { Routes, Route} from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Productos from '../pages/Productos'
import Nosotros from '../pages/Nosotros'
import Ayuda from '../pages/Ayuda'
import ProductoDetalle from '../pages/ProductoDetalle'
import Carrito from '../pages/Carrito'
import BotonUp from './BotonIg'
import CuatroCeroCuatro from '../pages/CuatroCeroCuatro'

function Main() {
    return (
        <main className="bg-zinc-800">
            <BotonUp/>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='/productos' element={<Productos/>}/>
                <Route path='/category/:categoria' element={<Productos/>} />
                <Route path='/products/:id' element={<ProductoDetalle/>}></Route>
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/ayuda' element={<Ayuda/>}/>
                <Route path='*' element={<CuatroCeroCuatro/>} />
            </Routes>
        </main>
    )
}

export default Main