import React from "react";
import enlargedCustomer from "../images/EnlargedCustomer.svg";
import microImg1 from "../images/Customer1.svg";
import microImg2 from "../images/Customer2.svg";
import microImg3 from "../images/Customer3.svg";
import microImg4 from "../images/Customer4.svg";
import comma from "../images/commaIcon.svg";
// import '../styles/customCss.css'
const ClientReviewSection = () => {
  return (
    <>
    <div className="mb-[154px]">
      <div className="container items-center">
        <div className="row1 flex-col items-center">
          <div className="pb-[30px] ">
            <h2 className=" title-border before:bg-[#000000]">
              What Our Clients Say About
              <span className="font-bold"> Younique Coaching</span>
            </h2>
          </div>
          <div className="row1">
            <div className="col-3">
              <img
                src={enlargedCustomer}
                className="max-h-[304px] w-auto"
                alt="Customer"
              />
            </div>
            <div className="col-7 flex flex-col">
              <p className="text-black font-bold">Richard Fimmano</p>
              <div className="sm text-[#444444]">
                Recruitment Consultant | Construction & Fitout
              </div>
              <div className="pt-[40px]">
              <img src={comma} className="max-h-[39.95px] w-auto" alt="CommaIcon" />
            </div>
            <h5 className='font-light pt-[16px]'>I am honestly struggling to put into words how great Sophie has been for my growth and development. The knowledge and wisdom she comes with has taught me so much in such little time. I absolutely love her delivery and teaching methods, everything about it I can not fault. I absolutely love her delivery and teaching methods, everything about it I</h5>
            <div className='sm underline text-black font-semibold pt-[16px]'>Read more</div>
            </div>
            <div className="col-2 flex flex-col hidden md:block ">
            <img src={microImg1} className="max-h-[60px] w-auto pb-[16px]" alt='customer1' />
                 <img src={microImg2} className="max-h-[60px] w-auto pb-[16px]" alt='customer 2'/>
                 <img src={microImg3} className="max-h-[60px] w-auto pb-[16px]" alt='customer 3'/>
                 <img src={microImg4} className="max-h-[60px] w-auto" alt='customer 4'/>
            </div>
           
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ClientReviewSection;
