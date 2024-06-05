import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Img from "../Components/Img";
import Aboutimg from "../assets/img/about.png";
import { GiArcheryTarget } from "react-icons/gi";
import vic from "../assets/img/Vector.png";
import gdesine from "../assets/img/Graphics Design.png";
import wdesine from "../assets/img/Web Developer.png";
import ddesine from "../assets/img/Digital Marketing.png";
import adesine from "../assets/img/App Design.png";
import Button from "../Components/Button";
import parsentids from "../assets/img/Group 15.png";
import rightimg from "../assets/img/Group 16.png";
import threimg from "../assets/img/threeimg.png";
import worldmap from "../assets/img/World Map.png";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import member from "../assets/img/member.png";
import setingimg from "../assets/img/seting.png";
import manimg from "../assets/img/man.png";
import wmanimg from "../assets/img/wman.png";
import trofyimg from "../assets/img/trofy.png";

const Aboutroute = () => {
  return (
    <>
      <section className="bg-[url('/hero.png')] bg-no-repeat bg-cover  bg-center lg:bg-auto  ">
        <Container>
          <div
            className=" flex justify-center flex-col items-center lg:pt-[306px] pt-[200px] lg:pb-[154px] pb-[100px] gap-4
            "
          >
            <h1 className=" font-nunito font-bold text-[46px] leading-10 text-white">
              About Us
            </h1>

            <p className=" font-dmSans text-[16px] leading-10  text-[#FFFFFF]">
              Home -{" "}
              <span className="duration-300 hover:text-[#FE651B]">
                About Us
              </span>
            </p>
          </div>
        </Container>
      </section>

      <section className=" lg:my-[109px] my-10">
        <Container>
          <Flex
            className={`lg:mt-[120px] mt-[30px] items-center md:flex-wrap md:justify-center lg:flex-nowrap  md:flex-row flex-col`}
          >
            <div className=" relative">
              <Img src={gdesine} />
              <h3 className=" font-nunito font-bold text-[25px] text-[#1A1A1A] duration-300 hover:text-[#3661FC] absolute left-[12%] top-[61%] bg-[#F4F4FF] ">
                Graphics Design
              </h3>
            </div>
            <div className=" relative">
              <Img src={wdesine} />
              <h3 className=" font-nunito font-bold text-[25px] text-[#1A1A1A] duration-300 hover:text-[#3661FC] absolute left-[12%] top-[61%] bg-[#F4F4FF] ">
                Web Developer
              </h3>
            </div>
            <div className=" relative">
              <Img src={ddesine} />
              <h3 className=" font-nunito font-bold text-[25px] text-[#1A1A1A] duration-300 hover:text-[#3661FC] absolute left-[12%] top-[61%] bg-[#F4F4FF] ">
                Digital Marketing
              </h3>
            </div>
            <div className=" relative">
              <Img src={adesine} />
              <h3 className=" font-nunito font-bold text-[25px] text-[#1A1A1A] duration-300 hover:text-[#3661FC] absolute left-[12%] top-[61%] bg-[#F4F4FF] ">
                App Design
              </h3>
            </div>
            {/* <Img src={wdesine} />
          <Img src={ddesine} />
          <Img src={adesine} /> */}
          </Flex>
          <Flex
            className={` flex items-center lg:gap-[109px] gap-10 lg:flex-row flex-col lg:px-0 px-5 lg:mt-[120px] mt-10 `}
          >
            <Img className={`order-2`} src={Aboutimg} />
            <div className=" lg:order-2 order-1">
              <div className=" flex gap-2 items-center  ">
                <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
                <h3 className=" font-dmSans font-medium text-[20px] text-[#3661FC]">
                  About Our Company
                </h3>
              </div>

              <h1
                className=" font-nunito font-bold text-[46px] leading-[56px] w-auto lg:w-[655px]
              text-[#1A1A1A] mt-4"
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
        </Container>
      </section>

      <section className=" bg-[#F4F4FF] lg:py-[120px] py-10">
        <Container>
          <Flex
            className={` flex items-center  justify-between gap-10 lg:gap-0 lg:flex-row flex-col lg:px-0 px-5`}
          >
            <div>
              <div className=" flex gap-2 items-center  ">
                <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
                <h3 className=" font-dmSans font-medium text-[20px] text-[#3661FC]">
                  Why Choose Ortencey
                </h3>
              </div>
              <h1
                className=" font-nunito font-bold text-[46px] leading-[56px] w-auto lg:w-[655px]
              text-[#1A1A1A] mt-4  "
              >
                Reason For Choosing Our Digital Agency
              </h1>
              <p
                className=" font-dmSans text-[16px] leading-[26px] w-auto lg:w-[589px]
            text-[#6B6161] mt-7 "
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have assuffered alteration in some form, by
                injected humour, or randomised words which don't a look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything.
              </p>
              <div className=" pt-6">
                <Img src={parsentids} />
              </div>
            </div>
            <Img src={rightimg} />
          </Flex>
        </Container>
      </section>

      <section className=" lg:my-[109px] my-10">
        <Container>
          <Flex
            className={` flex items-center lg:gap-[109px] gap-10 lg:flex-row flex-col lg:px-0 px-5 lg:mt-[120px] mt-10 `}
          >
            <Img className={``} src={threimg} />
            <div className=" ">
              <div className=" flex gap-2 items-center  ">
                <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
                <h3 className=" font-dmSans font-medium text-[20px] text-[#3661FC]">
                  Reason of Our Success
                </h3>
              </div>

              <h1
                className=" font-nunito font-bold text-[46px] leading-[56px] w-auto lg:w-[655px]
              text-[#1A1A1A] mt-4"
              >
                Quality & Experience Best Digital Agency
              </h1>
              <div className=" flex  mt-8 gap-5">
                <button
                  className=" font-dmSans text-[16px] py-[9px] px-4 bg-[#F4F4FF]
              text-[#6B6161] rounded-full duration-300 hover:text-white hover:bg-[#FE651B]
              "
                >
                  Our Mission
                </button>

                <button
                  className=" font-dmSans text-[16px] py-[9px] px-4 
               rounded-full duration-300 text-white bg-[#FE651B]
              "
                >
                  Our History
                </button>
                <button
                  className=" font-dmSans text-[16px] py-[9px] px-4 bg-[#F4F4FF]
              text-[#6B6161] rounded-full duration-300 hover:text-white hover:bg-[#FE651B]
              "
                >
                  Our Vission
                </button>
              </div>
              <p
                className=" font-dmSans text-[16px] leading-[26px] w-auto lg:w-[656px]
            text-[#6B6161] mt-7 "
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majori suffered alteration in some form, by injected
                humour, or randomised word whic look even sligh believable. If
                you are going to use.
              </p>
              <div className=" mt-7 flex gap-7 lga:items-center flex-col lg:flex-row ">
                <Img className={` `} src={worldmap} />
                <div className=" flex   flex-col  ">
                  <div className="flex items-center gap-3">
                    <Img src={vic} />
                    <h4 className=" font-dmSans lg:text-[16px] text-[#1A1A1A] leading-[26px] ">
                      Financial Growth System
                    </h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <Img src={vic} />
                    <h4 className=" font-dmSans text-[16px] text-[#1A1A1A] leading-[26px] ">
                      Customer Oriented Program Daily
                    </h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <Img src={vic} />
                    <h4 className=" font-dmSans text-[16px] text-[#1A1A1A] leading-[26px] ">
                      Dedicated Team member
                    </h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <Img src={vic} />
                    <h4 className=" font-dmSans text-[16px] text-[#1A1A1A] leading-[26px] ">
                      Product ux Design & Development
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </section>

      <section className="bg-[#F4F4FF] lg:py-[120px] py-10">
        <Container>
          <div className=" flex lg:items-center items-start px-5 justify-center flex-col">
            <div className=" flex gap-2 items-center  ">
              <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
              <h3 className=" font-dmSans font-medium text-[20px] text-[#3661FC]">
                Team Member
              </h3>
            </div>{" "}
            <h1
              className=" font-nunito font-bold text-[46px] leading-[56px]
              text-[#1A1A1A] mt-4  "
            >
              Creative Team Member
            </h1>
          </div>
          <Flex
            className={` gap-6 flex-col md:flex-row flex-wrap justify-center items-center mt-[30px] lg:mt-[47px]`}
          >
            <div className="  inline-block  group ">
              <div className=" bg-white    inline-block px-5 py-6 pt-5 text-center rounded-[30px]">
                <Img src={member} />
                <div className="relative  ">
                  <div className=" group-hover:invisible duration-200  opacity-100 group-hover:opacity-0">
                    <h3 className=" font-nunito mt-6  text-[25px] font-bold text-black ">
                      Robert Sions
                    </h3>
                    <p className=" text-[#252424] leading-[30px] group font-nunito font-medium ">
                      Business Consultant
                    </p>
                  </div>
                  <div className=" cursor-pointer absolute  bottom-[-20px] invisible    left-[50%] transform translate-x-[-50%] group-hover:bottom-0 group-hover:visible duration-200  opacity-0 group-hover:opacity-100">
                    <div className=" flex  justify-center gap-3">
                      <CiFacebook className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaTwitter className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaLinkedin className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaYoutube className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  inline-block  group ">
              <div className=" bg-white    inline-block px-5 py-6 pt-5 text-center rounded-[30px]">
                <Img src={member} />
                <div className="relative  ">
                  <div className=" group-hover:invisible duration-200  opacity-100 group-hover:opacity-0">
                    <h3 className=" font-nunito mt-6  text-[25px] font-bold text-black ">
                      Robert Sions
                    </h3>
                    <p className=" text-[#252424] leading-[30px] group font-nunito font-medium ">
                      Business Consultant
                    </p>
                  </div>
                  <div className=" cursor-pointer absolute  bottom-[-20px] invisible    left-[50%] transform translate-x-[-50%] group-hover:bottom-0 group-hover:visible duration-200  opacity-0 group-hover:opacity-100">
                    <div className=" flex  justify-center gap-3">
                      <CiFacebook className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaTwitter className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaLinkedin className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaYoutube className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  inline-block  group ">
              <div className=" bg-white    inline-block px-5 py-6 pt-5 text-center rounded-[30px]">
                <Img src={member} />
                <div className="relative  ">
                  <div className=" group-hover:invisible duration-200  opacity-100 group-hover:opacity-0">
                    <h3 className=" font-nunito mt-6  text-[25px] font-bold text-black ">
                      Robert Sions
                    </h3>
                    <p className=" text-[#252424] leading-[30px] group font-nunito font-medium ">
                      Business Consultant
                    </p>
                  </div>
                  <div className=" cursor-pointer absolute  bottom-[-20px] invisible    left-[50%] transform translate-x-[-50%] group-hover:bottom-0 group-hover:visible duration-200  opacity-0 group-hover:opacity-100">
                    <div className=" flex  justify-center gap-3">
                      <CiFacebook className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaTwitter className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaLinkedin className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaYoutube className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  inline-block  group ">
              <div className=" bg-white    inline-block px-5 py-6 pt-5 text-center rounded-[30px]">
                <Img src={member} />
                <div className="relative  ">
                  <div className=" group-hover:invisible duration-200  opacity-100 group-hover:opacity-0">
                    <h3 className=" font-nunito mt-6  text-[25px] font-bold text-black ">
                      Robert Sions
                    </h3>
                    <p className=" text-[#252424] leading-[30px] group font-nunito font-medium ">
                      Business Consultant
                    </p>
                  </div>
                  <div className=" cursor-pointer absolute  bottom-[-20px] invisible    left-[50%] transform translate-x-[-50%] group-hover:bottom-0 group-hover:visible duration-200  opacity-0 group-hover:opacity-100">
                    <div className=" flex  justify-center gap-3">
                      <CiFacebook className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaTwitter className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaLinkedin className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                      <FaYoutube className=" rounded-[50%] hover:text-[#F4F4FF] hover:bg-[#3661FC] text-[40px] bg-[#F4F4FF] text-[#3661FC]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
      <section className="lg:py-[120px] py-10">
        <Container>
          <Flex
            className={`  md:justify-center flex-col md:flex-row md:flex-wrap items-center gap-5  `}
          >
            <div className=" flex gap-5 items-start flde bg-[#F4F4FF] py-8 md:w-[342px] w-[90%] rounded-[20px] px-10  ">
              <Img src={setingimg} />
              <div>
                <h1 className=" font-nunito font-bold text-[46px] leading-[50px] text-black ">
                  1500 +
                </h1>
                <p className=" font-dmSans text-[20px] leading-[50px] text-[#6B6161]  ">
                  Project Complete
                </p>
              </div>
            </div>
            <div className=" flex gap-5 items-start flde bg-[#F4F4FF] py-8 md:w-[342px] w-[90%] rounded-[20px] px-10  ">
              <Img src={manimg} />
              <div>
                <h1 className=" font-nunito font-bold text-[46px] leading-[50px] text-black ">
                  150 +
                </h1>
                <p className=" font-dmSans text-[20px] leading-[50px] text-[#6B6161]  ">
                  Happy Clients
                </p>
              </div>
            </div>
            <div className=" flex gap-5 items-start flde bg-[#F4F4FF] py-8 md:w-[342px] w-[90%] rounded-[20px] px-10  ">
              <Img src={wmanimg} />
              <div>
                <h1 className=" font-nunito font-bold text-[46px] leading-[50px] text-black ">
                  95 +
                </h1>
                <p className=" font-dmSans text-[20px] leading-[50px] text-[#6B6161]  ">
                  Professional Team
                </p>
              </div>
            </div>
            <div className=" flex gap-5 items-start flde bg-[#F4F4FF] py-8 md:w-[342px] w-[90%] rounded-[20px] px-10  ">
              <Img src={trofyimg} />
              <div>
                <h1 className=" font-nunito font-bold text-[46px] leading-[50px] text-black ">
                  120 +
                </h1>
                <p className=" font-dmSans text-[20px] leading-[50px] text-[#6B6161]  ">
                  Professional Team
                </p>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Aboutroute;
