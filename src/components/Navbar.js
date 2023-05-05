import { AppBar, Button, IconButton } from "@mui/material";
import React from "react";
import navLogo from "../images/navLogo.svg";
import homeIcon from "../images/HomeIcon.svg";
import chevron from "../images/chevron.svg";
import cartIcon from "../images/CartIcon.svg";
const Navbar = () => {
  return (
    <>
      <AppBar
        sx={{ position: "static"}}
        className="  grid grid-cols-2"
      >
        <div className="pr-[64px] pt-[6px] pb-[6px] bg-black">
          <ul className=" flex justify-end upNav ">
            <li>+ 61 448 173 307</li>
            <li className="border-l-2 border-r-2">
              sophie@youniquecoaching.com.au
            </li>
            <li>Request a Demo</li>
          </ul>
        </div>
      </AppBar>
      <AppBar
        sx={{ bgcolor: "#fff", position: "static" }}
        className="static pl-[64px] pr-[64px] pt-[18px] pb-[18px] flex items-center"
      >
        <div className="grid grid-cols-3 w-full">
          <div>
            <img src={navLogo} alt="logo" />
          </div>
          <div className="col-span-2 ">
            <ul className="flex text-black items-center justify-end navLinks uppercase ">
              <li>
                <IconButton>
                  <img src={homeIcon} alt="home" />
                </IconButton>
              </li>
              <li>About</li>
              <li className="flex gap-[6px] ">
                Services <img src={chevron} alt="Chevron" />{" "}
              </li>
              <li className="flex gap-[6px] ">
                Resources <img src={chevron} alt="Chevron" />
              </li>
              <li>Testimonials</li>
              <li>My Webinars</li>
              <li>Contact Us</li>
              <li>
                <div className="flex gap-[10px] border-l-2 border-r-2 pl-6 pr-6">
                  <img src={cartIcon} alt="cart" /> 0{" "}
                </div>
              </li>
              <li>
                <div className=" pl-6 pr-6">Sign In</div>
              </li>
              <li>
                <Button variant="contained" sx={{}} className="navBtn">
                  Sign Up
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </AppBar>
    </>
  );
};

export default Navbar;
