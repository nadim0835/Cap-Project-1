import React from "react";
import Container from "./Container";
import { GiArcheryTarget } from "react-icons/gi";
import Img from "./Img";
import psot from "../assets/img/Post 1.png";
import Flex from "./Flex";

const OurBlog = () => {
  return (
    <section className=" lg:py-[120px] py-10">
      <Container>
        <div className=" flex md:items-center items-start  px-5 justify-center flex-col">
          <div className=" flex gap-2 items-center  ">
            <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
            <h3 className=" font-dmSans font-medium text-[20px] text-[#3661FC]">
              Our Blog
            </h3>
          </div>{" "}
          <h1
            className=" font-nunito font-bold text-[46px] leading-[56px]
              text-[#1A1A1A] mt-4  "
          >
            Latest Blogs & Articles
          </h1>
        </div>
        <Flex className={` flex-col lg:flex-row  
         lg:flex-nowrap  items-center mt-[47px] gap-8 lg:gap-0`}>
          <div className=" relative px-5">
            <Img src={psot} />
            <div className=" absolute bottom-[20px] left-[40px] md:left-[50px]">
              <h2 className="  font-nunito font-bold lg:text-[25px] text-[20px] lg:w-[386px] w-[300px] text-[#A1A1A] hover:text-[#3661FC] duration-300">
                Successful business partner have a meeting and discussing
              </h2>
            </div>
          </div>
          <div className=" relative px-5">
            <Img src={psot} />
            <div className=" absolute bottom-[20px] left-[40px] md:left-[50px]">
              <h2 className="  font-nunito font-bold lg:text-[25px] text-[20px] lg:w-[386px] w-[300px] text-[#A1A1A] hover:text-[#3661FC] duration-300">
                Successful business partner have a meeting and discussing
              </h2>
            </div>
          </div>
          <div className=" relative px-5">
            <Img src={psot} />
            <div className=" absolute bottom-[20px] left-[40px] md:left-[50px]">
              <h2 className="  font-nunito font-bold lg:text-[25px] text-[20px] lg:w-[386px] w-[300px] text-[#A1A1A] hover:text-[#3661FC] duration-300">
                Successful business partner have a meeting and discussing
              </h2>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default OurBlog;
