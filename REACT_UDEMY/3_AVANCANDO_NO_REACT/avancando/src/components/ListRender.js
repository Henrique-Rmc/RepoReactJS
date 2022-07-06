//react precisa de uma chave única em cada um dos itens iterados
//ajuda na renderização

//Ao usar "(item, i) => (<li> key = {i}" estamos acessando cada item pela sua key de
//indice e isso pode ser um problema pois existem situações em que aquele índice acessado
//pode estar vazio e isso provavelmete irá gerar um erro

//Geralmente ao acessar mapas, estamos lidando com estruturas dentro de um Banco de dados
//e consequentemente essas estruturas possuem identificadores únicos.
//Devido a isso, é mais recomendado que identifiquemos o objeto acessado pelo seu ID


import {useState} from 'react'

const ListRender = () => {
    //const [list] = useState(["Matheus", "Pedros", "Josias", "Maria"])

    const [users, setUsers] = useState([
      {id: 1, name: "Matheus", age: 31 },
      {id: 2, name: "Igor", age: 29 },
      {id: 3, name: "Joao", age: 27 },
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);

      setUsers((prevUsers) => {
        return prevUsers.filter((user) => user.id !== randomNumber)
      })
    }

    return (
      <div>
        <ul>
          {users.map (
            (user) => (
              <li key = {user.id}> {user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick = {deleteRandom} >Delete Usuario Aleatorio </button>

        


      </div>
      
    )

  }
  /*return (
    <div>
        <ul>
            {list.map(
                (item, i) => (
                <li key={i}>   {item}   </li>
                ))}
        </ul>

    </div>
  )
}








  <div>
          <ul>
            {users.map(
              (user) => (
                <li key = {user.id}> {user.name} - {user.age} </li>
              ) ) }
          </ul>

      </div>
*/
export default ListRender