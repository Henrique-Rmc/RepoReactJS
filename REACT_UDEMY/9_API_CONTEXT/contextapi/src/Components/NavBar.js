import { Link, NavLink } from "react-router-dom";
import './NavBar.css'


import React from 'react'



const NavBar = () => {
  return <nav>
    <NavLink to= "/">Home</NavLink>
    <NavLink to= "/about">About</NavLink>
    <NavLink to="/products">Products</NavLink>

  </nav>
}

export default NavBar