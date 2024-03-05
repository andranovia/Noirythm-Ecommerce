import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className="w-screen h-full overflow-hidden">
      <div className="h-[40rem] bg-white bg-[url('/img/aboutUs/hero-aboutUs-img.webp')] bg-no-repeat bg-cover ">
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
      <div className="flex justify-center sm:justify-center sm:mt-20  ">
        <div className="flex flex-col justify-center mb-40 sm:grid sm:grid-cols-2  ">
          <Image
            src="/img/aboutUs/ourteam.webp"
            width={600}
            height={20}
            className="rounded-md sm:w-[35rem] w-[20rem] mx-auto"
            alt=""
          />
          <div className="mx-20 w-[20rem]">
            <div className="relative flex py-5 items-center">
              <span className="flex-shrink mx-4 text-black font-bold text-1xl sm:text-2xl">Our Team</span>
              <div className="flex-grow border-t border-amber-900"></div>
            </div>
            <div className="flex justify-center">
              <p className="font-semibold text-2xl text-gray-500">
                Where its all begins to start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
