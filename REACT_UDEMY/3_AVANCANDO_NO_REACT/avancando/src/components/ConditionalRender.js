import {useState} from 'react'

const ConditionalRender = () => {
    const[x] = useState(false)

    const[name, setName] = useState("Matheus")

  return (
    <div>
    <h1>IF SIMPLES</h1>
    <h1> A mensagem é exibida se verdadeiro</h1>
    {x && <p>A mensagem é verdadeira</p>}
    {!x && <p>A mensagem é falsa</p>}

    <h1> IF TERNARIO JSX </h1>
    {name ==='Joao' ? 
        (
        <div> O nome é joao</div>)
        : 
        (
        <div> O nome nao é joao</div>
        ) 
    }   
    <button onClick={() => setName("Joao")}> Mude o Nome</button>

    </div>
  )
}

export default ConditionalRender