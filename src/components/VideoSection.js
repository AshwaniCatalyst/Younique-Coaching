import React from "react";
import VideoImg from "../images/VideoPlayer.svg";
import VideoInfo from "../images/VideoInfo.svg";
const VideoSection = () => {
  return (
    <>
      <div className="tiltedContainer before:bg-[#F03023] after:bg-[#F03023] after:h-[calc(100%-152px)] ">
        <div className="container">
          <div className="row1 text-white pt-[120px]">
            <div className="col-4 flex flex-col items-center justify-end bg-black">hello</div>
            <div className="col-8  items-start">
              <div className="pb-[40px] max-w-[481px] ">
                <h2 className="title-border ml-0 before:bg-[#FFFFFF]">
                  Hear From
                  <span className="font-bold"> Sophie Robertson</span>
                </h2>
              </div>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
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
              <div>
              <img src={VideoInfo} className="border" alt='Video Info'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="bg-white mb-20  -z-10">
    //   <div className="tiltedContainer bg-[#F03023] flex  pl-[64px] pr-[64px]">
    //     <div className="w-full flex flex-col items-center gap-[50px]">
    //       <div className="pt-[132px]">
    //         <h2 className=" ml-[176px] pl-[34px] border-l-4 border-black">
    //         Hear From <br />
    //           <span className="font-bold ">Sophie Robertson</span>
    //         </h2>
    //       </div>
    //       <div className="flex w-full   items-center justify-between gap-[32px]">
    //       <div className="flex flex-col max-w-[516px]  gap-16">
    //         <div className="flex flex-col text-white">
    //           <h3>Recruitment Advisor and Coach</h3>
    //           <h6>I’m here to help you scale your business with powerful strategies so you can make more while doing less.</h6>
    //         </div>
    //         <p className="underline font-semibold text-white">Read More About Sophie</p>
    //       </div>
    //       {/* <div className="max-w-full   min-h-full z-20 "> */}
    //         <img src={VideoImg} className="max-w-full h-auto" alt="Video Player"/>
    //       {/* </div> */}
    //       </div>
    //     </div>
    //   </div>
    //   <img src={VideoInfo} className="relative left-[48.4%]" alt='Video Info'/>
    // </div>
  );
};

export default VideoSection;
