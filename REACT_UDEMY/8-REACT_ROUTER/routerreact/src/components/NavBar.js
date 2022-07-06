//2- Links com React Router
import './NavBar.css'

import {Link, NavLink, navLink} from "react-router-dom"

const NavBar = () => {
  return <nav>

    {/*Também poderia ser escrito como <a href = '/'>Home</a>
        entretando, o href faz um reload da página e o Link não  
    <Link to ='/'>Home</Link>
    <Link to= "/about">Sobre</Link>*/}

  <NavLink to = "/">Home</NavLink>
  <NavLink to = "/about">Sobre</NavLink>



  </nav>
}

export default NavBar