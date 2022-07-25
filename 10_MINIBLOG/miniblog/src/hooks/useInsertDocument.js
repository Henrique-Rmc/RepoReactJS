import { useState, useEffect, useReducer } from "react";
import {db} from '../firebase/firestore'
import {collection, addDoc, Timestamp} from 'firebase/firestore'


const initialState ={
    loading : null,
    error: null
}
//Com a ajuda do reducer podemos fornecer ações a partir do tipo de ação que é passado para ele.
//poderimamos ter criado um componente para inserir o reducer***
const insertReducer = (state, action) => {

    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "INSERTED_DOC":
            return {loading:false, error: null}
        case "ERROR":
            return{loading: false, error: action.payload}
        default:
            return state
    }

}

//a partir daqui temos a função de inserir o documento.
//exportamos o useInsertDocument que vai receber como parametro a coleção que é usada no firebase.

export const useInsertDocument = (docCollection) => {

    const [response, dispatch ] = useReducer(insertReducer, initialState)

    //lidando com memory leak
    const [cancelled, setCancelled] = useState(false)
    const checkCancellBeforeDispatch = (action) =>{
        if(!cancelled){
            dispatch(action)
        }
    }
//para inserir um documento usamos o checkBeforeDispatch para definit os estados de loading e error.
    const insertDocument = async(document) => {
        checkCancellBeforeDispatch({
            type: "LOADING",
        })
//uma vez que não está cancelado, tentamos inserir o documento recebido pelo InsertDocument

        try {
            const newDocument = {...document, createdAt: Timestamp.now()}

            const insertedDocument = await addDoc(
                collection(db, docCollection), 
                newDocument
                )
            checkCancellBeforeDispatch({
                type: "INSERTED_DOC",
                payload: insertedDocument,
            })

        }catch(error){
            checkCancellBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            })
        }
    }

    useEffect(()=>{
        return() => setCancelled(true)
    }, [])
    //retorna a resposta para sempre estar em contato com ela e a função de inserir para usar quando necessario
    return {insertDocument, response}
}