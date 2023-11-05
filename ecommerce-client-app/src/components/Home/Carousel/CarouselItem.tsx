import React, { useState, useCallback } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

interface Slide {
  url: string;
}

interface CarouselSlidesAppProps {
  slides: Slide[];
}

const CarouselItem: React.FC<CarouselSlidesAppProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const gotoSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='relative top-10'>
      <div className="font-bold text-2xl ml-4 sm:ml-8 absolute  ">
        <h1>Popular products</h1>
      </div>
      <div className="max-w-[1000px] -mt-10 sm:mt-0 h-[320px]  w-full m-auto py-16 px-4 relative group sm:w-[600px]  overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            backgroundSize: 'cover',
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => gotoSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                currentIndex === slideIndex ? 'text-black' : 'text-gray-300'
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
