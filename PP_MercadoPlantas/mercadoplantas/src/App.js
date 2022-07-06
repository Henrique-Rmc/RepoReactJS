import {Navigate,BrowserRouter, Route, Routes} from 'react-router-dom'

//COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';


//PAGES
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog'
import Plants from './pages/Plants/Plants';
import Search from './pages/Search/Search';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <SearchForm/>
        <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path= '/about' element={<About/>}>About</Route>
          <Route path= '/plants' element={<Catalog/>}>Catalog</Route>
          <Route path= '/plants/:id' element = {<Plants/>}></Route>
          <Route path= '/search' element = {<Search/>}></Route>

        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
