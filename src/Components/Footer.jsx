import { CiCalendarDate, CiFacebook } from "react-icons/ci";
import Button from "./Button";
import Container from "./Container";
import Flex from "./Flex";
import {
  FaLinkedin,
  FaLocationPin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import squreimg from "../assets/img/Rectangle 42.png";
import Img from "./Img";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" bg-[url('/Footer.png')] bg-no-repeat bg-cover  bg-center lg:bg-auto">
      <Container>
        <Flex
          className={` px-4 lg:px-0 lg:justify-between lg:items-center items-start gap-8 lg:gap-0 lg:py-[60px] py-9 flex-col lg:flex-row  border-b-[1px] border-b-[#393939] `}
        >
          <div>
            <h4 className=" font-dmSans text-[16px] leading-[26px]  text-[#FFFFFF] ">
              For Digital Marketing Agency
            </h4>
            <h3 className=" font-nunito font-bold text-[25px] text-[#FFFFFF] ">
              Join Our Agency Community
            </h3>
          </div>
          <div className=" flex flex-col lg:flex-row gap-4 relative lg:bg-white rounded-[500px] ">
            <input
              placeholder="Enter your email address"
              className=" pl-[35px] placeholder:text-[#B1B1B1]  placeholder:font-dmSans placeholder:text-[16px] leading-6 -full border-none  md:w-[534px] w-[320px] focus:outline-none   md:h-[80px] h-[50px]   rounded-[500px] "
              type="text   "
            />
            <Button
              className={` inline-block bg-[#3661FC] md:absolute right-[10px] top-[10px]`}
            >
              Subscribe Now
            </Button>
          </div>
        </Flex>
        <Flex
          className={` lg:py-[93px] py-9 flex-col md:flex-row justify-between items-start lg:items-stretch px-5 lg:gap-0 gap-7 md:gap-16 md:flex-wrap`}
        >
          <div className=" lg:w-[28%] md:w-[40%] w-[90%]">
            <div>
              <h3 className=" font-nunito font-bold text-[25px] text-[#FFFFFF] pb-3 ">
                About Company
              </h3>
              <div className=" h-[2px] w-[87px] bg-[#FE651B]  "></div>
            </div>
            <p className=" text-[#D9D9D9] font-dmSans text-[16px] leading-6 py-6">
              There are many variations of passages of Lore Ipsum availab but
              the majority have suffereds alteration in some form, by injected
              humour a randomised words which
            </p>
            <div className=" flex justify-start gap-3">
              <CiFacebook className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
              <FaTwitter className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
              <FaLinkedin className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
              <FaYoutube className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
            </div>
          </div>
          <div className="lg:w-[18%] md:w-[40%] w-[80%]">
            <div>
              <h3 className=" font-nunito font-bold text-[25px] text-[#FFFFFF] pb-3 ">
                Featured Services
              </h3>
              <div className=" h-[2px] w-[87px] bg-[#FE651B]  "></div>
            </div>
            <ul className=" pl-3 pt-6">
              <li className=" font-dmSans text-[16px] leading-9 text-[#D9D9D9] list-disc duration-300 hover:text-[#3661FC]">
                Social Media Marketing
              </li>
              <li className=" font-dmSans text-[16px] leading-9 text-[#D9D9D9] list-disc duration-300 hover:text-[#3661FC]">
                Pay Per Click Management
              </li>
              <li className=" font-dmSans text-[16px] leading-9 text-[#D9D9D9] list-disc duration-300 hover:text-[#3661FC]">
                Search Engine Optimization
              </li>
              <li className=" font-dmSans text-[16px] leading-9 text-[#D9D9D9] list-disc duration-300 hover:text-[#3661FC]">
                Free SEO Analysis
              </li>
              <li className=" font-dmSans text-[16px] leading-9 text-[#D9D9D9] list-disc duration-300 hover:text-[#3661FC]">
                Case Studies
              </li>
            </ul>
          </div>
          <div className=" lg:w-[18%] md:w-[40%] w-[80%]">
            <div>
              <h3 className=" font-nunito font-bold text-[25px] text-[#FFFFFF] pb-3 ">
                Recent Post
              </h3>
              <div className=" h-[2px] w-[87px] bg-[#FE651B]  "></div>
            </div>

            <div className=" pt-7">
              <div className=" flex gap-5 items-center">
                <Img src={squreimg} />
                <div className="">
                  <h5 className=" font-dmSans text-[16px] text-[#D9D9D9] leading-5">
                    Thoughtful man using laptop pondering
                  </h5>
                  <p className="  font-dmSans text-[14px] text-[#D9D9D9] leading-5 pt-3">
                    {" "}
                    <CiCalendarDate className=" text-[#3661FC] inline-block text-[30px] pr-2" />{" "}
                    09 Dec 2022
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center mt-6">
                <Img src={squreimg} />
                <div className="">
                  <h5 className=" font-dmSans text-[16px] text-[#D9D9D9] leading-5">
                    Young man with a lap top in a business
                  </h5>
                  <p className="  font-dmSans text-[14px] text-[#D9D9D9] leading-5 pt-3">
                    {" "}
                    <CiCalendarDate className=" text-[#3661FC] inline-block text-[30px] pr-2" />{" "}
                    09 Dec 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-[24%] md:w-[40%] w-[80%]">
            <div>
              <h3 className=" font-nunito font-bold text-[25px] text-[#FFFFFF] pb-3 ">
                Contact Us
              </h3>
              <div className=" h-[2px] w-[87px] bg-[#FE651B]  "></div>
            </div>
            <div className=" pt-7">
              <div className=" flex items-center gap-4">
                <IoCallOutline className=" text-[30px] text-[#3661FC]" />
                <p className=" font-dmSans text-[16px] leading-7 text-[#D9D9D9] ">
                  +(323) 750-1234
                </p>
              </div>
              <div className=" flex items-center gap-4 pt-[20px]">
                <IoIosMail className=" text-[30px] text-[#3661FC]" />
                <p className=" font-dmSans text-[16px] leading-7 text-[#D9D9D9] ">
                  infoyourortencey@gmail.com
                </p>
              </div>
              <div className=" flex  gap-4 pt-[20px]">
                <FaLocationPin className=" text-[30px] text-[#3661FC]" />
                <p className=" font-dmSans text-[16px] leading-7 text-[#D9D9D9] ">
                  374 FA Tower, William S Blvd, Melbourne 2721, IL, USA
                </p>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
      <main className=" bg-[#3661FC]">
        <Container>
          <Flex className={` justify-between items-center flex-col px-5 lg:px-0 md:flex-row gap-5 py-[22px]`}>
            <p className=" font-dmSans text-[16px] leading-7 text-[#FFF]">
              2022 © All rights reserved by devsnest-llc
            </p>
            <div className=" flex gap-4">
              <p className=" font-dmSans text-[16px] leading-7 text-[#FFF]">
                Privacy Policy
              </p>
              <p className=" font-dmSans text-[16px] leading-7 text-[#FFF]">
                {" "}
                | 
              </p>
              <p className=" font-dmSans text-[16px] leading-7 text-[#FFF]">
                {" "}
                 Terms & Conditions
              </p>
            </div>
          </Flex>
        </Container>
      </main>
    </footer>
  );
};

export default Footer;
