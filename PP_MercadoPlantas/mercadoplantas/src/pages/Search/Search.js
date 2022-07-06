import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Search = () => {

    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/plants?" + searchParams
    const {data:plants, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultados disponíveis</h1>
        <ul>
            {plants && plants.map((plant) =>(
                <li key={plant.id}>
                    <h2>{plant.name}</h2>
                    <p>Gênero:{plant.genero}</p>
                    <p>Familia:{plant.familia}</p>
                    <p>Calorias:{plant.calorias}</p>
                    <p>Informações Adicionais:{plant.info}</p>
                    <Link to= { `/products/${plant.id}`}/>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default Search