import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

//COMPONENTS
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//PAGES
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
        </Routes>
      </div>
      <Footer/>
     </BrowserRouter>


    </div>
  );
}

export default App;
