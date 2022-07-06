import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import './Home.css'

const Home = () => {

  const url = 'http://localhost:3000/products'

  const {data: items, loading, error } = useFetch(url)


  return (
    <div>
      <h1>Meus Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">

        {items &&
         items.map((item) =>(

          <li key={item.id}>
          <h2>Nome:{item.name}</h2>
          <p> Preço:{item.price}R$</p>
          {/**4- Rota Dinamica */}
          <Link to = {`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>

    </div>


  )

         }
export default Home