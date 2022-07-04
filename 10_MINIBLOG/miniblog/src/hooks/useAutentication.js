//Como começamos pela autenticação, nosso arquivo de Congif não está sendo camado em lugar nenhum
import {db} from '../firebase/config'
 
import { async } from '@firebase/util'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut

} from 'firebase/auth'

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
    const[error, setError] = useState(null)
    const[loading, setloading] = useState(null)

    //cleanup-> para n deixar resquicios de funções sendo executados
    const[cancelled, setCancelled] = useState(false)

    //executa funções para verificar se o usuario está logado

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    const createUser = async (data) =>{
        checkIfIsCancelled()

        setloading(true)

        try{
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password )
            //precisamos fazer isso pois o fireBase não armazena nome, apenas email e senha
            await updateProfile(user, {displayName: data.displayName})
            return user

        }catch (error){
            console.log(error.message)
            console.log(typeof error.message)

            //criamos uma let para armazenar a info de erro
            let systemErrorMessage


            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter ao manos 6 caracteres"

            }else if (error.message.includes("email-already")){
                systemErrorMessage = "E-mail ja cadastrado"
            }
            else{
                systemErrorMessage = "Ocorreu um erro, tente mais tarde"
            }

            setError(systemErrorMessage)
        }

        setloading(false)

    }

    //definimus um UseEffect para executar o cancelado assim que sairmos dessa pagina
    useEffect(()=>{
        return() => setCancelled(true)
    }, [])

    return{
        auth, createUser, error, loading,
    }

}