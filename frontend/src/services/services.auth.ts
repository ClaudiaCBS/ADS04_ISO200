import { jwtDecode } from "jwt-decode"
import { api } from "../variaveis"

export interface ISignInDto {
    email : string
    senha : string
}

const token = "tokenIso200"
export const authService = {
    async autenticaUsuario (signDto : ISignInDto){
        return await api.post("auth/login", signDto)
    },

    setToken (data : any) {
        localStorage.setItem(token, data)
    },

    getToken () {
        return localStorage.getItem(token)
    },

    removeToken () {
        localStorage.removeItem(token)
    },

    decodificarToken (token : string | null | undefined) {
        if (token) {
            const decode = jwtDecode(token)
            return decode
        } return null
    },
    
}