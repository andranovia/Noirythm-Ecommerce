import React, { useState, useCallback, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

interface Slide {
  url: string;
}

interface CarouselSlidesAppProps {
  slides: Slide[];
}

const HeroCarousel: React.FC<CarouselSlidesAppProps> = ({ slides }) => {
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
    <div className="relative ">
      <div className="-mt-0 sm:mt-0  w-[23rem] sm:w-full  rounded-2xl   relative   sm:h-full overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            backgroundSize: 'cover',
          }}
          className="sm:w-[90rem] sm:h-[30rem] max-w-screen-sm sm:max-w-none sm:max-h-none  w-[28rem] max-h-60 h-[10rem] rounded-2xl bg-center bg-cover duration-500 flex flex-col justify-end  "
        >
          <div className="flex relative justify-center sm:bottom-4 right-12 py-2">
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

export default HeroCarousel;
