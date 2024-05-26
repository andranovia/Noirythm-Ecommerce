'use client'

import React, { useState, useCallback, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

interface Slide {
  url: string;
}

interface CarouselSlidesAppProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselSlidesAppProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const gotoSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full flex justify-center">
      <div className="-mt-0 h-full lg:mt-0 w-full flex justify-center md:px-4 px-2 lg:px-4 rounded-2xl   relative lg:h-full overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            backgroundSize: 'cover',
          }}
          className="w-full md:h-[20rem]   lg:h-[30rem] md:max-w-none max-w-screen-sm lg:max-w-none lg:max-h-none   max-h-60 h-[10rem] rounded-2xl bg-center bg-cover duration-500 flex flex-col justify-end  "
        >
          <div className="flex relative justify-center lg:bottom-4 right-12 py-2">
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => gotoSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  currentIndex === slideIndex ? 'text-black  ' : 'text-gray-300'
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;