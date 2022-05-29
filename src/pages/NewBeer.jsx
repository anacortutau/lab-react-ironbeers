import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'


function NewBeer() {

  //1. Configurar el acceso a la navegacion
  const navigate = useNavigate()

  //2. Creamos el estado que va a guardar la info

  const [nombre, setNombre] = useState("")
  const [eslogan, setEslogan] = useState("")
  const [descripción, setDescripcion] = useState("")
  const [first_brewed, setFirst_brewed] = useState("")
  const [brewers_tips, setBrewers_tips] = useState("")
  const [attenuation_level, setAttenuation_level] = useState(0)
  const [contribuido_por, setContribuidoPor] = useState("")

  const handleNombreChange = (e) => setNombre(e.target.value)
  const handleEsloganChange = (e)=> setEslogan(e.target.value)
  const handleDescripcion = (e)=> setDescripcion(e.target.value)
  const handleFirst_brewed = (e)=> setFirst_brewed(e.target.value)
  const handleBrewers_tips = (e)=> setBrewers_tips(e.target.value)
  const handleAttenuation_level = (e) => setAttenuation_level(e.target.value)
  const handleContribuido_por = (e) => setContribuidoPor(e.target.value)

  // 3. vamos a enviar la info para crear una nueva cerveza

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try {

        const nuevaCerveza = {
          nombre,
          eslogan,
          descripción,
          first_brewed,
          brewers_tips,
          attenuation_level,
          contribuido_por

        }

        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", nuevaCerveza)
        
        navigate("/beers")
  
        }catch(err){
          console.log(err)
        navigate("/error")
        }
}

  return (

    
    <div className="form">

      <h1>FORMULARIO</h1>
    
      <form onSubmit = {handleSubmit}>

     
      <label  id="nombre" htmlFor="nombre">Name</label>
      <input class="controls" type="text" onChange = {handleNombreChange} name="nombre" value={nombre} />

      <br />
      
      <label id="eslogan" htmlFor="eslogan">Eslogan</label>
      <input class="controls" type="text" onChange = {handleEsloganChange} name="eslogan"  value={eslogan} />
      
      <br />
      
      
      <label id="descripcion" htmlFor="descripción">Descripcion</label>
      <input class="controlsDescripcion" type="text" onChange = {handleDescripcion} name="descripción"  value={descripción} />
  
      
      <br />
       

        
      <label id="first_brewed" htmlFor="first_brewed">Primera elaboracion</label>
      <input class="controls" type="text" onChange = {handleFirst_brewed} name="first_brewed"  value={first_brewed} />
      
      <br />
      
      <label id="brewers_tips" htmlFor="brewers_tips">Consejos para cerveceros</label>
      <input class="controls" type="text" onChange = {handleBrewers_tips} name="brewers_tips"  value={brewers_tips} />
      
      <br />
     
      <label id="attenuation_level" htmlFor="attenuation_level">Nivel Atenuacion</label>
      <input class="controls" type="number" onChange = {handleAttenuation_level} name="attenuation_level"  value={attenuation_level} />
      

      <br />
      
      <label id="contribuido_por" htmlFor="contribuido_por">Contribuido por</label>
      <input class="controls" type="text" onChange = {handleContribuido_por} name="contribuido_por"  value={contribuido_por} />
     
      

      <button class="boton">Añadir</button>
      


      </form>
      
    </div>

   
  )

}

export default NewBeer