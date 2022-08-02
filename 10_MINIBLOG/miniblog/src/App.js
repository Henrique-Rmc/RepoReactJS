import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

//mapeia se a autenticação foi feita com sucesso
import { onAuthStateChanged } from 'firebase/auth';

//HOOKS
import { useState, UseEffect, useEffect } from 'react';
//Importamos o useAuthentication para que não precisemos inicializar novamente
//pois acessamos seu "const auth=getAuth"
import { useAuthentication } from './hooks/useAutentication';

//COMPONENTS
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//PAGES
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthProvider } from './context/AuthContext';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/Editar/EditPost';

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  //o loading vai estar ativo sempre que o usuario estiver carregando
  const loadingUser = user === undefined

  //sempre que mudar o auth, ele vai ser mapeado
  //Esse useEffect recebe um auth como paramentro, dessa forma, sempre que o auth for executado, ele vai atualizar
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      {/*Permite Acessar o usuario em todo o sistema*/}
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post/>} />

              <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/posts/edit/:id' element={user ? <EditPost /> : <Navigate to='/login' />} />
              <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to='/login' />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
              


            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
