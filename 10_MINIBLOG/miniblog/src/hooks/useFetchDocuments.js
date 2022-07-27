import { useState, useEffect } from "react";
import {db} from "../firebase/config"
import { collection, query, orderBy,onSnapshot, where, querySnapshot, } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState (null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(()=>{

        async function loadData() {
            if(cancelled) return

            setLoading(true)
            const collectionRef = await collection(db, docCollection)

            try{
                let q
                //busca

                //dashboard
                //q é uma let pois vai ser alterado de acordo com buscas
                q = await  query(collectionRef, orderBy('createdAt', 'desc'))

                //sempre que um dado é alterado, o dado é atualizado
                //criamos um novo objeto documento,inserimos nos meus documentos e temos o id separado dos dados(estrutura do fireBase)
                //colocamos todos os objetos dentro do doc com spread Operator, com isso, estamos criando um novo objeto igual ao inserido
                await onSnapshot(q, (querySnapshot)=> {
                    setDocuments(
                        querySnapshot.docs.map((doc)=>(
                            {
                                id: doc.id,
                                ...doc.data
                            }
                        ))
                    )
                })
                setLoading(false)

            }catch(error){
                console.log(error)
                setError(error.message)
                setLoading(false)
            }

        }
        //criamos a loadData dentro do useEffect para que ela sempre seja executada quando algum dos parametros for alterado
        loadData()
    }, [docCollection, search, uid, cancelled])

    useEffect(()=>{
        return () => setCancelled(true)
    })
    return {documents, loading, error}
}