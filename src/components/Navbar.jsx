import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {

    const activeClass = (navInfo) =>{
        console.log(navInfo)
    
        return navInfo.isActive === true ? "active-nav" : "inactive-nav"

      }

  return (
    <div >

        <nav class="container">

        <NavLink id="home" to="/" className={activeClass}>Home</NavLink>
        <NavLink id="listado" to="/beers" end={true} className={activeClass}>Listado Cervezas</NavLink>
        <NavLink id="random" to="/beers/random" className={activeClass}>Cerveza Random</NavLink>
        <NavLink id="crearCerveza" to="/beers/create-beer" className={activeClass}>Crear Cerveza</NavLink>

        </nav>
        
    </div>
  )
}

export default Navbar