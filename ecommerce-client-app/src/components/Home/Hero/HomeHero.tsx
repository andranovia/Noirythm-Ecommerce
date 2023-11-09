import React from 'react';  
import HeroCarousel from './HeroCarousel';

const slider = [
  {
    url: '/img/slider/slide1.webp',    
  },
  {
    url: '/img/slider/slide2.webp', 
  },
  {
    url: '/img/slider/slide1.webp',    
  },

];

function HomeHero() {
  return (
    <div className="flex justify-center mt-14 sm:mb-20 ">
     <HeroCarousel slides={slider}/>
    </div>
  );
}

export default HomeHero;
