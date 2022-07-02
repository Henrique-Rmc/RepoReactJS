import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()
//necessario importar no index.js
export const TitleColorContextProvider = ({children})=>{
    
    return <TitleColorContext.Provider>{children}</TitleColorContext.Provider>

}