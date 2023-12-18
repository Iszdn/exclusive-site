import React, { useEffect, useState } from 'react'
import DetailsCard from '../../components/HomePageComponents/DetailsCard'
import { useParams } from 'react-router-dom'

const Details = () => {
    const [data, setData] = useState([])
  const {id}=useParams()
  useEffect(() => {
    fetch("http://localhost:3000/products/"+id).then(res=>res.json()).then(data=>setData(data))
  }, [])

  return (
    <>
    {
data && 
   
   <DetailsCard image={data.image} title={data.title} price={data.price} des={data.des} rating={data.rating}/>
         }</> 
  )
}

export default Details