import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Api from './pages/api';
import Props from './pages/props';
import Eventos from './pages/eventos';
import Componentes from './pages/componentes';
import Renderizacao from './pages/renderizacao';
import VariavelEstado from './pages/variavelEstado';



function WebsiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/eventos' element={<Eventos />} />
                <Route path='/componentes' element={<Componentes />} />
                <Route path='/props' element={<Props />} />
                <Route path='/variavelEstado' element={<VariavelEstado />} />
                <Route path='/renderizacao' element={<Renderizacao />} />
                <Route path='/api' element={<Api />} />
            </Routes>
        </BrowserRouter>
    )
}

export default WebsiteRoutes;