import React from "react";
import crd1 from "../images/c11.svg";
import crd2 from "../images/c1.svg";
import crd3 from "../images/c3.svg";
import crd4 from "../images/c4.svg";
const OurServices = () => {
  return (
    <>
      <div className="tiltedContainer before:bg-[#F5F5F5] after:bg-[#F5F5F5] after:h-[calc(100%-120px)] mb-[160px]">
        <div className="container">
          <div className="row1 flex-col md:items-start sm:items-center ">
            <div className="pb-[30px] ">
              <h2 className="title-border before:bg-[#000000]">
                Our <span className="font-bold">Services</span>
              </h2>
            </div>
            <div className="row1 p-auto">
              <div className="col-3 items-center ">
                <div className="max-w-[304px] serviceSectionCard">
                <div className="serviceSectionImageWrapper">
                  <img src={crd1} alt="card-Image" />
                  </div>
                  <h5 className="pt-[16px] pb-[8px]">MasterClass</h5>
                  <p className="min-h-[160px] text-[#444444]">
                    Workshops where you can learn the tips and tools to be
                    successful
                  </p>
                
                <a href="#" className="hover:text-[#000000] underline font-semibold  text-[#F03023]">
                  
                    Learn More
                  
                </a>
                </div>
              </div>
              <div className="col-3 ">
                <div className="max-w-[304px] serviceSectionCard ">
                <div className="serviceSectionImageWrapper">
                  <img src={crd2} alt="card-Image" />
                  </div>
                  <h5 className="pt-[16px] pb-[8px] ">Coaching / Mentoring</h5>
                  <p className="min-h-[160px] text-[#444444]">
                    One on one coaching to accelerate and cement your insights
                    and learnings for rapid results
                  </p>
                
                <a href="#" className="hover:text-[#000000] underline font-semibold  text-[#F03023]">
                  {" "}
                  
                    Learn More
                  
                </a>
                </div>
              </div>
              <div className="col-3 ">
                <div className="max-w-[304px] serviceSectionCard ">
                  <div className="serviceSectionImageWrapper">
                  <img src={crd3} alt="card-Image" />
                  </div>
                  <h5 className="pt-[16px] pb-[8px]">Training</h5>
                  <p className=" min-h-[160px] text-[#444444]">
                    Group bespoke training delivered via face-to-face or
                    virtually
                  </p>
                  <a href="#" className="hover:text-[#000000] underline font-semibold  text-[#F03023]">
                    
                      Learn More
                    
                  </a>
                </div>
              </div>
              <div className="col-3 ">
                <div className="max-w-[304px] serviceSectionCard ">
                <div className="serviceSectionImageWrapper">
                  <img src={crd4} alt="card-Image" />
                  </div>
                  <h5 className="pt-[16px] pb-[8px]">Advisory </h5>
                  <p className="min-h-[160px] text-[#444444] ">
                    You may be a start up or an established company looking for
                    particular expertise on your Board or you may want someone
                    to bounce ideas off as running a business can be a lonely
                    affair
                  </p>
                
                <a href="#" className="hover:text-[#000000] underline font-semibold  text-[#F03023]">
                
                 
                    Learn More
                 
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
