import { NavLink } from "react-router-dom"

import styles from './Navbar.module.css'


const Navbar = () => {
  return <nav className={styles.navbar}>

    <NavLink to = "/" className={styles.brand}>Forragens<span>Nativas</span></NavLink>
      <ul className={styles.links_list}>

        <li>
        <NavLink to= '/'className={({isActive})=>(isActive ? styles.active : "")} >Home</NavLink>
        </li>

        <li>
        <NavLink to = '/plants'className={({isActive})=>(isActive ? styles.active : "")} >Catálogo</NavLink>
        </li>
        
        <li>
          <NavLink to = '/login' className={({isActive})=>(isActive? styles.active : "")}>Login</NavLink>
        </li>

        <li>
          <NavLink to = '/register'className={({isActive})=>(isActive? styles.active : "")}>Cadastro</NavLink>
        </li>

        <li>
        <NavLink to = '/about'className={({isActive})=>(isActive ? styles.active : "")} >Sobre</NavLink>
        </li>


        
      </ul>

    </nav>
}

export default Navbar