import React from "react";
const VideoSection = () => {
  return (
    <>
      <div className="tiltedContainer   before:hidden md:before:block md:before:bg-[#F03023] after:bg-[#F03023] after:min-h-[100%] overflow-hidden md:after:min-h-[calc(100%-230px)] ">
        <div className="container  ">
          <div>
          <div className="row1 text-white  pt-[70px]  md:pt-[120px]">
            <div className="hidden md:flex col-4"></div>
            <div className="col-8">
              <div className="pb-[40px] max-w-[304px] md:max-w-[491px]">
                <h2 className="title-border text-[36px] leading-[44px] font-light md:text-[56px] md:leading-[64px] ml-0 before:bg-[#FFFFFF]">
                  Hear From
                  <span className="font-black inline-block"> Sophie Robertson</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row1 flex-col-reverse md:flex-row text-white items-center">
            <div className="col-12 md:max-w-[33.333333%]  flex flex-col items-center md:justify-end mt-[32px] md:mt-0">
              <div className="flex flex-col max-w-[516px]  ">
                <div className="flex flex-col text-white mb-[32px]">
                  <h3 className="text-[32px] leading-[40px] md:text-[40px] font-black md:leading-[48px] mb-[24px]">Recruitment Advisor and Coach</h3>
                  <h6 className="text-[18px] leading-[26px]  md:text-[20px] md:leading-[28px] font-normal">
                    I’m here to help you scale your business with powerful
                    strategies so you can make more while doing less.
                  </h6>
                </div>
                <p className="underline font-semibold text-white">
                  Read More About Sophie
                </p>
              </div>
            </div>
            <div className="col-12 md:max-w-[66.666667%] " >
               <div className=" overflow-hidden h-0 w-[100%]" style={{ padding: "0 0 56.25% 0", position: "relative", height:"0" }}>
               <iframe
                  src="https://player.vimeo.com/video/800973371?h=3be40b6c38&title=0&byline=0&portrait=0"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
               </div>
                
            </div>
          </div>
          <div className="row1">
          <div className=" col-4 hidden md:flex"></div>
          <div className="col-12 md:max-w-[66.666667%]   ">
            <div className="bg-[rgb(240,48,35)]  pb-[60px] md:pb-0  w-full">
              <ul className="   video-info-col sm:before:hidden md:items-center md:before:border-opacity-[0.3] items-start flex-col md:flex-row">
                <li className="before:opacity-0 text-center">
                <h3 className="text-[40px] leading-[48px] mb-[4px] font-black">15</h3>
                <div className="text-[12px] leading-[20px] font-bold ">YEARS</div>  
                </li>
                <li className="text-center">
                <h3 className="text-[40px] leading-[48px] mb-[4px] font-black">22,000</h3>
                <div className="text-[12px] leading-[20px] font-bold ">COACHING HOURS</div>
                </li>
                <li className="text-center">
                <h3 className="text-[40px] leading-[48px] mb-[4px] font-black">270+</h3>
                <div className="text-[12px] leading-[20px] font-bold ">CLIENTS</div>
                </li>
                <li className="text-center">
                <h3 className="text-[40px] leading-[48px] mb-[4px] font-black">Over 250</h3>
                <div className="text-[12px] leading-[20px] font-bold ">MASTERCLASSES </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
