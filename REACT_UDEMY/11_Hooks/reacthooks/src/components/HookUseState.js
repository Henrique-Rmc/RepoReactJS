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


  return (
    <div>
        {/*1- UseState*/}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar Nomes</button>
        {/*Ao executar o change Names podemos ver que o useState é re-renderizado e apresentado mas a variável não*/}
    </div>
  )
}

export default HookUseState