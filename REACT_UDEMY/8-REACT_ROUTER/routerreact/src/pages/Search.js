//quando encontrarmos o produto queremos redirecionar para o Link do produto
import { useSearchParams, Link } from "react-router-dom"

//hook para pegar os dados
import { useFetch } from "../hooks/useFetch"



const Search = () => {
    //nao precisa de Set Pois so queremos pegar o valor que vem de SearchParams()
    const[searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const{data: items, loading, error } = useFetch(url)

  return (
    <div>
        <h1>Resultados Disponíveis: </h1>
    <ul>
        {items && items.map((item)=>(
            <li key = {item.id}>
                <h2>{item.name}</h2>
                <p>{item.price}R$</p>
            </li>
        ))}

    </ul>

    </div>

  )
}

export default Search