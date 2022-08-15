import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    //1-UseState
    let userName = "João"

    const [name, setName] = useState("Matheus")

    const changeNames = () =>{
      userName = "João Souza"
      setName("Matheus Battisti")

      console.log(userName)

    }

    console.log(name)

    const [age, setAge] = useState(18)

const handleSubmit = (e) =>{
  e.preventDefault()

  // envio a uma API
  console.log(age)
}

  return (
    <div>
        {/*1- UseState*/}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar Nomes</button>
        {/*Ao executar o change Names podemos ver que o useState
         é re-renderizado e apresentado mas a variável não*/}
         <p>Digite a sua Idade:</p>
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value = {age} 
          onChange={(e) => setAge(e.target.value)} />
          <input type="submit" value ="Enviar" ></input>
    </form>
    <p>Você tem {age}anos</p>
    </div>
  )
}

export default HookUseState