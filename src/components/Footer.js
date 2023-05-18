import React from "react";
import "../styles/global.css";
import footerLogo from "../images/footerLogo.svg";
import instaIcon from "../images/instaIcon.svg";
import linkedinIcon from "../images/linkedinIcon.svg";
import twitterIcon from '../images/twitterIcon.svg'
import brand1 from "../images/Mask group.svg";
import brand2 from "../images/Mask group-1.svg";
const Footer = () => {
  return (
    <>
      <div className="bg-[#000000] pt-[80px] ">
        <div className="container flex flex-col">
          <div className="row1  flex-col md:flex-row pb-[40px] flex-wrap border-b border-opacity-10 border-[#ffffff]">
            <div className=" col-12 md:max-w-[25%] mb-[32px] md:mb-0">
              <div className="flex flex-col  ">
                <div className="max-w-[173px]">
                <img src={footerLogo} className="" alt="logo" />
                </div>

                <div className="text-white pt-[48px]">
                <div className="smText flex md:hidden font-normal content-stretch mb-[24px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <div className="mdText hidden font-bold pb-[12px]  md:flex">Let's Connect</div>
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
                    <img
                      src={twitterIcon}
                      className="flex md:hidden max-w-[32px] max-h-[32px] ml-[8px]"
                      alt="linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 ">
              <div className="flex flex-col gap-[16px] md:flex-row flex-wrap  justify-between">
                <div className="pr-[16px]">
                  <ul className="text-white smText font-bold break-normal ">
                    <li className="mb-[16px] leading-6 ">
                      <a href="#">Home</a>
                    </li>
                    <li className="mb-[16px] leading-6">
                      <a href="#">About</a>
                    </li>
                    <li className="mb-[16px] leading-6">
                      <a href="#">Testimonials</a>
                    </li>
                    <li className="mb-[16px] leading-6">
                      <a href="#">Blog</a>
                    </li>
                    <li className="mb-[16px] leading-6">
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className=" text-white">
                  <ul className="mb-[16px]">
                    <li className="pb-[4px] smText font-bold leading-6">
                      Services
                      <ul className="list-disc xsText font-normal ml-[16px]">
                        <li className="pb-[4px]">
                          <a href="#">Masterclasses</a>
                        </li>
                        <li className="pb-[4px]">
                          <a href="#">Coaching/Mentoring</a>
                        </li>
                        <li className="pb-[4px]">
                          <a href="#">Training</a>
                        </li>
                        <li className="pb-[4px]">
                          <a href="#">Advisory</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li className="pb-[4px] smText font-bold leading-6">
                      Products
                      <ul className="list-disc pb-[4px] xsText font-normal ml-[16px]">
                        <li className="pb-[4px]">
                          <a href="#">Book</a>
                        </li>
                        <li>
                          <a href="#">Webinars</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="text-white">
                  <ul className="mb-[16px]">
                    <li className="pb-[4px] smText font-bold leading-6">
                      Address
                    </li>
                    <li className="xsText font-normal">
                      <a href="#">
                        P.O. Box 974 <br />
                        Neutral Bay Junction NSW 2089
                        <br /> Australia
                      </a>
                    </li>
                  </ul>
                  <ul className="mb-[16px]">
                    <li className="pb-[4px] smText font-bold leading-6">
                      Phone
                    </li>
                    <li className="xsText font-normal">
                      <a href="#">+ 61 448 173 307</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="pb-[4px] smText font-bold leading-6">
                      Email
                    </li>
                    <li className="xsText font-normal">
                      <a href="#"> sophie@youniquecoaching.com.au</a>
                    </li>
                  </ul>
                </div>
                <div className=" hidden lg:flex flex-col items-end">
                  <img
                    src={brand1}
                    className="max-w-[125px] max-h-[40px] mb-[42px] ml-[35px]  "
                    alt="brand1"
                  />

                  <img
                    src={brand2}
                    className="max-w-[125px] max-h-[40] mb-[42px] ml-[35px]  "
                    alt="brand2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <ul className="flex flex-col md:flex-row justify-center  text-white pt-[40px] pb-[30px]">
              <li>Copyright ©2023 All rights reserved.</li>
              <li className=" md:before:border-l-2 md:before:opacity-[0.1] md:before:pl-[16px] pt-[8px] md:pt-0  md:pl-[16px]">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
