import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()
//necessario importar no index.js

export const titleColorReducer = (state, action) => {
    switch(action.type){
        case "RED":
            return{...state, color: "red"}
        case "BLUE":
            return{...state, color: "blue"}
        default:
            return state

    }
}

export const TitleColorContextProvider = ({children})=>{

    //titleColorReducer vai ser a função que altera o valor inicial
    const [state, dispatch] = useReducer(titleColorReducer, {color : "purple"})

    console.log("Title color: " , state)
    
    return <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
            </TitleColorContext.Provider>

}