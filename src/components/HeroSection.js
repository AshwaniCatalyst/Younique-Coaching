import React from "react";
import heroSectionImg from "../images/heroSectionLady.svg";
import { Button } from "@mui/material";
import arrow from "../images/btnArrow.svg";
// import "../styles/customCss.css";
const HeroSection = () => {
  return (
    <>
      <div className="heroSection">
        <div className="container pt-[58px]">
          <div className="row1   items-center ">
            <div className="col-7 row1 gap-4">
              <h1>
                Powerful solutions for recruitment <span className="text-[#F03023] font-bold">professionals</span> and <span className="text-[#F03023] font-bold">businesses</span>
              </h1>
              <div className="lgText text-[#444444] ">
                Explore the many varied options for you to grow your skills,
                your team and your business
              </div>
              <div className="pt-8">
              <button className="actionBtn  gap-4">Book a Call <img src={arrow} className="max-w-[16px] max-h-[12px]" alt="btnarrow"/></button>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-4 ">
              <img src={heroSectionImg} alt="lady Image" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-full border flex items-center ">
        
          <div className="container row1">
            <div className="bg-white col-1">
              <div>
                <h1>
                  Powerful solutions for recruitment professionals and
                  businesses
                </h1>
                <div className="lgText">
                  Explore the many varied options for you to grow your skills,
                  your team and your business
                </div>
                <button>BOOK A CALL</button>
              </div>
            </div>
            <div className="bg-[red] col-3">
              <div className="max-w-[416px] max-h-[647.54px] ">
                <img src={heroSectionImg} alt="lady Image" />
              </div>
            </div>
          </div>
      </div> */}
      {/* <div className="flex flex-col  z-10 absolute w-[45%]  top-[25%] pl-[64px] pb-[150px]"></div> */}

      {/* <div>
      <div className="grid grid-cols-5">
        <div className="col-span-1"></div>
        <div className="grid col-span-4 bg-[#F9F3DC] h-[80vh]  -z-10"></div>
      </div>
      <div className="relative top-[50%] flex justify-between max-w-[1440px] border">
          <div className="flex flex-col gap-4">
            <h1>
              Powerful solutions for recruitment{" "}
              <span className="text-[#F03023] font-bold">professionals</span>{" "}
              and <span className="text-[#F03023] font-bold">businesses</span>
            </h1>
            <h6 className="text-[#444444]">
              Explore the many varied options for you to grow your skills, your
              team and your business
            </h6>
            <button className=" actionBtn  gap-4">
              BOOK A CALL <img src={arrow} alt="arrow" />
            </button>
          </div>
          <div className="max-w[416px] max-h-[647px]">
            <img
              src={heroSectionImg}
              alt="ladyImage"
              className="relative left-[65%] pt-[52px]"
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
