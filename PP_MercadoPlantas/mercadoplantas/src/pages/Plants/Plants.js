import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Plants = () => {

    const {id} = useParams()
    const url = "http://localhost:3000/plants/" + id

    const {data:plant, loading, error} = useFetch(url)

    console.log(plant)

  return (
  <>
    <p>ID do produto: {id}</p>
    {plant && (
        <div>
            <h1>{plant.name}</h1>
            <p>Gênero:{plant.genero}</p>
                    <p>Familia:{plant.familia}</p>
                    <p>Calorias:{plant.calorias}</p>
                    <p>Informações Adicionais:{plant.info}</p>
        </div>
    )}
    
  </>
  )
}

export default Plants