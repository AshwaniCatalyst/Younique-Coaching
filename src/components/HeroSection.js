import React from "react";
import heroSectionImg from "../images/heroSectionLady.svg";
import arrow from "../images/btnArrow.svg";
const HeroSection = () => {
  return (
    <>
      <div className="heroSection mb-[150px]">
        <div className="container">
          <div className="row1 pt-[51px]   items-center ">
            <div className="col-7 flex flex-col">
              <h1 className="mb-4">
                Powerful solutions for recruitment{" "}
                <span className="text-[#F03023] font-bold">professionals</span>{" "}
                and <span className="text-[#F03023] font-bold">businesses</span>
              </h1>
              <div className="lgText text-[#444444] ">
                Explore the many varied options for you to grow your skills,
                your team and your business
              </div>
              <div className="pt-[48px]">
                <button className="actionBtn  gap-4">
                  Book a Call{" "}
                  <img
                    src={arrow}
                    className="max-w-[16px] max-h-[12px]"
                    alt="btnarrow"
                  />
                </button>
              </div>
            </div>
            <div className="col-5 ">
              <img src={heroSectionImg} className="h-[647.54px] w-auto ml-auto"  alt="lady Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
