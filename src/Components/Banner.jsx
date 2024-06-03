import Container from "./Container";
import Flex from "./Flex";
import blimg from "../assets/img/banrr.png"
import Img from "./Img";
import Button from "./Button";

const Banner = () => {
  return (
    <section className=" bg-[url('./src/assets/img/HeroBanner.png')]   pb-[80px] lg:pb-0 bg-no-repeat bg-cover  bg-center lg:bg-auto "
   
    >
      <Container>
        <Flex className={`justify-between lg:items-center items-start flex-col lg:flex-row pt-[140px] lg:overflow-x-hidden `}>
          <div className=" order-2 lg:order-1 pl-5 lg:pl-0">
            <h3 className=" font-dmSans font-medium text-[25px] pb-5 text-[#FE651B] ">Your Trusted Ortencey Agency</h3>
            <h1 className=" font-nunito font-bold text-[60px] lg:w-[700px] w-auto leading-[70px]  text-white pb-5 ">Our Digital Agency With Excellence Services</h1>
            <p className=" font-dmSans text-[20px] leading-[30px] text-white lg:w-[595px] w-auto pb-[50px] ">
              The 3 golden rules professional Digital Marketing Agency don’t
              want you to know about.
            </p>
            <Button>
            Discover More
            </Button>
          </div>
          <Img className={` order-1`} src={blimg}/>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
