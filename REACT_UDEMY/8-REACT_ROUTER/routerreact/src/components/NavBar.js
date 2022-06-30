//2- Links com React Router
import './NavBar.css'

import {Link} from "react-router-dom"

const NavBar = () => {
  return <nav>

    {/*Também poderia ser escrito como <a href = '/'>Home</a>
        entretando, o href faz um reload da página e o Link não  */}

    <Link to ='/'>Home</Link>
    

    <Link to= "/about">Sobre</Link>


  </nav>
}

export default NavBar