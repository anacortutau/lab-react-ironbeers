import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {

    const activeClass = (navInfo) =>{
        console.log(navInfo)
    
        return navInfo.isActive === true ? "active-nav" : "inactive-nav"

      }

  return (
    <div>

        <NavLink to="/" className={activeClass}>Home</NavLink>
        <NavLink to="/beers" end={true} className={activeClass}>Listado Cervezas</NavLink>
        <NavLink to="/beers/random" className={activeClass}>Cerveza Random</NavLink>
        <NavLink to="/beers/create-beer" className={activeClass}>Crear Cerveza</NavLink>
        
    </div>
  )
}

export default Navbar