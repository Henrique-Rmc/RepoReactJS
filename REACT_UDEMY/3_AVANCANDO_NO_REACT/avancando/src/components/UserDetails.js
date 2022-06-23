import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
      
            <h1> {nome}</h1>
            <li>Idade: {idade}</li>
            <li>Profissao: {profissao}</li>

            {idade >= 18 ? (
              <p>Pode tirar carteira  de habilitação</p>
              ):(
              <p>Nao pode tirar carteira de habilitação</p>
            )} 
          
    </div>
  )
}

export default UserDetails