import Container from "../Components/Container"



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
    </>
  )
}

export default ServiceDetailsroute