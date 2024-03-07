'use client'

import React from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map'));

const ContactMap = () => {
  return (
    <div className="w-screen h-screen my-36">
      <div className="flex justify-center">
        <div className="text-4xl font-bold">
          <h1>Our Office</h1>
        </div>
      </div>
      <div className="flex flex-col mx-10 my-20 sm:grid sm:grid-cols-2 ">
        <div className="sm:w-[80%] sm:mx-auto">
          <Map />
        </div>
        <div className="px-5 sm:mx-20">
          <h2 className="text-3xl font-semibold my-10">Location Details:</h2>
          <p className='text-1xl'>
            Our office is located at Jl. Raya Purwosari No.01 street,
            <br />
            Purwosari, Indonesia.
            <br />
            Zip Code: 67111
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
