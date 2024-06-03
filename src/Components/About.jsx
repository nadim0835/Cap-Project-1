import Container from "./Container";
import Flex from "./Flex";
import Img from "./Img";
import Aboutimg from "../assets/img/about.png";
import { GiArcheryTarget } from "react-icons/gi";
import vic from "../assets/img/Vector.png";
import gdesine from "../assets/img/Graphics Design.png";
import wdesine from "../assets/img/Web Developer.png";
import ddesine from "../assets/img/Digital Marketing.png";
import adesine from "../assets/img/App Design.png";
import Button from "./Button";

const About = () => {
  return (
    <section className=" lg:my-[109px] my-10">
      <Container>
        <Flex
          className={` flex items-center lg:gap-[109px] gap-10 lg:flex-row flex-col lg:px-0 px-5`}
          
        >
          <Img src={Aboutimg} />
          <div>
            <div className=" flex gap-2 items-center  ">
              <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
              <h3 className=" font-dmSans font-medium text-[20px] text-[#3661FC]">
                About Our Company
              </h3>
            </div>

            <h1
              className=" font-nunito font-bold text-[46px] leading-[56px] w-auto lg:w-[655px]
              text-[#1A1A1A] mt-4  "
            >
              Best Digital Marketing Agency For People
            </h1>
            <p
              className=" font-dmSans text-[16px] leading-[26px] w-auto lg:w-[656px]
            text-[#6B6161] mt-7 "
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have assuffered alteration in some form, by
              injected humour, or randomised words which don't a look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything.
            </p>
            <div className=" mt-7">
              <div className=" flex  lg:gap-[162px] lg:flex-row flex-col  ">
                <div className="flex items-center gap-3">
                  <Img src={vic} />
                  <h4 className=" font-dmSans lg:text-[16px] text-[#1A1A1A] leading-[26px] ">
                    Digital Strategy
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <Img src={vic} />
                  <h4 className=" font-dmSans text-[16px] text-[#1A1A1A] leading-[26px] ">
                    SEO Optimization
                  </h4>
                </div>
              </div>
              <div className=" flex  lg:gap-[202px] lg:flex-row flex-col ">
                <div className="flex items-center gap-3">
                  <Img src={vic} />
                  <h4 className=" font-dmSans text-[16px] text-[#1A1A1A] leading-[26px] ">
                    Marketing
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <Img src={vic} />
                  <h4 className=" font-dmSans text-[16px] text-[#1A1A1A] leading-[26px] ">
                    First Working Process
                  </h4>
                </div>
              </div>
            </div>
            <Button className={` lg:mt-[48px] mt-[30px] inline-block`}>
              Read More
            </Button>
          </div>
        </Flex>
        <Flex
          className={`lg:mt-[120px] mt-[30px] items-center  lg:flex-row flex-col`}
        >
          <div className=" relative">
            <Img src={gdesine} />
            <h3 className=" font-nunito font-bold text-[25px] text-[#1A1A1A] duration-300 hover:text-[#3661FC] absolute left-[12%] top-[61%] bg-[#F4F4FF] ">Graphics Design</h3>
          </div>
          <div className=" relative">
            <Img src={wdesine} />
            <h3 className=" font-nunito font-bold text-[25px] text-[#1A1A1A] duration-300 hover:text-[#3661FC] absolute left-[12%] top-[61%] bg-[#F4F4FF] ">Web Developer</h3>
          </div>
          <div className=" relative">
            <Img src={ddesine} />
            <h3 className=" font-nunito font-bold text-[25px] text-[#1A1A1A] duration-300 hover:text-[#3661FC] absolute left-[12%] top-[61%] bg-[#F4F4FF] ">Digital Marketing</h3>
          </div>
          <div className=" relative">
            <Img src={adesine} />
            <h3 className=" font-nunito font-bold text-[25px] text-[#1A1A1A] duration-300 hover:text-[#3661FC] absolute left-[12%] top-[61%] bg-[#F4F4FF] ">App Design</h3>
          </div>
          {/* <Img src={wdesine} />
          <Img src={ddesine} />
          <Img src={adesine} /> */}
        </Flex>
      </Container>
    </section>
  );
};

export default About;
