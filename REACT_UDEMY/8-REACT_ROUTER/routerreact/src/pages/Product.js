import { useParams } from "react-router-dom"

const Product = () => {

    //4- Rota Dinamica
    //useParams traz um objeto com todos os parametros da URL
    //Podemos o desestruturar de uma forma que o JS permita
    //faz uma referencia ao **id** que foi passado na url "/products/:id"
    const {id} = useParams()

  return <>
    <p>ID do Produto: {id} </p>
  </>
}

export default Product