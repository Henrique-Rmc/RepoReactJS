import { useContext, createContext } from "react";

//Todos as funções aqui servem apenas para receber contextos definidos por outras func

//AuthContext recebe o createContext 
const AuthContext = createContext()


//AuthoProvider é o provedor de contexto
export function AuthProvider({children, value}){
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthValue(){
    return useContext(AuthContext)
}