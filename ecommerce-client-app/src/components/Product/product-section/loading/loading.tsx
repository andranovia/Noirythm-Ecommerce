import React from 'react';

const SkeletonLoadingComponent: React.FC = () => {
  return (
    <div className="animate-pulse rounded-lg flex flex-col items-start lg:w-full shadow-md bg-gray-200">
      <div className="flex-shrink-0 h-[20vh] w-[20vh] lg:w-[40vh] lg:h-[40vh] bg-gray-300"></div>
      <div className="text-start mt-4 ml-3 p-3">
        <div className="bg-gray-300 rounded-lg h-6 w-24 mb-2"></div>
        <div className="bg-gray-300 rounded-lg h-6 w-32"></div>
      </div>
    </div>
  );
};

export default SkeletonLoadingComponent;
