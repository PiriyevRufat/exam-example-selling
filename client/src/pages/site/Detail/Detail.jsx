import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../context/context'
import axios from 'axios'

const Detail = () => {
    const {id} =useParams
    const {addToBasket}=useContext(MainContext)
    const [data,setData]=useState({})
    useEffect(()=>{
        axios.get('http://localhost:8080/{id}')
    })
  return (
    <div>
      
    </div>
  )
}

export default Detail
