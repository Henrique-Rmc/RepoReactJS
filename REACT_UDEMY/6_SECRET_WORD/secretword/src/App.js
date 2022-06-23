
//CSS
import './App.css';

//COMPONENTS
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

//DATA
import { wordsList } from "./components/data/words"

//REACT
import {useCallback, useEffect, useState} from "react"

/*
São definidos os estágios com os quais o sistema vai interagir
Cada estágio chama um componente.
*/
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

/*
Antes de iniciar o nosso retorno , devemos definir as const e suas manipulaçoes
*******const [gameStage, setGameStage] = useState(stages[0].name);*********
        Essa constante atribui um useState oara o gameStage, o useState permite que a constante seja redefinida
        gameStage começa com o estágio 0 que é o ponto inicial/ tela inicial

*******const [words] = useState(wordsList);***************
        Essa constante recebe uma lista de palavras através de um useState. Essa lista de palavras vem de um arquivo em Data que foi importado


*******


*******



*******

*/

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(50);

  console.log(words);


/********
 ********const pickWordAndCategory = useCallback(()
          useCallBack() -- Em JS cada vez que uma função é chamada existe uma representação diferente
                        -- Para evitar que esse componente seja re-renderizado a todo momento, usamos o useCallBack que indica que estamos usando aquela msm estrutura
 *        Essa constante recebe como parametro uma função
 *        -essa função define a constante categories que é uma lista de palavras que recebe as chaves das palavras recebidas em words através das importações
 *         
 */
  const pickWordAndCategory = useCallback(() => {

    // A constante categories é um array com as keys do array words, ou seja, as categorias de cada lista de palavra

    // A constante category usa de funções matematicas para gerar um numero aleatorio que será o índice da categoria que escolheremos
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    //A constante word vai receber uma palavra da categoria definida anteriormente em category
    //como podemos ver: word = words[category]
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(category, word);

    //a função pickWordAndCategory retorna uma categoria e uma palavra
    return { category, word };
  }, [words]);


  // start the game
  const startGame = useCallback(() => {
    // clear all letters
    clearLettersStates();
    // choose a word
    const { category, word } = pickWordAndCategory();
    console.log(category, word);
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    // console.log(category, word);
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);



  // process letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    // push guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };


  console.log(wrongLetters);


  // restart the game
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };


  // clear letters state
  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };


  // check if guesses ended
  useEffect(() => {
    if (guesses === 0) {
      // game over and reset all states
      clearLettersStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {
    //o set impede que itens repetidos sejam adicionados ao array
    const uniqueLetters = [...new Set(letters)];

    console.log(uniqueLetters);
    console.log(guessedLetters);

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100));

      // restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;