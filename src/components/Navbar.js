import { AppBar, Button, IconButton } from "@mui/material";
import React from "react";
import navLogo from "../images/navLogo.svg";
import homeIcon from "../images/HomeIcon.svg";
import chevron from "../images/chevron.svg";
import cartIcon from "../images/CartIcon.svg";
import hamMenu from '../images/hamMenu.svg'
const Navbar = () => {
  return (
    <>
      <div
        
        className="hidden  lg:block bg-[#000000] text-[#ffffff]"
      >
        <div className="container">
        <div className="pr-[64px] pt-[6px] pb-[6px] ">
          <ul className=" flex justify-end upNav ">
            <li><a>+ 61 448 173 307</a></li>
            <li className="border-l border-r">
             <a> sophie@youniquecoaching.com.au</a>
            </li>
            <li ><a>Request a Demo</a></li>
          </ul>
        </div>
        </div>
      </div>
      <div
        className="static  pt-[18px] pb-[18px]  " style={{borderBottom: '1px solid #E6E6E6'}}
      >
        <div className="container">
        <div className="row1  flex-row flex-wrap w-full">
          <div className="sm:col-6 col-2 ">
            <img src={navLogo} alt="logo" />
          </div>
          <div className="col-6 justify-end flex lg:hidden">
          <button
           className=" items-center outline-none focus:outline-none   ml-auto"
           ><img src={hamMenu} alt="menu"/></button>
           </div>
          <div className="col-10 row justify-end w-full lg:flex lg:w-auto hidden  ">
            <ul className=" row1  space-y-2 lg:space-y-0  flex-col lg:flex-row items-center justify-end navLinks">
              <li><a href="#">
                <IconButton>
                  <img src={homeIcon} className="max-h-[44px] w-auto" alt="home" />
                </IconButton></a>
              </li>
              <li className="hover:text-[#F03023]"><a href="#">About</a></li>
              <li className="flex items-center gap-[6px] relative servicesLink ">
              <a href="#" className="flex items-center gap-2 ">Services <img src={chevron} alt="Chevron" /></a>
              
                <ul className="servicesSubMenu">
                  <li><a href="#">Services SubMenu 1</a></li>
                  <li><a href="#">Services SubMenu 2</a></li>
                </ul>
              </li>

              <li className="flex items-center  gap-[6px] relative resourceLink ">
              <a href="#" className="flex items-center gap-2">  Resources  <img src={chevron} alt="Chevron" /></a>
                <ul className="resourceSubMenu space-y-2 ">
                  <li><a href="#">Resource SubMenu 1</a></li>
                  <li><a href="#">Resource SubMenu 2</a></li>
                </ul>
              </li>
              <li className="hover:text-[#F03023]"><a href="#">Testimonials</a></li>
              <li className="hover:text-[#F03023]"><a href="#">My Webinars</a></li>
              <li className="hover:text-[#F03023]"><a href="#">Contact Us</a></li>
              <li className=" pl-[25px] pr-[25px] border-l border-r">
                
              <a href="#" className="flex gap-2 hover:text-[#F03023]"> <img src={cartIcon}  alt="cart" /> 0
              </a>
              </li>
              <li>
                <div className=" pl-6 pr-6 hover:text-[#F03023]"><a href="#">Sign In</a></div>
              </li>
              <li>
              <a href="#">
                <button className="navBtn">
                  Sign Up
                </button></a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
