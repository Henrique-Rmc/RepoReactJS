import './GameOver.css'

const GameOver = ({reTry, score}) => {
  return (
    <div>
        <h1>Fim de Jogo</h1>
        <h2>A sua Pontuação foi: <span>{score}</span> </h2>
        <button onClick={reTry}>Clique reiniciar</button>
    </div>
  )
}

export default GameOver