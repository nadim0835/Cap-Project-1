import { GiArcheryTarget } from "react-icons/gi";
import plan4 from "../assets/img/Funfact.png";
import plan5 from "../assets/img/Add your video here.png";
import Img from "./Img";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";
const Appointment = () => {
  return (
    <section className=" bg-[url('/aut.png')] relative  bg-no-repeat bg-cover bg-center mt-[70px] lg:mt-[150px] lg:pb-0 pb-7 "
    >
      <Container>
        <div className=" lg:absolute top-[-14%] left-[50%] lg:translate-y-0 translate-y-[-40px] lg:transform lg:translate-x-[-50%] lg:px-0 px-4">
          <Img className={`w-auto`} src={plan4} />
        </div>
        <Flex className={`  lg:px-0 px-5 lg:pt-[110px] lg:pb-[80px] lg:gap-[80px] gap-[35px] flex-col lg:flex-row lg:items-center items-start  `}>
          <Img src={plan5} />
          <div>
            <div className=" flex gap-2 items-center  ">
              <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
              <h3 className=" font-dmSans font-medium text-[20px] text-[#FFF]">
                Make an Appointment
              </h3>
            </div>
            <h1
              className=" font-nunito font-bold lg:text-[46px] text-[30px] lg:leading-[56px]
              text-[#FFF] mt-4 w-[300px] lg:w-full  "
            >
              Start New Project With Us
            </h1>
            <div className=" flex gap-5 flex-col lg:flex-row mt-8 lg:mt-[47px] ">
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
        </Flex>
      </Container>
    </section>
  );
};

export default Appointment;
