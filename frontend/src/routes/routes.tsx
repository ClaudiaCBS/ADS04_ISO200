import { Route, Routes } from "react-router-dom"
import LoginForm from "../pages/login"
import FormularioUsuario from "../pages/formulario-usuario"
import CadastraSala from "../pages/cadastra-sala"
import Home from "../pages/home"
import VisualizaSala from "../pages/visualiza-sala"
import { PrivateRoute } from "./private-routes"

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/home" element={<PrivateRoute page={Home} />  }></Route>
            <Route path="/form-user" element={<PrivateRoute page={FormularioUsuario} /> }></Route>
            <Route path="/cadastra-sala" element={<PrivateRoute page={CadastraSala} /> }></Route>
            <Route path="/lista-reserva" element={<PrivateRoute page={VisualizaSala} /> }></Route>
            <Route path="/*" element={<LoginForm/>}></Route>
        </Routes>
    )
}