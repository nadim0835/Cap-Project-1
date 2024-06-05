import Container from "./Container";
import Flex from "./Flex";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Img from "./Img";
import usa from "../assets/img/usa.png";
import { FaChevronDown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import navicon from "../assets/img/Icon.png";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
import { MdShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const Navber = () => {
  const [dropDown, setdropDown] = useState(false);
  return (
    <>
      <div className=" hidden lg:block  bg-[#3661FC] absolute top-0 w-[50%] h-[42px] left-0"></div>
      <div className=" hidden lg:block  bg-white absolute top-[42px] w-[50%] h-[100px] right-0"></div>
      <nav className=" absolute top-0 left-0 right-0  ">
        <Container>
          <Flex
            className={`bg-[#3661FC]   justify-between lg:items-center hidden  lg:flex items-start lg:flex-row flex-col  py-2
         rounded-e-[20px] `}
          >
            <div className=" flex items-center gap-7">
              <p className=" font-dmSans text-[14px] leading-[26px]  text-[#FFFFFF]">
                Welcome to Ortencey Digital Market Agency
              </p>
              <div className=" flex items-center gap-2   border-r-[1px] border-r-[#708FFF]  border-l-[1px] border-l-[#708FFF] px-[30px]  ">
                <FaPhone className=" text-[#FE651B]" />
                <h2 className=" font-dmSans text-[14px]   leading-[26px] text-[#FFFFFF]">
                  +88 ( 5548 ) 6548
                </h2>
              </div>
              <div className=" flex items-center gap-2    ">
                <CiMail className=" text-[#FE651B]" />
                <h2 className=" font-dmSans text-[14px]   leading-[26px] text-[#FFFFFF]">
                  +88 ( 5548 ) 6548
                </h2>
              </div>
            </div>
            <div className=" flex items-center gap-10">
              <div className=" flex gap-1 items-center">
                <Img src={usa} />
                <h2 className=" font-dmSans text-[14px]   leading-6 text-[#FFFFFF]">
                  English
                </h2>
                <FaChevronDown className="text-[white] duration-300 hover:text-[#FE651B] cursor-pointer" />
              </div>
              <div className=" flex">
                <a
                  className=" px-4 border-r-[1px] border-r-[#708FFF] "
                  href="#"
                >
                  <FaFacebookF className="text-[white] duration-300 hover:text-[#FE651B]" />
                </a>
                <a
                  className=" px-4 border-r-[1px] border-r-[#708FFF] "
                  href="#"
                >
                  <FaLinkedinIn className="text-[white] duration-300 hover:text-[#FE651B]" />
                </a>
                <a
                  className=" px-4 border-r-[1px] border-r-[#708FFF] "
                  href="#"
                >
                  <FaTwitter className="text-[white] duration-300 hover:text-[#FE651B]" />
                </a>
                <a className=" px-4 " href="#">
                  <FaYoutube className="text-[white] duration-300 hover:text-[#FE651B]" />
                </a>
              </div>
            </div>
          </Flex>
          <Flex
            className={`  justify-between lg:items-center py-[17px] items-start bg-white rounded-l-[50px] pl-4  `}
          >
            <div className=" flex items-center gap-5">
              <Img src={navicon} />
              <div>
                <h3 className=" font-dmSans font-bold text-[22px] uppercase text-black">
                  ortencey
                </h3>
                <p className=" font-dmSans text-[15px] text-[#3661FC] ">
                  Digital Marketing
                </p>
              </div>
            </div>
            {
              // dropDown&&
              <div
                className={` absolute z-50  lg:w-auto w-[60%] bg-white  duration-300   lg:static top-24 h-screen ${
                  dropDown ? "left-0" : "left-[-500px]"
                } lg:h-auto `}
              >
                <ul className=" flex justify-between items-start lg:items-center lg:gap-6 lg:flex-row flex-col ">
                  <li className=" font-dmSans text-[16px] text-[#1A1A1A] duration-300  cursor-pointer border-solid border-b-2  w-full lg:w-auto pl-3 py-2 lg:p-0 lg:border-none relative group  ">
                    <Link to={`/`}>
                      <a className="inline-block " href="#">
                        Home
                        <FaAngleDown className=" hidden md:inline-block  " />
                      </a>
                    </Link>
                    <ul className=" px-4  lg:py-2 invisible h-0 group-hover:visible duration-200 group-hover:h-[130px] opacity-0 group-hover:opacity-100  lg:absolute top-6 left-[-40px] bg-slate-200 lg:w-[130px] w-[100%]  rounded-md">
                      <li className="py-2 hover:text-black ">Page 01</li>
                      <li className="py-2 hover:text-black ">Page 01</li>
                      <li className="py-2 hover:text-black ">Page 01</li>
                    </ul>
                  </li>
                  <li className=" font-dmSans text-[16px] text-[#1A1A1A] duration-300 hover:text-[#FE651B] cursor-pointer border-solid border-b-2  pl-3 py-2 lg:p-0 w-full lg:w-auto lg:border-none ">
                    <Link to={`/about`}>About</Link>
                  </li>

                  <li className=" font-dmSans text-[16px] text-[#1A1A1A] duration-300  cursor-pointer border-solid border-b-2  w-full lg:w-auto pl-3 py-2 lg:p-0 lg:border-none relative group  ">
                    <Link to={`/`}>
                      <Link to={`/service`} className="inline-block">
                        Services
                        <FaAngleDown className=" hidden md:inline-block  " />
                      </Link>
                    </Link>
                    <ul className=" px-4  lg:py-2 invisible h-0 group-hover:visible duration-200 group-hover:h-[60px] opacity-0 group-hover:opacity-100  lg:absolute top-6 left-[-40px] bg-slate-200 lg:w-[130px] w-[100%]  rounded-md">
                      <li className="py-2 hover:text-black ">
                        <Link to={`/serviceetails`}>
                         Details Page
                        </Link>
                      </li>
                  
                    </ul>
                  </li>

                  <li className=" font-dmSans text-[16px] text-[#1A1A1A] duration-300 hover:text-[#FE651B] cursor-pointer border-solid border-b-2 pl-3 py-2 lg:p-0 w-full lg:w-auto lg:border-none ">
                    <a className="inline-block " href="#">
                      Team
                      <FaAngleDown className=" inline-block " />
                    </a>
                  </li>

                  <li className=" font-dmSans text-[16px] text-[#1A1A1A] duration-300 hover:text-[#FE651B] cursor-pointer border-solid border-b-2 lg:border-none pl-3 py-2 lg:p-0 w-full lg:w-auto ">
                    <a className="inline-block " href="#">
                      Pages
                      <FaAngleDown className=" inline-block " />
                    </a>
                  </li>
                  <li className=" font-dmSans text-[16px] text-[#1A1A1A] duration-300 hover:text-[#FE651B] cursor-pointer border-solid border-b-2 pl-3 py-2 lg:p-0 w-full lg:w-auto lg:border-none ">
                    <a className="inline-block " href="#">
                      News
                      <FaAngleDown className=" inline-block  " />
                    </a>
                  </li>
                  <li className=" font-dmSans text-[16px] text-[#1A1A1A] duration-300 hover:text-[#FE651B] cursor-pointer border-solid border-b-2 pl-3 py-2 lg:p-0 w-full lg:w-auto lg:border-none ">
                    <a className="inline-block " href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            }
            <TiThMenuOutline
              onClick={() => {
                setdropDown(!dropDown);
              }}
              className=" text-[30px]  absolute  top-8 right-5 lg:hidden 
           "
            />
            <div className=" lg:flex justify-center items-center gap-6 hidden ">
              <div className=" w-[56px] h-[56px] rounded-[50%] flex justify-center items-center border border-[#3661FC] text-[#3661FC] ">
                <FaSearch />
              </div>
              <div className=" w-[56px] h-[56px] rounded-[50%] flex justify-center items-center border border-[#3661FC] text-[#3661FC] ">
                <MdShoppingBag />
              </div>
              <div className=" flex items-center gap-2 py-[15px] px-7 bg-[#3661FC] rounded-[50px]">
                <h5 className=" font-dmSans font-[18px] leading-7 text-white ">
                  Free Quote
                </h5>
                <FaArrowRightLong className="text-white" />
              </div>
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navber;
