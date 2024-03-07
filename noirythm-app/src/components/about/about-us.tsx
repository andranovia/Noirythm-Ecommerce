import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center sm:justify-center sm:mt-20  ">
      <div className="flex flex-col justify-center mb-40 sm:grid sm:grid-cols-2  ">
        <Image
          src="/img/about-us/ourteam.webp"
          width={600}
          height={20}
          className="rounded-md sm:w-[35rem] w-[20rem] mx-auto"
          alt=""
        />
        <div className="mx-20 w-[20rem]">
          <div className="relative flex py-5 items-center">
            <span className="flex-shrink mx-4 text-black font-bold text-1xl sm:text-2xl">
              Our Team
            </span>
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
  );
};

export default AboutUs;
