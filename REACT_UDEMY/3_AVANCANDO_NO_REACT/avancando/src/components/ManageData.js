//HOOKS
//Tem muitas funcoes
//Guarda e altera o estado de algum dado
//Todos começamc om "use" ex: useState
//pode-se criar hooks, sao os custom Hooks
//precisam ser importados
//são funçoes

 import {useState} from 'react'


const ManageData = () => {

  const [number, setNumber] = useState(10)
  console.log(number)
  
  return (
  <div>
    <p> Mudando o estado do : {number}</p>  
    <button onClick={()=>setNumber(20)} >Mude o Estado aqui</button>
    
  </div>
  
)

}

export default ManageData 