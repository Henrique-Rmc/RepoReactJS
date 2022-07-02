//import { useContext } from "react"
import ChangeContext from "../context/ChangeContext"
//import { CounterContext } from "../context/CounterContext"
import { useCounterContext } from "../hooks/useCounterContext"



const About = () => {
  const {counter} = useCounterContext()

  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador:{counter}</p>
      <ChangeContext/>


    
    </div>
  )
}

export default About