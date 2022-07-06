//3- alterando contexto
//--Necessario para alterar o contexto
import { useContext } from "react";

import { CounterContext } from "./CounterContext";


const ChangeContext = () => {
    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>Clique para +1</button>
    </div>
  )
}

export default ChangeContext