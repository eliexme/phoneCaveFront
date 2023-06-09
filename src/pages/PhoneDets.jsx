import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function PhoneDets() {
    const {id} = useParams()
    const [oneData, setOneData] = useState()

    const axiosData = async() =>{
        try {
            const response = await axios.get(`http://localhost:5005/phones/${id}`)
            if(response.status === 200){
                setOneData(response.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        axiosData()
    }, [])

  return (
    <div>
    <Link to={'/'}>Home page</Link>
        {oneData ? (
            <>
                <h1>{oneData[0].name}</h1>
                <p>Color: {oneData[0].color}</p>
                <p>Description: {oneData[0].description}</p>
                <p>Manufacturer: {oneData[0].manufacturer}</p>
                <p>Price: {oneData[0].price}</p>
                <p>Processor: {oneData[0].processor}</p>
                <p>Ram: {oneData[0].ram}</p>
                <p>Screen: {oneData[0].screen}</p>
                <img src={`/public/images/${oneData[0].imageFileName}`}/>
            </>
            
            ) 
        
        : (<p>Loading!</p>)}
    </div>
  )
}
