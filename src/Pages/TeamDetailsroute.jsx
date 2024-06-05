import {
  FaFacebook,
  FaLocationPin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Img from "../Components/Img";
import team from "../assets/img/temember.png";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import grop from "../assets/img/Group 19.png";
import grop4 from "../assets/img/4img.png";
import big4 from "../assets/img/big4.png";
import Button from "../Components/Button";


const TeamDetailsroute = () => {
  return (
    <>
      <section className="bg-[url('/hero.png')] bg-no-repeat bg-cover  bg-center lg:bg-auto  ">
        <Container>
          <div
            className=" flex justify-center flex-col items-center lg:pt-[306px] pt-[200px] lg:pb-[154px] pb-[100px] gap-4
            "
          >
            <h1 className=" font-nunito font-bold text-[46px] leading-10 text-white">
              Team Details
            </h1>

            <p className=" font-dmSans text-[16px] leading-10  text-[#FFFFFF]">
              Home -{" "}
              <span className="duration-300 text-[#FE651B]">Team Details</span>
            </p>
          </div>
        </Container>
      </section>
      <section className="lg:mt-[120px] mt-10">
        <Container>
          <Flex
            className={` flex-col lg:flex-row bg-[#F4F4FF] p-7 rounded-[20px]  lg:gap-[120px] gap-8 lg:items-center items-start `}
          >
            <Img src={team} />
            <div>
              <h4 className=" font-bold font-nunito text-[36px] leading-10">
                David Phillips
              </h4>
              <p className="text-black font-dmSans text-[14px] leading-7">
                Senior Manager
              </p>

              <div className=" pt-7">
                <div className=" flex items-center gap-4">
                  <IoCallOutline className=" text-[30px] text-[#3661FC]" />
                  <p className=" font-dmSans text-[16px] leading-7 text-black ">
                    +(323) 750-1234
                  </p>
                </div>
                <div className=" flex items-center gap-4 pt-[20px]">
                  <IoIosMail className=" text-[30px] text-[#3661FC]" />
                  <p className=" font-dmSans text-[16px] leading-7 text-black ">
                    infoyourortencey@gmail.com
                  </p>
                </div>
                <div className=" flex  gap-4 pt-[20px]">
                  <FaLocationPin className=" text-[30px] text-[#3661FC]" />
                  <p className=" font-dmSans text-[16px] leading-7 text-black ">
                    380 St Kilda Road, Melbourne VIC 3004, Australia
                  </p>
                </div>
              </div>
              <div className=" flex justify-between items-center mt-10">
                <p className=" font-dmSans text-[15px] md:text-[26px]  font-medium leading-7 text-black ">
                  Follow Me:
                </p>
                <div className=" flex gap-5">
                  <FaFacebook className=" text-[#3661FC] hover:text-white hover:bg-[#3661FC] text-[30px] rounded-3xl" />
                  <FaTwitter className=" text-[#3661FC] hover:text-white hover:bg-[#3661FC] text-[30px] rounded-3xl" />
                  <TiSocialLinkedinCircular className=" text-[#3661FC] hover:text-white hover:bg-[#3661FC] text-[30px] rounded-3xl" />
                  <FaYoutube className=" text-[#3661FC] hover:text-white hover:bg-[#3661FC] text-[30px] rounded-3xl" />
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
      <section className=" lg:mt-[60px] mt-9">
        <Container>
          <Flex className={` lg:gap-[146px] gap-10 flex-col lg:flex-row px-5`}>
            <Img src={grop} />
            <div>
              <h4 className=" font-bold font-nunito text-[36px] leading-10">
                Personal Experience and Skills
              </h4>
              <p className=" mt-5 text-black font-dmSans text-[14px] leading-7">
                Since joining Sotcox in 2009 .Web design encompasses many
                different skills and discipli web graphic design; user interface
                design (UI design); authoring, including standardise
                optimization. Often many individuals will work in teams covering
                different aspects of the
              </p>
              <p className=" mt-8 text-black font-dmSans text-[14px] leading-7">
                Since joining Sotcox in 2009 .Web design encompasses many
                different skills and discipli web graphic design; user interface
                design (UI design); authoring, including standardise
                optimization. Often many individuals will work in teams covering
                different aspects of the
              </p>
            </div>
          </Flex>
          <Flex className={` lg:gap-[146px] gap-10 lg:mt-[60px] mt-9 flex-col lg:flex-row px-5 `}>
            <div className=" lg:w-[43%] w-[90%] order-2 lg:order-1 ">
              <h4 className=" font-bold font-nunito text-[36px] leading-10">
                Career Guidelines
              </h4>
              <p className=" mt-5 text-black font-dmSans text-[14px] leading-7">
                As a web developer, you could work for a company or agency, or
                as a freelancer on projects for individual clients. Your tasks
                will vary depending on your work sit but day-to-day
                responsibilities might generally include.
              </p>
              <ul className=" pl-4 mt-6">
                <li className=" italic text-[18px] leading-9 text-[#1A1A1A] list-disc ">
                Designing user interfaces and navigation menus
                </li>
                <li className=" italic text-[18px] leading-9 text-[#1A1A1A] list-disc ">
                Writing and reviewing code for sites, typically HTML, XM
                </li>
                <li className=" italic text-[18px] leading-9 text-[#1A1A1A] list-disc ">
                Troubleshooting problem with performance or user experience
                </li>
                <li className=" italic text-[18px] leading-9 text-[#1A1A1A] list-disc ">
                Integrating multimedia content onto a site                </li>
                <li className=" italic text-[18px] leading-9 text-[#1A1A1A] list-disc ">
                Collaborating with designers, developers, and stakeholders                </li>
                <li className=" italic text-[18px] leading-9 text-[#1A1A1A] list-disc ">
                Testing web applications                </li>
              </ul>
            </div>
            <div className=" order-1 lg:order-2">
                <Img className={``} src={grop4}/>
            </div>
          </Flex>
        </Container>
      </section>
      <section className=" lg:my-[120px] mt-10">
        <Container>
        <Flex
            className={`bg-[#F4F4FF] flex-col lg:flex-row p-[50px] rounded-[20px] justify-between gap-8 lg:items-center items-start `}
          >
            <div className="lg:w-[43%] w-[90%] lg:order-1 order-2 ">
            <h4 className=" font-bold font-nunito text-[36px] leading-10">
            Contact Me
              </h4>
              <p className="text-black font-dmSans text-[14px] leading-7">
              Your email address will not be published. Required fields are marked 
              </p>
            <div className=" flex gap-5 flex-col lg:flex-row mt-8 ">
                <input className=" w-[60%] lg:w-[294px] bg-white py-[15px] px-[26px] rounded-[500px] bg-transparent placeholder:font-dmSans placeholder:text-[16px] placeholder:leading-[26px]  placeholder:text-[#9A9A9A] " placeholder="Your Name" type="text" />
                <input className="w-[70%] lg:w-[294px] bg-white py-[15px] px-[26px] rounded-[500px] bg-transparent placeholder:font-dmSans placeholder:text-[16px] placeholder:leading-[26px]  placeholder:text-[#9A9A9A] " placeholder="Email Address" type="text" />
                
            </div>
             <input className=" w-[80%] lg:w-[608px] bg-white py-[15px] px-[26px] rounded-[500px] bg-transparent placeholder:font-dmSans placeholder:text-[16px] placeholder:leading-[26px]  placeholder:text-[#9A9A9A] mt-4 " placeholder="Business Topic" type="text" />

             <textarea  name="" className=" w-[90%] lg:h-[150px] h-auto lg:w-[608px] bg-white py-[15px] px-[26px] lg:rounded-[40px] rounded-[30px] bg-transparent placeholder:font-dmSans placeholder:text-[16px] placeholder:leading-[26px] mt-4  placeholder:text-[#9A9A9A] " placeholder="Your Name"  id="">
             </textarea>
             <Button className={`mt-10  inline-block`}>
             Send Message
             </Button>
          </div>
            <Img className={`order-1 lg:order-2`} src={team} />
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default TeamDetailsroute;
