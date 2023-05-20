import React from "react";
import heroSectionImg from "../images/heroSectionLady.svg";
import mobLadyImg from '../images/mob-hero-lady.svg'
import arrow from "../images/btnArrow.svg";
const HeroSection = () => {
  return (
    <>
      <div className="heroSection pt-[120px] mb-[-60px]  md:mb-[150px]">
        <div className="container flex justify-center">
          <div className="row1 w-full  pt-[51px] flex-row  justify-center  items-center ">
            <div className="col-12 md:max-w-[58.333333%] flex flex-col mb-[38px]">
              <h1 className="mb-4 sm:h1-l max-w-[329px] md:max-w-[751px] ">
                Powerful solutions for recruitment{" "}
                <span className="text-[#F03023] font-bold">professionals</span>{" "}
                and <span className="text-[#F03023] font-bold">businesses</span>
              </h1>
              <div className="lgText text-[#444444] max-w-[329px] md:max-w-[751px]">
                Explore the many varied options for you to grow your skills,
                your team and your business
              </div>
              <div className="pt-[48px]">
                <button className="actionBtn pt-[10px] pb-[10px] pl-[24px] pr-[24px]">
                  Book a Call{" "}
                  <img
                    src={arrow}
                    className="max-w-[16px] max-h-[12px] ml-[14px]"
                    alt="btnarrow"
                  />
                </button>
              </div>
            </div>
            <div className="col-5 max-[575px]:hidden flex ">
              <img src={heroSectionImg} className="max-h-[647.54px] w-auto ml-auto"  alt="lady Image" />
            </div>
            <div className="col-5 max-[575px]:flex hidden  ">
              <img src={mobLadyImg} className="max-h-[647.54px] w-auto ml-auto"  alt="lady Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
