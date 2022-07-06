//1- Criar Contexto
import {createContext, useState } from "react";


export const CounterContext = createContext()


//2-Criar Provider//Geralmente um nome que faça referencia ao Context que queremos prover
//childrens encapsulam elementos e permitem usa-lo dentro de outros componentes

export const CounterContextProvider = ({ children }) =>{

    const [counter, setCounter] = useState(5)

    return(
        <CounterContext.Provider value ={{counter, setCounter}}>
        {children}
        </CounterContext.Provider>
    )

}