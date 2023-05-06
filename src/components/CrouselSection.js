import React from "react";
import commaIcon from "../images/commaIcon.svg";
import arrowL from "../images/Arrowleft.svg";
import arrowR from "../images/Arrowright.svg";
import divider from "../images/divider.svg";
const CrouselSection = () => {
  return (
    <>
      <div className="grid grid-flow-row grid-cols-3">
        <div className="grid col-span-2 bg-[#F9F3DC] pt-[100px] pb-[100px] pl-[174px] pr-[250px]  gap-3">
          <h1>What People Say About Book</h1>
          <p className="font-bold text-[#000000]">Sinead Connelly</p>
          <div>Co-founder and Director, Lotus People</div>
          <div>
            <img src={commaIcon} alt="commaIcon" />
          </div>
          <div className="text-justify">
            I couldn’t recommend Sophie’s book more. As an inexperienced
            recruitment consultant over ten years ago, I leant on Sophie’s
            guidance and advice shared in this book to develop the traits of a
            high performing consultant. Fast forward to my role now as a
            business owner and I ensure that all of my temp team receive a copy
            of ‘how to run a lucrative temp desk’. Their enthusiasm for the book
            is as strong as mine was as a consultant! With solid tips,...
          </div>
          <div className="flex justify-between pt-[41px]">
            <div>Read More</div>
            <div>
              <div className="flex gap-14 ">
                <img src={arrowL} alt="arrowLeft" />
                <img src={divider} alt="divider" />
                <img src={arrowR} alt="arrowRight" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrouselSection;
