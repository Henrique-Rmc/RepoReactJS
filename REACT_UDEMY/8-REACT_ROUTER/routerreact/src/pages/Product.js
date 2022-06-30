import { Link, useParams } from "react-router-dom"

import { useFetch } from "../hooks/useFetch"




const Product = () => {

    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id

    const {data:product, loading, error} = useFetch(url)


    

    console.log(product)

    //4- Rota Dinamica
    //useParams traz um objeto com todos os parametros da URL
    //Podemos o desestruturar de uma forma que o JS permita
    //faz uma referencia ao **id** que foi passado na url "/products/:id"
  return <>

    <p>ID do Produto: {id} </p>
    {error && <p>Ocorreu um Erro</p> }
    {loading && <p>Carregando...</p>}
    {product && (
      <div>
        <h1>{product.name}</h1>
        <p>R${product.price}</p>
        <Link to = {`/products/${product.id}/info`} >Mais informações</Link>
      </div>
    )}

  </>
}

export default Product