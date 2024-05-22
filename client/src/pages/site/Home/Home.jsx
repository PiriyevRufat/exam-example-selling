import React from 'react'
import Hero from '../../../components/site/HeroSection/Hero'
import Crud from '../../../components/site/Crud/Crud'
import Leadership from '../../../components/site/Leadership/Leadership'
import Promo from '../../../components/site/PromoSection/Promo'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Crud/>
      <Leadership/>
      <Promo/>
    </div>
  )
}

export default Home
