import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
  
      <div className="h-[40rem] bg-white bg-[url('/img/about-us/hero-about-us-img.webp')] bg-no-repeat bg-cover ">
        <div className=" w-screen flex sm:justify-start sm:mx-40  ">
          <div className="relative flex flex-col items-center top-20 ml-10 sm:items-start">
            <div className="text-gray-700 mt-[1.5rem] mr-12  ">
              <h1 className=" relative font-bold text-6xl w-10 sm:text-7xl sm:right-10">
                Thing About US
              </h1>
            </div>
          </div>
        </div>
      </div>
      
  );
};

export default AboutHero;
