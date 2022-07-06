//destruvturing acontece com a abertura de chaves

const CarDetails = ({brand, km, color, novo}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km rodados: {km}</li>
            <li>Cor do Carro: {color}</li>
            <li>Carro novo: {novo}</li>
        </ul>
        {novo && <p>Esse carro é novo</p>}
    </div>
  )
}

export default CarDetails