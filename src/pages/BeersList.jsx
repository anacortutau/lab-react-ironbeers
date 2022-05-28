
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PulseLoader from "react-spinners/PropagateLoader";

function BeersList() {


  //1. configurar el acceso a navegacion
  const navigate = useNavigate ()

  //2. crear el estado que va a guardar la info

  const [beersList, setBeersList] = useState(null)
  const [buscando, setBuscando] = useState(true)

  //3. acceder al componente DidMoun

  useEffect(() =>{
    getBeersList()
  }, [])

  //4. Crear la funcion que sera invocada en componentDidMoun
  const getBeersList = async() =>{
      try{
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        console.log(response.data)
        setBeersList(response.data)
        setBuscando(false)
      }catch(err){
        navigate("/error")
      }


  }

  //5. crear efecto de Loading

  if(buscando === true){
    return <PulseLoader color={"yellow"}/>
  }



  return (
    <div>

        {
          beersList.map((eachBeer)=>{
            return (

             

                <Link key={eachBeer._id} to={`/beers/${eachBeer._id}/details`}>
                <img src={eachBeer.image_url} alt="beer" width={"50px"} />
                <h3>{eachBeer.name}</h3>
                <p>{eachBeer.tagline}</p>
                <p>{eachBeer.contributed_by}</p>


                </Link>
             
            )
          })
        }


    </div>
  )
}

export default BeersList