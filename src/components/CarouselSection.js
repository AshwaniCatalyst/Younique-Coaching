import React from 'react'
import commaIcon from "../images/commaIcon.svg";
import arrowL from "../images/Arrowleft.svg";
import arrowR from "../images/Arrowright.svg";
import divider from "../images/divider.svg";
import crsl1 from '../images/crsl-1.svg'

const CarouselSection = () => {
  return (
    <>
     <div className="carouselSection pt-[100px] pb-[100px] mb-[100px] ">
        <div className='container'>
            <h3 className='max-w-[363px]'>What People Say About Book</h3>
            <div className='row1 items-center'>
                <div className='col-6 flex flex-col'>
                    <div className='mdText '>Sinead Connelly</div>
                    <div className='smText'>Co-founder and Director, Lotus People</div>
                    <img src={commaIcon} className='max-w-[42px] max-h-[32px] pt-[32px]' alt='quotesIcon'/>
                    <div className="smText font-light leading-[36px] text-[#000000] pt-[16px] max-h-[288px] max-w-[649px]">I couldn’t recommend Sophie’s book more. As an inexperienced recruitment consultant over ten years ago, I leant on Sophie’s guidance and advice shared in this book to develop the traits of a high performing consultant. Fast forward to my role now as a business owner and I ensure that all of my temp team receive a copy of ‘how to run a lucrative temp desk’. Their enthusiasm for the book is as strong as mine was as a consultant! With solid tips,...</div>
                    <div className='row1 items-center  pt-[41px]'>
                    <div className='col-6'><a href='#' className='underline pt-[41px]'>Read more</a></div>
                    <div className='col-6 '>
                    <div className="flex max-w-[96px] max-h-[24px] items-center ">
                <img src={arrowL} className='pr-[14px] cursor-pointer' alt="arrowLeft" />
                <img src={divider} className='pl-[14px] pr-[14px]' alt="divider" />
                <img src={arrowR} className='pl-[14px] cursor-pointer' alt="arrowRight" />
              </div>
                    </div>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={crsl1} className='max-w-[467px] max-h-[500px]' alt='Customer Image'/>
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default CarouselSection
