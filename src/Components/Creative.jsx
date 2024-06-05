import { GiArcheryTarget } from "react-icons/gi";
import Container from "./Container";
import member from "../assets/img/member.png";
import Flex from "./Flex";
import Img from "./Img";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const Creative = () => {
  return (
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
        <Flex className={` gap-6 flex-col md:flex-row flex-wrap justify-center items-center mt-[30px] lg:mt-[47px]`}>
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
  );
};

export default Creative;
