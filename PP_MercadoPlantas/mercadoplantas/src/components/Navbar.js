import { NavLink } from "react-router-dom"

import styles from './Navbar.module.css'


const Navbar = () => {
  return <nav className={styles.navbar}>

    <NavLink to = "/" className={styles.brand}>Mercado<span>PlantasLivres</span></NavLink>
      <ul>

        <li>
        <NavLink to= '/'className={({isActive})=>(isActive ? styles.active : "")} >Home</NavLink>
        </li>

        <li>
        <NavLink to = '/about'className={({isActive})=>(isActive ? styles.active : "")} >Sobre</NavLink>
        </li>

        <li>
        <NavLink to = '/plants'className={({isActive})=>(isActive ? styles.active : "")} >Catálogo</NavLink>
        </li>
        
      </ul>

    </nav>
}

export default Navbar