import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

function BeerDetail() {

    //1. configurar el acceso a navegacion
    const navigate = useNavigate()

    //2. creamos el estado que va a guardar la info

    const [beerDetails, setBeerDetails] = useState(null)
    const [buscando, setBuscando] = useState(true)
    const {beerId} = useParams()

    //3. componente de DidMoun

    useEffect(()=>{
      getBeerDetails()

    }, [])

    //4. Funcion para llamar a la API

    const getBeerDetails = async()=>{


        try{

          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          console.log(response.data)
          setBeerDetails(response.data)
          setBuscando(false)

        }catch(err) {

          navigate("/error")
        }

    }

    if(buscando === true){
      return <PulseLoader color={"yellow"}/>
    }


  return (
           <div>
             <img src={beerDetails.image_url} alt="beerDetail" width={"50px"}/>
             <h3>{beerDetails.name}</h3>
             <p>{beerDetails.tagline}</p>
             <p>{beerDetails.first_brewed}</p>
             <p>{beerDetails.attenuation_level}</p>
             <p>{beerDetails.description}</p>
             <p>{beerDetails.contributed_by}</p>

             </div>
  )
}

export default BeerDetail