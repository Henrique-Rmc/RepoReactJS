import {useState} from 'react'
import './App.css';

//Components
//import City from './assets/city.jpg'
import ListRender from './components/ListRender';
//import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {

  const [username] = useState('Maria') 

  const carrs = [
      {id: 1, brand: 'Ferrari', color: 'Amarelo', novo: true, km: 0},
      {id: 2, brand: 'KIA', color: 'Branco', novo: false, km: 35486},
      {id: 3, brand: 'Renault', color: 'Azul', novo: false, km: 254}]


  const pessoas = [
    {id: 1, nome: 'joao', idade: 15, profissao: 'aluno'},
    {id: 2, nome: 'Pedro', idade: 20, profissao: 'dentista'},
    {id: 3, nome: 'Marcos', idade: 30, profissao: 'mecanico'}

  ]
    function showMessage(){
      console.log('Evento do componente pai')
      }


    const [message, setMessage] = useState('')
    
    const handleMessage = (msg) =>{
      setMessage(msg)
    }

  return (
      <div>
        <h1> EM EEXECC</h1>
        <h1> Hi</h1>
      <ListRender/>
      <ConditionalRender/>
      {/*PROPS */}
      <ShowUserName name = {username}/>
      <h1>*DESTRUCTURING*/</h1>
      <CarDetails brand = 'VW' km = {100000} color = 'Azul' novo = {true}/>
      <CarDetails brand = 'Ford' km = {45000} color = 'prata' novo = {false}/>
      <CarDetails brand = 'Chevrolet' km = {25000} color = 'branco'novo = {true} />

      <h1>*lOOP EM ARRAY DE OBJETOS*/</h1>

      {carrs.map((car) =>(
          <CarDetails
            key = {car.id}
            brand = {car.brand}
            color = {car.color}
            km = {car.km}
            novo = {car.novo}
            />
        ))}

      {pessoas.map((pessoa)=>(
        <UserDetails
        key = {pessoa.id}
        nome = {pessoa.nome}
        idade = {pessoa.idade}
        profissao = {pessoa.profissao}
        />
        ))}

     

      <h1> ESTUDO DE FRAGMENT</h1>
      <Fragment/>

      <h1>ESTUDO DE CHILDREN</h1>
      <Container myValue = 'Testing'>
        <p>Dentro do container</p>
      </Container>

      <Container myValue= 'Segundo Teste'>
        <p>Dentro do Segundo Container</p>
      </Container>

      <h1>EXECUTAR FUNÇÃO</h1>
      <ExecuteFunction myFunction = {showMessage}/>

      <Message/>
      <ChangeMessageState handleMessage = {handleMessage}/>
      <Message msg = {message} />
      
      {pessoas.map((pessoa)=>(
        <UserDetails
        key = {pessoa.id}
        nome = {pessoa.nome}
        idade = {pessoa.idade}
        profissao = {pessoa.profissao}
        />
        ))}

      </div>

  );
}

export default App;
