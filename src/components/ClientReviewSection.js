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
      <div className="pb-[154px] ">
        <div className="container items-center">
          <div className="row1 flex-col flex-wrap items-center sm:pb-[270px] md:pb-[140px]">
            <div className="pb-[30px] ">
              <h2 className=" title-border  before:bg-[#000000] max-w-[853px]">
                What Our Clients Say About
                <span className="font-bold"> Younique Coaching</span>
              </h2>
            </div>
            <div className="row1">
              <div className="col-3">
                <div className=" pr-[40px]">
                <img
                  src={enlargedCustomer}
                  className="max-h-[304px] max-w-[304px]"
                  alt="Customer"
                />
                </div>
              </div>
              <div className="col-8 flex flex-col max-h-[180px] pl-[40px] ">
                <p className="text-black font-bold">Richard Fimmano</p>
                <div className="sm text-[#444444]">
                  Recruitment Consultant | Construction & Fitout
                </div>
                <div className="pt-[40px]">
                  <img
                    src={comma}
                    className="max-h-[39.95px] w-auto"
                    alt="CommaIcon"
                  />
                </div>
                <h5 className="font-light pt-[16px] leading-9">
                  I am honestly struggling to put into words how great Sophie
                  has been for my growth and development. The knowledge and
                  wisdom she comes with has taught me so much in such little
                  time. I absolutely love her delivery and teaching methods,
                  everything about it I can not fault. I absolutely love her
                  delivery and teaching methods, everything about it I
                </h5>
                <div className="sm underline text-black hover:text-[#F03023] font-semibold pt-[16px]">
                 <a href="#" className=""> Read more</a>
                </div>
              </div>
              <div className="col-1 flex-col hidden md:flex ">
                <img
                  src={microImg1}
                  className="max-h-[60px] max-w-[60px] pb-[16px]"
                  alt="customer1"
                />
                <img
                  src={microImg2}
                  className="max-h-[60px] max-w-[60px] pb-[16px]"
                  alt="customer 2"
                />
                <img
                  src={microImg3}
                  className="max-h-[60px] max-w-[60px] pb-[16px]"
                  alt="customer 3"
                />
                <img
                  src={microImg4}
                  className="max-h-[60px] max-w-[60px]"
                  alt="customer 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReviewSection;
