import React from 'react';  
import Carousel from './carousel';

const slider = [
  {
    url: '/img/slider/slide1.webp',    
  },
  {
    url: '/img/slider/slide2.webp', 
  },
  {
    url: '/img/slider/slide3.webp',    
  },

];

function Hero() {
  return (
    <div className="flex justify-center mt-14 md:mb-0 lg:mb-10 w-full">
     <Carousel slides={slider}/>
    </div>
  );
}

export default Hero;