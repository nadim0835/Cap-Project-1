import { GiArcheryTarget } from "react-icons/gi";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Button from "../Components/Button";

const We = () => {
  return (
    <section className=" bg-[url('/we.png')]   lg:py-[80px] py-10 bg-no-repeat bg-cover  bg-center lg:bg-auto ">
      <Container>
        <main className=" lg:bg-[#3661FC] lg:w-[1196px] w-auto mx-auto lg:py-[77px] lg:px-[80px] rounded-[50px]  ">
          <Flex
            className={` flex flex-col md:flex-row md:justify-between   md:items-center items-start gap-4 `}
          >
            <div className=" flex  items-start px-5 justify-center flex-col">
              <div className=" flex gap-2 items-center  ">
                <GiArcheryTarget className=" text-[25px] text-[#FE651B] " />
                <h3 className=" font-dmSans font-medium text-[20px] text-[#FFF]">
                 We Are Hire
                </h3>
              </div>{" "}
              <h1
                className=" font-nunito font-bold lg:text-[46px] text-[30px] lg:leading-[56px]
              text-[#FFF] mt-4 w-auto md:w-[500px] lg:w-[700px] "
              >
                Tell us About Your Business, We are Ready to Solve.
              </h1>
            </div>
            <Button className={` inline-block mx-5 lg:mx-0 `}>
              Contact Us
            </Button>
          </Flex>
        </main>
      </Container>
    </section>
  );
};

export default We;
