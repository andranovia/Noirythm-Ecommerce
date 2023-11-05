import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


function HomeHero() {

  return (
    <div className="relative flex  m-4 sm:m-20 bg-gray-400 rounded-lg justify-center items-center h-fit mt-20 sm:mt-16 font-poppins overflow-hidden  z-2 sm:h-fit">
      <motion.div
        className=" z-1 flex text-start mt-10 items-center justify-center flex-col left-0 ml-6 sm:top-0 sm:ml-32   mb-24 absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
      >
        <div className=" relative  font-bold  top-10  sm:right-0 w-full">
          <div className="text-gray-800  text-4xl  sm:text-[8rem] ">
          Flash Sale
          </div>

          <div className="relative text-2xl font-bold top-[1rem] sm:top-28  sm:text-[8rem]   sm:w-full  ">
            <div className="text-gray-700  ">Up To <span className='text-gray-800 text-4xl sm:text-[8rem]'>70%</span></div>
          </div>
        </div>
        <div className="relative text-[10px] mt-16 font-bold top-[1rem] sm:text-2xl sm:right-48 sm:top-[11rem] right-8">
            <div className="text-gray-600">only in NOIRYTHM</div>
          </div>
      </motion.div>
      <div><Image className='sm:w-[40rem] sm:left-[28rem] left-28 relative' src={'/hero-background.webp'} alt='heroImage' height={260} width={260}/></div>
    </div>
  );
}

export default HomeHero;
