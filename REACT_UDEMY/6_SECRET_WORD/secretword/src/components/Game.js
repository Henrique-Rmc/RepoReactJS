import { useState, useRef } from "react";
import React from 'react'
import "./Game.css"


const Game = ({
  verifyLetter,
   pickedWord,
    pickedCategory,
      letters,
       guessedLetters,
        wrongLetters,
         score,
          guesses,
        }) => {
  

  const [letter, setLetter] = useState('')
  //useRef cria uma referencia a algum lugar
  const letterInputRef = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)

    setLetter('')
    //foca nesse elemento após o fim do submit, processa jogadas de forma mais rápida
    //evita que percamos o foco no Input após o envio do formulario
    letterInputRef.current.focus()
    
  }

  return (
    <div className='game'>
        <p className='points'>
            <span>Pontuação : {score} </span>
        </p>
        <h1>Adivinhe a palavra</h1>
        <h3 className='tip'>
            Dica sobre a palavra <span>{pickedCategory}</span>
        </h3>
        <p>Voce ainda tem {guesses} tentativas</p>

        <div className='wordContainer'>

        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? ( 
            <span key = {i} className = 'letter'> {letter} </span>
          ) : (
            <span key = {i} className= 'blanksquare'></span> 
          )
          )}
            
        </div>


      <div className='letterContainer'>
        <p>Tente adivinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input 
            type = 'text' 
            name = 'letter' 
            maxLength= '1' 
            required 
            onChange={(e) => setLetter(e.target.value)}
            value = {letter}
            ref = {letterInputRef}
            />

          <button>JOGAR!</button>
        </form>
      </div>


      <div className='wrongLettersContainer'>
        <p>Letras ja utilizadas: </p>

        {wrongLetters.map((letter, i) => 
        ( 
        <span key = {i}>{letter} </span>
        ))
        }
        
      </div>


    </div>
  )
}

export default Game