import React, { useEffect, useRef} from 'react';
import { motion, Variants } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import CircleType from 'circletype';

function HeroApp() {

  const controlsAnimate = useAnimation();

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

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterTwoVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 100,
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 100,
      },
    },
  };

  const spaceVariant: Variants = {
    hidden: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  useEffect(() => {
    controlsAnimate.start('animate');
  }, [controlsAnimate]);

  const createAnimatedText = (text: string, variants: Variants) => {
    return text.split(' ').map((word, wordIndex) => (
      <motion.div key={wordIndex} style={{ display: 'inline-block' }}>
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={charIndex}
            variants={letterVariants}
            style={{ display: 'inline-block', width: '1ch' }}
          >
            {char}
          </motion.span>
        ))}
        {wordIndex !== text.split(' ').length - 1 && (
          <motion.span
            key={`space-${wordIndex}`}
            variants={spaceVariant}
            style={{ display: 'inline-block', width: '0.5ch' }}
          >
            &nbsp;
          </motion.span>
        )}
      </motion.div>
    ));
  };

  const animatedTextRightTwo = 'YOUR STYLE';

  const animatedTextLeftOne = 'ELEVA TE';

  const titleRightTwo = createAnimatedText(
    animatedTextRightTwo,
    letterTwoVariants
  );
  const titleLeftOne = createAnimatedText(
    animatedTextLeftOne,
    letterTwoVariants
  );

  return (
    <div className="relative flex justify-center items-center h-[70vh] font-poppins overflow-hidden bg-[url('/home-backgrund.jpg')] bg-cover bg-no-repeat z-2 sm:h-screen">
      <motion.div
        className="relative top-0 left-0 z-1  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
      />
      <motion.div
        className="absolute text-6xl mr-20 font-bold bottom-20  sm:top-15 left-[14rem] sm:mr-[19rem] sm:text-[15rem]  sm:top-[32rem] sm:left-[6%] sm:w-full  "
        initial="hidden"
      >
        <motion.div
          className="heroTitleTwo text-white "
          variants={containerVariants}
          initial="hidden"
          animate={controlsAnimate}
        >
          {titleRightTwo}
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-[12rem] h-full z-1 bg-white sm:w-[30rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8}} 
      >
        <motion.div
          className="relative font-bold flex flex-col items-end justify-center ml-[4rem] top-[5%]  sm:ml-[30%]"
          initial="hidden"
        >
          <motion.div
            className="heroTitleFourth mt-[8rem] sm:mt-[2rem] text-6xl ml-[1rem] sm:text-[9rem]  "
            variants={containerVariants}
            initial="hidden"
            animate={controlsAnimate}
          >
            {titleLeftOne}
          </motion.div>
        </motion.div>
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

export default HeroApp;
