//props é uma referencia a um objeto com todas as propriedades enviadas ao componente

const ShowUserName = (props) => {
  return (
    <div>
        
        <h2>O nome do Usuario é: {props.name}</h2>
    </div>
  )
}

export default ShowUserName