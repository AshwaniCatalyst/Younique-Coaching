import React, { useState } from "react";
import enlargedCustomer2 from "../images/EnlargedCustomer.svg";
import enlargedCustomer1 from "../images/EnlargedCustomer1.png";
import enlargedCustomer3 from "../images/EnlargedCustomer3.png";
import enlargedCustomer4 from "../images/EnlargedCustomer4.jpeg";
import microImg1 from "../images/Customer1.png";
import microImg2 from "../images/Customer2.jpeg";
import microImg3 from "../images/Customer3.png";
import microImg4 from "../images/Customer4.jpeg";
import comma from "../images/commaIcon.svg";
// import '../styles/customCss.css'
const ClientReviewSection = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="container flex justify-center  mb-[180px] md:mb-[100px]">
        <div className="row1 w-full  pb-[270px] md:pb-[240px]">
        <div className="text-[56px] font-light leading-[64px] pb-[30px] max-w-[304px] md:max-w-[653px] ">
              <h2 className=" title-border  before:bg-[#000000] ">
                What Our Clients Say About
                <span className="font-bold"> Younique Coaching</span>
              </h2>
            </div>
          <div className="col-11   ">
            <div
              className={
                toggleState === 1 ? "content active-content" : "content"
              }
            >
              <div className=" flex flex-col md:flex-row ">
                <div className="col-12 md:max-w-[25%] pr-[40px]  ">
                  
                    <img
                      src={enlargedCustomer1}
                      className="h-auto max-w-[160px] md:max-w-[304px] rounded-full md:rounded-none"
                      alt="Customer"
                    />
                  
                </div>
                <div className="col-12 md:max-w-[75%]  flex flex-col max-h-[180px] pl-[40px]">
                  <div className=" md:order-3 lg:order-2">
                  <p className="text-black font-bold">Jacob Hawkins</p>
                  <div className="sm text-[#444444]">
                  MSc, BSc (hons). FACEM & ACEM Trainee locum healthcare recruiter
                  </div>
                  </div>
                  <div className=" md:order-2 lg:order-3 ">
                  <div className="pt-[40px]">
                    <img
                      src={comma}
                      className="max-h-[39.95px] w-auto"
                      alt="CommaIcon"
                    />
                  </div>
                  <h5 className="font-light pt-[16px] leading-9">
                  Having finished 5 coaching sessions with Sophie in early August 2022, I began running my senior Dr recruitment desk. I set myself the target of billing a certain amount per month by the end of the year and ended up achieving it that month! Sophie’s experience, tips and methods...
                  </h5>
                  <div className="sm underline text-black hover:text-[#F03023] font-semibold pt-[16px]">
                    <a href="#" className="text-[#000000]">
                      {" "}
                      Read more
                    </a>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 2 ? "content active-content" : "content"
              }
            >
              <div className=" flex flex-col md:flex-row ">
                <div className="col-12 md:max-w-[25%] pr-[40px]">
                  
                    <img
                      src={enlargedCustomer2}
                      className="h-auto max-w-[160px] md:max-w-[304px] rounded-full md:rounded-none"
                      alt="Customer"
                    />
                  
                </div>
                <div className="col-12 md:max-w-[75%] flex flex-col max-h-[180px] pl-[40px]">
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
                    <a href="#" className="text-[#000000]">
                      {" "}
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 3 ? "content active-content" : "content"
              }
            >
              <div className="flex flex-col md:flex-row ">
                <div className="col-12 md:max-w-[25%] pr-[40px]">
                  
                    <img
                      src={enlargedCustomer3}
                      className="h-auto max-w-[160px] md:max-w-[304px] rounded-full md:rounded-none"
                      alt="Customer"
                    />
                  
                </div>
                <div className="col-12 md:max-w-[75%] flex flex-col max-h-[180px] pl-[40px]">
                  <p className="text-black font-bold">Kate Rowe</p>
                  <div className="sm text-[#444444]">
                  CHRP LLBKate Rowe, CHRP LLB
                  </div>
                  <div className="pt-[40px]">
                    <img
                      src={comma}
                      className="max-h-[39.95px] w-auto"
                      alt="CommaIcon"
                    />
                  </div>
                  <h5 className="font-light pt-[16px] leading-9">
                  I wanted to let you know I am 12 months into the AHRI APC course and I thought of you today. We were asked about training we have received throughout our careers which have been a effective, and I talked about you and the impact you have had. I...
                  </h5>
                  <div className="sm underline text-black hover:text-[#F03023] font-semibold pt-[16px]">
                    <a href="#" className="text-[#000000]">
                      {" "}
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 4 ? "content active-content" : "content"
              }
            >
              <div className="flex  flex-col md:flex-row">
                <div className="col-12 md:max-w-[25%] pr-[40px]">
                  
                    <img
                      src={enlargedCustomer4}
                      className="h-auto max-w-[160px] md:max-w-[304px] rounded-full md:rounded-none"
                      alt="Customer"
                    />
                </div>
                <div className="col-12 md:max-w-[75%] flex flex-col max-h-[180px] pl-[40px]">
                  <p className="text-black font-bold">Michelle Barrett</p>
                  <div className="sm text-[#444444]">
                  Leading the temporary function at Lotus People
                  </div>
                  <div className="pt-[40px]">
                    <img
                      src={comma}
                      className="max-h-[39.95px] w-auto"
                      alt="CommaIcon"
                    />
                  </div>
                  <h5 className="font-light pt-[16px] leading-9">
                  I have attended Sophie’s masterclasses many times and always learn something new. I love Sophie’s incredible storytelling, no-nonsense approach and find that her hands-on experience makes her training relatable as she has been through it all herself. I have also read her book more times than I can count,...
                  </h5>
                  <div className="sm underline text-black hover:text-[#F03023] font-semibold pt-[16px]">
                    <a href="#" className="text-[#000000]">
                      {" "}
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1 flex-col hidden md:flex">
            <div
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <img
                src={microImg1}
                className="cursor-pointer h-auto max-w-[60px] pb-[16px]"
                alt="customer1"
              />
            </div>
            <div
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <img
                src={microImg2}
                className="cursor-pointer h-auto max-w-[60px] pb-[16px]"
                alt="customer 2"
              />
            </div>
            <div
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <img
                src={microImg3}
                className="cursor-pointer h-auto max-w-[60px] pb-[16px]"
                alt="customer 3"
              />
            </div>
            <div
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              <img
                src={microImg4}
                className="cursor-pointer h-auto max-w-[60px]"
                alt="customer 4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReviewSection;
