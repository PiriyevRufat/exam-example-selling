import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div  className='herosection'>
        <div className="container">
            <div className="row">
                <div className="col-7 hero-desc">
                    <h1>Shop With Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                    <div className='hero-buttons'>
                        <a href="" className='shop-btn'>SHOP NOW</a>
                        <a href="" className='club-btn'>CLUB MEMBERSHIP</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
