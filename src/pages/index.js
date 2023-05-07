import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import CrouselSection from '../components/crouselSection'
import HeroSection from '../components/HeroSection'
import OurServices from '../components/OurServices'
import ClientReviewSection from '../components/ClientReviewSection'
import VideoSection from '../components/VideoSection'

const index = () => {
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <OurServices/>
   <ClientReviewSection/>
   <VideoSection/>
   {/* <CrouselSection/> */}
   <Footer/>
    </>
  )
}

export default index
