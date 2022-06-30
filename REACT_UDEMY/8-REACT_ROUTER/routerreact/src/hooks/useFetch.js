import { useState, useEffect } from "react";

export const useFetch = (url) => {

const [config, setConfig] = useState(null)
const [data, setData] = useState(null)
const [itemID, setItemID] = useState(null)
const [method, setMethod] = useState(null)
const [loading, setLoading] = useState(false)


const [callFetch, setCallFetch] = useState(false)

const[error, setError] = useState(null)

/*o use fetch é responsavel por enviar os dados do BD para o FRONT
            ele funciona em tempo de execução, ou seja, ao executar, o fetchData
            imediatamente formata a URL que foi passada no inicio do programa
            para que a informação seja mostrada no front sem que hajam requisições
            ao final do useFetch exportamos algumas informações, como a data que
            está sendo enviada para o APP.js ao inicio da exec
            -é a partir dessa informação que os dados sao mapeados no html
        */

            useEffect (()=>{
       
                const fetchData = async()=>{
                    setLoading(true)
                    try{
                    const res = await fetch(url)
                    const json = await res.json()

                    setData(json)
                    }catch (error){
                        setError("Houve um erro ao carregar os dados")
                    }

                    setLoading(false)

                }
                
                fetchData()
        
            }, [url, callFetch])

/*******************************************************************************************/
    
    //Como o nome diz, o httpConfig realiza a configuração do tipo de dado, inclue seu cabeçalho etc
    //data= produto, method = "post, put, delete, etc"
    const httpConfig = (data, method)=> {
        if(method === "POST"){
            setConfig({
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod("POST")
        }

        else if(method === "DELETE"){
            setConfig({
                method: "DELETE",
                headers: {
                "Content-type" : "application/json"}
            })
            setMethod("DELETE")
            setItemID(data)
        }
        }   
        
    

/*******************************************************************************************/

//após as informações de configurações serem concluídas, devemos iniciar o processo de Request no HTTP

    useEffect(() => {

        const httpRequest = async ()=>{
            if(method === "POST"){
                
                let fetchOptions = [url, config]
                let res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
                


            }else if(method === "DELETE"){

                try{
                const deleteUrl = `${url}/${itemID}`

                const res = await fetch(deleteUrl, config)

                const json = await res.json()

                setCallFetch(json)
                }catch(error){
                    console.log(error.message)
                    setError("Houve um erro ao carregar os dados!")
                }
                
        }


    }
    httpRequest()

}, [url, config, method, itemID])

/*******************************************************************************************/



 
return {data, httpConfig, error, loading}

}
