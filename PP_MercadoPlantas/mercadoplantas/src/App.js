import {Navigate,BrowserRouter, Route, Routes} from 'react-router-dom'

//COMPONENTS
import Navbar from './components/Navbar';

//PAGES
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='container'>
        <Routes>
          <Route path='=/' element={<Home/>}>Home</Route>
          <Route path= '/about' element={<About/>}>About</Route>
          <Route path= '/catalog' element={<Catalog/>}/>

        </Routes>
        </div>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
