import Container from "./Container";
import Flex from "./Flex";
import { GiArcheryTarget } from "react-icons/gi";
import Img from "./Img";
import parsentids from "../assets/img/Group 15.png";
import rightimg from "../assets/img/Group 16.png";


const Reason = () => {
  return (
    <section className=" bg-[#F4F4FF] lg:py-[120px] py-10">
      <Container>
        <Flex  className={` flex items-center  justify-between gap-10 lg:gap-0 lg:flex-row flex-col lg:px-0 px-5`}>
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
          <Img src={rightimg}/>
        </Flex>
      </Container>
    </section>
  );
};

export default Reason;
