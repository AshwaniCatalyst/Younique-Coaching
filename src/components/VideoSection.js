import React from "react";
import VideoImg from '../images/VideoPlayer.svg'
import VideoInfo from '../images/VideoInfo.svg'
const VideoSection = () => {
  return (
    <div className="bg-white mb-20  -z-10">
      <div className="tiltedContainer bg-[#F03023] flex  pl-[64px] pr-[64px]">
        <div className="w-full flex flex-col items-center gap-[50px]">
          <div className="pt-[132px]">
            <h2 className=" ml-[176px] pl-[34px] border-l-4 border-black">
            Hear From <br />
              <span className="font-bold ">Sophie Robertson</span>
            </h2>
          </div>
          <div className="flex w-full   items-center justify-between gap-[32px]">
          <div className="flex flex-col max-w-[516px]  gap-16">
            <div className="flex flex-col text-white">
              <h3>Recruitment Advisor and Coach</h3>
              <h6>I’m here to help you scale your business with powerful strategies so you can make more while doing less.</h6>
            </div>
            <p className="underline font-semibold text-white">Read More About Sophie</p>
          </div>
          {/* <div className="max-w-full   min-h-full z-20 "> */}
            <img src={VideoImg} className="max-w-full h-auto" alt="Video Player"/>
          {/* </div> */}
          </div>
        </div>
      </div>
      <img src={VideoInfo} className="relative left-[48.4%]" alt='Video Info'/>
    </div>
  );
};

export default VideoSection;
