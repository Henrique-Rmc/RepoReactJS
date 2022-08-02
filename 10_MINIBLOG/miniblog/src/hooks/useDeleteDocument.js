import { useState, useEffect, useReducer } from "react";
import {db} from '../firebase/config'
import {doc, deleteDoc} from 'firebase/firestore'


const initialState = {
    loading : null,
    error: null
}
//Com a ajuda do reducer podemos fornecer ações a partir do tipo de ação que é passado para ele.
//poderimamos ter criado um componente para inserir o reducer***
const deleteReducer = (state, action) => {

    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "DELETE_DOC":
            return {loading: false, error: null}
        case "ERROR":
            return{loading: false, error: action.payload}
        default:
            return state
    }

}

//a partir daqui temos a função de inserir o documento.
//exportamos o useInsertDocument que vai receber como parametro a coleção que é usada no firebase.

export const useDeleteDocument = (docCollection) => {

    const [response, dispatch ] = useReducer(deleteReducer, initialState)

    //lidando com memory leak
    const [cancelled, setCancelled] = useState(false)
    const checkCancellBeforeDispatch = (action) =>{
        if(!cancelled){
            dispatch(action)
        }
    }
//para deletar um documento, recebemos seu id, usamos o checkBeforeDispatch para definit os estados de loading e error.
    const deleteDocument = async(id) => {
        checkCancellBeforeDispatch({
            type: "LOADING",
        })
//uma vez que não está cancelado, tentamos deletar o documento recebido pelo InsertDocument
//docCollection vem de firebase e ao passar o Id conseguimos acessar um doc da coleção

        try { 
            const deletedDocument = await deleteDoc(doc(db, docCollection, id))

            checkCancellBeforeDispatch({
                type: "DELETED_DOC",
                payload: deletedDocument,
            })

        }catch(error){
            checkCancellBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            })
        }
    }

    //useEffect(()=>{
    //    return() => setCancelled(true)
    //}, [])
    //retorna a resposta para sempre estar em contato com ela e a função de inserir para usar quando necessario
    return {deleteDocument, response}
}