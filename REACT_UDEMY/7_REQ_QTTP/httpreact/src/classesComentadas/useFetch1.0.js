import { useState, useEffect } from "react";


export const useFetch = (url) =>{
    const [data, setData] = useState(null)

    //5-Refatorando o POST
    const[config, setConfig] = useState(null)
    const[method, setMethod] = useState(null)
    const[callFetch, setCallFetch] = useState(false)

    //6- Loading
    const[loading, setLoading] = useState(false)

    //7- Tratando Erros
    const [error, setError] = useState(null)
    const[itemId, setItemId]= useState(null)

    //8- Desafio 6

    
    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method: "POST", 
                headers:{
                    "Content-type" : "application/json"
                }, 
                body: JSON.stringify(data)
            })
            setMethod("POST")
        }

        else if(method === "DELETE"){
            setConfig({
                method: "DELETE",
                headers:{
                    "Content-type" : "application.json"
                }, 
                //O delete não possui body
                //body: JSON.stringify(data)
            })
            setMethod("DELETE")
            setItemId(data)
        }

    }
    useEffect(()=>{

        const fetchData = async () =>{
            //6-Loading
            setLoading(true)
            try{
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
            }   catch(error) {
                console.log(error.message)

                setError("Houve algum erro ao carregar os dados!")
   
        }
        setLoading(false)
        
    }
    fetchData()

    }, [url, callFetch] )
   

    useEffect(()=>{
        const httpRequest = async () => {

            if(method === "POST"){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json) 

            }else if(method === "DELETE"){

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch (deleteUrl, config)

                const json = await res.json()

                setCallFetch(json) 
            }
        }      
         
        httpRequest()

    }, [config, method, url])

    console.log(config)

    return {data, httpConfig, loading, error}
}