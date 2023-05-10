import React from "react";
import resourceImg from '../images/ResourceSectionImage.svg'
const ResourceSection = () => {
  return (
    <>
      <div className="pt-[60px] pb-[100px]">
        <div className="container">
          <div className="title-border max-w-[392px] before:bg-[#000000]">
            <h2 className="font-black">Resources</h2>
            <div className="lgText">
              Everything you need to know about how to set up and grow an
              on-hire temp and contractor desk
            </div>
          </div>
          <div className="row1" >
            <div className="col-6 resourceSectionImage   flex justify-center ">
              <img src={resourceImg} className="max-h-[412px] max-w-[273px]" alt="Product Image"/>
            </div>
            <div className="col-6 flex items-center ">
              <div className="flex flex-col max-w-[416px] pl-[32px]">
              <div className="smText font-bold">BOOK</div>
              <h3 className="pt-[22px] font-black leading-10">Secrets To Running A Lucrative Temp Desk</h3>
              <div className="smText font-normal text-[#444444] pt-[8px]">By Sophie Robertson (Author) </div>
              <div className="mdText  text-[#444444] pt-[16px]">In this comprehensive book full of real-life case studies and based on many years of personal experience and success, Sophie Robertson outlines the processes involved in running a highly lucrative temp desk, which will both strengthen your client relationships and ensure you become the employer of choice for top-quality temps.</div>
              <a href="#" ><button className="border-2 hover:bg-[#F03023] hover:text-[#ffffff] hover:border-0 border-black pt-[13px] pb-[13px] pl-[32px] pr-[32px] max-w-[180px] smText font-bold mt-[25px]">buy now $49.99</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceSection;
