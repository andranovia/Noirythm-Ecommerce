import Navbar from '@/components/navbar-section/navbar-app';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactHeroApp = () => {
  const texts = [
    'Complain your Product?',
    'Want collaborating with us?',
    'Promotion your product to us?',
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [previousTextIndex, setPreviousTextIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousTextIndex(currentTextIndex);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  const springAnimation = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  };
  const animationDuration = 2;

  return (
    <div className="w-screen bg-white overflow-hidden">
      <Navbar />
      <div className="h-[30rem] w-screen flex sm:justify-start sm:mx-40 ">
        <div className="relative flex flex-col items-center top-20 ml-10 sm:items-start">
          <div className="text-amber-700">
            <h1 className="font-bold text-4xl my-10 sm:text-6xl">Welcome Aboard</h1>
            <h2 className="font-semibold text-2xl mx-10">
              Good morning! - Can we help you?{' '}
            </h2>
          </div>
          <div className=" w-[17rem] h-[15vh] mx-5 my-4 border border-amber-500 p-2 rounded-md flex flex-col justify-center  text-amber-950">
            <div className="relative bottom-7 left-3 ">
              {previousTextIndex !== null && (
                <motion.div
                  key={texts[previousTextIndex]}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -70, opacity: 0 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{
                    ...springAnimation,
                    duration: animationDuration,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="font-semibold text-2xl">
                    {texts[previousTextIndex]}
                  </p>
                </motion.div>
              )}
              <motion.div
                key={texts[currentTextIndex]}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  ...springAnimation,
                  duration: animationDuration,
                  ease: 'easeInOut',
                }}
              >
                <p className="font-semibold text-2xl">
                  {texts[currentTextIndex]}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroApp;
