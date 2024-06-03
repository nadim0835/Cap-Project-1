import React from 'react'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Reason from './../Components/Reason';
import OurPricing from '../Components/OurPricing';
import Appointment from '../Components/Appointment';
import Creative from '../Components/Creative';
import Slider from '../Components/Slider';
import We from './We';
import OurBlog from '../Components/OurBlog';
const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Reason/>
    <OurPricing/>
    <Appointment/>
    <Creative/>
    <Slider/>
    <We/>
    <OurBlog/>
    </>
  )
}

export default Home