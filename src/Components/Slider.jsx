

import image1 from "../assets/img/slider.png";
import image2 from "../assets/img/Line Shape.png";
import image3 from "../assets/img/saw.png";


import Container from "./Container";
import Flex from "./Flex";
import Img from './Img';

const Slider = () => {
  

  return (
    <section className=" lg:py-[120px] py-10 ">
      <Container>
        <Flex className={` px-5 gap-6 lg:gap-0 justify-between lg:flex-row flex-col`}>
            <Img src={image3}/>
            <Img className={`lg:block hidden`} src={image2}/>
            <Img src={image1}/>
            
            

        </Flex>
      </Container>
    </section>
  );
};

export default Slider;
