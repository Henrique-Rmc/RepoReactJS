import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
        <h1>Forragens Nativas do S.A</h1>
        <div className={styles.desc}>
        <text className={styles.text}>Disponibiliza, em linguagem fácil e interativa, o potencial nutricional de plantas nativas da Caatinga que podem ser utilizadas como forragem animal, especialmente o teor de energia, proteína e fibra alimentar. O objetivo é reduzir a dependência do agricultor familiar de insumos externos à propriedade, como torta de algodão, farelo de trigo, farelo de soja, farelo de milho. Baseado na disponibilidade de plantas forrageiras e na quantidade de animais na propriedade, a aplicação deve informar quantos quilos de cada planta o agricultor precisa para oferecer uma alimentação balanceada, tanto para bovinos, caprinos ou ovinos.</text>
        </div>
    </div>
  )
}

export default Home