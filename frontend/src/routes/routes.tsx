import { Route, Routes } from "react-router-dom"
import LoginForm from "../pages/login"

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" Component={LoginForm}></Route>
        </Routes>
    )
}