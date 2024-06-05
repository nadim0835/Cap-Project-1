import Container from "./../Components/Container";
import { GiArcheryTarget } from "react-icons/gi";
import Flex from "./../Components/Flex";
import Img from "./../Components/Img";
import imge1 from "../assets/img/Add your image here.png";
import imge2 from "../assets/img/Business Planning.png";
import imge3 from "../assets/img/Market research.png";
import imge4 from "../assets/img/Completely Solution.png";

import { FaSearch } from "react-icons/fa";

const ServiseRoute = () => {
  return (
    <>
      <section className="bg-[url('/hero.png')] bg-no-repeat bg-cover  bg-center lg:bg-auto  ">
        <Container>
          <div
            className=" flex justify-center flex-col items-center lg:pt-[306px] pt-[200px] lg:pb-[154px] pb-[100px] gap-4
            "
          >
            <h1 className=" font-nunito font-bold text-[46px] leading-10 text-white">
              Service
            </h1>

            <p className=" font-dmSans text-[16px] leading-10  text-[#FFFFFF]">
              Home -{" "}
              <span className="duration-300 text-[#FE651B]">Service</span>
            </p>
          </div>
        </Container>
      </section>

      <section className=" lg:my-[109px] my-10">
        <Container>
          <main className=" flex lg:items-center items-start px-5 justify-center flex-col">
            <div className=" flex gap-2 items-center  ">
              <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
              <h3 className=" font-dmSans font-medium text-[20px] text-[#FE651B]">
                Our Services
              </h3>
            </div>{" "}
            <h1
              className=" font-nunito font-bold text-[46px] leading-[56px]
              text-[#1A1A1A] mt-4  "
            >
              Best Quality Services
            </h1>
          </main>
          <Flex
            className={` lg:items-center justify-between bg-[#F4F4FF] py-5 lg:pl-5 lg:pr-[60px] flex-col lg:flex-row lg:gap-0 gap-8 items-start lg:rounded-[50px] border duration-200 hover:border-[#FE651B] px-5 md:mt-[46px] mt-8`}
          >
            <Img src={imge1} />
            <div className=" font-nunito font-bold text-[25px] lg:w-[55%] md:w-[80%] w-[100%] ">
              <h2>Search Engine Optimization</h2>
              <p className=" font-dmSans text-[16px] leading-7 pt-5  text-[#6B6161] ">
                There are many variations of passages of Lorem Ipsusm available,
                but the majority our as have suffered alteration in some form,
                by injected humour, or randomised word which don't worry a look
                even sligh believable. If you are going to use a passage.
              </p>
            </div>
            <button className=" font-dmSans text-[18px] leading-7 duration-300 hover:bg-[#FE651B]  py-[15px] hover:text-white px-8 rounded-[500px] border-[#FE651B] border">
              Read More
            </button>
          </Flex>
          <Flex
            className={` lg:items-center justify-between bg-[#F4F4FF] py-5 lg:pl-5 lg:pr-[60px] flex-col lg:flex-row lg:gap-0 gap-8 items-start lg:rounded-[50px] border duration-200 hover:border-[#FE651B] px-5 mt-[30px]`}
          >
            <Img src={imge1} />
            <div className=" font-nunito font-bold text-[25px] lg:w-[55%] md:w-[80%] w-[100%] ">
              <h2>Web Design & Development</h2>
              <p className=" font-dmSans text-[16px] leading-7 pt-5  text-[#6B6161] ">
                There are many variations of passages of Lorem Ipsusm available,
                but the majority our as have suffered alteration in some form,
                by injected humour, or randomised word which don't worry a look
                even sligh believable. If you are going to use a passage.
              </p>
            </div>
            <button className=" font-dmSans text-[18px] leading-7 duration-300 hover:bg-[#FE651B]  py-[15px] hover:text-white px-8 rounded-[500px] border-[#FE651B] border">
              Read More
            </button>
          </Flex>
          <Flex
            className={` lg:items-center justify-between bg-[#F4F4FF] py-5 lg:pl-5 lg:pr-[60px] flex-col lg:flex-row lg:gap-0 gap-8 items-start lg:rounded-[50px] border duration-200 hover:border-[#FE651B] px-5 mt-[30px]`}
          >
            <Img src={imge1} />
            <div className=" font-nunito font-bold text-[25px] lg:w-[55%] md:w-[80%] w-[100%] ">
              <h2>Email and Content Marketing</h2>
              <p className=" font-dmSans text-[16px] leading-7 pt-5  text-[#6B6161] ">
                There are many variations of passages of Lorem Ipsusm available,
                but the majority our as have suffered alteration in some form,
                by injected humour, or randomised word which don't worry a look
                even sligh believable. If you are going to use a passage.
              </p>
            </div>
            <button className=" font-dmSans text-[18px] leading-7 duration-300 hover:bg-[#FE651B]  py-[15px] hover:text-white px-8 rounded-[500px] border-[#FE651B] border">
              Read More
            </button>
          </Flex>
          <Flex
            className={` lg:items-center justify-between bg-[#F4F4FF] py-5 lg:pl-5 lg:pr-[60px] flex-col lg:flex-row lg:gap-0 gap-8 items-start lg:rounded-[50px] border duration-200 hover:border-[#FE651B] px-5 mt-[30px]`}
          >
            <Img src={imge1} />
            <div className=" font-nunito font-bold text-[25px] lg:w-[55%] md:w-[80%] w-[100%] ">
              <h2>Social Media Network Marketing </h2>
              <p className=" font-dmSans text-[16px] leading-7 pt-5  text-[#6B6161] ">
                There are many variations of passages of Lorem Ipsusm available,
                but the majority our as have suffered alteration in some form,
                by injected humour, or randomised word which don't worry a look
                even sligh believable. If you are going to use a passage.
              </p>
            </div>
            <button className=" font-dmSans text-[18px] leading-7 duration-300 hover:bg-[#FE651B]  py-[15px] hover:text-white px-8 rounded-[500px] border-[#FE651B] border">
              Read More
            </button>
          </Flex>
        </Container>
      </section>

      <section className="bg-[url('/work.png')] bg-no-repeat bg-cover lg:py-[109px] py-10  bg-center lg:bg-auto  ">
        <Container>
          <main className=" flex lg:items-center items-start px-5 justify-center flex-col">
            <div className=" flex gap-2 items-center  ">
              <GiArcheryTarget className=" text-[25px] text-[#3661FC] " />
              <h3 className=" font-dmSans font-medium text-[20px] text-[#FE651B]">
                How We Work!
              </h3>
            </div>{" "}
            <h1
              className=" font-nunito font-bold text-[46px] leading-[56px]
              text-[#1A1A1A] mt-4  "
            >
              Best Quality Services
            </h1>
          </main>
          <Flex className={` justify-between mt-[46px] flex-col lg:flex-row lg:gap-0 gap-8 px-5 `}>

            <div className=" relative inline-block ">
              <Img src={imge2} />
              <div className=" md:w-[248px] w-[240px] absolute md:top-[43px] top-6 md:left-[185px] lg:right-8 left-[140px]  ">
                <h2
                  className=" font-nunito font-bold duration-200 text-[18px] md:text-[25px] text-black 
              hover:text-[#3661FC]"
                >
                  Business Planning
                </h2>
                <p className=" font-dmSans md:text-[16px] text-[14px] md:w-auto w-[170px] text-black mt-1 md:mt-4">
                  There are many variations of pass Lorem Ipsum available, but
                  the a have suffered alteration.
                </p>
              </div>
            </div>
            <div className=" relative inline-block ">
              <Img src={imge3} />
              <div className=" md:w-[248px] w-[240px] absolute md:top-[43px] top-6 md:left-[185px] lg:right-8 left-[140px]  ">
                <h2
                  className=" font-nunito font-bold duration-200 text-[18px] md:text-[25px] text-black 
              hover:text-[#3661FC]"
                >
                  Market research
                </h2>
                <p className=" font-dmSans md:text-[16px] text-[14px] md:w-auto w-[170px] text-black mt-1 md:mt-4">
                  There are many variations of pass Lorem Ipsum available, but
                  the a have suffered alteration.
                </p>
              </div>
            </div>
            <div className=" relative md:bg-white rounded-[20px] ">
              <Img src={imge4} />
              <div className=" lg:w-[248px] w-[240px] md:w-[60%] absolute md:top-[43px] top-6 md:right-10 right-[-42px]    ">
                <h2
                  className=" font-nunito font-bold duration-200 text-[18px] md:text-[25px] text-black 
              hover:text-[#3661FC]"
                >
                Completely Solution
                </h2>
                <p className=" font-dmSans md:text-[16px] text-[14px] w-[170px] md:w-full text-black mt-1 md:mt-4">
                  There are many variations of pass Lorem Ipsum available, but
                  the a have suffered alteration.
                </p>
              </div>
            </div>
         
          
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default ServiseRoute;
