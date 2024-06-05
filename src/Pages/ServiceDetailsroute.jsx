import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Img from "../Components/Img";
import bigig from "../assets/img/big.png";
import danle from "../assets/img/dbleimg.png";
import grow from "../assets/img/grow.png";
import grow2 from "../assets/img/grow2.png";
import grow3 from "../assets/img/grow3.png";
import vic from "../assets/img/Vector.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../Components/Button";

const ServiceDetailsroute = () => {
  return (
    <>
      <section className="bg-[url('/hero.png')] bg-no-repeat bg-cover  bg-center lg:bg-auto  ">
        <Container>
          <div
            className=" flex justify-center flex-col items-center lg:pt-[306px] pt-[200px] lg:pb-[154px] pb-[100px] gap-4
            "
          >
            <h1 className=" font-nunito font-bold text-[46px] leading-10 text-white">
              Service Details
            </h1>

            <p className=" font-dmSans text-[16px] leading-10  text-[#FFFFFF]">
              Home -{" "}
              <span className="duration-300 text-[#FE651B]">
                Service Details
              </span>
            </p>
          </div>
        </Container>
      </section>
      <section className="lg:my-[109px] my-10">
        <Container>
          <Flex className={` flex-col lg:flex-row lg:gap-[90px] gap-8 px-5`}>
            <div className="left lg:w-[62%] w-auto ">
             
              <Img className={` bg-[#F4F4FF] p-5 rounded-[20px]`} src={bigig} />

              <h4 className=" font-nunito font-bold text-[25px] mt-8 text-black">
                Search Engine Optimization
              </h4>

              <p className=" font-dmSans text-[16px] mt-5 text-[#6B6161] leading-7">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of textss. All the Lorem Ipsum generators
                on the Internet tend to repeat
              </p>
              <div className=" mt-7  flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
                <Img src={danle} />
                <div>
                  <h4 className=" font-nunito font-bold text-[25px] text-black">
                    Search Engine Optimization
                  </h4>

                  <div className=" mt-5 w-[100%] lg:w-[382px] bg-[#F4F4FF] py-6 px-5 flex items-start gap-5 rounded-[10px]">
                    <Img src={grow} />
                    <div>
                      <h4 className=" font-dmSans text-[20px] text-black">
                        Creative Analysis
                      </h4>
                      <p className=" font-dmSans text-[16px] text-[#6B6161] leading-7">
                        Creative analysis is important. It is common for
                        marketers
                      </p>
                    </div>
                  </div>
                  <div className=" mt-5 w-[100%] lg:w-[382px] bg-[#F4F4FF] py-6 px-5 flex items-start gap-5 rounded-[10px]">
                    <Img src={grow2} />
                    <div>
                      <h4 className=" font-dmSans text-[20px] text-black">
                        Design & Scratches
                      </h4>
                      <p className=" font-dmSans text-[16px] text-[#6B6161] leading-7">
                        Creative analysis is important. It is common for
                        marketers
                      </p>
                    </div>
                  </div>
                  <div className=" mt-5 w-[100%] lg:w-[382px] bg-[#F4F4FF] py-6 px-5 flex items-start gap-5 rounded-[10px]">
                    <Img src={grow3} />
                    <div>
                      <h4 className=" font-dmSans text-[20px] text-black">
                        Development & Delivery
                      </h4>
                      <p className=" font-dmSans text-[16px] text-[#6B6161] leading-7">
                        Creative analysis is important. It is common for
                        marketers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className=" font-nunito font-bold text-[25px] mt-8 text-black">
                We Hope You Find What You are Looking for
              </h4>

              <p className=" font-dmSans text-[16px] mt-5 text-[#6B6161] leading-7">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of textss. All the Lorem Ipsum generators
                on the Internet tend to repeat
              </p>
              <div className=" flex flex-col md:flex-row flex-wrap md:gap-6 lg:flex-col gap-2 lg:gap-2 mt-5">
                <div className="flex items-center gap-3">
                  <Img src={vic} />
                  <h4 className=" font-dmSans lg:text-[16px] text-[#1A1A1A] leading-[26px] ">
                    Research beyond the business plan
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <Img src={vic} />
                  <h4 className=" font-dmSans lg:text-[16px] text-[#1A1A1A] leading-[26px] ">
                    Customer Oriented Program Daily
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <Img src={vic} />
                  <h4 className=" font-dmSans lg:text-[16px] text-[#1A1A1A] leading-[26px] ">
                    The ability to turnaround consulting
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <Img src={vic} />
                  <h4 className=" font-dmSans lg:text-[16px] text-[#1A1A1A] leading-[26px] ">
                    Customer engagement matters
                  </h4>
                </div>
              </div>
            </div>

            <div className=" lg:w-[30%] w-auto">
              <div className=" md:py-8 py-5 md:px-10 px-5 shadow-xl rounded-[20px]">
                <h4 className=" font-nunito font-bold text-[25px]  text-black">
                  Our All Service
                </h4>

                <div className=" flex flex-col gap-5 lg:items-center items-start mt-[34px]">

                <button className=" font-dmSans  font-medium text-black md:px-[30px] md:pb-[15px] py-5 px-4 md:pt-[13px] bg-[#F4F4FF] rounded-[30px] duration-300 hover:bg-[#FE651B] hover:text-[#FFFF]">
                  Search Engine Optimization{" "}
                  <FaLongArrowAltRight className=" inline-block md:ml-10 ml-3" />
                </button>
                <button className=" font-dmSans  font-medium text-black md:px-[30px] md:pb-[15px] py-5 px-4 md:pt-[13px] bg-[#F4F4FF] rounded-[30px] duration-300 hover:bg-[#FE651B] hover:text-[#FFFF]">
                  Search Engine Optimization{" "}
                  <FaLongArrowAltRight className=" inline-block md:ml-10 ml-3" />
                </button>
                <button className=" font-dmSans  font-medium text-black md:px-[30px] md:pb-[15px] py-5 px-4 md:pt-[13px] bg-[#F4F4FF] rounded-[30px] duration-300 hover:bg-[#FE651B] hover:text-[#FFFF]">
                  Search Engine Optimization{" "}
                  <FaLongArrowAltRight className=" inline-block md:ml-10 ml-3" />
                </button>
                <button className=" font-dmSans  font-medium text-black md:px-[30px] md:pb-[15px] py-5 px-4 md:pt-[13px] bg-[#F4F4FF] rounded-[30px] duration-300 hover:bg-[#FE651B] hover:text-[#FFFF]">
                  Search Engine Optimization{" "}
                  <FaLongArrowAltRight className=" inline-block md:ml-10 ml-3" />
                </button>

                </div>
              </div>
              <div className=" mt-8 lg:mt-10 md:py-8 py-5 md:px-10 px-5 shadow-xl bg-[#000000b3] rounded-[20px]">
                <h4 className=" font-nunito font-bold text-[25px]  text-white">
                  Our All Service
                </h4>
                <input  placeholder="Your Name" className=" px-7 placeholder:text-[#9A9A9A] py-4 w-full rounded-[30px] mt-8 bg-[#F4F4F4]" type="text" name="" id="" />
                <input  placeholder="Your Email Address" className=" px-7 placeholder:text-[#9A9A9A] mt-5 py-4 w-full rounded-[30px] bg-[#F4F4F4]" type="text" name="" id="" />
                <textarea  placeholder="Your Email Address" className=" px-7 placeholder:text-[#9A9A9A]  mt-5 py-4 md:h-[150px] h-auto w-full rounded-[20px] bg-[#F4F4F4]" type="text" name="" id="">
                </textarea>

                <Button className={`mt-8 inline-block`}>
                Send Message
                </Button>

               
              </div>

              <div className=" mt-8 lg:mt-10 md:py-8 py-8 md:px-10 px-5 shadow-2xl rounded-[20px]">
                <h4 className=" font-nunito font-bold text-[25px]  text-black">
                  Our All Service
                </h4>

                <div className=" flex flex-col gap-5 md:items-center items-start mt-[34px]">

                <button className=" font-dmSans  font-medium text-black md:px-[30px] md:pb-[15px] py-5 px-9 md:pt-[13px] bg-[#F4F4FF] rounded-[30px] duration-300 hover:bg-[#FE651B] hover:text-[#FFFF]">
                Our Brochures 2023
                  <FaLongArrowAltRight className=" inline-block md:ml-10 ml-3" />
                </button>
                <button className=" font-dmSans  font-medium text-black md:px-[30px] md:pb-[15px] py-5 px-9 md:pt-[13px] bg-[#F4F4FF] rounded-[30px] duration-300 hover:bg-[#FE651B] hover:text-[#FFFF]">
                About Our Company
                  <FaLongArrowAltRight className=" inline-block md:ml-10 ml-3" />
                </button>


                </div>
              </div>

              
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetailsroute;
