import { AppBar, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import navLogo from "../images/navLogo.svg";
import homeIcon from "../images/HomeIcon.svg";
import chevron from "../images/chevron.svg";
import cartIcon from "../images/CartIcon.svg";
import hamMenu from "../images/hamMenu.svg";
import mobileNavLogo from "../images/mobileLogo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="hidden  lg:block bg-[#000000] text-[#ffffff]">
        <div className="container">
          <div className="pr-[64px] pt-[6px] pb-[6px] ">
            <ul className=" flex justify-end upNav ">
              <li>
                <a>+ 61 448 173 307</a>
              </li>
              <li className="border-l border-r">
                <a> sophie@youniquecoaching.com.au</a>
              </li>
              <li>
                <a>Request a Demo</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className=" w-full    "
        style={{ borderBottom: "1px solid #E6E6E6" }}
      >
        <div className=" container    flex  ">
          <div className="hidden   justify-between lg:flex items-center m-0   w-full ">
            <div className=" col-2    ">
              <div className="  max-w-[133.17px] h-[34px]   ">
                <img src={navLogo} className="object-cover" alt="logo" />
              </div>
            </div>
            <div className="lg:max-w-[83.333333%]  hidden lg:flex  items-end z-[100]  ">
              <ul className="  hidden lg:flex      items-center  navLinks">
                <li className="p-0">
                  <a>
                    <IconButton>
                      <img
                        src={homeIcon}
                        className="max-h-[44px] w-auto"
                        alt="home"
                      />
                    </IconButton>
                  </a>
                </li>
                <li className="hover:text-[#F03023]">
                  <a>About</a>
                </li>
                <li className="flex items-center gap-[6px] relative servicesLink ">
                  <a className="flex items-center gap-2 text-[#000000]">
                    Services
                    <img src={chevron} className="arrowDown " alt="Chevron" />
                  </a>

                  <ul className="servicesSubMenu p-0">
                    <li>
                      <a href="" className="text-[#000000]">
                        Services SubMenu 1
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-[#000000]">
                        Services SubMenu 2
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="flex items-center gap-[6px] relative  resourceLink ">
                  <a className="flex items-center  gap-[6px] text-[#000000]">
                    {" "}
                    Resources <img src={chevron} alt="Chevron" />
                  </a>
                  <ul className="resourceSubMenu p-0 ">
                    <li>
                      <a href="" className="text-[#000000]">
                        Resource SubMenu 1
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-[#000000]">
                        Resource SubMenu 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="hover:text-[#F03023]">
                  <a>Testimonials</a>
                </li>
                <li className="hover:text-[#F03023]">
                  <a>My Webinars</a>
                </li>
                <li className="hover:text-[#F03023]">
                  <a>Contact Us</a>
                </li>
                <li className=" ml-[25px] mr-[25px]  navbarBorder">
                  <a className="flex gap-2 text-[#000000] hover:text-[#F03023]">
                    {" "}
                    <img src={cartIcon} alt="cart" /> 0
                  </a>
                </li>
                <li>
                  <button className=" pl-6 pr-6 md:pl-2 md:pr-2  hover:text-[#F03023]">
                    <a href="#" className="text-[#000000]">
                      Sign In
                    </a>
                  </button>
                </li>
                <li className="p-0">
                  <a>
                    <button className="navBtn">Sign Up</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center fixed  lg:hidden w-[100%]  z-[99] border-b bg-[#fff] border-[#E6E6E6] ">
            <div className="flex pt-[12px] pb-[12px] justify-between items-center w-full  m-0 ">
              <div className="col-10">
                <div className="  max-w-[173.17px] h-auto   ">
                  <img src={mobileNavLogo} alt="logo" />
                </div>
              </div>
              <div className="col-2  pb-[30px]  justify-end">
                <div
                  id="nav-icon4"
                  onClick={() => handleClick()}
                  className={open ? "openMenu" : "nav-icon4"}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="block lg:hidden ">
            <div className={open ? "showToggleMenu " : "hideToggleMenu"}>
              <div className="overlay">
                <ul className=" row1 flex-col hidden lg:flex      items-center  navLinks">
                  <li className="p-0">
                    <a>
                      <IconButton>
                        <img
                          src={homeIcon}
                          className="max-h-[44px] w-auto"
                          alt="home"
                        />
                      </IconButton>
                    </a>
                  </li>
                  <li className="hover:text-[#F03023]">
                    <a>About</a>
                  </li>
                  <li className="flex items-center gap-[6px] relative servicesLink ">
                    <a className="flex items-center gap-2">Services</a>
                  </li>

                  <li className="flex items-center gap-[6px] relative  resourceLink ">
                    <a className="flex items-center  gap-[6px]"> Resources</a>
                  </li>
                  <li className="hover:text-[#F03023]">
                    <a>Testimonials</a>
                  </li>
                  <li className="hover:text-[#F03023]">
                    <a>My Webinars</a>
                  </li>
                  <li className="hover:text-[#F03023]">
                    <a>Contact Us</a>
                  </li>
                  <li className=" ml-[25px] mr-[25px]  navbarBorder">
                    <a className="flex gap-2 text-[#000000] hover:text-[#F03023]">
                      {" "}
                      <img src={cartIcon} alt="cart" /> 0
                    </a>
                  </li>
                  <li>
                    <button className=" pl-6 pr-6 md:pl-2 md:pr-2  hover:text-[#F03023]">
                      <a href="#" className="text-[#000000]">
                        Sign In
                      </a>
                    </button>
                  </li>
                  <li className="p-0">
                    <button className="navBtn">Sign Up</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="hidden lg:flex  items-end z-[10000000000] border ">
            <ul className=" row1 hidden lg:flex      items-center  navLinks">
              <li className="p-0"><a >
                <IconButton>
                  <img src={homeIcon} className="max-h-[44px] w-auto" alt="home" />
                </IconButton></a>
              </li>
              <li className="hover:text-[#F03023]"><a>About</a></li>
              <li className="flex items-center gap-[6px] relative servicesLink ">
              <a  className="flex items-center gap-2 text-[#000000]">Services 
              <img src={chevron} className="arrowDown " alt="Chevron" />
              </a>
              
                <ul className="servicesSubMenu p-0">
                  <li><a href="" className="text-[#000000]">Services SubMenu 1</a></li>
                  <li><a href="" className="text-[#000000]">Services SubMenu 2</a></li>
                </ul>
              </li>

              <li className="flex items-center gap-[6px] relative  resourceLink ">
              <a className="flex items-center  gap-[6px] text-[#000000]">  Resources  <img src={chevron} alt="Chevron" /></a>
                <ul className="resourceSubMenu p-0 ">
                  <li><a href="" className="text-[#000000]">Resource SubMenu 1</a></li>
                  <li><a href="" className="text-[#000000]">Resource SubMenu 2</a></li>
                </ul>
              </li>
              <li className="hover: text-[#F03023]"><a>Testimonials</a></li>
              <li className="hover:text-[#F03023]"><a>My Webinars</a></li>
              <li className="hover:text-[#F03023]"><a >Contact Us</a></li>
              <li className=" ml-[25px] mr-[25px]  navbarBorder">
                
              <a  className="flex gap-2 text-[#000000] hover:text-[#F03023]"> <img src={cartIcon}  alt="cart" /> 0
              </a>
              </li>
              <li>
                <button className=" pl-6 pr-6 md:pl-2 md:pr-2  hover:text-[#F03023]"><a href="#" className="text-[#000000]">Sign In</a></button>
              </li>
              <li className="p-0">
               <a > 
                <button className="navBtn">
                  Sign Up
                </button>
                </a>
              </li>
            </ul>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
