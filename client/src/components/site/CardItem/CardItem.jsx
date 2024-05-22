import React, { useContext, useState } from 'react'
import MainContext from '../../../context/context'
import { Link, useNavigate } from 'react-router-dom'
import './CardItem.css'
const CardItem = ({item}) => {
    const [data,setData]=useState([])
    const {addToBasket}=useContext(MainContext)
    const navigate = useNavigate()
  return (
    <div className='col-4 mr-5 my-card'>
      <div className='mycard-img'>
      <a href=""><img src={item.image} width="370px" height="220px" alt="" /></a>
      </div>
      <div className='my-card-text'>
      <a href=""><h4>{item.name}</h4></a>
      <a href=""><p>{item.title}</p></a>
      <p>{item.price}.00$</p>
      <div className='functional-btn'>
      <button onClick={() => addToBasket(item)} className='cart-btn'>CART</button>
      <button className='view-btn' onClick={() => navigate(`${item._id}`)}>VIEW</button><br />
      </div>
      </div>
    </div>
  )
}

export default CardItem
