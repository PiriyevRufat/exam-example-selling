import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../context/context'
import axios from 'axios'

const Detail = () => {
    const {id} =useParams()
    const {addToBasket}=useContext(MainContext)
    const [dat,setDat]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8080/${id}`).then(res=>{
            setDat({...res.data})
        })
    },[])
  return (
    <div className="container">
        <div className="row">
            <div className='detcard-img'>
                <img src={dat.image} alt="" />
            </div>
            <h5>{dat.name}</h5>
            <span>{dat.title}</span>
            <p>{dat.price}.00$</p>
            <button onClick={() => addToBasket(dat)} className='cart-btn'>CART</button>
        </div>
    </div>
  )
}

export default Detail
