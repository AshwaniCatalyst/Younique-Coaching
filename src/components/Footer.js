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
          <div className="row1 pb-[40px] flex-wrap border-b border-opacity-10 border-[#ffffff]">
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
            <div className="col-9">
              <div className="flex flex-wrap  justify-between">
                <div className="pr-[16px]">
                  <ul className="text-white smText font-bold break-normal ">
                    <li className="mb-[16px] leading-6 ">
                      <a>Home</a>
                    </li>
                    <li className="mb-[16px] leading-6">
                      <a>About</a>
                    </li>
                    <li className="mb-[16px] leading-6">
                      <a>Testimonials</a>
                    </li>
                    <li className="mb-[16px] leading-6">
                      <a>Blog</a>
                    </li>
                    <li className="mb-[16px] leading-6">
                      <a>Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className=" text-white">
                  <ul className="mb-[16px]">
                    <li className="pb-[4px] smText font-bold leading-6">
                      Services
                      <ul className="list-disc xsText font-normal">
                        <li className="pb-[4px]">
                          <a>Masterclasses</a>
                        </li>
                        <li className="pb-[4px]">
                          <a>Coaching/Mentoring</a>
                        </li>
                        <li className="pb-[4px]">
                          <a>Training</a>
                        </li>
                        <li className="pb-[4px]">
                          <a>Advisory</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li className="pb-[4px] smText font-bold leading-6">
                      Products
                      <ul className="list-disc pb-[4px] xsText font-normal">
                        <li className="pb-[4px]">
                          <a>Book</a>
                        </li>
                        <li>
                          <a>Webinars</a>
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
                      <a>
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
                      <a>+ 61 448 173 307</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="pb-[4px] smText font-bold leading-6">
                      Email
                    </li>
                    <li className="xsText font-normal">
                      <a> sophie@youniquecoaching.com.au</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-end">
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
            <ul className="flex justify-center text-white pt-[40px] pb-[30px]">
              <li>Copyright ©2023 All rights reserved.</li>
              <li className="before:border-l-2 before:opacity-[0.1] before:pl-[16px] pl-[16px]">
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
