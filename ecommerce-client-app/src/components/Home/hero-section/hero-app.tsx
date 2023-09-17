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
  const textLeft = 'ELE VA TE';

  return (
    <div className="relative flex justify-center items-center h-[70vh] font-poppins overflow-hidden bg-[url('/home-backgrund-hero.webp')] bg-cover bg-no-repeat z-2 sm:h-screen">
      <motion.div
        className="relative top-0 left-0 z-1  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
      />
      <div className="absolute text-6xl mr-20 font-bold bottom-20  sm:top-15 left-[14rem] sm:mr-[19rem] sm:text-[12rem]  sm:top-[34rem] sm:left-[10%] sm:w-full  ">
        <div className="heroTitleTwo text-white ">{textBottom}</div>
      </div>
      <motion.div
        className="absolute top-0 left-0 w-[12rem] h-full z-1 bg-white sm:w-[30rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
      >
        <div className="relative font-bold flex flex-col items-end justify-center ml-[4rem] top-[5%] sm:left-10">
          <div className="heroTitleFourth mt-[8rem] sm:mt-[2rem] text-6xl ml-[1rem] sm:text-[10rem]">
            {textLeft}
          </div>
        </div>
      </motion.div>

      <div
        className={
          'overflow-hidden flex items-center justify-center text-center '
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
          className="h-[120px] w-[120px] rounded-full bg-white absolute flex items-center justify-center bottom-10 mr-[12rem] sm:mb-20 sm:mr-[37rem] sm:w-[200px] sm:h-[200px] sm:bottom-[20%]"
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
