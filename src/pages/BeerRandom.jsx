import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

function BeerRandom() {

  //1. configurar el acceso a navegacion
  const navigate = useNavigate ()

  //2. crear el estado que va a guardar la info

  const [beerRandom, setBeerRandom] = useState(null)
  const [buscando, setBuscando] = useState(true) 

  //3. Component DidMoun

  useEffect(()=>{

    getBeerRandom()


  }, [])

  //4. funcion para llamar a la api y random

  const getBeerRandom = async () =>{

      try{

        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        console.log(response.data)
        setBeerRandom(response.data)
        setBuscando(false)


      }catch(err){
        navigate("/error")
      }

  }

  //5. crear efecto loading

  if(buscando === true){
    return <PulseLoader color={"yellow"}/>
  }



  return (
    <div class="containerDetail">
  
          <img src={beerRandom.image_url} alt="beerDetail" width={"50px"}/>
             <h3>{beerRandom.name}</h3>
             <p>{beerRandom.tagline}</p>
             <p>{beerRandom.first_brewed}</p>
             <p>{beerRandom.attenuation_level}</p>
             <p>{beerRandom.description}</p>
             <p>{beerRandom.contributed_by}</p>

        
    </div>
  )
}

export default BeerRandom