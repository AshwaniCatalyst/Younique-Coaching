import React from "react";
import heroSectionImg from "../images/heroSectionLady.svg";
import mobLadyImg from '../images/mob-hero-lady.svg'
import arrow from "../images/btnArrow.svg";
const HeroSection = () => {
  return (
    <>
      <div className="heroSection  mt-[32px] lg:mt-[0px]  mb-[60px] md:mb-[150px]">
        <div className="container flex flex-row  justify-center    pr-0 ">
          <div className="row1 w-full  pt-[51px]  flex flex-row      items-center  ">
            <div className="col-12  md:max-w-[58.333333%]  p-0   flex flex-col mb-[38px] ">
              <div className="w-full  md:max-w-[751px] ">
              <h1 className="mb-[16px] text-[40px] leading-[48px] md:text-[64px] md:leading-[72px]  font-light ">
                Powerful solutions for recruitment{" "}
                <span className="text-[#F03023] font-black md:font-bold">professionals</span>{" "}
                and <span className="text-[#F03023] font-black md:font-bold">businesses</span>
              </h1>
              <div className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] font-normal text-[#444444] max-w-[329px] md:max-w-[755px] ">
                Explore the many varied options for you to grow your skills,
                your team and your business
              </div>
              </div>
             
              <div className="mt-[32px] md:mt-[48px]">
                <button className="actionBtn pt-[18px] pb-[18px] pl-[48px] pr-[44px]">
                  Book a Call{" "}
                  <img
                    src={arrow}
                    className="max-w-[16px] max-h-[12px] ml-[14px]"
                    alt="btnarrow"
                  />
                </button>
              </div>
              
            </div>
            <div className="col-12 md:max-w-[41.666667%]  w-full   justify-center  hidden min-[768px]:flex">
              <div className="max-h-[252.95px] md:max-h-[647.54px] pt-[14.72px]   w-auto"> 
                <img src={heroSectionImg} className="h-full  w-full"  alt="lady Image" /></div>
              
            </div>
            <div className="col-12 md:max-w-[41.666667%]  w-full justify-center max-[767px]:flex hidden mobileHeroSection">
              <div className="max-h-[252.95px] md:max-h-[647.54px] pt-[14.72px]   w-auto">
              <img src={heroSectionImg} className="h-full w-full"  alt="lady Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
