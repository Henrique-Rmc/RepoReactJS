import { Link } from "react-router-dom"
//import {CounterContext} from "../context/CounterContext"
//import { useContext } from "react"

import ChangeContext from "../context/ChangeContext"

//4-Refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext"

//5- ContextMaisComplexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Home = () => {
  //const {counter} = useContext(CounterContext)

  const {counter} = useCounterContext()

  // 5- Contexto mais complexo
  const{color, dispatch} = useTitleColorContext()

  // 6 - Alterando contexto complexo
  const setTitleColor = (color) =>{
    dispatch({type: color})
  }

  
  return (
    <div>
      <h1 style={{color : color}}>Home</h1>
      <p>Valor do Contador:{counter} </p>
      {/**3-Alterando Contexto */}
      <ChangeContext/>
      {/**6- Alterando o contexto completo */}
      <div>
        <button onClick={()=> setTitleColor("RED")}>Vermelho</button>
        <button onClick={()=>setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home