import './App.css';

import {useState, useEffect} from 'react'

//4-Custom Hook
import {useFetch} from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  //4-custom hook
  //constante que está sendo importada do Hook//data vem do hook
  //fetch serve para dar acesso aos dados, através desse useFetch conseguimos os itens e as configs
  const{data: items, httpConfig} = useFetch(url)

  //iniciamos o nomee e preço como constantes que podem ser alteradas pelo useState
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')


//1- resgatando dados
//uma função assíncrona que usa do Fetch:
//(ferramenta para acessar dados, forcenece definição generica do objeto)

//para acessar a url da requisição onde ficam os dados 
//res recebe uma url formatada como json
//data recebe os objetos através do res.json
//os produtos de data são acessados 

/*useEffect(() => {
  async function fetchData(){

    const res = await fetch(url)
    const data = await res.json()
    setProducts(data)
  }

  fetchData()

}, [] )
*/

//2- Adição de produtos
const handleSubmit = async (e) => {
  //preventDefault não submete o form/n atualiza a pagina
  e.preventDefault()

  const product = {
    //como os states tem os mesmos nomes dos objetos, o bind é feito quando são rellacionados
    //caso contrario, teriamos que colocar  ---name = 'Nome'---
    name,
    price
  }
  //como aqui tratamos de uma requisição POST, precisamos passar 2 objetos para o fetch
  //esse segundo objeto configura como vai ser a requisição:
  //1- tendo sua primeira parte
  //1-como o indicador "POST", "GET", "DELETE"....
  //2-E a segunda parte indicando o tipo de conteúdo que está sendo enviado, neste caso, uma aplicação json
  //
  /* *****************************************
  //const res = await fetch(url, {
   //// method: "POST",
   // headers: {
      "Content-Type": "application/json"
    },
    //dessa forma transformamos o objeto javaScript em um JSON que nada mais é que um
    //objeto JS em forma de texto com a sintaxe do JSON

    body: JSON.stringify(product)

  })
*/

  //3- Carregamento Dinamico
  //Com carregamento dinamico nao precisamos atuializar a pagina para que a requisição seja concluida
  //addedProducts recebe o objeto criado no res
  //const addedProducts = await res.json
  //setProducts((prevProducts) => [...prevProducts, addedProducts])

  //5- Refatorando POst
  //manda para o httpConfig o produto e o método que está sendo usado
  httpConfig(product, "POST")
  setName("")
  setPrice("")

}




  return (
    <div className="App">

      {/*Products.map fará uma listagem dos produtos usando seus Id como key */}
      <h1>Lista de Produtos</h1>
      <ul>
        {items && items.map((product)=>(
          <li key = {product.id}>
            {product.name} -R$: {product.price} 
          </li>
        ))}
      </ul>
        {/*
        Dentro dessa div fazemos o acesso a criação de um produto para ser inserido no sistema
        */}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
            type = 'text' 
            value={name} 
            name = 'name' 
            onChange = {(e) => setName(e.target.value)} 
            />
          </label>
          <label>
            Preço:
            <input
            type = 'number'
            value={price} 
            name = 'price' 
            onChange = {(e) => setPrice(e.target.value)} 
            />
          </label>
          <input type = 'submit' value = "Criar" />
        </form>
      </div>




    </div>


  );
}

export default App;
