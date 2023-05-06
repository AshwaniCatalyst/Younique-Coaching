import React from 'react'
import crd1 from '../images/c11.svg'
import crd2 from '../images/c1.svg'
import crd3 from '../images/c3.svg'
import crd4 from '../images/c4.svg'
const OurServices = () => {
  return (
    <>
     <div className='bg-white pt-[150px]'>
      <div className='tiltedContainer '> 
      <div className=' pt-[128px] pb-[100px] pl-[64px] pr-[64px] justify-center  flex-col flex gap-16'>
        <div>
        <h2 className=' ml-[176px] pl-[34px] border-l-4 border-black'>Our <br/><span className='font-bold'>Services</span></h2>
        </div>
        <div className='flex justify-evenly  '>
            <div className='flex flex-col justify-between'>
                <div className='max-w-[304px] '>
                <img src={crd1} alt='card-Image'/>
                <h5 className='pt-[16px] pb-[8px]'>MasterClass</h5>
                <p className='text-[#444444]'>Workshops where you can learn the tips and tools to be successful</p>
                </div>
                <p className='pt-40 underline font-semibold  text-[#F03023]'>Learn MORE</p>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='max-w-[304px] '>
                <img src={crd2} alt='card-Image'/>
                <h5 className='pt-[16px] pb-[8px]'>Coaching/Mentoring</h5>
                <p className='text-[#444444]'>One on one coaching to accelerate and cement your insights and learnings for rapid results</p>
                </div>
                <p className='pt-40 font-semibold underline text-[#F03023]'>Learn MORE</p>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='max-w-[304px] '>
                <img src={crd3} alt='card-Image'/>
                <h5 className='pt-[16px] pb-[8px]'>Training</h5>
                <p className='text-[#444444]'>Group bespoke training delivered via face-to-face or virtually</p>
                </div>
                <p className='pt-40 underline font-semibold text-[#F03023]'>Learn MORE</p>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='max-w-[304px] '>
                <img src={crd4} alt='card-Image'/>
                <h5 className='pt-[16px] pb-[8px]'>Advisory </h5>
                <p className='text-[#444444]'>You may be a start up or an established company looking for particular expertise on your Board or you may want someone to bounce ideas off as running a business can be a lonely affair</p>
                </div>
                <p className='pt-40 underline font-semibold text-[#F03023]'>Learn MORE</p>
            </div>
        </div>
      </div>
        </div>  
        </div> 
    </>
  )
}

export default OurServices
