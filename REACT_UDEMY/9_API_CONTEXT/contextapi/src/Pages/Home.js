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
  

  
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Contador:{counter} </p>
      {/**3-Alterando Contexto */}
      <ChangeContext/>
    </div>
  )
}

export default Home