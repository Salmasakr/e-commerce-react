import React, { useEffect, useState } from 'react';
import Style from './MainSlider.module.css';
import MainSlide from '../../assets/images/slider-image-3.jpeg';
import MainSlide1 from '../../assets/images/grocery-banner-2.jpeg';
import MainSlide2 from '../../assets/images/grocery-banner.png';
import Slider1 from '../../assets/images/slider-image-1.jpeg';
import Slider2 from '../../assets/images/slider-image-2.jpeg';
import Slider from "react-slick";



export default function MainSlider() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);

    var settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      arrows:false
    };
  return <>
    <div className="row">
      <div className="w-3/4 main-slider">
      <Slider {...settings}>
      <img src={MainSlide} className='w-full h-[400px]'/>
       <img src={MainSlide1} className='w-full h-[400px]'/> 
       <img src={MainSlide2} className='w-full h-[400px]'/>

    </Slider>
       
      </div>
      <div className="w-1/4 side-slider">
      <img src={Slider1} className='w-full h-[200px]'/>
      <img src={Slider2} className='w-full h-[200px] '/>

      </div>
    </div>
  </>
}
