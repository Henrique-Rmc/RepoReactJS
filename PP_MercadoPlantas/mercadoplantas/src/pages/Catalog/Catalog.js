import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Catalog = () => {
    const url = 'http://localhost:3000/plants'
    const {data: plants, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Catálogo de Plantas</h1>
        <ul className="plants">
            {plants && plants.map((plant)=>(
                
                <li key = {plant.id}>
                    <h2>Nome:{plant.name}</h2>
                    <p>Quantidade:{plant.quantidade}</p>
                    <Link to ={`/plants/${plant.id}`}>Mais Informações</Link>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Catalog