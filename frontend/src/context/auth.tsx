import { createContext, useState } from "react"
import { ISignInDto, authService } from "../services/services.auth"

interface AuthContextType {
    token : string | null
    email : string | null
    login : Function
    logout : Function
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider ({children} : any) {
    const [token, setToken] = useState<string | null>(authService.getToken())
    const [email, setEmail] = useState<string | null>(null)

    const login = async ( data : ISignInDto) => {
        await authService.autenticaUsuario(data).then(async resp => {
            switch (resp.status) {
                case 201:
                    const respToken = resp.data.access_token
                    if (respToken) {
                        authService.setToken (respToken)
                        setToken (respToken)

                        const respEmail = authService.decodificarToken(respToken)?.email
                        if (respEmail) {
                            setEmail (respEmail)
                        }
                    }
                    break;
                case 401:
                    setToken (null)
                    throw new Error("Login ou Senha inválidos!")
                default:
                    throw new Error("Erro na validação do usuário!");
            }
        })
    }

    const logout = () => {
        authService.removeToken()
        setToken(null)
    } 

    return (
        <AuthContext.Provider value={{token, login, logout, email}}>{children}</AuthContext.Provider>
    )

}