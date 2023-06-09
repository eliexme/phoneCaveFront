import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios'

export default function PhoneList() {
    const [allData, setAllData] = useState()

    const axiosData = async() =>{
        try {
            const response = await axios.get('http://localhost:5005/phones')
            if(response.status === 200){
                setAllData(response.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        axiosData()
    }, [])

    useEffect(()=>{
        console.log(allData)
    },[allData])

  return (
    <div>
        {allData ? (
            allData.map((eachPhone)=>{
                return <h2>{eachPhone.name}</h2>
            })

            ) 
        
        : (<p>Loading</p>)}
    </div>
  )
}