import { NavLink } from "react-router-dom"

//após a inserção do provider a navBar possui acesso ao usuário e pode ser modificada de acordo com  a autenticação
import { useAuthentication } from "../hooks/useAutentication"

//useAuthValue retorna o contexto passado, nesse cso, o Usuario
import { useAuthValue } from "../context/AuthContext"



import styles from './NavBar.module.css'


const NavBar = () => {

  //pega o usuario que está sendo compartilhado em provider
  const {user} = useAuthValue()

  const {logout} = useAuthentication()

  return <nav className={styles.navbar}>

    <NavLink to = "/" className={styles.brand}>
        Mini<span>Blog</span>
    </NavLink>
    <ul className={styles.links_list}>
        <li>
            <NavLink to = "/"className={({isActive})=>(isActive ? styles.active : "")} >Home</NavLink> 
        </li>
        {/*Se o Usuario não estiver autenticado, ele mostra as Barras de Login e Registro,se estiver, não mostra*/}
        {!user && (
          //temos um fragment para poder ter 2 elementos pais pois temos 2 <li/>
          <>

            <li>
              <NavLink to = "/Login"className={({isActive})=>(isActive ? styles.active : "")}> Login</NavLink>
            </li>
            <li>
              <NavLink to = "/Register"className={({isActive})=>(isActive ? styles.active : "")}>Registrar</NavLink>
            </li>

          </>
        )}
        {/*Se o Usuario estiver autenticado, ele mostra as Barras de Post e Dashboard,se estiver, não mostra
        ****O <> serve parar permitirr que a estrutura tenha 2 elementos pais, no caso, 2 <li>*/}
        {user && (
          <>
            <li>
              <NavLink to = "/posts/create" className={({isActive})=>(isActive? styles.active : "")}>Criar Post</NavLink>
            </li>
            <li>
              <NavLink to = "/dashboard" className={({isActive})=>(isActive? styles.active : "")}>Dashboard</NavLink>
            </li>
            
              {user && (
                <li>
                  <button onClick={logout}>Sair</button>
                </li>
              )}

          </>
        )}
        <li>
          <NavLink to = "/about" className={({ isActive })=>(isActive ? styles.active : "")}>Sobre</NavLink>
        </li>
    </ul>


  </nav>
  
}

export default NavBar