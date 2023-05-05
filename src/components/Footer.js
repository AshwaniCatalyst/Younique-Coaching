import React from "react";
import "../styles/global.css";
import footerLogo from "../images/footerLogo.svg";
import instaIcon from "../images/instaIcon.svg";
import linkedinIcon from "../images/linkedinIcon.svg";
import brand1 from '../images/Mask group.svg'
import brand2 from '../images/Mask group-1.svg'
const Footer = () => {
  return (
    <>
      <div className="pl-[64px] pr-[64px] pt-[80px] pb-[30px] flex flex-col  justify-center bg-black">
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
      </div>
    </>
  );
};

export default Footer;
