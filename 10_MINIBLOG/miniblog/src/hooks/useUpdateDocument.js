import { useState, useEffect, useReducer } from "react";
import {db} from '../firebase/config'
import {updateDoc, doc} from 'firebase/firestore'


const initialState = {
    loading : null,
    error: null
}
//Com a ajuda do reducer podemos fornecer ações a partir do tipo de ação que é passado para ele.
//poderimamos ter criado um componente para inserir o reducer***
const updateReducer = (state, action) => {

    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "UPDATE_DOC":
            return {loading: false, error: null}
        case "ERROR":
            return{loading: false, error: action.payload}
        default:
            return state
    }

}

//a partir daqui temos a função de inserir o documento.
//exportamos o useupdateDocument que vai receber como parametro a coleção que é usada no firebase.

export const useUpdateDocument = (docCollection) => {

    const [response, dispatch ] = useReducer(updateReducer, initialState)

    //lidando com memory leak
    const [cancelled, setCancelled] = useState(false)
    const checkCancellBeforeDispatch = (action) =>{
        if(!cancelled){
            dispatch(action)
        }
    }
//para inserir um documento usamos o checkBeforeDispatch para definit os estados de loading e error.
    const updateDocument = async(uid, data ) => {
        checkCancellBeforeDispatch({
            type: "LOADING",
        })
//uma vez que não está cancelado, tentamos inserir o documento recebido pelo updateDocument

        try {
            //Recebendo o doc em 2 etapas, diferente do deletedDocument que foi recebido em 1 só. São 2 formar diferentes para fazer a msm coisa
            const docRef = await doc(db, docCollection, uid)

            const updatedDocument = await updateDoc(docRef, data)
            
            checkCancellBeforeDispatch({
                type: "UPDATE_DOC",
                payload: updatedDocument,
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
    return {updateDocument, response}
}