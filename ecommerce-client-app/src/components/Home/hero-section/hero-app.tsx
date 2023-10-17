import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import CircleType from 'circletype';

function HomeHeroComponent() {
  const circleTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circleType = new CircleType(document.getElementById('textCircular'));

    const handleScroll = () => {
      const offset = window.scrollY * 0.4;

      if (circleType.element) {
        circleType.element.style.transform = `rotate(${offset}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textBottom = 'YOUR STYLE';
  const textLeft = 'elevate';

  return (
    <div className="relative flex justify-center items-center h-[30rem] font-poppins overflow-hidden bg-[url('/home-backgrund-hero.webp')] bg-cover bg-no-repeat z-2 sm:h-screen">
      <motion.div
        className="relative  left-0 z-1 flex  items-center justify-center flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
      >
        <div className=" relative  font-bold  top-4  sm:right-0 w-full ml-12 sm:ml-40 sm:top-0 ">
          <div className="  sm:mt-[4rem] text-5xl  sm:text-[8rem]">
            {textLeft}
          </div>

          <div className="relative text-8xl font-bold top-[1rem] sm:top-15  sm:text-[14rem]   sm:w-full  ">
            <div className=" text-white ">{textBottom}</div>
          </div>
        </div>
      </motion.div>

      <div
        className={
          'overflow-hidden flex  justify-center text-center  '
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
          className="h-[120px] w-[120px] rounded-full bg-white absolute flex items-center justify-center mr-40 sm:top-32 sm:right-0  sm:w-[200px] sm:h-[200px] "
        >
          <div className="circular-text" ref={circleTypeRef} id="textCircular">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 1.8,
              }}
            >
              &#8226; scrolling down &#8226;
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 1.8,
              }}
            >
              look around
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeHeroComponent;
