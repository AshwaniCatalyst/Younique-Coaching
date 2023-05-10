import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import CrouselSection from '../components/crouselSection'
import HeroSection from '../components/HeroSection'
import OurServices from '../components/OurServices'
import ClientReviewSection from '../components/ClientReviewSection'
import VideoSection from '../components/VideoSection'
import ResourceSection from '../components/ResourceSection'
import CarouselSection from '../components/CarouselSection'
import PreFooterSection from '../components/PreFooterSection'

const index = () => {
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <OurServices/>
   <ClientReviewSection/>
   <VideoSection/>
   <ResourceSection/>
   <CarouselSection/>
   <PreFooterSection/>
   {/* <CrouselSection/> */}
   <Footer/>
    </>
  )
}

export default index
