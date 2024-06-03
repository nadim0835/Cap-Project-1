import { GiArcheryTarget } from "react-icons/gi";
import Container from "./Container";
import Flex from "./Flex";
import Img from "./Img";
import plan from "../assets/img/Basic Plan.png";
import plan2 from "../assets/img/Glod Plan.png";
import plan3 from "../assets/img/Silver Plan.png";

import vic from "../assets/img/Vector.png";

const OurPricing = () => {
  return (
    <section className="lg:pt-[120px] pt-10">
      <Container>
        <main className=" flex lg:items-center items-start px-5 justify-center flex-col">
          <div className=" flex gap-2 items-center  ">
            <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
            <h3 className=" font-dmSans font-medium text-[20px] text-[#3661FC]">
              Our Pricing
            </h3>
          </div>{" "}
          <h1
            className=" font-nunito font-bold text-[46px] leading-[56px]
              text-[#1A1A1A] mt-4  "
          >
            Our Best Pricing Plan
          </h1>
        </main>
        <Flex
          className={` flex-col lg:flex-row px-5 lg:gap-0 gap-4 mt-8 items-center lg:mt-[47px]`}
        >
          <div className=" relative">
            <Img src={plan} />
            <div className=" flex flex-col items-center absolute transform bottom-[6%]  lg:bottom-[10%] left-[50%] translate-x-[-50%] ">
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10  ">
                  Free Consultations
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10  ">
                  Business Planning
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10 ">
                  Investment Process
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#BCBCBC] lg:leading-[44px] leading-10  ">
                  Market Research
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#BCBCBC] lg:leading-[44px] leading-10  ">
                  Online Support
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#BCBCBC] lg:leading-[44px] leading-10 ">
                  Unlimited Updates
                </h4>
              </div>
              <button className=" font-dmSans lg:text-[18px] text-[#1A1A1A] border border-[#3661FC] rounded-[500px] py-[15px] lg:w-[372px] w-[280px] h-[56px] lg:mt-9 mt-2 hover:bg-[#FE651B] hover:text-white duration-200 hover:border-none ">
                Choose Plan
              </button>
            </div>
          </div>
          <div className=" relative">
            <Img src={plan2} />
            <div className=" flex flex-col items-center absolute transform bottom-[6%]  lg:bottom-[10%] left-[50%] translate-x-[-50%] ">
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10  ">
                  Free Consultations
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10  ">
                  Business Planning
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10 ">
                  Investment Process
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#BCBCBC] lg:leading-[44px] leading-10  ">
                  Market Research
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#BCBCBC] lg:leading-[44px] leading-10  ">
                  Online Support
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10 ">
                  Unlimited Updates
                </h4>
              </div>
              <button className=" font-dmSans lg:text-[18px] text-[#1A1A1A] border border-[#3661FC] rounded-[500px] py-[15px] lg:w-[372px] w-[280px] h-[56px] lg:mt-9 mt-2 hover:bg-[#FE651B] hover:text-white duration-200 hover:border-none ">
                Choose Plan
              </button>
            </div>
          </div>
          <div className=" relative">
            <Img src={plan3} />
            <div className=" flex flex-col items-center absolute transform bottom-[6%]  lg:bottom-[10%] left-[50%] translate-x-[-50%] ">
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10  ">
                  Free Consultations
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10  ">
                  Business Planning
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10 ">
                  Investment Process
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10  ">
                  Market Research
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10  ">
                  Online Support
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <Img src={vic} />
                <h4 className=" font-dmSans lg:text-[18px] text-[#1A1A1A] lg:leading-[44px] leading-10 ">
                  Unlimited Updates
                </h4>
              </div>
              <button className=" font-dmSans lg:text-[18px] text-[#1A1A1A] border border-[#3661FC] rounded-[500px] py-[15px] lg:w-[372px] w-[280px] h-[56px] lg:mt-9 mt-2 hover:bg-[#FE651B] hover:text-white duration-200 hover:border-none ">
                Choose Plan
              </button>
            </div>
          </div>
        </Flex>
      </Container>
    
    </section>
  );
};

export default OurPricing;
