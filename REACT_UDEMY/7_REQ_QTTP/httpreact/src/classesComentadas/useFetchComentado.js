import { useState, useEffect } from "react";

//4-Custom Hook
//-Esse custom hook terá a função de substituir a função UseFetch 
//que foi estudada na primeira etapa.
//Sua implementação é praticamente a mesma mas aqui ela toma um formato de hook

//Diferente do componente, no hook temos apenas um export que lança a função criada

export const useFetch = (url) =>{
    //recebemos os dados incialmente como null uma vez que não sabemos o tipo de dado recebido
    const [data, setData] = useState(null)

    //5-Refatorando o POST
    const[config, setConfig] = useState(null)
    const[method, setMethod] = useState(null)
    //traz os dados atualizados
    const[callFetch, setCallFetch] = useState(false)

    //6- Loading
    const [loading, setLoading] = useFetch(false)



    //************Podemos chamar o httpconfig individualmente no app.js. Ele vai usar o setConfig que invoca o httpRequest
    
    //data é o produto a ser enviado e method a requiisição post,pút,get,delete,etc;;;....
    //muda a configuração, devido a isso, ao mexer nele estamos afetando o useEffect
    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method, 
                headers:{
                    "Content-type" : "application/json"
                }, 
                body: JSON.stringify(data)
            })


            setMethod(method)
        }
    }
    useEffect(()=>{
        //6 - loading
        setLoading(true)
        const fetchData = async () =>{
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
            setLoading(false)
        }

        fetchData()
        //url é a dependencia do useEffect para que quando a URL mude, o hook seja executado novamente
        //no passo 5 definimos callfetch como outra dependencia para que caso seja alterado, a func seja atualizada
    }, [url], callFetch)


    //5 - refatorando POST
    //useEffect nao espera um await, dessa forma, temos que encapsular o await em uma conta
    //esse useEffect é baseado na configuração e devido a isso não precisa ser exportado
    useEffect(()=>{

        const httpRequest = async () => {
            if(method === "POST"){
                //faz um apanhado das configurações URL//faz referencia as contantes definidas acima
                //array com a URL e as config permitindo pegar url e configs genericas

                /******Quando o config é alterado, o httpRequest é chamado devido o useEffect *******/
                let fetchOptions = [url, config]
                //rece recebe o fetch e adiciona a
                const res = await fetch(...fetchOptions)
    
                const json = await res.json()
                //setCallfetch serve para retornar as informações do banco após serem atualizadas
                //é um get após a conclusão do POST
                setCallFetch(json) 
            }}     

        
        httpRequest()
        //todas as contantes que estão sendo mapeadas precisam ser adicionadas ao array de dependencia
    }, [config])


    return {data, httpConfig, loading}
}