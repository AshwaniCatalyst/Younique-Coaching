import React from "react";
import "../styles/global.css";
import footerLogo from "../images/footerLogo.svg";
import instaIcon from "../images/instaIcon.svg";
import linkedinIcon from "../images/linkedinIcon.svg";
import brand1 from "../images/Mask group.svg";
import brand2 from "../images/Mask group-1.svg";
const Footer = () => {
  return (
    <>
      <div className="bg-[#000000] pt-[80px] ">
        <div className="container flex flex-col">
          <div className="row1 pb-[40px] border-b border-opacity-10 border-[#ffffff]">
            <div className="col-3">
              <div className="flex flex-col">
                <img src={footerLogo} className="max-w-[173.17px]" alt="logo" />
                <div className="text-white mdText pt-[48px]">
                  Let's Connect
                  <div className="flex">
                    <img
                      src={instaIcon}
                      className="max-w-[32px] max-h-[32px]"
                      alt="insta"
                    />
                    <img
                      src={linkedinIcon}
                      className="max-w-[32px] max-h-[32px] ml-[8px]"
                      alt="linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div>
                <ul className="text-white break-normal ">
                  <li>Home</li>
                  <li>About</li>
                  <li>Testimonials</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-2 text-white">
              <ul>
                <li>
                  Services
                  <ul className="list-disc">
                    <li>Masterclasses</li>
                    <li>Coaching/Mentoring</li>
                    <li>Training</li>
                    <li>Advisory</li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  Products
                  <ul className="list-disc">
                    <li>Book</li>
                    <li>Webinars</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-2 ">
              <div className="text-white">
            <ul>
              <li>Address</li>
              <li>P.O. Box 974 Neutral Bay Junction NSW 2089 Australia</li>
            </ul>
            <ul>
                <li>Phone</li>
                <li>+ 61 448 173 307</li>
            </ul>
            <ul>
                <li>Email</li>
                <li> sophie@youniquecoaching.com.au</li>
            </ul>
            </div>
            </div>
            <div className="col-3">
              <div className="flex flex-col items-end">
              <img src={brand1} className="max-w-[125px] max-h-[40px] mb-[42px] ml-[35px] mr-[65px] " alt='brand1'/>
                
                
                <img src={brand2} className="max-w-[125px] max-h-[40] mb-[42px] ml-[35px] mr-[65px] " alt='brand2'/>
              </div>
            </div>
          </div>
          
          <div>
          <ul className="flex justify-center text-white pt-[40px] pb-[30px]">
          <li>Copyright ©2023 All rights reserved.</li>
          <li className="before:border-l-2 before:opacity-[0.1] before:pl-[16px] pl-[16px]">Privacy Policy</li>
        </ul>
          </div>
        </div>
      </div>
      {/* <div className="pl-[64px] pr-[64px] pt-[80px] pb-[30px] flex flex-col -z-10 justify-center bg-black">
        < div className="grid grid-cols-6 pb-[60px] content-center gap-8">
          <div className="grid grid-rows-2">
            <img src={footerLogo} alt="logo" />
            <div className="text-white">
              Let's Connect
              <div className="flex">
                <img src={instaIcon} alt="insta" />
                <img src={linkedinIcon} alt="linkedin" />
              </div>
            </div>
          </div>
          <div>
            <ul className="text-white">
              <li>Home</li>
              <li>About</li>
              <li>Testimonials</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-white">
            <ul>
              <li>Services</li>
              <ul>
                <li>Masterclasses</li>
                <li>Coaching/Mentoring</li>
                <li>Training</li>
                <li>Advisory</li>
              </ul>
              <li>Products</li>
              <ul>
                <li>Book</li>
                <li>Webinars</li>
              </ul>
            </ul>
          </div>
          <div className="text-white">
            <ul>
              <li>Address</li>
              <li>P.O. Box 974 Neutral Bay Junction NSW 2089 Australia</li>
            </ul>
            <ul>
                <li>Phone</li>
                <li>+ 61 448 173 307</li>
            </ul>
            <ul>
                <li>Email</li>
                <li> sophie@youniquecoaching.com.au</li>
            </ul>
          </div>
          <div className=" grid col-span-2">
            
                <img src={brand1} alt='brand1'/>
                
                
                <img src={brand2} alt='brand2'/>

                </div>
          
        </div>
        <div className="border-b opacity-10"></div>
        <div>
        <ul className="flex justify-center text-white pt-[80px]">
          <li>Copyright ©2023 All rights reserved.</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
