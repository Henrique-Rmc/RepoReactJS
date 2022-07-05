import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <nav>
    <NavLink to= '/'>Home</NavLink>
    <NavLink to = '/about'>Sobre</NavLink>
    <NavLink to = '/catalog'>Catálogo</NavLink>
    </nav>
}

export default Navbar