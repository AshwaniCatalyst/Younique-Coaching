import React from 'react'
import enlargedCustomer from '../images/EnlargedCustomer.svg'
import microImg1 from '../images/Customer1.svg'
import microImg2 from '../images/Customer2.svg'
import microImg3 from '../images/Customer3.svg'
import microImg4 from '../images/Customer4.svg'
import comma from '../images/commaIcon.svg'
// import '../styles/customCss.css'
const ClientReviewSection = () => {
  return (
    <div className='grid grid-rows-2 pt-[160px] pb-[154px]'>
      <div className=''>
        <h2 className=' ml-[176px] pl-[34px] border-l-4 border-black'>What Our Clients Say About <br/><span className='font-bold'>Younique Coaching</span></h2>
        </div>
        <div className='grid grid-cols-4 place-content-center '>
            <div className='grid place-items-center'><img src={enlargedCustomer} alt='Customer1'/></div>
            <div className='col-span-2 grid'>
                <div className='pb-[40px]'>
                <p className='text-black font-bold'>Richard Fimmano</p>
                <div className='sm text-[#444444]'>Recruitment Consultant | Construction & Fitout</div>
                </div>
                <div>
                <img src={comma} alt='CommaIcon'/>
                </div>
                <h5 className='font-light'>I am honestly struggling to put into words how great Sophie has been for my growth and development. The knowledge and wisdom she comes with has taught me so much in such little time. I absolutely love her delivery and teaching methods, everything about it I can not fault. I absolutely love her delivery and teaching methods, everything about it I</h5>
                <div className='sm underline text-black font-semibold'>Read more</div>
            </div>
            <div className='grid  place-items-center'>
                <img src={microImg1} alt='customer1' />
                <img src={microImg2} alt='customer 2'/>
                <img src={microImg3} alt='customer 3'/>
                <img src={microImg4} alt='customer 4'/>
            </div>
        </div>
    </div>
  )
}

export default ClientReviewSection
