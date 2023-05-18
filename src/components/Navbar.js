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
        className="static    " style={{borderBottom: '1px solid #E6E6E6'}}
      >
        <div className="container flex justify-center ">
        <div className="row1  pt-[16px] pb-[16px] justify-between     w-full">
          <div className=" sm:col-6 md:col-6  lg:col-2 ">
            <img src={navLogo} alt="logo" />
          </div>
          
          <div className=" md:col-6 sm:col-6  lg:col-8 flex justify-end   lg:w-auto   ">
            <div className="hidden lg:flex ">
            <ul className=" row1 hidden lg:flex      items-center justify-end navLinks">
              <li><a >
                <IconButton>
                  <img src={homeIcon} className="max-h-[44px] w-auto" alt="home" />
                </IconButton></a>
              </li>
              <li className="hover:text-[#F03023]"><a>About</a></li>
              <li className="flex items-center gap-[6px] relative servicesLink ">
              <a  className="flex items-center gap-2 ">Services <img src={chevron} className="arrowDown" alt="Chevron" /></a>
              
                <ul className="servicesSubMenu">
                  <li><a >Services SubMenu 1</a></li>
                  <li><a>Services SubMenu 2</a></li>
                </ul>
              </li>

              <li className="flex items-center gap-[6px] relative resourceLink ">
              <a className="flex items-center  gap-[6px]">  Resources  <img src={chevron} alt="Chevron" /></a>
                <ul className="resourceSubMenu space-y-2 ">
                  <li><a>Resource SubMenu 1</a></li>
                  <li><a>Resource SubMenu 2</a></li>
                </ul>
              </li>
              <li className="hover:text-[#F03023]"><a>Testimonials</a></li>
              <li className="hover:text-[#F03023]"><a>My Webinars</a></li>
              <li className="hover:text-[#F03023]"><a >Contact Us</a></li>
              <li className=" ml-[25px] mr-[25px]  navbarBorder">
                
              <a  className="flex gap-2 hover:text-[#F03023]"> <img src={cartIcon}  alt="cart" /> 0
              </a>
              </li>
              <li>
                <div className=" pl-6 pr-6 hover:text-[#F03023]"><a href="#">Sign In</a></div>
              </li>
              <li>
              <a >
                <button className="navBtn">
                  Sign Up
                </button></a>
              </li>
            </ul>
            </div>
            <div className=" flex lg:hidden  justify-end  ">
          <button
           className=" items-center outline-none focus:outline-none   ml-auto"
           ><img src={hamMenu} alt="menu"/></button>
           </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
