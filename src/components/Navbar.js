import { AppBar, Button, IconButton } from "@mui/material";
import React from "react";
import navLogo from "../images/navLogo.svg";
import homeIcon from "../images/HomeIcon.svg";
import chevron from "../images/chevron.svg";
import cartIcon from "../images/CartIcon.svg";
const Navbar = () => {
  return (
    <>
      <div
        
        className="hidden  lg:block bg-[#000000] text-[#ffffff]"
      >
        <div className="container">
        <div className="pr-[64px] pt-[6px] pb-[6px] ">
          <ul className=" flex justify-end upNav ">
            <li>+ 61 448 173 307</li>
            <li className="border">
              sophie@youniquecoaching.com.au
            </li>
            <li >Request a Demo</li>
          </ul>
        </div>
        </div>
      </div>
      <div
        className="static pl-[64px] pr-[64px] pt-[18px] pb-[18px]  " style={{borderBottom: '1px solid #E6E6E6'}}
      >
        <div className="container">
        <div className="row1 items-center">
          <div className="col-2">
            <img src={navLogo} alt="logo" />
          </div>
          <div className="col-10 row items-end ">
            <ul className="row1 items-center justify-end navLinks">
              <li>
                <IconButton>
                  <img src={homeIcon} alt="home" />
                </IconButton>
              </li>
              <li>About</li>
              <li className="flex items-center gap-[6px] ">
                Services <img src={chevron} alt="Chevron" />{" "}
              </li>
              <li className="flex items-center  gap-[6px] ">
                Resources <img src={chevron} alt="Chevron" />
              </li>
              <li>Testimonials</li>
              <li>My Webinars</li>
              <li>Contact Us</li>
              <li className="flex gap-2 pl-[25px] pr-[25px] border">
                
                  <img src={cartIcon} alt="cart" /> 0
                
              </li>
              <li>
                <div className=" pl-6 pr-6">Sign In</div>
              </li>
              <li>
                <button variant="contained" sx={{ bgcolor:'#F03023'}} className="navBtn">
                  Sign Up
                </button>
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
