import React from "react";
import arrow from "../images/btnArrow.svg";

const PreFooterSection = () => {
  return (
    <>
      <div className="pt-[60px] pb-[60px] md:pb-[100px]">
        <div className="container flex flex-col items-center">
          <h2 className="max-w-[328px] text-[36px] leading-[44px] font-light md:max-w-[864px] lg:h2 h-auto text-center">
            Let's work together to grow you and your
            <span className="font-bold"> business</span>
          </h2>

          <button className="actionBtn flex  mt-[40px] w-[257px] pt-[18px] pb-[18px] pl-[24px] pr-[24px] max-h-[46px]
           lg:pl-[26px] lg:pr-[28px] lg:w-[325px] lg:max-h-[64px] lg:justify-center
          ">
            <div className=" text-[18px] font-semibold leading-[26px] text-center
              lg:text-[20px]   
              ">
              Work with Sophie
            </div>
            <div className="max-w-[16px] max-h-[12px] ml-[14px]">
              <img src={arrow} alt="btnarrow" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default PreFooterSection;
