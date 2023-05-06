import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CrouselSection from '../components/crouselSection'
import HeroSection from '../components/HeroSection'
import OurServices from '../components/OurServices'

const index = () => {
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <OurServices/>
   <CrouselSection/>
   <Footer/>
    </>
  )
}

export default index
