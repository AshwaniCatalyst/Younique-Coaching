import React from "react";
import resourceImg from '../images/resourceImg.svg'
const ResourceSection = () => {
  return (
    <>
      <div className="pt-[70px] pb-[58px] md:pt-[160] md:pb-[100px] ">
        <div className="container ">
        <div className=" max-w-[814px] m-auto ">
        <div className=" title-border  max-w-[392px] before:bg-[#000000] mb-[40px]">
            
            <h2 className="font-black">Resources</h2>
            <div className="lgText">
              Everything you need to know about how to set up and grow an
              on-hire temp and contractor desk
            </div>
          </div>
          <div className="row1  m-auto" >
            <div className="col-12   md:max-w-[41.666667%] p-0 border  ">
              <img src={resourceImg} className="w-full max-h-[513px] object-center object-cover" alt="Product Image"/>
            
            </div>
            <div className="  col-12 md:max-w-[58.333333%] mt-[24px] md:mt-0  flex justify-center md:justify-normal items-center  ">
              <div className="  flex flex-col  max-w-[416px] md:ml-[32px]">
              <div className="smText font-bold">BOOK</div>
              <h3 className="mt-[22px] self-stretch text-[40px] font-black leading-[48px]">Secrets To Running A Lucrative Temp Desk</h3>
              <div className="smText font-normal text-[#444444] mt-[8px]">By Sophie Robertson (Author) </div>
              <div className="mdText font-normal self-stretch text-[#444444] pt-[16px] ">In this comprehensive book full of real-life case studies and based on many years of personal experience and success, Sophie Robertson outlines the processes involved in running a highly lucrative temp desk, which will both strengthen your client relationships and ensure you become the employer of choice for top-quality temps.</div>
              <button className="border-2 hover:bg-[#F03023] hover:text-[#ffffff] hover:border-[#f03023] border-black 
              pt-[13px] pb-[13px] pl-[30px] pr-[30px] max-w-full md:max-w-[180px] md:max-h-[48px] leading-[24px] md:leading-[22px] text-[14px] font-bold 
              mt-[25px] uppercase">buy now $49.99</button>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default ResourceSection;
