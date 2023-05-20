import { AppBar, Button, IconButton } from "@mui/material";
import React,{useState} from "react";
import navLogo from "../images/navLogo.svg";
import homeIcon from "../images/HomeIcon.svg";
import chevron from "../images/chevron.svg";
import cartIcon from "../images/CartIcon.svg";
import hamMenu from '../images/hamMenu.svg'
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    };
    
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
        className=" w-full   " style={{borderBottom: '1px solid #E6E6E6'}}
      >
        <div className="row1 container  flex justify-center border">
        <div className=" fixed row1   z-[99999999] bg-[#ffffff]  border-b border-[#e6e6e6]  justify-between  m-0   w-full">
          
          <div className=" col-4   md:max-w-[16.66%]  ">
          <div className="pt-[18px] pb-[18px]  ">
          <img src={navLogo} alt="logo" />
          </div>
            
          </div>
          <div className="lg:max-w-[83.333333%]  hidden lg:flex  items-end z-[10000000000]  ">
            <ul className="  hidden lg:flex      items-center  navLinks">
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
              <li className="hover:text-[#F03023]"><a>Testimonials</a></li>
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
            </div>

          <div className=" flex lg:hidden  justify-end  ">
          <button onClick={()=>handleClick()}
           className="min-w-[24px] min-h-[16px]  items-center outline-none focus:outline-none   ml-auto"
           ><img src={hamMenu} alt="menu"/></button>
           </div>
           </div>
          {/* <div className=" col-6x   lg:max-w-[83.333333%] flex justify-end      "> */}
           <div className="block lg:hidden ">
           <div className={open?"showToggleMenu ": "hideToggleMenu" }>
            <div className="overlay">
            <ul className=" row1 flex-col hidden lg:flex      items-center  navLinks">
              <li className="p-0"><a >
                <IconButton>
                  <img src={homeIcon} className="max-h-[44px] w-auto" alt="home" />
                </IconButton></a>
              </li>
              <li className="hover:text-[#F03023]"><a>About</a></li>
              <li className="flex items-center gap-[6px] relative servicesLink ">
              <a  className="flex items-center gap-2">Services
              </a>
              </li>

              <li className="flex items-center gap-[6px] relative  resourceLink ">
              <a className="flex items-center  gap-[6px]">  Resources</a>
                
              </li>
              <li className="hover:text-[#F03023]"><a>Testimonials</a></li>
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
              
                <button className="navBtn">
                  Sign Up
                </button>
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
