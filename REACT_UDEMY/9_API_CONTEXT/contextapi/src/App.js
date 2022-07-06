import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


//Components
import NavBar from './Components/NavBar';

//Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';


function App() {
  console.log("rodando")

  return (
    <div className="App">
      <h1>Context</h1>
      
      <BrowserRouter>
        <NavBar/>

        <Routes>
          
          <Route path = "/" element={<Home/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/products" element={<Products/>}/>

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
