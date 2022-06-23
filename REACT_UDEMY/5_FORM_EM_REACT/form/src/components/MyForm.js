import React from 'react'
import './MyForm.css'
import {useState} from "react"


const MyForm = ({user}) => {


    //6- Controlled Inputs

    //3 - gerenciamento de dados
    
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o Form")
        console.log(name, email, bio, role)

        //nesta etapa devemos ter validações e o envio do formulario antes que ele seja limpo e confirmado
        //7- Limpar form

        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

  return (
    <div>
        {/**5- Envio de Form */}


        { /* 1 - criacao de form*/}
        
        <form onSubmit={handleSubmit}>
            
            <div>
                <label htmlFor = "name"> Nome: </label>
                <input 
                type = "text" 
                name = "name" 
                placeholder="Digite seu Nome"
                onChange={handleName}
                value = {name}
                />  
            </div>

            {/**2- Label envolvendo input */}

            <label>
                <span>E-mail</span>
                {/**4- Simplificação de label envolvendo input 
                 * Simplificação da manipulaçao de State
                */}
                <input type = "email" 
                email = "email" 
                placeholder="Digite seu email" 
                value = {email}
                onChange={(e) => setEmail(e.target.value)}/>

                <span>Data de nascimento</span>
                <input type = "data" data = "data" placeholder="Digite o ano do seu nascimento"/>
            </label>
            {/*8- textArea*/}

            <label>
                <span>Bio: </span>
            <textarea name = 'bio'
                      placeholder='Descrição do usuario'  
                      onChange = {(e) => setBio(e.target.value)}
                      value = {bio}></textarea>
            </label>
            
            <label>
                <span>Funçao no sistema</span>
                <select name = 'role' onChange={(e) => setRole(e.target.value)} value = {role}>
                    <option value = 'user'>Usuario </option>
                    <option value = 'editor'>Editor </option>
                    <option value = 'admin'>Administrador </option>
                 </select>
            </label>
            <input type = "submit" value = "Enviar"/>

        </form>

    </div>
  )
  }

export default MyForm