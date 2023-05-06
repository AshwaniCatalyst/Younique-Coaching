import React from "react";
import heroSectionImg from "../images/heroSectionLady.svg";
import { Button } from "@mui/material";
import arrow from "../images/btnArrow.svg";
const HeroSection = () => {
  return (
    <>
    <div className="flex flex-col gap-[48px] z-10 absolute w-[45%] top-[25%] pl-[64px] pb-[150px]">
          <div className="flex flex-col gap-4">
            <h1>
              Powerful solutions for recruitment{" "}
              <span className="text-[#F03023] font-bold">professionals</span> and{" "}
              <span className="text-[#F03023] font-bold">businesses</span>
            </h1>
            <h6 className="text-[#444444]">Explore the many varied options for you to grow your skills, your team and your business</h6>
          </div>
          <div>
            <button  className=" actionBtn gap-4">
              BOOK A CALL <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      <div className="grid grid-cols-5">
        <div></div>
        <div className="grid col-span-4 bg-[#F9F3DC]  -z-10">
          <img src={heroSectionImg} alt="ladyImage" className="relative left-[65%] pt-[52px]" />
        </div>
        
      </div>
    </>
  );
};

export default HeroSection;
