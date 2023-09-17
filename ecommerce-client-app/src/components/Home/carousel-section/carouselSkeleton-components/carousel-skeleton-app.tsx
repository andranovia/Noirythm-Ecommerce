import React from 'react';

const CarouselItemSkeleton: React.FC = () => {
  return (
    <div className="max-w-[1200px] h-[320px] w-full m-auto py-16 px-4 relative group sm:w-[700px]">
      <div className="animate-pulse w-full h-full rounded-2xl bg-gray-300"></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"></div>
      <div className="flex top-4 justify-center py-2">
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-300 rounded-full mx-2"></div>
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default CarouselItemSkeleton;
