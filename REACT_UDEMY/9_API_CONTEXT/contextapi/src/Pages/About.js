//import { useContext } from "react"
import ChangeContext from "../context/ChangeContext"
//import { CounterContext } from "../context/CounterContext"
import { useCounterContext } from "../hooks/useCounterContext"

import { useTitleColorContext } from "../hooks/useTitleColorContext"


const About = () => {

  const {color} = useTitleColorContext()

  const {counter} = useCounterContext()

  return (
    <div>
      <h1 style = {{color : color}}>About</h1>
      <p>Valor do contador:{counter}</p>
      <ChangeContext/>
      <div>
        
      </div>


    
    </div>
  )
}

export default About