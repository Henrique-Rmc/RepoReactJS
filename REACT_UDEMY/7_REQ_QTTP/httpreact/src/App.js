import './App.css'

import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch'

/**
 * 1- definir a url do BD que iremos acessar
 * 
 * 2-criar a base visual para mostrar os produtos
 * 
 * 3- criar uma interface para inserir o nome e preço dos produtos que serão inseridos
 * 
 * 4- criar as contantes que vão ser usadas
 * 
 * 5-criar o handleSubmit que recebe as informaçoes de um produto e envia para processo
 * 
 */


 const url = "http://localhost:3000/products";

function App () {

  const[name, setName] = useState('')
  const[price, setPrice] = useState('')
  //permite acesso aos dados do banco que foram passados na URL
  const {data:items, httpConfig} = useFetch(url)


  const handleSubmit = async (e) => {
    //recebe name e price do 'evento'
    const product = {
      name, 
      price
    }
    //devemos realizar a configuração de envio
    //chamaremos o httpConfig que deve ser criado no UseFetch para mandar os dados

    httpConfig(product, "POST")

    setName('')
    setPrice('')
  }

  const handleDelete = (id)=>{
    httpConfig(id, "DELETE")

  }


  return (
    <div>
      
    <h1>Lista de Produtos</h1>

    <ul>
      {items && items.map((product)=>(
        <li key = {product.id}>
          {product.name} -R$: {product.price} <button onClick={()=>handleDelete(product.id)}>Excluir Produto</button>
        </li>
      ))}

    <h2>Insira novos Produtos</h2>
    <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type='text'
              name='name'
              onChange={(e)=>setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input
            type = 'number'
            name = 'price'
            onChange={(e)=>setPrice(e.target.value)}
            />
          </label>

        <input type= 'submit' value = 'Criar Produto'/>
        </form>
    </div>
      
    </ul>


    </div>
  )
}

export default App